const CONFIG = {
    COORDS_URL: "data.json",
    BASE_SPRITE_SIZE: 25,
    ZOOM_SENSITIVITY: 0.001,
    MIN_ZOOM: 0.25,
    MAX_ZOOM: 100,
    WORLD_PADDING: 100,
    GRID: {
        COLOR: 0xd0d0cb,
        ALPHA_MAJOR: 0.5,
        ALPHA_MINOR: 0.25
    }
};

function nameToImagePath(name, size = 128, ext = "avif") {
    return `/art/assets/${name}/${name}-${size}.${ext}`;
}

class UMAPGallery {
    constructor() {
        this.app = null;
        this.viewport = null;
        this.items = [];
        this.sprites = new Map();
        this.textures = new Map();
        this.worldWidth = 0;
        this.worldHeight = 0;
        this.grid = null;
    }

    async init() {
        this.showLoading(true);
        await this.setupPixi();
        await this.loadCoordinates();
        this.setupViewport();
        this.createGrid();
        this.createSprites();
        this.app.ticker.add(() => this.update());
        this.showLoading(false);
    }

    async setupPixi() {
        this.app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0xe6e6db,
            resolution: Math.max(1, window.devicePixelRatio || 1),
            autoDensity: true,
            antialias: true,
            powerPreference: "high-performance",
            hello: false
        });
        document.getElementById('app').appendChild(this.app.view);
        window.addEventListener('resize', () => this.handleResize());
    }

    async loadCoordinates() {
        try {
            const response = await fetch(CONFIG.COORDS_URL);
            const coordsJson = await response.json();

            this.items = Object.entries(coordsJson).map(([name, xy]) => ({
                name,
                x: xy[0],
                y: xy[1]
            }));

            const minX = Math.min(...this.items.map(i => i.x));
            const maxX = Math.max(...this.items.map(i => i.x));
            const minY = Math.min(...this.items.map(i => i.y));
            const maxY = Math.max(...this.items.map(i => i.y));

            const rangeX = maxX - minX;
            const rangeY = maxY - minY;
            const scale = Math.min(window.innerWidth / rangeX, window.innerHeight / rangeY) * 2;

            this.worldWidth = rangeX * scale + CONFIG.WORLD_PADDING * 2;
            this.worldHeight = rangeY * scale + CONFIG.WORLD_PADDING * 2;

            this.items.forEach(item => {
                item.x = (item.x - minX) * scale + CONFIG.WORLD_PADDING;
                item.y = (item.y - minY) * scale + CONFIG.WORLD_PADDING;
            });

        } catch (error) {
            console.error('Failed to load coordinates:', error);
            this.showLoading(false, `Error: ${error.message}`);
        }
    }

    setupViewport() {
        this.viewport = new PIXI.Viewport({
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            worldWidth: this.worldWidth,
            worldHeight: this.worldHeight,
            events: this.app.renderer.events
        });

        this.app.stage.addChild(this.viewport);

        this.viewport
            .drag()
            .pinch()
            .wheel({ smooth: 10, percent: CONFIG.ZOOM_SENSITIVITY })
            .decelerate();

        this.viewport.clampZoom({
            minScale: CONFIG.MIN_ZOOM,
            maxScale: CONFIG.MAX_ZOOM,
        });

        this.viewport.fit();
        this.viewport.moveCenter(this.worldWidth / 2, this.worldHeight / 2);
        this.viewport.on('moved', () => this.update());
    }

    createGrid() {
        this.grid = new PIXI.Graphics();
        this.viewport.addChild(this.grid);
        this.drawGrid();
    }

    drawGrid() {
        this.grid.clear();
        const screen = this.viewport.getVisibleBounds();

        const majorLine = 100;
        const minorLine = 25;

        let majorAlpha = Math.min(1, this.viewport.scale.x * 2);
        let minorAlpha = Math.min(1, this.viewport.scale.x * 4);

        const drawLines = (spacing, alpha, weight) => {
            this.grid.lineStyle(weight / this.viewport.scale.x, CONFIG.GRID.COLOR, alpha);
            const startX = Math.floor(screen.x / spacing) * spacing;
            const endX = Math.ceil((screen.x + screen.width) / spacing) * spacing;
            const startY = Math.floor(screen.y / spacing) * spacing;
            const endY = Math.ceil((screen.y + screen.height) / spacing) * spacing;

            for (let x = startX; x < endX; x += spacing) {
                this.grid.moveTo(x, startY);
                this.grid.lineTo(x, endY);
            }
            for (let y = startY; y < endY; y += spacing) {
                this.grid.moveTo(startX, y);
                this.grid.lineTo(endX, y);
            }
        };

        if (minorAlpha > 0.1) drawLines(minorLine, minorAlpha, CONFIG.GRID.ALPHA_MINOR);
        if (majorAlpha > 0.05) drawLines(majorLine, majorAlpha, CONFIG.GRID.ALPHA_MAJOR);
    }

    createSprites() {
        const placeholder = new PIXI.Graphics();
        placeholder.beginFill(0xFFFFFF);
        placeholder.drawRect(0, 0, 128, 128);
        placeholder.endFill();
        const placeholderTexture = this.app.renderer.generateTexture(placeholder);

        this.items.forEach(item => {
            const sprite = new PIXI.Sprite(placeholderTexture);
            sprite.anchor.set(0.5);
            sprite.width = CONFIG.BASE_SPRITE_SIZE;
            sprite.height = CONFIG.BASE_SPRITE_SIZE;
            sprite.x = item.x;
            sprite.y = item.y;
            sprite.eventMode = 'static';
            sprite.cursor = 'pointer';

            let pointerStartPos = null;
            const dragThreshold = 5; // pixels

            sprite.on('pointerdown', (e) => {
                pointerStartPos = { x: e.global.x, y: e.global.y };
            });

            sprite.on('pointertap', (e) => {
                if (pointerStartPos) {
                    const deltaX = Math.abs(e.global.x - pointerStartPos.x);
                    const deltaY = Math.abs(e.global.y - pointerStartPos.y);
                    const wasDrag = deltaX > dragThreshold || deltaY > dragThreshold;

                    if (!wasDrag) {
                        const imageUrl = nameToImagePath(item.name, 2048, "jpg");
                        window.open(imageUrl, '_blank');
                    }
                }
            });
            this.viewport.addChild(sprite);
            this.sprites.set(item.name, sprite);
        });
    }

    update() {
        this.drawGrid();
        const bounds = this.viewport.getVisibleBounds();
        const scale = this.viewport.scale.x;

        this.sprites.forEach((sprite, name) => {
            // Calculate sprite bounds including its size
            const spriteHalfWidth = sprite.width / 2;
            const spriteHalfHeight = sprite.height / 2;
            const spriteLeft = sprite.x - spriteHalfWidth;
            const spriteRight = sprite.x + spriteHalfWidth;
            const spriteTop = sprite.y - spriteHalfHeight;
            const spriteBottom = sprite.y + spriteHalfHeight;

            // Check if sprite bounds intersect with visible bounds
            const isVisible = !(spriteRight < bounds.x ||
                spriteLeft > bounds.x + bounds.width ||
                spriteBottom < bounds.y ||
                spriteTop > bounds.y + bounds.height);

            sprite.visible = isVisible;

            if (isVisible) {
                const projectedSize = CONFIG.BASE_SPRITE_SIZE * scale;
                const sizes = [128, 256, 512, 1024, 1536, 2048];
                let textureSize = sizes.find(size => projectedSize * 0.75 < size) || 'lqip';
                this.loadTexture(name, textureSize);
            }
        });
    }

    async loadTexture(name, size) {
        const textureId = `${name}-${size}`;
        if (this.textures.has(textureId)) {
            const sprite = this.sprites.get(name);
            if (sprite.texture !== this.textures.get(textureId)) {
                sprite.texture = this.textures.get(textureId);
            }
            return;
        }

        const textureUrl = nameToImagePath(name, size);
        try {
            const texture = await PIXI.Assets.load(textureUrl);
            this.textures.set(textureId, texture);
            const sprite = this.sprites.get(name);
            if (sprite) {
                sprite.texture = texture;
            }
        } catch (e) {
            console.warn(`Could not load texture: ${textureUrl}`);
            this.textures.set(textureId, null); // Mark as failed
        }
    }

    handleResize() {
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
        this.viewport.resize(window.innerWidth, window.innerHeight, this.worldWidth, this.worldHeight);
        this.update();
    }

    showLoading(isLoading, message) {
        const loadingEl = document.getElementById('loading');
        if (isLoading) {
            loadingEl.style.display = 'block';
            loadingEl.classList.remove('fade-out');
            if (message) {
                loadingEl.querySelector('div:last-child').innerHTML = message;
            }
        } else {
            loadingEl.classList.add('fade-out');
            setTimeout(() => {
                loadingEl.style.display = 'none';
            }, 500);
        }
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const gallery = new UMAPGallery();
    await gallery.init();
});