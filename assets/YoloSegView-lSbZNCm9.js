import{s as ze}from"./index-7NkZXzGG.js";import{B as J,c as S,o as d,d as V,e as E,m as k,O as z,f as $e,Y as j,P as oe,S as q,U as _e,D as O,x as g,w as G,W as le,b as o,X as H,Z as Le,F as pe,t as h,n as Ne,g as Fe,l as We,p as Ue,J as qe,h as y,i as Ye,j as Re,k as Xe,q as Ke,C as f,v as m,a0 as Ge,E as He,G as we,y as Je,z as Ze,a1 as Qe,_ as et}from"./main-ByOuYFqi.js";var tt=`
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
`,at={root:function(t){var r=t.props;return["p-stepper p-component",{"p-readonly":r.linear}]},separator:"p-stepper-separator"},nt=J.extend({name:"stepper",style:tt,classes:at}),st={name:"BaseStepper",extends:z,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:nt,provide:function(){return{$pcStepper:this,$parentInstance:this}}},ke={name:"Stepper",extends:st,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t}},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isStepActive:function(t){return this.d_value===t},isStepDisabled:function(){return this.linear}}};function rt(e,t,r,b,C,a){return d(),S("div",k({class:e.cx("root"),role:"tablist"},e.ptmi("root")),[e.$slots.start?V(e.$slots,"start",{key:0}):E("",!0),V(e.$slots,"default"),e.$slots.end?V(e.$slots,"end",{key:1}):E("",!0)],16)}ke.render=rt;var it={root:function(t){var r=t.instance;return["p-stepitem",{"p-stepitem-active":r.isActive}]}},ot=J.extend({name:"stepitem",classes:it}),lt={name:"BaseStepItem",extends:z,props:{value:{type:[String,Number],default:void 0}},style:ot,provide:function(){return{$pcStepItem:this,$parentInstance:this}}},Ce={name:"StepItem",extends:lt,inheritAttrs:!1,inject:["$pcStepper"],computed:{isActive:function(){var t;return((t=this.$pcStepper)===null||t===void 0?void 0:t.d_value)===this.value}}},pt=["data-p-active"];function ct(e,t,r,b,C,a){return d(),S("div",k({class:e.cx("root"),"data-p-active":a.isActive},e.ptmi("root")),[V(e.$slots,"default")],16,pt)}Ce.render=ct;var dt={root:function(t){var r=t.instance;return["p-steppanel",{"p-steppanel-active":r.isVertical&&r.active}]},content:"p-steppanel-content"},ut=J.extend({name:"steppanel",classes:dt}),xe={name:"StepperSeparator",hostName:"Stepper",extends:z,inject:{$pcStepper:{default:null}}};function vt(e,t,r,b,C,a){return d(),S("span",k({class:e.cx("separator")},e.ptmo(a.$pcStepper.pt,"separator")),null,16)}xe.render=vt;var ft={name:"BaseStepPanel",extends:z,props:{value:{type:[String,Number],default:void 0},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:ut,provide:function(){return{$pcStepPanel:this,$parentInstance:this}}},Ie={name:"StepPanel",extends:ft,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepItem:{default:null},$pcStepList:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el){var t,r,b=j(this.$pcStepper.$el,'[data-pc-name="step"]'),C=oe(this.isVertical?(t=this.$pcStepItem)===null||t===void 0?void 0:t.$el:(r=this.$pcStepList)===null||r===void 0?void 0:r.$el,'[data-pc-name="step"]'),a=q(C,b);this.isSeparatorVisible=this.isVertical&&a!==b.length-1}},methods:{getPTOptions:function(t){var r=t==="root"?this.ptmi:this.ptm;return r(t,{context:{active:this.active}})},updateValue:function(t){this.$pcStepper.updateValue(t)}},computed:{active:function(){var t,r,b=this.$pcStepItem?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value;return b===((r=this.$pcStepper)===null||r===void 0?void 0:r.d_value)},isVertical:function(){return!!this.$pcStepItem},activeValue:function(){var t;return this.isVertical?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value},id:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.$id,"_steppanel_").concat(this.activeValue)},ariaControls:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.$id,"_step_").concat(this.activeValue)},a11yAttrs:function(){return{id:this.id,role:"tabpanel","aria-controls":this.ariaControls,"data-pc-name":"steppanel","data-p-active":this.active}},dataP:function(){return $e({vertical:this.$pcStepItem!=null})}},components:{StepperSeparator:xe}},mt=["data-p"];function ht(e,t,r,b,C,a){var c=_e("StepperSeparator");return a.isVertical?(d(),S(pe,{key:0},[e.asChild?V(e.$slots,"default",{key:1,active:a.active,a11yAttrs:a.a11yAttrs,activateCallback:function(v){return a.updateValue(v)}}):(d(),O(Le,k({key:0,name:"p-toggleable-content"},e.ptm("transition")),{default:g(function(){return[G((d(),O(le(e.as),k({id:a.id,class:e.cx("root"),role:"tabpanel","aria-controls":a.ariaControls,"data-p":a.dataP},a.getPTOptions("root")),{default:g(function(){return[C.isSeparatorVisible?(d(),O(c,{key:0,"data-p":a.dataP},null,8,["data-p"])):E("",!0),o("div",k({class:e.cx("content"),"data-p":a.dataP},a.getPTOptions("content")),[V(e.$slots,"default",{active:a.active,activateCallback:function(v){return a.updateValue(v)}})],16,mt)]}),_:3},16,["id","class","aria-controls","data-p"])),[[H,a.active]])]}),_:3},16))],64)):(d(),S(pe,{key:1},[e.asChild?e.asChild&&a.active?V(e.$slots,"default",{key:1,active:a.active,a11yAttrs:a.a11yAttrs,activateCallback:function(v){return a.updateValue(v)}}):E("",!0):G((d(),O(le(e.as),k({key:0,id:a.id,class:e.cx("root"),role:"tabpanel","aria-controls":a.ariaControls},a.getPTOptions("root")),{default:g(function(){return[V(e.$slots,"default",{active:a.active,activateCallback:function(v){return a.updateValue(v)}})]}),_:3},16,["id","class","aria-controls"])),[[H,a.active]])],64))}Ie.render=ht;var gt={root:function(t){var r=t.instance;return["p-step",{"p-step-active":r.active,"p-disabled":r.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},bt=J.extend({name:"step",classes:gt}),Ve={name:"StepperSeparator",hostName:"Stepper",extends:z,inject:{$pcStepper:{default:null}}};function yt(e,t,r,b,C,a){return d(),S("span",k({class:e.cx("separator")},e.ptmo(a.$pcStepper.pt,"separator")),null,16)}Ve.render=yt;var St={name:"BaseStep",extends:z,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:bt,provide:function(){return{$pcStep:this,$parentInstance:this}}},Ae={name:"Step",extends:St,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1,isCompleted:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var t=q(this.$el,j(this.$pcStepper.$el,'[data-pc-name="step"]')),r=q(oe(this.$pcStepper.$el,'[data-pc-name="step"][data-p-active="true"]'),j(this.$pcStepper.$el,'[data-pc-name="step"]')),b=j(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=t!==b-1,this.isCompleted=t<r}},updated:function(){var t=q(this.$el,j(this.$pcStepper.$el,'[data-pc-name="step"]')),r=q(oe(this.$pcStepper.$el,'[data-pc-name="step"][data-p-active="true"]'),j(this.$pcStepper.$el,'[data-pc-name="step"]'));this.isCompleted=t<r},methods:{getPTOptions:function(t){var r=t==="root"?this.ptmi:this.ptm;return r(t,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var t;return this.$pcStepItem?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.$id,"_step_").concat(this.activeValue)},ariaControls:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.$id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.isStepDisabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.isStepDisabled,onClick:this.onStepClick}}},dataP:function(){return $e({disabled:this.isStepDisabled,readonly:this.$pcStepper.linear,active:this.active,completed:this.isCompleted,vertical:this.$pcStepItem!=null})}},components:{StepperSeparator:Ve}},wt=["id","tabindex","aria-controls","disabled","data-p"],$t=["data-p"],_t=["data-p"];function kt(e,t,r,b,C,a){var c=_e("StepperSeparator");return e.asChild?V(e.$slots,"default",{key:1,class:Ne(e.cx("root")),active:a.active,value:e.value,a11yAttrs:a.a11yAttrs,activateCallback:a.onStepClick}):(d(),O(le(e.as),k({key:0,class:e.cx("root"),"aria-current":a.active?"step":void 0,role:"presentation","data-p-active":a.active,"data-p-disabled":a.isStepDisabled,"data-p":a.dataP},a.getPTOptions("root")),{default:g(function(){return[o("button",k({id:a.id,class:e.cx("header"),role:"tab",type:"button",tabindex:a.isStepDisabled?-1:void 0,"aria-controls":a.ariaControls,disabled:a.isStepDisabled,onClick:t[0]||(t[0]=function(){return a.onStepClick&&a.onStepClick.apply(a,arguments)}),"data-p":a.dataP},a.getPTOptions("header")),[o("span",k({class:e.cx("number"),"data-p":a.dataP},a.getPTOptions("number")),h(a.activeValue),17,$t),o("span",k({class:e.cx("title"),"data-p":a.dataP},a.getPTOptions("title")),[V(e.$slots,"default")],16,_t)],16,wt),C.isSeparatorVisible?(d(),O(c,{key:0,"data-p":a.dataP},null,8,["data-p"])):E("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled","data-p"]))}Ae.render=kt;function Ct(e){return new Worker("/assets/yolo.worker-BpO7FdSE.js",{name:e?.name})}const xt={class:"yolo-layout"},It={class:"intro"},Vt={class:"download-progress"},At={class:"download-entry-header"},Pt={key:0},Dt={key:1},Ot={key:2},Et={key:1,class:"control-panel"},Bt={class:"control-card"},Tt={class:"control-row"},Mt={class:"control-text"},jt={class:"control-actions"},zt={class:"control-row"},Lt={class:"control-text"},Nt={class:"control-actions"},Ft={class:"video-stage"},Wt={class:"video-frame"},Ut={key:0,class:"spinner-overlay"},qt={class:"video-placeholder"},Yt="my-app-cache-v1",Rt=Fe({__name:"YoloSegView",setup(e){const t=[{url:"https://huggingface.co/MikeLud/ObjectDetectionYOLO11-ONNX/resolve/main/yolo11s-seg.onnx",labelKey:"yolo.ai.download.files.weights"},{url:"https://huggingface.co/MikeLud/ObjectDetectionYOLO11-ONNX/resolve/main/yolo11s-seg.json",labelKey:"yolo.ai.download.files.labels"}],{setTitle:r,setIcon:b,resetAppBar:C}=We(),{showError:a}=Ue(),{t:c}=qe(),A=y("camera"),v=y("prompt"),Y=y(!1),L=y(!1),Z=y(t.map(n=>({...n,status:"idle",percentage:0}))),w=y(!1),x=y(!1),N=y(!1),ce=y(""),$=y(null),Q=y(null),F=y(null),ee=y([]),B=y(null),de=Ye(()=>ee.value.length>1&&w.value);let _=null,P=null,W=!1,T=null,te=null;Re(async()=>{r("yolo.title"),b("pi pi-camera"),T=new OffscreenCanvas(1,1),te=T.getContext("2d"),await Pe(),await ve(),ue()}),Xe(()=>{je()}),Ke([v,Y],ue);function ue(){v.value!=="granted"?A.value="camera":Y.value?A.value="live":A.value="model"}async function Pe(){if(!navigator.permissions?.query){v.value="prompt";return}try{const n=await navigator.permissions.query({name:"camera"});v.value=n.state,n.onchange=()=>{v.value=n.state,n.state!=="granted"&&fe(!1)}}catch{v.value="prompt"}}async function De(){try{(await navigator.mediaDevices.getUserMedia({video:!0})).getTracks().forEach(s=>s.stop()),v.value="granted"}catch(n){v.value="denied",a("yolo.camera.errors.title",n instanceof Error?n.message:String(n),!0)}}async function ve(){if("caches"in self)try{const n=await caches.open(Yt),s=await Promise.all(Z.value.map(async l=>await n.match(l.url)?(l.status="done",l.percentage=100,!0):(l.status="idle",l.percentage=0,!1)));Y.value=s.every(Boolean)}catch(n){console.warn("Could not check cache",n)}}async function Oe(){if(!L.value){L.value=!0;for(const n of Z.value)if(n.status!=="done"){n.status="downloading",n.percentage=0;try{const s=await fetch(n.url);if(!s.ok)throw new Error(`Download failed (${s.status})`);const l=parseInt(s.headers.get("content-length")||"0",10);if(!s.body)n.percentage=100;else{const i=s.body.getReader();let p=0;for(;;){const{done:u,value:I}=await i.read();if(u)break;p+=I.length,l>0&&(n.percentage=Math.min(100,Math.round(p/l*100)))}n.percentage=100}n.status="done"}catch(s){n.status="error",L.value=!1,a("yolo.ai.errors.title",s instanceof Error?s.message:String(s),!0);return}}L.value=!1,await ve()}}async function fe(n){if(w.value!==n){if(w.value=n,!n){ne(),x.value&&ae(!1);return}M(!0,"yolo.camera.start-camera");try{const s=await navigator.mediaDevices.getUserMedia({video:B.value?{deviceId:{exact:B.value}}:{facingMode:"environment"}});F.value=s;const l=s.getVideoTracks()[0];B.value=l.getSettings().deviceId??null,ee.value=await navigator.mediaDevices.enumerateDevices().then(i=>i.filter(p=>p.kind==="videoinput")),$.value&&($.value.srcObject=s,await $.value.play()),x.value&&re()}catch(s){w.value=!1,a("yolo.camera.errors.title",s instanceof Error?s.message:String(s),!0)}finally{M(!1)}}}async function ae(n){if(x.value!==n){if(x.value=n,!n){R(),ge();return}if(!w.value){x.value=!1,a("yolo.ai.errors.title",c("yolo.camera.no-camera"),!0);return}M(!0,"yolo.ai.loading");try{await me(),re()}catch(s){x.value=!1,a("yolo.ai.errors.title",s instanceof Error?s.message:String(s),!0)}finally{M(!1)}}}async function Ee(){if(!de.value)return;const n=ee.value,l=(n.findIndex(i=>i.deviceId===B.value)+1)%n.length;B.value=n[l].deviceId,M(!0,"yolo.camera.switchingCamera"),R(),ne(),x.value&&se();try{const i=await navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:B.value}}});F.value=i,$.value&&($.value.srcObject=i,await $.value.play()),w.value=!0,x.value&&(await me(),re())}catch(i){w.value=!1,a("yolo.camera.errors.title",i instanceof Error?i.message:String(i),!0)}finally{M(!1)}}function ne(){F.value&&(F.value.getTracks().forEach(n=>n.stop()),F.value=null),$.value&&($.value.srcObject=null,$.value.pause()),R(),ge()}function M(n,s=""){N.value=n,ce.value=s?c(s):""}async function me(){if(!_)return _=new Ct,_.onmessage=Be,_.onerror=he,new Promise((n,s)=>{const l=setTimeout(()=>s(new Error("Worker initialization timed out.")),1e4);_.addEventListener("message",i=>{i.data.type==="loaded"&&(clearTimeout(l),n())},{once:!0}),_.postMessage({type:"load",payload:{modelUrl:t[0].url,labelsUrl:t[1].url}})})}function Be(n){const{type:s,payload:l}=n.data;switch(s){case"results":W=!1,Me(l);break;case"error":W=!1,he(new ErrorEvent("error",{message:l.message}));break}}function he(n){a("yolo.ai.errors.title",n.message,!0),ae(!1),se()}function se(){R(),_&&(_.postMessage({type:"release"}),_.terminate(),_=null)}function re(){P&&cancelAnimationFrame(P),P=requestAnimationFrame(async function n(){if(!w.value||!x.value){P=null;return}await Te(),P=requestAnimationFrame(n)})}function R(){P&&(cancelAnimationFrame(P),P=null),W=!1}async function Te(){if(W||!_||!$.value)return;const n=$.value;if(n.paused||n.ended||n.videoWidth===0)return;W=!0;const s=await createImageBitmap(n),{width:l,height:i}=s,u=new OffscreenCanvas(l,i).getContext("2d");u.drawImage(s,0,0);const I=u.getImageData(0,0,l,i);s.close(),_.postMessage({type:"process",payload:I},[I.data.buffer])}function Me({masks:n,canvasWidth:s,canvasHeight:l}){const i=Q.value;if(!i||!T||!te)return;(i.width!==s||i.height!==l)&&(i.width=s,i.height=l);const p=i.getContext("2d");p.clearRect(0,0,i.width,i.height),p.font='600 15px "Inter", sans-serif',p.textBaseline="top";for(const u of n){const I=new ImageData(new Uint8ClampedArray(u.data),u.width,u.height);T.width=u.width,T.height=u.height,te.putImageData(I,0,0),p.save(),p.globalAlpha=.6,p.drawImage(T,...u.maskBox,...u.box),p.restore(),p.strokeStyle=u.color,p.lineWidth=3,p.strokeRect(...u.box);const X=`${u.label} ${(u.score*100).toFixed(0)}%`,K=p.measureText(X).width+12,U=22,[D,ie]=u.box,ye=D,Se=ie-U>=0?ie-U:ie;p.fillStyle="rgba(0, 0, 0, 0.7)",p.fillRect(ye,Se,K,U),p.fillStyle=u.color,p.fillText(X,ye+6,Se+4)}}function ge(){const n=Q.value;if(!n)return;n.getContext("2d")?.clearRect(0,0,n.width,n.height)}function je(){ne(),se(),C()}return(n,s)=>{const l=Ae,i=He,p=Je,u=Ie,I=Ce,X=Qe,be=ke,K=Ge,U=ze;return d(),S("div",xt,[o("section",It,[o("p",null,h(f(c)("yolo.ai.description")),1)]),A.value!=="live"?(d(),O(be,{key:0,value:A.value==="camera"?"1":"2",class:"setup-stepper"},{default:g(()=>[m(I,{value:"1"},{default:g(()=>[m(l,{disabled:v.value==="granted"},{default:g(()=>[we(h(f(c)("yolo.camera.title")),1)]),_:1},8,["disabled"]),m(u,null,{default:g(()=>[m(p,null,{content:g(()=>[o("h3",null,h(f(c)("yolo.camera.access.title")),1),o("p",null,h(f(c)("yolo.camera.access.description")),1)]),footer:g(()=>[m(i,{icon:"pi pi-lock-open",label:f(c)("yolo.camera.access.cta"),onClick:De},null,8,["label"])]),_:1})]),_:1})]),_:1}),m(I,{value:"2"},{default:g(()=>[m(l,{disabled:v.value!=="granted"},{default:g(()=>[we(h(f(c)("yolo.ai.segmentation")),1)]),_:1},8,["disabled"]),m(u,null,{default:g(()=>[m(p,null,{content:g(()=>[o("h3",null,h(f(c)("yolo.ai.download.title")),1),o("p",null,h(f(c)("yolo.ai.download.description")),1)]),footer:g(()=>[m(i,{icon:"pi pi-download",disabled:Y.value||L.value,label:f(c)("yolo.ai.download.cta"),onClick:Oe},null,8,["disabled","label"]),o("div",Vt,[(d(!0),S(pe,null,Ze(Z.value,D=>(d(),S("div",{key:D.url,class:"download-entry"},[o("div",At,[o("span",null,h(f(c)(D.labelKey)),1),D.status==="done"?(d(),S("span",Pt,h(f(c)("yolo.ai.download.progress.ready")),1)):D.status==="error"?(d(),S("span",Dt,h(f(c)("yolo.ai.download.progress.retry")),1)):(d(),S("span",Ot,h(D.percentage)+"%",1))]),m(X,{value:D.percentage,showValue:!1},null,8,["value"])]))),128))])]),_:1})]),_:1})]),_:1}),m(I,{value:"3",style:{display:"none"}},{default:g(()=>[m(l)]),_:1})]),_:1},8,["value"])):(d(),S("section",Et,[o("div",Bt,[o("div",Tt,[o("div",Mt,[o("h3",null,h(f(c)("yolo.camera.title")),1)]),o("div",jt,[de.value?(d(),O(i,{key:0,icon:"pi pi-refresh",label:f(c)("yolo.camera.switch-camera"),size:"small",severity:"secondary",loading:N.value,onClick:Ee},null,8,["label","loading"])):E("",!0),m(K,{modelValue:w.value,disabled:N.value,"onUpdate:modelValue":fe},null,8,["modelValue","disabled"])])]),o("div",zt,[o("div",Lt,[o("h3",null,h(f(c)("yolo.ai.segmentation")),1)]),o("div",Nt,[m(K,{modelValue:x.value,disabled:!w.value||N.value,"onUpdate:modelValue":ae},null,8,["modelValue","disabled"])])])])])),o("section",Ft,[G(o("div",Wt,[o("video",{ref_key:"videoElement",ref:$,autoplay:"",playsinline:"",muted:""},null,512),o("canvas",{ref_key:"canvasElement",ref:Q},null,512),N.value?(d(),S("div",Ut,[m(U,{strokeWidth:"4"}),o("span",null,h(ce.value),1)])):E("",!0)],512),[[H,w.value]]),G(o("div",qt,[s[0]||(s[0]=o("i",{class:"pi pi-camera"},null,-1)),o("p",null,h(f(c)("yolo.camera.placeholder")),1)],512),[[H,!w.value]])])])}}}),Gt=et(Rt,[["__scopeId","data-v-9b26119f"]]);export{Gt as default};
