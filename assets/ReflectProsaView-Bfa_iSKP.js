import{B,c,e as d,C,A as z,q as T,G as R,v as L,d as A,u as H,a as Y,o as j,b as D,r as E,H as w,i,f as k,t as u,I as U,J as M,K as N,j as g,s as q,h as K,L as O}from"./index-b23fo1Qw.js";import{u as G}from"./useClipboard-BXaADLdm.js";var J=`
    .p-floatlabel {
        display: block;
        position: relative;
    }

    .p-floatlabel label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        transform: translateY(-50%);
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-weight: dt('floatlabel.font.weight');
        inset-inline-start: dt('floatlabel.position.x');
        color: dt('floatlabel.color');
        transition-duration: dt('floatlabel.transition.duration');
    }

    .p-floatlabel:has(.p-textarea) label {
        top: dt('floatlabel.position.y');
        transform: translateY(0);
    }

    .p-floatlabel:has(.p-inputicon:first-child) label {
        inset-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label,
    .p-floatlabel:has(input[placeholder]) label,
    .p-floatlabel:has(textarea[placeholder]) label {
        top: dt('floatlabel.over.active.top');
        transform: translateY(0);
        font-size: dt('floatlabel.active.font.size');
        font-weight: dt('floatlabel.active.font.weight');
    }

    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label {
        color: dt('floatlabel.active.color');
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label {
        color: dt('floatlabel.focus.color');
    }

    .p-floatlabel-in .p-inputtext,
    .p-floatlabel-in .p-textarea,
    .p-floatlabel-in .p-select-label,
    .p-floatlabel-in .p-multiselect-label,
    .p-floatlabel-in .p-autocomplete-input-multiple,
    .p-floatlabel-in .p-cascadeselect-label,
    .p-floatlabel-in .p-treeselect-label {
        padding-block-start: dt('floatlabel.in.input.padding.top');
        padding-block-end: dt('floatlabel.in.input.padding.bottom');
    }

    .p-floatlabel-in:has(input:focus) label,
    .p-floatlabel-in:has(input.p-filled) label,
    .p-floatlabel-in:has(input:-webkit-autofill) label,
    .p-floatlabel-in:has(textarea:focus) label,
    .p-floatlabel-in:has(textarea.p-filled) label,
    .p-floatlabel-in:has(.p-inputwrapper-focus) label,
    .p-floatlabel-in:has(.p-inputwrapper-filled) label,
    .p-floatlabel-in:has(input[placeholder]) label,
    .p-floatlabel-in:has(textarea[placeholder]) label {
        top: dt('floatlabel.in.active.top');
    }

    .p-floatlabel-on:has(input:focus) label,
    .p-floatlabel-on:has(input.p-filled) label,
    .p-floatlabel-on:has(input:-webkit-autofill) label,
    .p-floatlabel-on:has(textarea:focus) label,
    .p-floatlabel-on:has(textarea.p-filled) label,
    .p-floatlabel-on:has(.p-inputwrapper-focus) label,
    .p-floatlabel-on:has(.p-inputwrapper-filled) label,
    .p-floatlabel-on:has(input[placeholder]) label,
    .p-floatlabel-on:has(textarea[placeholder]) label {
        top: 0;
        transform: translateY(-50%);
        border-radius: dt('floatlabel.on.border.radius');
        background: dt('floatlabel.on.active.background');
        padding: dt('floatlabel.on.active.padding');
    }

    .p-floatlabel:has([class^='p-'][class$='-fluid']) {
        width: 100%;
    }

    .p-floatlabel:has(.p-invalid) label {
        color: dt('floatlabel.invalid.color');
    }
`,Q={root:function(e){var a=e.props;return["p-floatlabel",{"p-floatlabel-over":a.variant==="over","p-floatlabel-on":a.variant==="on","p-floatlabel-in":a.variant==="in"}]}},W=B.extend({name:"floatlabel",style:J,classes:Q}),X={name:"BaseFloatLabel",extends:T,props:{variant:{type:String,default:"over"}},style:W,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},F={name:"FloatLabel",extends:X,inheritAttrs:!1};function Z(t,e,a,l,f,r){return d(),c("span",z({class:t.cx("root")},t.ptmi("root")),[C(t.$slots,"default")],16)}F.render=Z;var ee={name:"BaseInput",extends:R,props:{size:{type:String,default:null},fluid:{type:Boolean,default:null},variant:{type:String,default:null}},inject:{$parentInstance:{default:void 0},$pcFluid:{default:void 0}},computed:{$variant:function(){var e;return(e=this.variant)!==null&&e!==void 0?e:this.$primevue.config.inputStyle||this.$primevue.config.inputVariant},$fluid:function(){var e;return(e=this.fluid)!==null&&e!==void 0?e:!!this.$pcFluid},hasFluid:function(){return this.$fluid}}},te=`
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
`,ae={root:function(e){var a=e.instance,l=e.props;return["p-textarea p-component",{"p-filled":a.$filled,"p-textarea-resizable ":l.autoResize,"p-textarea-sm p-inputfield-sm":l.size==="small","p-textarea-lg p-inputfield-lg":l.size==="large","p-invalid":a.$invalid,"p-variant-filled":a.$variant==="filled","p-textarea-fluid":a.$fluid}]}},le=B.extend({name:"textarea",style:te,classes:ae}),ne={name:"BaseTextarea",extends:ee,props:{autoResize:Boolean},style:le,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function h(t){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(t)}function oe(t,e,a){return(e=re(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function re(t){var e=ie(t,"string");return h(e)=="symbol"?e:e+""}function ie(t,e){if(h(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var l=a.call(t,e);if(h(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var I={name:"Textarea",extends:ne,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){e.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){if(this.$el.offsetParent){var e=this.$el.style.height,a=parseInt(e)||0,l=this.$el.scrollHeight,f=!a||l>a,r=a&&l<a;r?(this.$el.style.height="auto",this.$el.style.height="".concat(this.$el.scrollHeight,"px")):f&&(this.$el.style.height="".concat(l,"px"))}},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return z(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return L(oe({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},se=["value","name","disabled","aria-invalid","data-p"];function pe(t,e,a,l,f,r){return d(),c("textarea",z({class:t.cx("root"),value:t.d_value,name:t.name,disabled:t.disabled,"aria-invalid":t.invalid||void 0,"data-p":r.dataP,onInput:e[0]||(e[0]=function(){return r.onInput&&r.onInput.apply(r,arguments)})},r.attrs),null,16,se)}I.render=pe;const de={style:{"margin-top":".5rem"}},ue={style:{color:"var(--p-gray-500)"}},ce={class:"reflect-prosa-inputs"},fe=["for"],be={key:0},he={class:"summary"},ve={key:1,class:"text-center py-6"},xe=A({__name:"ReflectProsaView",setup(t){const{t:e}=H(),{setTitle:a,setIcon:l,reset:f}=Y(),{copyToClipboard:r}=G();j(()=>{a("reflectProsa.title"),l("pi pi-user-edit")}),D(()=>{f()});const n=E(Array(8).fill("")),_=w(()=>[{name:e("reflectProsa.categories.sorrows"),value:n.value[0],icon:"🔴"},{name:e("reflectProsa.categories.tasks"),value:n.value[1],icon:"🟠"},{name:e("reflectProsa.categories.insights"),value:n.value[2],icon:"🟡"},{name:e("reflectProsa.categories.emotions"),value:n.value[3],icon:"⚪️"},{name:e("reflectProsa.categories.happiness"),value:n.value[4],icon:"🟢"},{name:e("reflectProsa.categories.contacts"),value:n.value[5],icon:"🔵"},{name:e("reflectProsa.categories.gratitude"),value:n.value[6],icon:"🟣"},{name:e("reflectProsa.categories.other"),value:n.value[7],icon:"🟤"}]),P=w(()=>{const o=new Date,v=("0"+o.getDate()).slice(-2),x=("0"+(o.getMonth()+1)).slice(-2),y=o.getFullYear();let b=`${v}.${x}.${y} Prosa #log
`;return _.value.forEach(($,m)=>{const s=n.value[m];s.trim()&&(s.split(/[;\n\r]/).filter(p=>p.trim()).map(p=>p.trim()).forEach(p=>{b+=`
${$.icon} ${p}`}),b+=`
`)}),b.trim()}),S=w(()=>n.value.some(o=>o.trim())),V=()=>{r(P.value,e("clipboard.success"),e("clipboard.prosaSuccess"))};return(o,v)=>{const x=I,y=F,b=O,$=q;return d(),c("div",null,[i("div",null,[i("p",null,u(o.$t("reflectProsa.description")),1),i("p",de,[i("small",ue,u(o.$t("reflectProsa.disclaimer")),1)])]),i("div",ce,[(d(!0),c(U,null,M(_.value,(m,s)=>(d(),K(y,{variant:"on",key:s},{default:g(()=>[k(x,{id:`input-${s}`,modelValue:n.value[s],"onUpdate:modelValue":p=>n.value[s]=p,rows:"3",autoResize:""},null,8,["id","modelValue","onUpdate:modelValue"]),i("label",{for:`input-${s}`},u(m.icon+" "+m.name),9,fe)]),_:2},1024))),128))]),k($,{class:"reflect-prosa-result"},N({title:g(()=>[v[0]||(v[0]=i("i",{class:"pi pi-eye",style:{"margin-right":".5rem"}},null,-1)),i("span",null,u(o.$t("reflectProsa.overview")),1)]),content:g(()=>[S.value?(d(),c("div",be,[i("pre",he,u(P.value),1)])):(d(),c("div",ve,[i("i",null,u(o.$t("reflectProsa.noThoughts")),1)]))]),_:2},[S.value?{name:"footer",fn:g(()=>[k(b,{id:"copyBtn",onClick:V,icon:"pi pi-copy",label:o.$t("reflectProsa.copy")},null,8,["label"])]),key:"0"}:void 0]),1024)])}}});export{xe as default};
