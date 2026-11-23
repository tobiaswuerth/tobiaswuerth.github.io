import{s as We}from"./index-DsgTSs9-.js";import{B as Z,c as w,o as d,d as I,e as P,m as C,ab as B,f as ke,ac as L,ad as oe,ae as Y,a4 as Ce,K as O,F as b,w as G,a3 as le,b as i,af as Q,ag as Ue,H as pe,t as y,n as Ye,p as qe,C as Re,D as He,O as Xe,g as S,q as Ke,x as Ge,y as Qe,Y as Ze,z as m,E as g,ah as Je,L as et,M as _e,G as tt,I as at,ai as nt,_ as rt}from"./main-Daw-ubsz.js";import{r as st}from"./utils-32wYNSW4.js";var it=`
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
`,ot={root:function(t){var r=t.props;return["p-stepper p-component",{"p-readonly":r.linear}]},separator:"p-stepper-separator"},lt=Z.extend({name:"stepper",style:it,classes:ot}),pt={name:"BaseStepper",extends:B,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:lt,provide:function(){return{$pcStepper:this,$parentInstance:this}}},xe={name:"Stepper",extends:pt,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t}},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isStepActive:function(t){return this.d_value===t},isStepDisabled:function(){return this.linear}}};function ct(e,t,r,o,p,a){return d(),w("div",C({class:e.cx("root"),role:"tablist"},e.ptmi("root")),[e.$slots.start?I(e.$slots,"start",{key:0}):P("",!0),I(e.$slots,"default"),e.$slots.end?I(e.$slots,"end",{key:1}):P("",!0)],16)}xe.render=ct;var dt={root:function(t){var r=t.instance;return["p-stepitem",{"p-stepitem-active":r.isActive}]}},ut=Z.extend({name:"stepitem",classes:dt}),vt={name:"BaseStepItem",extends:B,props:{value:{type:[String,Number],default:void 0}},style:ut,provide:function(){return{$pcStepItem:this,$parentInstance:this}}},Ie={name:"StepItem",extends:vt,inheritAttrs:!1,inject:["$pcStepper"],computed:{isActive:function(){var t;return((t=this.$pcStepper)===null||t===void 0?void 0:t.d_value)===this.value}}},ft=["data-p-active"];function ht(e,t,r,o,p,a){return d(),w("div",C({class:e.cx("root"),"data-p-active":a.isActive},e.ptmi("root")),[I(e.$slots,"default")],16,ft)}Ie.render=ht;var mt={root:function(t){var r=t.instance;return["p-steppanel",{"p-steppanel-active":r.isVertical&&r.active}]},content:"p-steppanel-content"},gt=Z.extend({name:"steppanel",classes:mt}),Ve={name:"StepperSeparator",hostName:"Stepper",extends:B,inject:{$pcStepper:{default:null}}};function yt(e,t,r,o,p,a){return d(),w("span",C({class:e.cx("separator")},e.ptmo(a.$pcStepper.pt,"separator")),null,16)}Ve.render=yt;var bt={name:"BaseStepPanel",extends:B,props:{value:{type:[String,Number],default:void 0},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:gt,provide:function(){return{$pcStepPanel:this,$parentInstance:this}}},De={name:"StepPanel",extends:bt,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepItem:{default:null},$pcStepList:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el){var t,r,o=L(this.$pcStepper.$el,'[data-pc-name="step"]'),p=oe(this.isVertical?(t=this.$pcStepItem)===null||t===void 0?void 0:t.$el:(r=this.$pcStepList)===null||r===void 0?void 0:r.$el,'[data-pc-name="step"]'),a=Y(p,o);this.isSeparatorVisible=this.isVertical&&a!==o.length-1}},methods:{getPTOptions:function(t){var r=t==="root"?this.ptmi:this.ptm;return r(t,{context:{active:this.active}})},updateValue:function(t){this.$pcStepper.updateValue(t)}},computed:{active:function(){var t,r,o=this.$pcStepItem?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value;return o===((r=this.$pcStepper)===null||r===void 0?void 0:r.d_value)},isVertical:function(){return!!this.$pcStepItem},activeValue:function(){var t;return this.isVertical?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value},id:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.$id,"_steppanel_").concat(this.activeValue)},ariaControls:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.$id,"_step_").concat(this.activeValue)},a11yAttrs:function(){return{id:this.id,role:"tabpanel","aria-controls":this.ariaControls,"data-pc-name":"steppanel","data-p-active":this.active}},dataP:function(){return ke({vertical:this.$pcStepItem!=null})}},components:{StepperSeparator:Ve}},St=["data-p"];function wt(e,t,r,o,p,a){var _=Ce("StepperSeparator");return a.isVertical?(d(),w(pe,{key:0},[e.asChild?I(e.$slots,"default",{key:1,active:a.active,a11yAttrs:a.a11yAttrs,activateCallback:function(v){return a.updateValue(v)}}):(d(),O(Ue,C({key:0,name:"p-toggleable-content"},e.ptm("transition")),{default:b(function(){return[G((d(),O(le(e.as),C({id:a.id,class:e.cx("root"),role:"tabpanel","aria-controls":a.ariaControls,"data-p":a.dataP},a.getPTOptions("root")),{default:b(function(){return[p.isSeparatorVisible?(d(),O(_,{key:0,"data-p":a.dataP},null,8,["data-p"])):P("",!0),i("div",C({class:e.cx("content"),"data-p":a.dataP},a.getPTOptions("content")),[I(e.$slots,"default",{active:a.active,activateCallback:function(v){return a.updateValue(v)}})],16,St)]}),_:3},16,["id","class","aria-controls","data-p"])),[[Q,a.active]])]}),_:3},16))],64)):(d(),w(pe,{key:1},[e.asChild?e.asChild&&a.active?I(e.$slots,"default",{key:1,active:a.active,a11yAttrs:a.a11yAttrs,activateCallback:function(v){return a.updateValue(v)}}):P("",!0):G((d(),O(le(e.as),C({key:0,id:a.id,class:e.cx("root"),role:"tabpanel","aria-controls":a.ariaControls},a.getPTOptions("root")),{default:b(function(){return[I(e.$slots,"default",{active:a.active,activateCallback:function(v){return a.updateValue(v)}})]}),_:3},16,["id","class","aria-controls"])),[[Q,a.active]])],64))}De.render=wt;var _t={root:function(t){var r=t.instance;return["p-step",{"p-step-active":r.active,"p-disabled":r.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},$t=Z.extend({name:"step",classes:_t}),Ae={name:"StepperSeparator",hostName:"Stepper",extends:B,inject:{$pcStepper:{default:null}}};function kt(e,t,r,o,p,a){return d(),w("span",C({class:e.cx("separator")},e.ptmo(a.$pcStepper.pt,"separator")),null,16)}Ae.render=kt;var Ct={name:"BaseStep",extends:B,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:$t,provide:function(){return{$pcStep:this,$parentInstance:this}}},Oe={name:"Step",extends:Ct,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1,isCompleted:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var t=Y(this.$el,L(this.$pcStepper.$el,'[data-pc-name="step"]')),r=Y(oe(this.$pcStepper.$el,'[data-pc-name="step"][data-p-active="true"]'),L(this.$pcStepper.$el,'[data-pc-name="step"]')),o=L(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=t!==o-1,this.isCompleted=t<r}},updated:function(){var t=Y(this.$el,L(this.$pcStepper.$el,'[data-pc-name="step"]')),r=Y(oe(this.$pcStepper.$el,'[data-pc-name="step"][data-p-active="true"]'),L(this.$pcStepper.$el,'[data-pc-name="step"]'));this.isCompleted=t<r},methods:{getPTOptions:function(t){var r=t==="root"?this.ptmi:this.ptm;return r(t,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var t;return this.$pcStepItem?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.$id,"_step_").concat(this.activeValue)},ariaControls:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.$id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.isStepDisabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.isStepDisabled,onClick:this.onStepClick}}},dataP:function(){return ke({disabled:this.isStepDisabled,readonly:this.$pcStepper.linear,active:this.active,completed:this.isCompleted,vertical:this.$pcStepItem!=null})}},components:{StepperSeparator:Ae}},xt=["id","tabindex","aria-controls","disabled","data-p"],It=["data-p"],Vt=["data-p"];function Dt(e,t,r,o,p,a){var _=Ce("StepperSeparator");return e.asChild?I(e.$slots,"default",{key:1,class:Ye(e.cx("root")),active:a.active,value:e.value,a11yAttrs:a.a11yAttrs,activateCallback:a.onStepClick}):(d(),O(le(e.as),C({key:0,class:e.cx("root"),"aria-current":a.active?"step":void 0,role:"presentation","data-p-active":a.active,"data-p-disabled":a.isStepDisabled,"data-p":a.dataP},a.getPTOptions("root")),{default:b(function(){return[i("button",C({id:a.id,class:e.cx("header"),role:"tab",type:"button",tabindex:a.isStepDisabled?-1:void 0,"aria-controls":a.ariaControls,disabled:a.isStepDisabled,onClick:t[0]||(t[0]=function(){return a.onStepClick&&a.onStepClick.apply(a,arguments)}),"data-p":a.dataP},a.getPTOptions("header")),[i("span",C({class:e.cx("number"),"data-p":a.dataP},a.getPTOptions("number")),y(a.activeValue),17,It),i("span",C({class:e.cx("title"),"data-p":a.dataP},a.getPTOptions("title")),[I(e.$slots,"default")],16,Vt)],16,xt),p.isSeparatorVisible?(d(),O(_,{key:0,"data-p":a.dataP},null,8,["data-p"])):P("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled","data-p"]))}Oe.render=Dt;function At(e){return new Worker("/assets/yolo.worker-B1p-FkQ2.js",{name:e?.name})}function Ot(e,t,r){return new Promise((o,p)=>{const a=v=>{clearTimeout(f),e.removeEventListener("message",_),v?p(v):o()},_=v=>{v.data?.type===t?a():v.data?.type==="error"&&a(new Error(String(v.data.payload?.message)))},f=setTimeout(()=>a(new Error(`The worker did not answer within ${r/1e3} s`)),r);e.addEventListener("message",_)})}const Pt=640;function Et(e,t,r){const o=Math.min(r/e,r/t),p=e*o,a=t*o;return{scale:o,width:p,height:a,offsetX:(r-p)/2,offsetY:(r-a)/2}}const $e="yolo-model-v1",Pe=[{url:"https://huggingface.co/MikeLud/ObjectDetectionYOLO11-ONNX/resolve/main/yolo11s-seg.onnx",labelKey:"yolo.ai.download.files.weights"},{url:"https://huggingface.co/MikeLud/ObjectDetectionYOLO11-ONNX/resolve/main/yolo11s-seg.json",labelKey:"yolo.ai.download.files.labels"}],[Mt,Tt]=Pe;async function Lt(e,t){return await e.match(t)!==void 0}async function Bt(e,t,r){const o=await fetch(t);if(!o.ok)throw new Error(`Download failed (${o.status})`);const p=await st(o,r),a=o.headers.get("content-type")??"application/octet-stream";await e.put(t,new Response(p,{headers:{"Content-Type":a}}))}const Ft={class:"yolo-layout"},jt={class:"intro"},Nt={class:"download-progress"},zt={class:"download-entry-header"},Wt={key:0},Ut={key:1},Yt={key:2},qt={key:1,class:"control-panel"},Rt={class:"control-card"},Ht={class:"control-row"},Xt={class:"control-text"},Kt={id:"yolo-camera-switch"},Gt={class:"control-actions"},Qt={class:"control-row"},Zt={class:"control-text"},Jt={id:"yolo-segmentation-switch"},ea={class:"control-actions"},ta={class:"video-stage"},aa={class:"video-frame"},na={key:0,class:"spinner-overlay"},ra={class:"video-placeholder"},sa=6e4,ia=qe({__name:"YoloSegView",setup(e){const{setTitle:t,setIcon:r,resetAppBar:o}=Re(),{showError:p}=He(),{t:a}=Xe(),_=S("camera"),f=S("prompt"),v=S(!1),F=S(!1),q=S(Pe.map(n=>({...n,status:"idle",percentage:0}))),$=S(!1),x=S(!1),j=S(!1),ce=S(""),k=S(null),J=S(null),N=S(null),ee=S([]),E=S(null),de=Ke(()=>ee.value.length>1&&$.value);let V=null,D=null,z=!1,M=null,te=null;Ge(async()=>{t("yolo.title"),r("pi pi-camera"),M=new OffscreenCanvas(1,1),te=M.getContext("2d"),await Ee(),await fe(),ue()}),Qe(()=>{ze()}),Ze([f,v],ue);function ue(){f.value!=="granted"?_.value="camera":v.value?_.value="live":_.value="model"}async function Ee(){if(!navigator.permissions?.query){f.value="prompt";return}try{const n=await navigator.permissions.query({name:"camera"});f.value=n.state,n.onchange=()=>{f.value=n.state,n.state!=="granted"&&he(!1)}}catch{f.value="prompt"}}function Me(){return window.isSecureContext&&navigator.mediaDevices!==void 0}function ae(n){console.error("Camera failed:",n),n instanceof DOMException&&n.name==="NotAllowedError"?p("yolo.camera.errors.title","yolo.camera.errors.permissionDenied",!0):p("yolo.camera.errors.title","yolo.camera.errors.startFailed",!0)}function ve(n){console.error("Segmentation failed:",n),p("yolo.ai.errors.title","yolo.ai.errors.runFailed",!0)}async function Te(){if(!Me()){p("yolo.camera.errors.title","yolo.camera.errors.apiUnavailable",!0);return}try{(await navigator.mediaDevices.getUserMedia({video:!0})).getTracks().forEach(s=>s.stop()),f.value="granted"}catch(n){f.value="denied",ae(n)}}async function fe(){if("caches"in self)try{const n=await caches.open($e);for(const s of q.value){const u=await Lt(n,s.url);s.status=u?"done":"idle",s.percentage=u?100:0}v.value=q.value.every(s=>s.status==="done")}catch(n){console.warn("Could not check the model cache",n)}}async function Le(){if(!F.value){F.value=!0;for(const n of q.value)if(n.status!=="done"){n.status="downloading",n.percentage=0;try{const s=await caches.open($e);await Bt(s,n.url,u=>n.percentage=u),n.status="done"}catch(s){n.status="error",F.value=!1,console.error("Model download failed:",s),p("yolo.ai.errors.title","yolo.ai.errors.downloadFailed",!0);return}}F.value=!1,await fe()}}async function he(n){if($.value!==n){if($.value=n,!n){re(),x.value&&ne(!1);return}T(!0,"yolo.camera.start-camera");try{const s=await navigator.mediaDevices.getUserMedia({video:E.value?{deviceId:{exact:E.value}}:{facingMode:"environment"}});N.value=s;const u=s.getVideoTracks()[0];E.value=u.getSettings().deviceId??null,ee.value=await navigator.mediaDevices.enumerateDevices().then(l=>l.filter(c=>c.kind==="videoinput")),k.value&&(k.value.srcObject=s,await k.value.play()),x.value&&se()}catch(s){$.value=!1,ae(s)}finally{T(!1)}}}async function ne(n){if(x.value!==n){if(x.value=n,!n){H(),ye();return}if(!$.value){x.value=!1,p("yolo.ai.errors.title","yolo.ai.errors.cameraOff",!0);return}T(!0,"yolo.ai.loading");try{await me(),se()}catch(s){x.value=!1,ve(s)}finally{T(!1)}}}async function Be(){if(!de.value)return;const n=ee.value,u=(n.findIndex(l=>l.deviceId===E.value)+1)%n.length;E.value=n[u].deviceId,T(!0,"yolo.camera.switchingCamera"),H(),re(),x.value&&R();try{const l=await navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:E.value}}});N.value=l,k.value&&(k.value.srcObject=l,await k.value.play()),$.value=!0,x.value&&(await me(),se())}catch(l){$.value=!1,ae(l)}finally{T(!1)}}function re(){N.value&&(N.value.getTracks().forEach(n=>n.stop()),N.value=null),k.value&&(k.value.srcObject=null,k.value.pause()),H(),ye()}function T(n,s=""){j.value=n,ce.value=s?a(s):""}async function me(){if(V)return;const n=new At;V=n;try{const s=Ot(n,"loaded",sa);n.postMessage({type:"load",payload:{modelUrl:Mt.url,labelsUrl:Tt.url}}),await s,n.onmessage=Fe,n.onerror=ge}catch(s){throw R(),s}}function Fe(n){const{type:s,payload:u}=n.data;switch(s){case"results":z=!1,Ne(u);break;case"error":z=!1,ge(new ErrorEvent("error",{message:u.message}));break}}function ge(n){ve(n.message),ne(!1),R()}function R(){H(),V&&(V.postMessage({type:"release"}),V.terminate(),V=null)}function se(){D&&cancelAnimationFrame(D),D=requestAnimationFrame(async function n(){if(!$.value||!x.value){D=null;return}await je(),D=requestAnimationFrame(n)})}function H(){D&&(cancelAnimationFrame(D),D=null),z=!1}async function je(){if(z||!V||!k.value)return;const n=k.value;if(n.paused||n.ended||n.videoWidth===0)return;z=!0;const s=n.videoWidth,u=n.videoHeight,l=Et(s,u,Pt),c=await createImageBitmap(n,{resizeWidth:Math.round(l.width),resizeHeight:Math.round(l.height),resizeQuality:"medium"});V.postMessage({type:"process",payload:{bitmap:c,sourceWidth:s,sourceHeight:u}},[c])}function Ne({masks:n,canvasWidth:s,canvasHeight:u}){const l=J.value;if(!l||!M||!te)return;(l.width!==s||l.height!==u)&&(l.width=s,l.height=u);const c=l.getContext("2d");c.clearRect(0,0,l.width,l.height),c.font='600 15px "Inter", sans-serif',c.textBaseline="top";for(const h of n){const W=new ImageData(new Uint8ClampedArray(h.data),h.width,h.height);M.width=h.width,M.height=h.height,te.putImageData(W,0,0),c.save(),c.globalAlpha=.6,c.drawImage(M,...h.maskBox,...h.box),c.restore(),c.strokeStyle=h.color,c.lineWidth=3,c.strokeRect(...h.box);const X=`${h.label} ${(h.score*100).toFixed(0)}%`,K=c.measureText(X).width+12,U=22,[A,ie]=h.box,Se=A,we=ie-U>=0?ie-U:ie;c.fillStyle="rgba(0, 0, 0, 0.7)",c.fillRect(Se,we,K,U),c.fillStyle=h.color,c.fillText(X,Se+6,we+4)}}function ye(){const n=J.value;if(!n)return;n.getContext("2d")?.clearRect(0,0,n.width,n.height)}function ze(){re(),R(),o()}return(n,s)=>{const u=Oe,l=et,c=tt,h=De,W=Ie,X=nt,be=xe,K=Je,U=We;return d(),w("div",Ft,[i("section",jt,[i("p",null,y(m(a)("yolo.ai.description")),1)]),_.value!=="live"?(d(),O(be,{key:0,value:_.value==="camera"?"1":"2",class:"setup-stepper"},{default:b(()=>[g(W,{value:"1"},{default:b(()=>[g(u,{disabled:f.value==="granted"},{default:b(()=>[_e(y(m(a)("yolo.camera.title")),1)]),_:1},8,["disabled"]),g(h,null,{default:b(()=>[g(c,null,{content:b(()=>[i("h3",null,y(m(a)("yolo.camera.access.title")),1),i("p",null,y(m(a)("yolo.camera.access.description")),1)]),footer:b(()=>[g(l,{icon:"pi pi-lock-open",label:m(a)("yolo.camera.access.cta"),onClick:Te},null,8,["label"])]),_:1})]),_:1})]),_:1}),g(W,{value:"2"},{default:b(()=>[g(u,{disabled:f.value!=="granted"},{default:b(()=>[_e(y(m(a)("yolo.ai.segmentation")),1)]),_:1},8,["disabled"]),g(h,null,{default:b(()=>[g(c,null,{content:b(()=>[i("h3",null,y(m(a)("yolo.ai.download.title")),1),i("p",null,y(m(a)("yolo.ai.download.description")),1)]),footer:b(()=>[g(l,{icon:"pi pi-download",disabled:v.value||F.value,label:m(a)("yolo.ai.download.cta"),onClick:Le},null,8,["disabled","label"]),i("div",Nt,[(d(!0),w(pe,null,at(q.value,A=>(d(),w("div",{key:A.url,class:"download-entry"},[i("div",zt,[i("span",null,y(m(a)(A.labelKey)),1),A.status==="done"?(d(),w("span",Wt,y(m(a)("yolo.ai.download.progress.ready")),1)):A.status==="error"?(d(),w("span",Ut,y(m(a)("yolo.ai.download.progress.retry")),1)):(d(),w("span",Yt,y(A.percentage)+"%",1))]),g(X,{value:A.percentage,showValue:!1},null,8,["value"])]))),128))])]),_:1})]),_:1})]),_:1}),g(W,{value:"3",style:{display:"none"}},{default:b(()=>[g(u)]),_:1})]),_:1},8,["value"])):(d(),w("section",qt,[i("div",Rt,[i("div",Ht,[i("div",Xt,[i("h3",Kt,y(m(a)("yolo.camera.title")),1)]),i("div",Gt,[de.value?(d(),O(l,{key:0,icon:"pi pi-refresh",label:m(a)("yolo.camera.switch-camera"),size:"small",severity:"secondary",loading:j.value,onClick:Be},null,8,["label","loading"])):P("",!0),g(K,{"aria-labelledby":"yolo-camera-switch",modelValue:$.value,disabled:j.value,"onUpdate:modelValue":he},null,8,["modelValue","disabled"])])]),i("div",Qt,[i("div",Zt,[i("h3",Jt,y(m(a)("yolo.ai.segmentation")),1)]),i("div",ea,[g(K,{"aria-labelledby":"yolo-segmentation-switch",modelValue:x.value,disabled:!$.value||j.value,"onUpdate:modelValue":ne},null,8,["modelValue","disabled"])])])])])),i("section",ta,[G(i("div",aa,[i("video",{ref_key:"videoElement",ref:k,autoplay:"",playsinline:"",muted:""},null,512),i("canvas",{ref_key:"canvasElement",ref:J},null,512),j.value?(d(),w("div",na,[g(U,{strokeWidth:"4"}),i("span",null,y(ce.value),1)])):P("",!0)],512),[[Q,$.value]]),G(i("div",ra,[s[0]||(s[0]=i("i",{class:"pi pi-camera","aria-hidden":"true"},null,-1)),i("p",null,y(m(a)("yolo.camera.placeholder")),1)],512),[[Q,!$.value]])])])}}}),ca=rt(ia,[["__scopeId","data-v-67ae49b4"]]);export{ca as default};
