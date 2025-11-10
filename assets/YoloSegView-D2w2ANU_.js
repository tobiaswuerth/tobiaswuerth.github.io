import{s as ze}from"./index-DcsDiBPE.js";import{B as G,c as m,o as p,d as A,e as V,m as k,O as N,f as we,Y as L,P as oe,S as q,U as _e,D as E,x as $,w as X,W as le,b as i,X as K,Z as Le,F as pe,t as h,n as Ne,g as Fe,l as We,p as Ue,J as qe,h as b,i as Ye,j as Re,k as Xe,q as Ke,C as f,v as y,a0 as Ge,E as He,G as Se,z as Je,a1 as Ze,_ as Qe}from"./main-WChdN8Kj.js";var et=`
    .p-steplist {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow-x: auto;
    }

    .p-step {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        gap: dt('stepper.step.gap');
        padding: dt('stepper.step.padding');
    }

    .p-step:last-of-type {
        flex: initial;
    }

    .p-step-header {
        border: 0 none;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration');
        border-radius: dt('stepper.step.header.border.radius');
        outline-color: transparent;
        background: transparent;
        padding: dt('stepper.step.header.padding');
        gap: dt('stepper.step.header.gap');
    }

    .p-step-header:focus-visible {
        box-shadow: dt('stepper.step.header.focus.ring.shadow');
        outline: dt('stepper.step.header.focus.ring.width') dt('stepper.step.header.focus.ring.style') dt('stepper.step.header.focus.ring.color');
        outline-offset: dt('stepper.step.header.focus.ring.offset');
    }

    .p-stepper.p-stepper-readonly .p-step {
        cursor: auto;
    }

    .p-step-title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        color: dt('stepper.step.title.color');
        font-weight: dt('stepper.step.title.font.weight');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        color: dt('stepper.step.number.color');
        border: 2px solid dt('stepper.step.number.border.color');
        background: dt('stepper.step.number.background');
        min-width: dt('stepper.step.number.size');
        height: dt('stepper.step.number.size');
        line-height: dt('stepper.step.number.size');
        font-size: dt('stepper.step.number.font.size');
        z-index: 1;
        border-radius: dt('stepper.step.number.border.radius');
        position: relative;
        font-weight: dt('stepper.step.number.font.weight');
    }

    .p-step-number::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('stepper.step.number.border.radius');
        box-shadow: dt('stepper.step.number.shadow');
    }

    .p-step-active .p-step-header {
        cursor: default;
    }

    .p-step-active .p-step-number {
        background: dt('stepper.step.number.active.background');
        border-color: dt('stepper.step.number.active.border.color');
        color: dt('stepper.step.number.active.color');
    }

    .p-step-active .p-step-title {
        color: dt('stepper.step.title.active.color');
    }

    .p-step:not(.p-disabled):focus-visible {
        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');
        outline-offset: dt('focus.ring.offset');
    }

    .p-step:has(~ .p-step-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepper-separator {
        flex: 1 1 0;
        background: dt('stepper.separator.background');
        width: 100%;
        height: dt('stepper.separator.size');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-steppanels {
        padding: dt('stepper.steppanels.padding');
    }

    .p-steppanel {
        background: dt('stepper.steppanel.background');
        color: dt('stepper.steppanel.color');
    }

    .p-stepper:has(.p-stepitem) {
        display: flex;
        flex-direction: column;
    }

    .p-stepitem {
        display: flex;
        flex-direction: column;
        flex: initial;
    }

    .p-stepitem.p-stepitem-active {
        flex: 1 1 auto;
    }

    .p-stepitem .p-step {
        flex: initial;
    }

    .p-stepitem .p-steppanel-content {
        width: 100%;
        padding: dt('stepper.steppanel.padding');
        margin-inline-start: 1rem;
    }

    .p-stepitem .p-steppanel {
        display: flex;
        flex: 1 1 auto;
    }

    .p-stepitem .p-stepper-separator {
        flex: 0 0 auto;
        width: dt('stepper.separator.size');
        height: auto;
        margin: dt('stepper.separator.margin');
        position: relative;
        left: calc(-1 * dt('stepper.separator.size'));
    }

    .p-stepitem .p-stepper-separator:dir(rtl) {
        left: calc(-9 * dt('stepper.separator.size'));
    }

    .p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepitem:last-of-type .p-steppanel {
        padding-inline-start: dt('stepper.step.number.size');
    }
`,tt={root:function(t){var r=t.props;return["p-stepper p-component",{"p-readonly":r.linear}]},separator:"p-stepper-separator"},at=G.extend({name:"stepper",style:et,classes:tt}),nt={name:"BaseStepper",extends:N,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:at,provide:function(){return{$pcStepper:this,$parentInstance:this}}},$e={name:"Stepper",extends:nt,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t}},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isStepActive:function(t){return this.d_value===t},isStepDisabled:function(){return this.linear}}};function st(e,t,r,g,x,a){return p(),m("div",k({class:e.cx("root"),role:"tablist"},e.ptmi("root")),[e.$slots.start?A(e.$slots,"start",{key:0}):V("",!0),A(e.$slots,"default"),e.$slots.end?A(e.$slots,"end",{key:1}):V("",!0)],16)}$e.render=st;var rt={root:function(t){var r=t.instance;return["p-stepitem",{"p-stepitem-active":r.isActive}]}},it=G.extend({name:"stepitem",classes:rt}),ot={name:"BaseStepItem",extends:N,props:{value:{type:[String,Number],default:void 0}},style:it,provide:function(){return{$pcStepItem:this,$parentInstance:this}}},ke={name:"StepItem",extends:ot,inheritAttrs:!1,inject:["$pcStepper"],computed:{isActive:function(){var t;return((t=this.$pcStepper)===null||t===void 0?void 0:t.d_value)===this.value}}},lt=["data-p-active"];function pt(e,t,r,g,x,a){return p(),m("div",k({class:e.cx("root"),"data-p-active":a.isActive},e.ptmi("root")),[A(e.$slots,"default")],16,lt)}ke.render=pt;var ct={root:function(t){var r=t.instance;return["p-steppanel",{"p-steppanel-active":r.isVertical&&r.active}]},content:"p-steppanel-content"},dt=G.extend({name:"steppanel",classes:ct}),xe={name:"StepperSeparator",hostName:"Stepper",extends:N,inject:{$pcStepper:{default:null}}};function ut(e,t,r,g,x,a){return p(),m("span",k({class:e.cx("separator")},e.ptmo(a.$pcStepper.pt,"separator")),null,16)}xe.render=ut;var vt={name:"BaseStepPanel",extends:N,props:{value:{type:[String,Number],default:void 0},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:dt,provide:function(){return{$pcStepPanel:this,$parentInstance:this}}},Ce={name:"StepPanel",extends:vt,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepItem:{default:null},$pcStepList:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el){var t,r,g=L(this.$pcStepper.$el,'[data-pc-name="step"]'),x=oe(this.isVertical?(t=this.$pcStepItem)===null||t===void 0?void 0:t.$el:(r=this.$pcStepList)===null||r===void 0?void 0:r.$el,'[data-pc-name="step"]'),a=q(x,g);this.isSeparatorVisible=this.isVertical&&a!==g.length-1}},methods:{getPTOptions:function(t){var r=t==="root"?this.ptmi:this.ptm;return r(t,{context:{active:this.active}})},updateValue:function(t){this.$pcStepper.updateValue(t)}},computed:{active:function(){var t,r,g=this.$pcStepItem?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value;return g===((r=this.$pcStepper)===null||r===void 0?void 0:r.d_value)},isVertical:function(){return!!this.$pcStepItem},activeValue:function(){var t;return this.isVertical?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value},id:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.$id,"_steppanel_").concat(this.activeValue)},ariaControls:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.$id,"_step_").concat(this.activeValue)},a11yAttrs:function(){return{id:this.id,role:"tabpanel","aria-controls":this.ariaControls,"data-pc-name":"steppanel","data-p-active":this.active}},dataP:function(){return we({vertical:this.$pcStepItem!=null})}},components:{StepperSeparator:xe}},ft=["data-p"];function ht(e,t,r,g,x,a){var c=_e("StepperSeparator");return a.isVertical?(p(),m(pe,{key:0},[e.asChild?A(e.$slots,"default",{key:1,active:a.active,a11yAttrs:a.a11yAttrs,activateCallback:function(v){return a.updateValue(v)}}):(p(),E(Le,k({key:0,name:"p-toggleable-content"},e.ptm("transition")),{default:$(function(){return[X((p(),E(le(e.as),k({id:a.id,class:e.cx("root"),role:"tabpanel","aria-controls":a.ariaControls,"data-p":a.dataP},a.getPTOptions("root")),{default:$(function(){return[x.isSeparatorVisible?(p(),E(c,{key:0,"data-p":a.dataP},null,8,["data-p"])):V("",!0),i("div",k({class:e.cx("content"),"data-p":a.dataP},a.getPTOptions("content")),[A(e.$slots,"default",{active:a.active,activateCallback:function(v){return a.updateValue(v)}})],16,ft)]}),_:3},16,["id","class","aria-controls","data-p"])),[[K,a.active]])]}),_:3},16))],64)):(p(),m(pe,{key:1},[e.asChild?e.asChild&&a.active?A(e.$slots,"default",{key:1,active:a.active,a11yAttrs:a.a11yAttrs,activateCallback:function(v){return a.updateValue(v)}}):V("",!0):X((p(),E(le(e.as),k({key:0,id:a.id,class:e.cx("root"),role:"tabpanel","aria-controls":a.ariaControls},a.getPTOptions("root")),{default:$(function(){return[A(e.$slots,"default",{active:a.active,activateCallback:function(v){return a.updateValue(v)}})]}),_:3},16,["id","class","aria-controls"])),[[K,a.active]])],64))}Ce.render=ht;var mt={root:function(t){var r=t.instance;return["p-step",{"p-step-active":r.active,"p-disabled":r.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},gt=G.extend({name:"step",classes:mt}),Ie={name:"StepperSeparator",hostName:"Stepper",extends:N,inject:{$pcStepper:{default:null}}};function bt(e,t,r,g,x,a){return p(),m("span",k({class:e.cx("separator")},e.ptmo(a.$pcStepper.pt,"separator")),null,16)}Ie.render=bt;var yt={name:"BaseStep",extends:N,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:gt,provide:function(){return{$pcStep:this,$parentInstance:this}}},Ve={name:"Step",extends:yt,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1,isCompleted:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var t=q(this.$el,L(this.$pcStepper.$el,'[data-pc-name="step"]')),r=q(oe(this.$pcStepper.$el,'[data-pc-name="step"][data-p-active="true"]'),L(this.$pcStepper.$el,'[data-pc-name="step"]')),g=L(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=t!==g-1,this.isCompleted=t<r}},updated:function(){var t=q(this.$el,L(this.$pcStepper.$el,'[data-pc-name="step"]')),r=q(oe(this.$pcStepper.$el,'[data-pc-name="step"][data-p-active="true"]'),L(this.$pcStepper.$el,'[data-pc-name="step"]'));this.isCompleted=t<r},methods:{getPTOptions:function(t){var r=t==="root"?this.ptmi:this.ptm;return r(t,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var t;return this.$pcStepItem?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.$id,"_step_").concat(this.activeValue)},ariaControls:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.$id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.isStepDisabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.isStepDisabled,onClick:this.onStepClick}}},dataP:function(){return we({disabled:this.isStepDisabled,readonly:this.$pcStepper.linear,active:this.active,completed:this.isCompleted,vertical:this.$pcStepItem!=null})}},components:{StepperSeparator:Ie}},St=["id","tabindex","aria-controls","disabled","data-p"],wt=["data-p"],_t=["data-p"];function $t(e,t,r,g,x,a){var c=_e("StepperSeparator");return e.asChild?A(e.$slots,"default",{key:1,class:Ne(e.cx("root")),active:a.active,value:e.value,a11yAttrs:a.a11yAttrs,activateCallback:a.onStepClick}):(p(),E(le(e.as),k({key:0,class:e.cx("root"),"aria-current":a.active?"step":void 0,role:"presentation","data-p-active":a.active,"data-p-disabled":a.isStepDisabled,"data-p":a.dataP},a.getPTOptions("root")),{default:$(function(){return[i("button",k({id:a.id,class:e.cx("header"),role:"tab",type:"button",tabindex:a.isStepDisabled?-1:void 0,"aria-controls":a.ariaControls,disabled:a.isStepDisabled,onClick:t[0]||(t[0]=function(){return a.onStepClick&&a.onStepClick.apply(a,arguments)}),"data-p":a.dataP},a.getPTOptions("header")),[i("span",k({class:e.cx("number"),"data-p":a.dataP},a.getPTOptions("number")),h(a.activeValue),17,wt),i("span",k({class:e.cx("title"),"data-p":a.dataP},a.getPTOptions("title")),[A(e.$slots,"default")],16,_t)],16,St),x.isSeparatorVisible?(p(),E(c,{key:0,"data-p":a.dataP},null,8,["data-p"])):V("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled","data-p"]))}Ve.render=$t;function kt(e){return new Worker("/assets/yolo.worker-BpO7FdSE.js",{name:e?.name})}const xt={class:"yolo-layout"},Ct={class:"intro"},It={class:"step-card"},Vt={class:"step-actions"},At={key:0,class:"step-hint success"},Pt={class:"step-card"},Dt={class:"step-actions"},Ot={key:0,class:"step-hint success"},Et={key:0,class:"download-progress"},Bt={class:"download-entry-header"},Tt={key:0},Mt={key:1},jt={key:2},zt={key:1,class:"control-panel"},Lt={class:"control-card"},Nt={class:"control-row"},Ft={class:"control-text"},Wt={class:"control-actions"},Ut={class:"control-row"},qt={class:"control-text"},Yt={class:"control-actions"},Rt={class:"video-stage"},Xt={class:"video-frame"},Kt={key:0,class:"spinner-overlay"},Gt={class:"video-placeholder"},Ht="my-app-cache-v1",Jt=Fe({__name:"YoloSegView",setup(e){const t=[{url:"https://huggingface.co/MikeLud/ObjectDetectionYOLO11-ONNX/resolve/main/yolo11s-seg.onnx",labelKey:"yolo.ai.download.files.weights"},{url:"https://huggingface.co/MikeLud/ObjectDetectionYOLO11-ONNX/resolve/main/yolo11s-seg.json",labelKey:"yolo.ai.download.files.labels"}],{setTitle:r,setIcon:g,resetAppBar:x}=We(),{showError:a}=Ue(),{t:c}=qe(),P=b("camera"),v=b("prompt"),T=b(!1),B=b(!1),H=b(t.map(n=>({...n,status:"idle",percentage:0}))),S=b(!1),C=b(!1),F=b(!1),ce=b(""),w=b(null),J=b(null),W=b(null),Z=b([]),M=b(null),de=Ye(()=>Z.value.length>1&&S.value);let _=null,D=null,U=!1,j=null,Q=null;Re(async()=>{r("yolo.title"),g("pi pi-camera"),j=new OffscreenCanvas(1,1),Q=j.getContext("2d"),await Ae(),await ve(),ue()}),Xe(()=>{Me()}),Ke([v,T],ue);function ue(){v.value!=="granted"?P.value="camera":T.value?P.value="live":P.value="model"}async function Ae(){if(!navigator.permissions?.query){v.value="prompt";return}try{const n=await navigator.permissions.query({name:"camera"});v.value=n.state,n.onchange=()=>{v.value=n.state,n.state!=="granted"&&fe(!1)}}catch{v.value="prompt"}}async function Pe(){try{(await navigator.mediaDevices.getUserMedia({video:!0})).getTracks().forEach(s=>s.stop()),v.value="granted"}catch(n){v.value="denied",a("yolo.camera.errors.title",n instanceof Error?n.message:String(n),!0)}}async function ve(){if("caches"in self)try{const n=await caches.open(Ht),s=await Promise.all(H.value.map(async l=>await n.match(l.url)?(l.status="done",l.percentage=100,!0):(l.status="idle",l.percentage=0,!1)));T.value=s.every(Boolean)}catch(n){console.warn("Could not check cache",n)}}async function De(){if(!B.value){B.value=!0;for(const n of H.value)if(n.status!=="done"){n.status="downloading",n.percentage=0;try{const s=await fetch(n.url);if(!s.ok)throw new Error(`Download failed (${s.status})`);const l=parseInt(s.headers.get("content-length")||"0",10);if(!s.body)n.percentage=100;else{const o=s.body.getReader();let d=0;for(;;){const{done:u,value:O}=await o.read();if(u)break;d+=O.length,l>0&&(n.percentage=Math.min(100,Math.round(d/l*100)))}n.percentage=100}n.status="done"}catch(s){n.status="error",B.value=!1,a("yolo.ai.errors.title",s instanceof Error?s.message:String(s),!0);return}}B.value=!1,await ve()}}async function fe(n){if(S.value!==n){if(S.value=n,!n){te(),C.value&&ee(!1);return}z(!0,"yolo.camera.start-camera");try{const s=await navigator.mediaDevices.getUserMedia({video:M.value?{deviceId:{exact:M.value}}:{facingMode:"environment"}});W.value=s;const l=s.getVideoTracks()[0];M.value=l.getSettings().deviceId??null,Z.value=await navigator.mediaDevices.enumerateDevices().then(o=>o.filter(d=>d.kind==="videoinput")),w.value&&(w.value.srcObject=s,await w.value.play()),C.value&&ne()}catch(s){S.value=!1,a("yolo.camera.errors.title",s instanceof Error?s.message:String(s),!0)}finally{z(!1)}}}async function ee(n){if(C.value!==n){if(C.value=n,!n){Y(),ge();return}if(!S.value){C.value=!1,a("yolo.ai.errors.title",c("yolo.camera.no-camera"),!0);return}z(!0,"yolo.ai.loading");try{await he(),ne()}catch(s){C.value=!1,a("yolo.ai.errors.title",s instanceof Error?s.message:String(s),!0)}finally{z(!1)}}}async function Oe(){if(!de.value)return;const n=Z.value,l=(n.findIndex(o=>o.deviceId===M.value)+1)%n.length;M.value=n[l].deviceId,z(!0,"yolo.camera.switchingCamera"),Y(),te(),C.value&&ae();try{const o=await navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:M.value}}});W.value=o,w.value&&(w.value.srcObject=o,await w.value.play()),S.value=!0,C.value&&(await he(),ne())}catch(o){S.value=!1,a("yolo.camera.errors.title",o instanceof Error?o.message:String(o),!0)}finally{z(!1)}}function te(){W.value&&(W.value.getTracks().forEach(n=>n.stop()),W.value=null),w.value&&(w.value.srcObject=null,w.value.pause()),Y(),ge()}function z(n,s=""){F.value=n,ce.value=s?c(s):""}async function he(){if(!_)return _=new kt,_.onmessage=Ee,_.onerror=me,new Promise((n,s)=>{const l=setTimeout(()=>s(new Error("Worker initialization timed out.")),1e4);_.addEventListener("message",o=>{o.data.type==="loaded"&&(clearTimeout(l),n())},{once:!0}),_.postMessage({type:"load",payload:{modelUrl:t[0].url,labelsUrl:t[1].url}})})}function Ee(n){const{type:s,payload:l}=n.data;switch(s){case"results":U=!1,Te(l);break;case"error":U=!1,me(new ErrorEvent("error",{message:l.message}));break}}function me(n){a("yolo.ai.errors.title",n.message,!0),ee(!1),ae()}function ae(){Y(),_&&(_.postMessage({type:"release"}),_.terminate(),_=null)}function ne(){D&&cancelAnimationFrame(D),D=requestAnimationFrame(async function n(){if(!S.value||!C.value){D=null;return}await Be(),D=requestAnimationFrame(n)})}function Y(){D&&(cancelAnimationFrame(D),D=null),U=!1}async function Be(){if(U||!_||!w.value)return;const n=w.value;if(n.paused||n.ended||n.videoWidth===0)return;U=!0;const s=await createImageBitmap(n),{width:l,height:o}=s,u=new OffscreenCanvas(l,o).getContext("2d");u.drawImage(s,0,0);const O=u.getImageData(0,0,l,o);s.close(),_.postMessage({type:"process",payload:O},[O.data.buffer])}function Te({masks:n,canvasWidth:s,canvasHeight:l}){const o=J.value;if(!o||!j||!Q)return;(o.width!==s||o.height!==l)&&(o.width=s,o.height=l);const d=o.getContext("2d");d.clearRect(0,0,o.width,o.height),d.font='600 15px "Inter", sans-serif',d.textBaseline="top";for(const u of n){const O=new ImageData(new Uint8ClampedArray(u.data),u.width,u.height);j.width=u.width,j.height=u.height,Q.putImageData(O,0,0),d.save(),d.globalAlpha=.6,d.drawImage(j,...u.maskBox,...u.box),d.restore(),d.strokeStyle=u.color,d.lineWidth=3,d.strokeRect(...u.box);const R=`${u.label} ${(u.score*100).toFixed(0)}%`,re=d.measureText(R).width+12,I=22,[je,ie]=u.box,be=je,ye=ie-I>=0?ie-I:ie;d.fillStyle="rgba(0, 0, 0, 0.7)",d.fillRect(be,ye,re,I),d.fillStyle=u.color,d.fillText(R,be+6,ye+4)}}function ge(){const n=J.value;if(!n)return;n.getContext("2d")?.clearRect(0,0,n.width,n.height)}function Me(){te(),ae(),x()}return(n,s)=>{const l=Ve,o=He,d=Ce,u=ke,O=Ze,R=$e,se=Ge,re=ze;return p(),m("div",xt,[i("section",Ct,[i("p",null,h(f(c)("yolo.ai.description")),1)]),P.value!=="live"?(p(),E(R,{key:0,value:P.value==="camera"?"1":"2",class:"setup-stepper"},{default:$(()=>[y(u,{value:"1"},{default:$(()=>[y(l,{disabled:v.value==="granted"},{default:$(()=>[Se(h(f(c)("yolo.camera.title")),1)]),_:1},8,["disabled"]),y(d,null,{default:$(()=>[i("div",It,[i("h3",null,h(f(c)("yolo.camera.access.title")),1),i("p",null,h(f(c)("yolo.camera.access.description")),1),i("div",Vt,[y(o,{icon:"pi pi-lock-open",label:f(c)("yolo.camera.access.cta"),disabled:v.value==="granted",onClick:Pe},null,8,["label","disabled"]),v.value==="granted"?(p(),m("small",At,h(f(c)("yolo.camera.access.hint")),1)):V("",!0)])])]),_:1})]),_:1}),y(u,{value:"2"},{default:$(()=>[y(l,{disabled:v.value!=="granted"},{default:$(()=>[Se(h(f(c)("yolo.ai.segmentation")),1)]),_:1},8,["disabled"]),y(d,null,{default:$(()=>[i("div",Pt,[i("h3",null,h(f(c)("yolo.ai.download.title")),1),i("p",null,h(f(c)("yolo.ai.download.description")),1),i("div",Dt,[y(o,{icon:"pi pi-download",label:f(c)("yolo.ai.download.cta"),disabled:T.value||B.value||v.value!=="granted",loading:B.value,onClick:De},null,8,["label","disabled","loading"]),T.value?(p(),m("small",Ot,h(f(c)("yolo.ai.download.hint")),1)):V("",!0)]),B.value||!T.value?(p(),m("div",Et,[(p(!0),m(pe,null,Je(H.value,I=>(p(),m("div",{key:I.url,class:"download-entry"},[i("div",Bt,[i("span",null,h(f(c)(I.labelKey)),1),I.status==="done"?(p(),m("span",Tt,h(f(c)("yolo.ai.download.progress.ready")),1)):I.status==="error"?(p(),m("span",Mt,h(f(c)("yolo.ai.download.progress.retry")),1)):(p(),m("span",jt,h(I.percentage)+"%",1))]),y(O,{value:I.percentage,showValue:!1},null,8,["value"])]))),128))])):V("",!0)])]),_:1})]),_:1}),y(u,{value:"3",style:{display:"none"}},{default:$(()=>[y(l)]),_:1})]),_:1},8,["value"])):(p(),m("section",zt,[i("div",Lt,[i("div",Nt,[i("div",Ft,[i("h3",null,h(f(c)("yolo.camera.title")),1)]),i("div",Wt,[de.value?(p(),E(o,{key:0,icon:"pi pi-refresh",label:f(c)("yolo.camera.switch-camera"),size:"small",severity:"secondary",loading:F.value,onClick:Oe},null,8,["label","loading"])):V("",!0),y(se,{modelValue:S.value,disabled:F.value,"onUpdate:modelValue":fe},null,8,["modelValue","disabled"])])]),i("div",Ut,[i("div",qt,[i("h3",null,h(f(c)("yolo.ai.segmentation")),1)]),i("div",Yt,[y(se,{modelValue:C.value,disabled:!S.value||F.value,"onUpdate:modelValue":ee},null,8,["modelValue","disabled"])])])])])),i("section",Rt,[X(i("div",Xt,[i("video",{ref_key:"videoElement",ref:w,autoplay:"",playsinline:"",muted:""},null,512),i("canvas",{ref_key:"canvasElement",ref:J},null,512),F.value?(p(),m("div",Kt,[y(re,{strokeWidth:"4"}),i("span",null,h(ce.value),1)])):V("",!0)],512),[[K,S.value]]),X(i("div",Gt,[s[0]||(s[0]=i("i",{class:"pi pi-camera"},null,-1)),i("p",null,h(f(c)("yolo.camera.placeholder")),1)],512),[[K,!S.value]])])])}}}),ea=Qe(Jt,[["__scopeId","data-v-d0d3f9ee"]]);export{ea as default};
