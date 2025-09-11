import{B as C,b as f,e as u,m as S,A as I,C as R,d as T,D as A,g as D,o as E,a as F,r as H,c as _,f as i,i as P,t as c,F as U,j,E as M,w as g,s as N,l as L,G as O,x as Y,_ as q}from"./main-Cbn4rnod.js";import{u as G}from"./useClipboard-BnMZED2i.js";var K=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`,J={root:function(e){var a=e.instance,n=e.props;return["p-textarea p-component",{"p-filled":a.$filled,"p-textarea-resizable ":n.autoResize,"p-textarea-sm p-inputfield-sm":n.size==="small","p-textarea-lg p-inputfield-lg":n.size==="large","p-invalid":a.$invalid,"p-variant-filled":a.$variant==="filled","p-textarea-fluid":a.$fluid}]}},Q=C.extend({name:"textarea",style:K,classes:J}),W={name:"BaseTextarea",extends:I,props:{autoResize:Boolean},style:Q,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function v(t){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(t)}function X(t,e,a){return(e=Z(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Z(t){var e=ee(t,"string");return v(e)=="symbol"?e:e+""}function ee(t,e){if(v(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var n=a.call(t,e);if(v(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var B={name:"Textarea",extends:W,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){e.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){if(this.$el.offsetParent){var e=this.$el.style.height,a=parseInt(e)||0,n=this.$el.scrollHeight,m=!a||n>a,s=a&&n<a;s?(this.$el.style.height="auto",this.$el.style.height="".concat(this.$el.scrollHeight,"px")):m&&(this.$el.style.height="".concat(n,"px"))}},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return S(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return R(X({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},te=["value","name","disabled","aria-invalid","data-p"];function ae(t,e,a,n,m,s){return u(),f("textarea",S({class:t.cx("root"),value:t.d_value,name:t.name,disabled:t.disabled,"aria-invalid":t.invalid||void 0,"data-p":s.dataP,onInput:e[0]||(e[0]=function(){return s.onInput&&s.onInput.apply(s,arguments)})},s.attrs),null,16,te)}B.render=ae;const ne={style:{"margin-top":".5rem"}},re={style:{color:"var(--p-gray-500)"}},oe={class:"reflect-prosa-inputs"},ie=["for"],se={key:0},le={class:"summary"},de={key:1,class:"text-center py-6"},ce=T({__name:"ReflectProsaView",setup(t){const{t:e}=A(),{setTitle:a,setIcon:n,resetAppBar:m}=D(),{copyToClipboard:s}=G();E(()=>{a("reflectProsa.title"),n("pi pi-user-edit")}),F(()=>{m()});const r=H(Array(8).fill("")),k=_(()=>[{name:e("reflectProsa.categories.sorrows"),value:r.value[0],icon:"🔴"},{name:e("reflectProsa.categories.tasks"),value:r.value[1],icon:"🟠"},{name:e("reflectProsa.categories.insights"),value:r.value[2],icon:"🟡"},{name:e("reflectProsa.categories.emotions"),value:r.value[3],icon:"⚪️"},{name:e("reflectProsa.categories.happiness"),value:r.value[4],icon:"🟢"},{name:e("reflectProsa.categories.contacts"),value:r.value[5],icon:"🔵"},{name:e("reflectProsa.categories.gratitude"),value:r.value[6],icon:"🟣"},{name:e("reflectProsa.categories.other"),value:r.value[7],icon:"🟤"}]),z=_(()=>{const o=new Date,h=("0"+o.getDate()).slice(-2),x=("0"+(o.getMonth()+1)).slice(-2),y=o.getFullYear();let p=`${h}.${x}.${y} Prosa #log
`;return k.value.forEach(($,b)=>{const l=r.value[b];l.trim()&&(l.split(/[;\n\r]/).filter(d=>d.trim()).map(d=>d.trim()).forEach(d=>{p+=`
${$.icon} ${d}`}),p+=`
`)}),p.trim()}),w=_(()=>r.value.some(o=>o.trim())),V=()=>{s(z.value,e("clipboard.success"),e("clipboard.prosaSuccess"))};return(o,h)=>{const x=B,y=O,p=Y,$=N;return u(),f("div",null,[i("div",null,[i("p",null,c(o.$t("reflectProsa.description")),1),i("p",ne,[i("small",re,c(o.$t("reflectProsa.disclaimer")),1)])]),i("div",oe,[(u(!0),f(U,null,j(k.value,(b,l)=>(u(),L(y,{variant:"on",key:l},{default:g(()=>[P(x,{id:`input-${l}`,modelValue:r.value[l],"onUpdate:modelValue":d=>r.value[l]=d,rows:"3",autoResize:""},null,8,["id","modelValue","onUpdate:modelValue"]),i("label",{for:`input-${l}`},c(b.icon+" "+b.name),9,ie)]),_:2},1024))),128))]),P($,{class:"reflect-prosa-result"},M({title:g(()=>[h[0]||(h[0]=i("i",{class:"pi pi-eye",style:{"margin-right":".5rem"}},null,-1)),i("span",null,c(o.$t("reflectProsa.overview")),1)]),content:g(()=>[w.value?(u(),f("div",se,[i("pre",le,c(z.value),1)])):(u(),f("div",de,[i("i",null,c(o.$t("reflectProsa.noThoughts")),1)]))]),_:2},[w.value?{name:"footer",fn:g(()=>[P(p,{id:"copyBtn",onClick:V,icon:"pi pi-copy",label:o.$t("reflectProsa.copy")},null,8,["label"])]),key:"0"}:void 0]),1024)])}}}),fe=q(ce,[["__scopeId","data-v-c64f3ce7"]]);export{fe as default};
