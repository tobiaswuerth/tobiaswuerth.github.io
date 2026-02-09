import{B as Z,R as Q,s as X,f as tt,a as T,r as et,w as nt,c as v,o as m,b as s,d as F,m as I,n as z,e as ot,t as $,g as j,h as f,i as E,j as q,k as D,_ as G,u as at,l as lt,p as rt,q as it,v as L,x as st,y as ut,F as V,z as A,A as M,C as ct,D as dt}from"./main-ByOuYFqi.js";import{s as gt}from"./index-LunWnCXz.js";var pt=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`,bt={root:function(t){var n=t.instance,o=t.props;return["p-togglebutton p-component",{"p-togglebutton-checked":n.active,"p-invalid":n.$invalid,"p-togglebutton-fluid":o.fluid,"p-togglebutton-sm p-inputfield-sm":o.size==="small","p-togglebutton-lg p-inputfield-lg":o.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},ft=Z.extend({name:"togglebutton",style:pt,classes:bt}),mt={name:"BaseToggleButton",extends:X,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:ft,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}};function y(e){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(e)}function vt(e,t,n){return(t=ht(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ht(e){var t=yt(e,"string");return y(t)=="symbol"?t:t+""}function yt(e,t){if(y(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(y(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var R={name:"ToggleButton",extends:mt,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{active:this.active,disabled:this.disabled}})},onChange:function(t){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,t),this.$emit("change",t))},onBlur:function(t){var n,o;(n=(o=this.formField).onBlur)===null||n===void 0||n.call(o,t)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return T(this.onLabel)&&T(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:" "},dataP:function(){return tt(vt({checked:this.active,invalid:this.$invalid},this.size,this.size))}},directives:{ripple:Q}},_t=["tabindex","disabled","aria-pressed","aria-label","aria-labelledby","data-p-checked","data-p-disabled","data-p"],St=["data-p"];function kt(e,t,n,o,p,a){var c=et("ripple");return nt((m(),v("button",I({type:"button",class:e.cx("root"),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.d_value,onClick:t[0]||(t[0]=function(){return a.onChange&&a.onChange.apply(a,arguments)}),onBlur:t[1]||(t[1]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)})},a.getPTOptions("root"),{"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"data-p-checked":a.active,"data-p-disabled":e.disabled,"data-p":a.dataP}),[s("span",I({class:e.cx("content")},a.getPTOptions("content"),{"data-p":a.dataP}),[F(e.$slots,"default",{},function(){return[F(e.$slots,"icon",{value:e.d_value,class:z(e.cx("icon"))},function(){return[e.onIcon||e.offIcon?(m(),v("span",I({key:0,class:[e.cx("icon"),e.d_value?e.onIcon:e.offIcon]},a.getPTOptions("icon")),null,16)):ot("",!0)]}),s("span",I({class:e.cx("label")},a.getPTOptions("label")),$(a.label),17)]})],16,St)],16,_t)),[[c]])}R.render=kt;const N="favoritedImages";function P(){const e=localStorage.getItem(N);return e?JSON.parse(e):[]}function wt(e){return P().includes(e)}function It(e,t){const n=P(),o=n.indexOf(e);t&&o===-1?(n.push(e),localStorage.setItem(N,JSON.stringify(n))):!t&&o!==-1&&(n.splice(o,1),localStorage.setItem(N,JSON.stringify(n)))}const $t={class:"gallery-card"},Ct=["aria-label"],xt=["href"],Bt=["data-srcset","sizes"],Lt=["data-srcset","sizes"],zt=["data-srcset","sizes","src","alt"],Nt=j({__name:"GalleryImage",props:{imageName:{},cols:{}},setup(e){const t=e,n=f();let o=null;function p(d,b){return[128,256,512,1024,1536,2048].map(k=>`/gallery/${d}/${d}-${k}.${b} ${k}w`).join(", ")}const a=E(()=>`calc((100vw - 32px - (${t.cols-1} * 8px)) / ${t.cols})`),c=f(!1);function C(){c.value=!c.value,It(t.imageName,c.value)}async function _(){try{if(!n.value){console.error("No image element to hydrate");return}if(n.value.dataset.hydrated==="1"){console.warn("Image already hydrated",n.value.src);return}n.value.dataset.hydrated="1",n.value.fetchPriority="high",n.value.loading="eager",n.value.parentElement.querySelectorAll("source").forEach(b=>b.srcset=b.dataset.srcset),n.value.srcset=n.value.dataset.srcset,n.value.decode().catch(console.warn).finally(()=>{n.value.classList.remove("img-lqip")})}catch(d){console.error("Error hydrating image",d)}}function x(){if(!("IntersectionObserver"in window)){console.warn("IntersectionObserver not supported"),_().catch(console.error);return}o=new IntersectionObserver(d=>{if(!n.value){console.error("No image element to observe");return}if(d.length===0){console.warn("No intersection entries");return}d[0].isIntersecting&&_().catch(()=>{console.warn("Failed to hydrate image",n.value.src),n.value.classList.remove("img-lqip"),n.value.alt=`Failed to load image: ${n.value.dataset.name||""}`}).finally(S)},{rootMargin:"200px 0px",threshold:.01}),o.observe(n.value)}function S(){o&&(o.disconnect(),o=null)}return q(()=>{x(),c.value=wt(t.imageName)}),D(()=>{S()}),(d,b)=>(m(),v("figure",$t,[s("button",{class:z(["favorite",{"is-favorited":c.value}]),onClick:b[0]||(b[0]=B=>C()),"aria-label":c.value?"Remove from favorites":"Add to favorites",type:"button"},[s("i",{class:z(c.value?"pi pi-heart-fill":"pi pi-heart")},null,2)],10,Ct),s("a",{href:`/gallery/${t.imageName}/${t.imageName}-2048.jpg`,target:"_blank",rel:"noopener"},[s("picture",null,[s("source",{type:"image/avif","data-srcset":p(t.imageName,"avif"),sizes:a.value},null,8,Bt),s("source",{type:"image/webp","data-srcset":p(t.imageName,"webp"),sizes:a.value},null,8,Lt),s("img",{ref_key:"eImg",ref:n,type:"image/jpeg","data-srcset":p(t.imageName,"jpg"),sizes:a.value,src:`/gallery/${t.imageName}/${t.imageName}-lqip.jpg`,loading:"lazy",decoding:"async",fetchpriority:"low",alt:t.imageName,class:"img-lqip gallery-image"},null,8,zt)])],8,xt)]))}}),Pt=G(Nt,[["__scopeId","data-v-e552b902"]]);function Ot(e,t){let n;return(...o)=>{clearTimeout(n),n=setTimeout(()=>e(...o),t)}}const Tt={class:"gallery-container"},Ft={class:"columns-controls","aria-label":"Layout controls"},Vt={for:"cols"},At={class:"slider-container"},Mt={class:"slider-ticks"},jt={class:"column-display"},Et={class:"favorites-filter","aria-label":"Favorites filter"},qt=j({__name:"GalleryView",setup(e){const t=f(3),n=f(5),o=f([]),p=f([]),a=f(30),c=f(30),C=E(()=>{const i=n.value*10,u=[];for(let l=2;l<=n.value-1;l++){const g=(l*10-10)/(i-10)*100;u.push(g)}return u}),{enableSearch:_,setSearchResultsCallback:x,disableSearch:S}=at(),{setTitle:d,setIcon:b,resetAppBar:B}=lt(),{showLoading:k,closePopup:U}=rt(),w=f(!1);function W(){if(w.value){const r=P();o.value=p.value.filter(i=>r.includes(i))}else o.value=[...p.value]}it(w,W),q(()=>{d("gallery.title"),b("pi pi-images"),_(),x(async r=>{if(r.length===0){o.value=p.value;return}o.value=r.map(i=>i.imageName)}),Y(),K()}),D(()=>{B(),S()});function O(r){c.value=r*10,a.value=r*10,t.value=r,document.querySelector("#grid").style.setProperty("--cols",r.toString()),localStorage.setItem("gridColumns",r.toString())}const H=Ot(J,200);function J(...r){const i=r[0],u=i>c.value?1:-1;let l=Math.round(i/10);l===t.value&&(l+=u),l=Math.max(1,Math.min(n.value,l)),O(l)}function K(){const i=Math.min(Math.max(document.documentElement.clientWidth,window.innerWidth),1800)/384,u=Math.max(Math.min(Math.floor(i*3),13),5);n.value=u;let l;const h=localStorage.getItem("gridColumns");h?(l=parseInt(h),l>u&&(l=u)):l=Math.floor(i),O(l)}async function Y(){k("gallery.loading");const u=(await(await fetch("/gallery/images.txt",{cache:"no-store"})).text()).split(/\r?\n/).map(l=>l.trim()).filter(Boolean).filter(l=>/^[a-zA-Z0-9_-]+$/.test(l));p.value=[...u],o.value=[...u],U()}return(r,i)=>{const u=gt,l=R,h=ut;return m(),v("div",Tt,[L(h,{class:"gallery-controls"},{content:st(()=>[s("div",Ft,[s("label",Vt,$(r.$t("gallery.columns")),1),s("div",At,[L(u,{id:"cols",modelValue:a.value,"onUpdate:modelValue":[i[0]||(i[0]=g=>a.value=g),ct(H)],min:10,max:n.value*10,step:1,class:"column-slider"},null,8,["modelValue","max","onUpdate:modelValue"]),s("div",Mt,[(m(!0),v(V,null,A(C.value,g=>(m(),v("div",{key:g,class:"tick",style:M({left:g+"%"})},null,4))),128))])]),s("span",jt,$(t.value),1)]),s("div",Et,[s("span",null,$(r.$t("gallery.filter.title"))+":",1),L(l,{modelValue:w.value,"onUpdate:modelValue":i[1]||(i[1]=g=>w.value=g),size:"small",onIcon:"pi pi-refresh",offIcon:"pi pi-heart-fill",onLabel:r.$t("gallery.filter.favorites_on"),offLabel:r.$t("gallery.filter.favorites_off")},null,8,["modelValue","onLabel","offLabel"])])]),_:1}),s("div",{id:"grid",class:"gallery-grid",style:M({"--cols":t.value}),"aria-live":"polite"},[(m(!0),v(V,null,A(o.value,g=>(m(),dt(Pt,{key:g,"image-name":g,cols:t.value},null,8,["image-name","cols"]))),128))],4)])}}}),Rt=G(qt,[["__scopeId","data-v-48993942"]]);export{Rt as default};
