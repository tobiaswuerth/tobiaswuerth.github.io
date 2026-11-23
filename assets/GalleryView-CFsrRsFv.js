import{B as X,R as bt,s as G,f as Y,a as H,r as ft,w as pt,c as f,o as h,b as u,d as F,m,n as x,e as I,t as B,Q as mt,V as vt,k as yt,$ as wt,g as v,h as St,i as R,j as q,l as kt,p as J,u as Pt,q as A,P as Dt,v as Lt,S as Et,W as It,x as Q,y as Z,z as C,_,A as Bt,C as zt,D as At,E as T,F as Mt,G as Tt,H as K,I as W,J as j,K as xt}from"./main-Daw-ubsz.js";import{f as Ct}from"./plane-u3rJwpR4.js";import{d as Vt}from"./utils-32wYNSW4.js";var $t=`
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
`,Nt={root:function(t){var n=t.instance,i=t.props;return["p-togglebutton p-component",{"p-togglebutton-checked":n.active,"p-invalid":n.$invalid,"p-togglebutton-fluid":i.fluid,"p-togglebutton-sm p-inputfield-sm":i.size==="small","p-togglebutton-lg p-inputfield-lg":i.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},Ot=X.extend({name:"togglebutton",style:$t,classes:Nt}),Ht={name:"BaseToggleButton",extends:G,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:Ot,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}};function D(e){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(e)}function Ft(e,t,n){return(t=Kt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kt(e){var t=Wt(e,"string");return D(t)=="symbol"?t:t+""}function Wt(e,t){if(D(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(D(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var tt={name:"ToggleButton",extends:Ht,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{active:this.active,disabled:this.disabled}})},onChange:function(t){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,t),this.$emit("change",t))},onBlur:function(t){var n,i;(n=(i=this.formField).onBlur)===null||n===void 0||n.call(i,t)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return H(this.onLabel)&&H(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:" "},dataP:function(){return Y(Ft({checked:this.active,invalid:this.$invalid},this.size,this.size))}},directives:{ripple:bt}},jt=["tabindex","disabled","aria-pressed","aria-label","aria-labelledby","data-p-checked","data-p-disabled","data-p"],Ut=["data-p"];function Xt(e,t,n,i,o,a){var r=ft("ripple");return pt((h(),f("button",m({type:"button",class:e.cx("root"),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.d_value,onClick:t[0]||(t[0]=function(){return a.onChange&&a.onChange.apply(a,arguments)}),onBlur:t[1]||(t[1]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)})},a.getPTOptions("root"),{"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"data-p-checked":a.active,"data-p-disabled":e.disabled,"data-p":a.dataP}),[u("span",m({class:e.cx("content")},a.getPTOptions("content"),{"data-p":a.dataP}),[F(e.$slots,"default",{},function(){return[F(e.$slots,"icon",{value:e.d_value,class:x(e.cx("icon"))},function(){return[e.onIcon||e.offIcon?(h(),f("span",m({key:0,class:[e.cx("icon"),e.d_value?e.onIcon:e.offIcon]},a.getPTOptions("icon")),null,16)):I("",!0)]}),u("span",m({class:e.cx("label")},a.getPTOptions("label")),B(a.label),17)]})],16,Ut)],16,jt)),[[r]])}tt.render=Xt;var Gt=`
    .p-slider {
        display: block;
        position: relative;
        background: dt('slider.track.background');
        border-radius: dt('slider.track.border.radius');
    }

    .p-slider-handle {
        cursor: grab;
        touch-action: none;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: dt('slider.handle.height');
        width: dt('slider.handle.width');
        background: dt('slider.handle.background');
        border-radius: dt('slider.handle.border.radius');
        transition:
            background dt('slider.transition.duration'),
            color dt('slider.transition.duration'),
            border-color dt('slider.transition.duration'),
            box-shadow dt('slider.transition.duration'),
            outline-color dt('slider.transition.duration');
        outline-color: transparent;
    }

    .p-slider-handle::before {
        content: '';
        width: dt('slider.handle.content.width');
        height: dt('slider.handle.content.height');
        display: block;
        background: dt('slider.handle.content.background');
        border-radius: dt('slider.handle.content.border.radius');
        box-shadow: dt('slider.handle.content.shadow');
        transition: background dt('slider.transition.duration');
    }

    .p-slider:not(.p-disabled) .p-slider-handle:hover {
        background: dt('slider.handle.hover.background');
    }

    .p-slider:not(.p-disabled) .p-slider-handle:hover::before {
        background: dt('slider.handle.content.hover.background');
    }

    .p-slider-handle:focus-visible {
        box-shadow: dt('slider.handle.focus.ring.shadow');
        outline: dt('slider.handle.focus.ring.width') dt('slider.handle.focus.ring.style') dt('slider.handle.focus.ring.color');
        outline-offset: dt('slider.handle.focus.ring.offset');
    }

    .p-slider-range {
        display: block;
        background: dt('slider.range.background');
        border-radius: dt('slider.track.border.radius');
    }

    .p-slider.p-slider-horizontal {
        height: dt('slider.track.size');
    }

    .p-slider-horizontal .p-slider-range {
        inset-block-start: 0;
        inset-inline-start: 0;
        height: 100%;
    }

    .p-slider-horizontal .p-slider-handle {
        inset-block-start: 50%;
        margin-block-start: calc(-1 * calc(dt('slider.handle.height') / 2));
        margin-inline-start: calc(-1 * calc(dt('slider.handle.width') / 2));
    }

    .p-slider-vertical {
        min-height: 100px;
        width: dt('slider.track.size');
    }

    .p-slider-vertical .p-slider-handle {
        inset-inline-start: 50%;
        margin-inline-start: calc(-1 * calc(dt('slider.handle.width') / 2));
        margin-block-end: calc(-1 * calc(dt('slider.handle.height') / 2));
    }

    .p-slider-vertical .p-slider-range {
        inset-block-end: 0;
        inset-inline-start: 0;
        width: 100%;
    }
`,Yt={handle:{position:"absolute"},range:{position:"absolute"}},Rt={root:function(t){var n=t.instance,i=t.props;return["p-slider p-component",{"p-disabled":i.disabled,"p-invalid":n.$invalid,"p-slider-horizontal":i.orientation==="horizontal","p-slider-vertical":i.orientation==="vertical"}]},range:"p-slider-range",handle:"p-slider-handle"},qt=X.extend({name:"slider",style:Gt,classes:Rt,inlineStyles:Yt}),Jt={name:"BaseSlider",extends:G,props:{min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},step:{type:Number,default:null},range:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:qt,provide:function(){return{$pcSlider:this,$parentInstance:this}}};function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(e)}function Qt(e,t,n){return(t=Zt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zt(e){var t=_t(e,"string");return L(t)=="symbol"?t:t+""}function _t(e,t){if(L(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(L(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function te(e){return ie(e)||ae(e)||ne(e)||ee()}function ee(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(e,t){if(e){if(typeof e=="string")return V(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}function ae(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ie(e){if(Array.isArray(e))return V(e)}function V(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}var et={name:"Slider",extends:Jt,inheritAttrs:!1,emits:["change","slideend"],dragging:!1,handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,beforeUnmount:function(){this.unbindDragListeners()},methods:{updateDomData:function(){var t=this.$el.getBoundingClientRect();this.initX=t.left+yt(),this.initY=t.top+wt(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue:function(t){var n,i=t.touches?t.touches[0].pageX:t.pageX,o=t.touches?t.touches[0].pageY:t.pageY;this.orientation==="horizontal"?vt(this.$el)?n=(this.initX+this.barWidth-i)*100/this.barWidth:n=(i-this.initX)*100/this.barWidth:n=(this.initY+this.barHeight-o)*100/this.barHeight;var a=(this.max-this.min)*(n/100)+this.min;if(this.step){var r=this.range?this.value[this.handleIndex]:this.value,y=a-r;y<0?a=r+Math.ceil(a/this.step-r/this.step)*this.step:y>0&&(a=r+Math.floor(a/this.step-r/this.step)*this.step)}else a=Math.floor(a);this.updateModel(t,a)},updateModel:function(t,n){var i=Math.round(n*100)/100,o;this.range?(o=this.value?te(this.value):[],this.handleIndex==0?(i<this.min?i=this.min:i>=this.max&&(i=this.max),o[0]=i):(i>this.max?i=this.max:i<=this.min&&(i=this.min),o[1]=i)):(i<this.min?i=this.min:i>this.max&&(i=this.max),o=i),this.writeValue(o,t),this.$emit("change",o)},onDragStart:function(t,n){this.disabled||(this.$el.setAttribute("data-p-sliding",!0),this.dragging=!0,this.updateDomData(),this.range&&this.value[0]===this.max?this.handleIndex=0:this.handleIndex=n,t.currentTarget.focus())},onDrag:function(t){this.dragging&&this.setValue(t)},onDragEnd:function(t){this.dragging&&(this.dragging=!1,this.$el.setAttribute("data-p-sliding",!1),this.$emit("slideend",{originalEvent:t,value:this.value}))},onBarClick:function(t){this.disabled||mt(t.target,"data-pc-section")!=="handle"&&(this.updateDomData(),this.setValue(t))},onMouseDown:function(t,n){this.bindDragListeners(),this.onDragStart(t,n)},onKeyDown:function(t,n){switch(this.handleIndex=n,t.code){case"ArrowDown":case"ArrowLeft":this.decrementValue(t,n),t.preventDefault();break;case"ArrowUp":case"ArrowRight":this.incrementValue(t,n),t.preventDefault();break;case"PageDown":this.decrementValue(t,n,!0),t.preventDefault();break;case"PageUp":this.incrementValue(t,n,!0),t.preventDefault();break;case"Home":this.updateModel(t,this.min),t.preventDefault();break;case"End":this.updateModel(t,this.max),t.preventDefault();break}},onBlur:function(t,n){var i,o;(i=(o=this.formField).onBlur)===null||i===void 0||i.call(o,t)},decrementValue:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o;this.range?this.step?o=this.value[n]-this.step:o=this.value[n]-1:this.step?o=this.value-this.step:!this.step&&i?o=this.value-10:o=this.value-1,this.updateModel(t,o),t.preventDefault()},incrementValue:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o;this.range?this.step?o=this.value[n]+this.step:o=this.value[n]+1:this.step?o=this.value+this.step:!this.step&&i?o=this.value+10:o=this.value+1,this.updateModel(t,o),t.preventDefault()},bindDragListeners:function(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener("mousemove",this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener("mouseup",this.dragEndListener))},unbindDragListeners:function(){this.dragListener&&(document.removeEventListener("mousemove",this.dragListener),this.dragListener=null),this.dragEndListener&&(document.removeEventListener("mouseup",this.dragEndListener),this.dragEndListener=null)},rangeStyle:function(){if(this.range){var t=this.rangeEndPosition>this.rangeStartPosition?this.rangeEndPosition-this.rangeStartPosition:this.rangeStartPosition-this.rangeEndPosition,n=this.rangeEndPosition>this.rangeStartPosition?this.rangeStartPosition:this.rangeEndPosition;return this.horizontal?{"inset-inline-start":n+"%",width:t+"%"}:{bottom:n+"%",height:t+"%"}}else return this.horizontal?{width:this.handlePosition+"%"}:{height:this.handlePosition+"%"}},handleStyle:function(){return this.horizontal?{"inset-inline-start":this.handlePosition+"%"}:{bottom:this.handlePosition+"%"}},rangeStartHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeStartPosition+"%"}:{bottom:this.rangeStartPosition+"%"}},rangeEndHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeEndPosition+"%"}:{bottom:this.rangeEndPosition+"%"}}},computed:{value:function(){var t;if(this.range){var n,i,o,a;return[(n=(i=this.d_value)===null||i===void 0?void 0:i[0])!==null&&n!==void 0?n:this.min,(o=(a=this.d_value)===null||a===void 0?void 0:a[1])!==null&&o!==void 0?o:this.max]}return(t=this.d_value)!==null&&t!==void 0?t:this.min},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},handlePosition:function(){return this.value<this.min?0:this.value>this.max?100:(this.value-this.min)*100/(this.max-this.min)},rangeStartPosition:function(){return this.value&&this.value[0]!==void 0?this.value[0]<this.min?0:(this.value[0]-this.min)*100/(this.max-this.min):0},rangeEndPosition:function(){return this.value&&this.value.length===2&&this.value[1]!==void 0?this.value[1]>this.max?100:(this.value[1]-this.min)*100/(this.max-this.min):100},dataP:function(){return Y(Qt({},this.orientation,this.orientation))}}},re=["data-p"],oe=["data-p"],le=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation","data-p"],se=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation","data-p"],de=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation","data-p"];function ue(e,t,n,i,o,a){return h(),f("div",m({class:e.cx("root"),onClick:t[18]||(t[18]=function(){return a.onBarClick&&a.onBarClick.apply(a,arguments)})},e.ptmi("root"),{"data-p-sliding":!1,"data-p":a.dataP}),[u("span",m({class:e.cx("range"),style:[e.sx("range"),a.rangeStyle()]},e.ptm("range"),{"data-p":a.dataP}),null,16,oe),e.range?I("",!0):(h(),f("span",m({key:0,class:e.cx("handle"),style:[e.sx("handle"),a.handleStyle()],onTouchstartPassive:t[0]||(t[0]=function(r){return a.onDragStart(r)}),onTouchmovePassive:t[1]||(t[1]=function(r){return a.onDrag(r)}),onTouchend:t[2]||(t[2]=function(r){return a.onDragEnd(r)}),onMousedown:t[3]||(t[3]=function(r){return a.onMouseDown(r)}),onKeydown:t[4]||(t[4]=function(r){return a.onKeyDown(r)}),onBlur:t[5]||(t[5]=function(r){return a.onBlur(r)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("handle"),{"data-p":a.dataP}),null,16,le)),e.range?(h(),f("span",m({key:1,class:e.cx("handle"),style:[e.sx("handle"),a.rangeStartHandleStyle()],onTouchstartPassive:t[6]||(t[6]=function(r){return a.onDragStart(r,0)}),onTouchmovePassive:t[7]||(t[7]=function(r){return a.onDrag(r)}),onTouchend:t[8]||(t[8]=function(r){return a.onDragEnd(r)}),onMousedown:t[9]||(t[9]=function(r){return a.onMouseDown(r,0)}),onKeydown:t[10]||(t[10]=function(r){return a.onKeyDown(r,0)}),onBlur:t[11]||(t[11]=function(r){return a.onBlur(r,0)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[0]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("startHandler"),{"data-p":a.dataP}),null,16,se)):I("",!0),e.range?(h(),f("span",m({key:2,class:e.cx("handle"),style:[e.sx("handle"),a.rangeEndHandleStyle()],onTouchstartPassive:t[12]||(t[12]=function(r){return a.onDragStart(r,1)}),onTouchmovePassive:t[13]||(t[13]=function(r){return a.onDrag(r)}),onTouchend:t[14]||(t[14]=function(r){return a.onDragEnd(r)}),onMousedown:t[15]||(t[15]=function(r){return a.onMouseDown(r,1)}),onKeydown:t[16]||(t[16]=function(r){return a.onKeyDown(r,1)}),onBlur:t[17]||(t[17]=function(r){return a.onBlur(r,1)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[1]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("endHandler"),{"data-p":a.dataP}),null,16,de)):I("",!0)],16,re)}et.render=ue;const z="favoritedImages";function ge(e){let t;try{t=JSON.parse(e)}catch{return null}return Array.isArray(t)&&t.every(n=>typeof n=="string")?t:null}function ce(){const e=q("localStorage",z);if(e===null)return new Set;const t=ge(e);return t?new Set(t):(console.warn(`Unreadable favorites in localStorage "${z}" were reset.`),kt("localStorage",z),new Set)}const w=v(ce());function nt(){return{favorites:St(w),isFavorite:e=>w.value.has(e),toggleFavorite(e){w.value.has(e)?w.value.delete(e):w.value.add(e),R("localStorage",z,JSON.stringify([...w.value]))}}}const N=new WeakMap;let $=null;function at(e){N.delete(e),$?.unobserve(e)}function he(){return $??=new IntersectionObserver(e=>{for(const t of e){const n=N.get(t.target);!t.isIntersecting||!n||(at(t.target),n())}},{rootMargin:"200px 0px",threshold:.01}),$}function be(e,t){return N.set(e,t),he().observe(e),()=>at(e)}const fe={class:"gallery-card"},pe=["aria-label","aria-pressed"],me=["href"],ve=["data-srcset","sizes"],ye=["data-srcset","sizes"],we=["data-srcset","sizes","src","alt"],Se=8,ke=J({__name:"GalleryImage",props:{imageName:{},cols:{}},setup(e){const t=e,n=Pt("image"),{isFavorite:i,toggleFavorite:o}=nt(),a=A(()=>i(t.imageName));let r=null;const y=[128,256,512,1024,1536,2048];function S(s,c){return y.map(P=>`/gallery/${s}/${s}-${P}.${c} ${P}w`).join(", ")}const k=A(()=>{const s=(t.cols-1)*Se+2*Dt,c=`calc((min(100vw, ${Lt}px) - ${Et+s}px) / ${t.cols})`;return`(min-width: ${It}px) ${c}, calc((100vw - ${s}px) / ${t.cols})`});function M(s){s.parentElement?.querySelectorAll("source").forEach(c=>{c.srcset=c.dataset.srcset??""}),s.fetchPriority="high",s.srcset=s.dataset.srcset??"",s.decode().catch(c=>console.warn(`Image ${t.imageName} failed to load`,c)).finally(()=>s.classList.remove("img-lqip"))}return Q(()=>{const s=n.value;s&&(r=be(s,()=>M(s)))}),Z(()=>{r?.()}),(s,c)=>(h(),f("figure",fe,[u("button",{class:x(["favorite",{"is-favorited":a.value}]),onClick:c[0]||(c[0]=P=>C(o)(e.imageName)),"aria-label":a.value?s.$t("gallery.favorite.remove"):s.$t("gallery.favorite.add"),"aria-pressed":a.value,type:"button"},[u("i",{class:x(a.value?"pi pi-heart-fill":"pi pi-heart"),"aria-hidden":"true"},null,2)],10,pe),u("a",{href:C(Ct)(e.imageName),target:"_blank",rel:"noopener"},[u("picture",null,[u("source",{type:"image/avif","data-srcset":S(t.imageName,"avif"),sizes:k.value},null,8,ve),u("source",{type:"image/webp","data-srcset":S(t.imageName,"webp"),sizes:k.value},null,8,ye),u("img",{ref_key:"image",ref:n,"data-srcset":S(t.imageName,"jpg"),sizes:k.value,src:`/gallery/${t.imageName}/${t.imageName}-lqip.jpg`,loading:"lazy",decoding:"async",fetchpriority:"low",alt:t.imageName,class:"img-lqip gallery-image"},null,8,we)])],8,me)]))}}),Pe=_(ke,[["__scopeId","data-v-00776430"]]),De={class:"columns-controls"},Le={id:"columns-label"},Ee={class:"slider-container"},Ie={class:"slider-ticks"},Be={class:"column-display"},ze={class:"favorites-filter"},U="gridColumns",Ae=J({__name:"GalleryView",setup(e){const t=v(3),n=v(5),i=v([]),o=v(null),a=v(!1),r=v(30),y=v(30),S=A(()=>{const d=n.value*10,p=[];for(let g=2;g<=n.value-1;g++){const b=(g*10-10)/(d-10)*100;p.push(b)}return p}),{enableSearch:k,setSearchResultsCallback:M,disableSearch:s}=Bt(),{setTitle:c,setIcon:P,resetAppBar:it}=zt(),{showLoading:rt,showError:ot,closePopup:lt}=At(),{favorites:st}=nt(),dt=A(()=>{const l=o.value??i.value;return a.value?l.filter(d=>st.value.has(d)):l});Q(()=>{c("gallery.title"),P("pi pi-images"),k(),M(async l=>{o.value=l.length?l.map(d=>d.imageName):null}),ht(),ct()}),Z(()=>{it(),s()});function O(l){y.value=l*10,r.value=l*10,t.value=l,R("localStorage",U,l.toString())}const ut=Vt(gt,200);function gt(l){const d=Array.isArray(l)?l[0]:l,p=d>y.value?1:-1;let g=Math.round(d/10);g===t.value&&(g+=p),g=Math.max(1,Math.min(n.value,g)),O(g)}function ct(){const d=Math.min(Math.max(document.documentElement.clientWidth,window.innerWidth),1800)/384,p=Math.max(Math.min(Math.floor(d*3),13),5);n.value=p;const g=Number(q("localStorage",U)),E=Number.isInteger(g)&&g>=1?g:Math.floor(d);O(Math.max(1,Math.min(p,E)))}async function ht(){rt("gallery.loading");try{const l=await fetch("/gallery/images.txt",{cache:"no-store"});if(!l.ok)throw new Error(`Image list request failed: ${l.status}`);i.value=(await l.text()).split(/\r?\n/).map(d=>d.trim()).filter(d=>/^[a-zA-Z0-9_-]+$/.test(d)),lt()}catch(l){console.error("Gallery could not be loaded:",l),ot("gallery.title","gallery.loadError",!0)}}return(l,d)=>{const p=et,g=tt,E=Tt;return h(),f("div",null,[T(E,{class:"gallery-controls"},{content:Mt(()=>[u("div",De,[u("span",Le,B(l.$t("gallery.columns")),1),u("div",Ee,[T(p,{modelValue:r.value,"onUpdate:modelValue":[d[0]||(d[0]=b=>r.value=b),C(ut)],"aria-labelledby":"columns-label",min:10,max:n.value*10,step:1,class:"column-slider"},null,8,["modelValue","max","onUpdate:modelValue"]),u("div",Ie,[(h(!0),f(K,null,W(S.value,b=>(h(),f("div",{key:b,class:"tick",style:j({left:b+"%"})},null,4))),128))])]),u("span",Be,B(t.value),1)]),u("div",ze,[u("span",null,B(l.$t("gallery.filter.title"))+":",1),T(g,{modelValue:a.value,"onUpdate:modelValue":d[1]||(d[1]=b=>a.value=b),size:"small",onIcon:"pi pi-heart-fill",offIcon:"pi pi-heart",onLabel:l.$t("gallery.filter.favoritesOnly"),offLabel:l.$t("gallery.filter.favoritesOnly")},null,8,["modelValue","onLabel","offLabel"])])]),_:1}),u("div",{class:"gallery-grid",style:j({"--cols":t.value})},[(h(!0),f(K,null,W(dt.value,b=>(h(),xt(Pe,{key:b,"image-name":b,cols:t.value},null,8,["image-name","cols"]))),128))],4)])}}}),Ce=_(Ae,[["__scopeId","data-v-fe251ed9"]]);export{Ce as default};
