// Minimal gallery: blur-up LQIP -> responsive hi-res on view, with decode()

const LIST_URL = 'assets/images.txt';
const WIDTHS = [128, 256, 512, 1024, 1536, 2048];
const SIZES = 'calc((100cqw - (var(--cols) - 1) * var(--gap)) / var(--cols))';

const raf = () => new Promise(r => requestAnimationFrame(r));
const delay = (ms) => new Promise(r => setTimeout(r, ms));

function debounce(fn, wait) {
    let t;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), wait);
    };
}

function buildSrcset(name, ext) {
    return WIDTHS.map(w => `assets/${name}/${name}-${w}.${ext} ${w}w`).join(', ');
}

async function decodeSafely(img, msTimeout = 10000) {
    try {
        const timeout = delay(msTimeout).then(() => {
            const err = new Error('decode() timeout');
            err.name = 'TimeoutError';
            throw err;
        });
        await Promise.race([img.decode(), timeout]);
    } catch (e) {
        // Proceed on timeout or lack of support
    }
}

function createCard(name) {
    const figure = document.createElement('figure');
    figure.className = 'figure';

    const link = document.createElement('a');
    link.href = `assets/${name}/${name}-2048.jpg`;
    link.target = '_blank';
    link.rel = 'noopener';
    link.setAttribute('aria-label', `View high resolution image: ${name}`);

    const picture = document.createElement('picture');

    const avif = document.createElement('source');
    avif.type = 'image/avif';
    avif.sizes = SIZES;
    avif.dataset.srcset = buildSrcset(name, 'avif');

    const webp = document.createElement('source');
    webp.type = 'image/webp';
    webp.sizes = SIZES;
    webp.dataset.srcset = buildSrcset(name, 'webp');

    const img = document.createElement('img');
    img.alt = `Photo: ${name}`;
    img.decoding = 'async';
    img.loading = 'lazy';
    img.fetchPriority = 'low';
    img.className = 'img-lqip';
    img.sizes = SIZES;
    img.src = `assets/${name}/${name}-lqip.jpg`;
    img.dataset.srcset = buildSrcset(name, 'jpg');
    img.dataset.name = name;

    picture.append(avif, webp, img);
    link.appendChild(picture);
    figure.appendChild(link);

    figure.style.contentVisibility = 'auto';

    return { figure, img };
}

async function hydrateHiRes(img) {
    if (img.dataset.hydrated === '1') {
        return;
    }
    const picture = img.parentElement;
    const sources = picture.querySelectorAll('source');

    img.fetchPriority = 'high';
    img.loading = 'eager';

    sources.forEach(s => {
        if (s.dataset.srcset && !s.srcset) {
            s.srcset = s.dataset.srcset;
        }
    });
    if (img.dataset.srcset && !img.srcset) {
        img.srcset = img.dataset.srcset;
    }

    await raf();
    await decodeSafely(img);

    img.classList.remove('img-lqip');
    img.classList.add('img-loaded');
    img.dataset.hydrated = '1';
}

function setupObserver() {
    if (!('IntersectionObserver' in window)) {
        return null;
    }
    const obs = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            const img = entry.target;
            if (entry.isIntersecting) {
                hydrateHiRes(img).catch(() => {
                    img.classList.remove('img-lqip');
                    img.classList.add('img-error');
                    img.alt = `Failed to load image: ${img.dataset.name || ''}`;
                });
                obs.unobserve(img);
            }
        }
    }, { rootMargin: '200px 0px', threshold: 0.01 });
    return obs;
}

function calculateOptimalColumns() {
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    vw = Math.min(vw, 1800);
    return vw / 384; // matches original heuristic
}

function setupControls() {
    const grid = document.querySelector('#grid');
    const input = document.querySelector('#cols');
    const out = document.querySelector('#colsOut');
    if (!grid || !input || !out) {
        return;
    }

    const apply = (val) => {
        const v = Math.floor(val);
        grid.style.setProperty('--cols', v);
        out.textContent = String(v);
        input.value = String(v);
        localStorage.setItem('gridColumns', String(v));
    };

    const updateMax = () => {
        let maxCols = Math.floor(calculateOptimalColumns() * 3);
        maxCols = Math.min(maxCols, 13);
        maxCols = Math.max(maxCols, 5);
        input.max = String(maxCols);
        if (Number(input.value) > maxCols) {
            apply(maxCols);
        }
    };

    updateMax();
    if ('ResizeObserver' in window) {
        const ro = new ResizeObserver(debounce(updateMax, 250));
        ro.observe(document.body);
    }

    const stored = localStorage.getItem('gridColumns');
    const start = stored ? Math.min(parseInt(stored, 10) || 0, Number(input.max)) : calculateOptimalColumns();
    apply(start);

    input.addEventListener('input', debounce((e) => {
        const v = Number(e.target.value);
        apply(v);
    }, 80));
}

async function loadImageList() {
    const controller = new AbortController();
    const to = setTimeout(() => controller.abort(), 10000);
    try {
        const res = await fetch(LIST_URL, { cache: 'no-store', signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        const text = await res.text();
        const images = text.split(/\r?\n/).map(s => s.trim()).filter(Boolean).filter(n => /^[a-zA-Z0-9_-]+$/.test(n));
        if (!images.length) throw new Error('No valid images found');
        return images;
    } finally {
        clearTimeout(to);
    }
}

async function initGallery() {
    const grid = document.querySelector('#grid');
    const loading = document.querySelector('#loading');
    const main = document.querySelector('main');
    if (!grid) {
        console.error('Grid element not found');
        return;
    }

    try {
        const names = await loadImageList();
        const frag = document.createDocumentFragment();
        const observer = setupObserver();

        for (const name of names) {
            const { figure, img } = createCard(name);
            frag.appendChild(figure);
            if (observer) {
                observer.observe(img);
            } else {
                hydrateHiRes(img).catch(() => { /* noop */ });
            }
        }

        grid.appendChild(frag);
        if (loading) {
            loading.remove();
        }
        setupControls();

        document.addEventListener('visibilitychange', () => {
            const imgs = grid.querySelectorAll('img');
            imgs.forEach(i => {
                i.fetchPriority = document.hidden ? 'low' : (i.dataset.hydrated === '1' ? 'auto' : 'high');
            });
        });

        console.log(`Gallery initialized with ${names.length} images`);
    } catch (err) {
        console.error('Gallery initialization failed:', err);
        if (loading) {
            loading.textContent = 'Failed to load gallery';
        }
        const div = document.createElement('div');
        div.className = 'error-message';
        div.textContent = `Gallery could not be loaded: ${err.message}`;
        if (main) {
            main.appendChild(div);
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery, { once: true });
} else {
    initGallery();
}


