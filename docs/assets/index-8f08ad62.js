import{r as F,w as fe,o as $e,a as xe,i as mr,c as M,b as gr,h as br,d as yr,e as ne,f as xr,g as le,j as ie,k as W,m as Po,l as $o,p as Ve,u as oe,n as K,q as J,s as Cr,t as wr,v as Me,x as Do,C as Sr,y as zr,z as Ir,A as q,B as bt,D as m,E as yt,L as Pr,F as Ge,G as Ue,H as $r,I as Ar,J as Ao,K as _r,M as Ie,N as Ae,O as xt,P as go,Q as kr,S as jo,R as Or,U as Wo,T as Vo,V as Fe,W as Tr,X as Go,Y as Mr,Z as Nr,_ as _o,$ as Hr,a0 as Br,a1 as Er,a2 as Ct,a3 as Rr,a4 as Lr,a5 as Fr,a6 as Kr,a7 as Dr,a8 as pe,a9 as H,aa as _,ab as Q,ac as O,ad as B,ae as jr,af as se,ag as G,ah as Oe,ai as Uo,aj as wt,ak as ye,al as de,am as Yo,an as St,ao as qo,ap as Wr,aq as Ye,ar as we,as as ko,at as zt,au as Te,av as Xo,aw as Vr,ax as _e,ay as bo,az as Z,aA as j,aB as Gr,aC as Y,aD as yo,aE as Ur,aF as Yr,aG as Se,aH as qr,aI as Xr,aJ as Zr,aK as Jr,aL as qe,aM as It,aN as ae,aO as Qr,aP as Pt,aQ as en,aR as on,aS as $t,aT as At,aU as _t,aV as tn,aW as Oo,aX as rn,aY as nn,aZ as ln,a_ as Xe,a$ as kt,b0 as re,b1 as ve,b2 as an,b3 as sn,b4 as dn,b5 as cn,b6 as un,b7 as Ot,b8 as fn,b9 as hn,ba as vn,bb as Ke,bc as pn,bd as mn}from"./index-47f18542.js";let De=[];const Tt=new WeakMap;function gn(){De.forEach(e=>e(...Tt.get(e))),De=[]}function bn(e,...o){Tt.set(e,o),!De.includes(e)&&De.push(e)===1&&requestAnimationFrame(gn)}function Zo(e,o){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[o]!==void 0)return!0;t=t.parentElement}return!1}function yn(e){return o=>{o?e.value=o.$el:e.value=null}}let no;function xn(){return no===void 0&&(no=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),no}function Cn(e,o,t){if(!o)return e;const r=F(e.value);let n=null;return fe(e,i=>{n!==null&&window.clearTimeout(n),i===!0?t&&!t.value?r.value=!0:n=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}let ze,ke;const wn=()=>{var e,o;ze=mr?(o=(e=document)===null||e===void 0?void 0:e.fonts)===null||o===void 0?void 0:o.ready:void 0,ke=!1,ze!==void 0?ze.then(()=>{ke=!0}):ke=!0};wn();function Sn(e){if(ke)return;let o=!1;$e(()=>{ke||ze==null||ze.then(()=>{o||e()})}),xe(()=>{o=!0})}function Mt(e,o){return M(()=>{for(const t of o)if(e[t]!==void 0)return e[t];return e[o[o.length-1]]})}function zn(e={},o){const t=gr({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:n}=e,i=l=>{switch(l.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}r!==void 0&&Object.keys(r).forEach(c=>{if(c!==l.key)return;const f=r[c];if(typeof f=="function")f(l);else{const{stop:h=!1,prevent:u=!1}=f;h&&l.stopPropagation(),u&&l.preventDefault(),f.handler(l)}})},a=l=>{switch(l.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}n!==void 0&&Object.keys(n).forEach(c=>{if(c!==l.key)return;const f=n[c];if(typeof f=="function")f(l);else{const{stop:h=!1,prevent:u=!1}=f;h&&l.stopPropagation(),u&&l.preventDefault(),f.handler(l)}})},s=()=>{(o===void 0||o.value)&&(le("keydown",document,i),le("keyup",document,a)),o!==void 0&&fe(o,l=>{l?(le("keydown",document,i),le("keyup",document,a)):(ne("keydown",document,i),ne("keyup",document,a))})};return br()?(yr(s),xe(()=>{(o===void 0||o.value)&&(ne("keydown",document,i),ne("keyup",document,a))})):s(),xr(t)}const In=ie("n-internal-select-menu-body"),Nt="__disabled__";function Pe(e){const o=W(Po,null),t=W($o,null),r=W(Ve,null),n=W(In,null),i=F();if(typeof document<"u"){i.value=document.fullscreenElement;const a=()=>{i.value=document.fullscreenElement};$e(()=>{le("fullscreenchange",document,a)}),xe(()=>{ne("fullscreenchange",document,a)})}return oe(()=>{var a;const{to:s}=e;return s!==void 0?s===!1?Nt:s===!0?i.value||"body":s:o!=null&&o.value?(a=o.value.$el)!==null&&a!==void 0?a:o.value:t!=null&&t.value?t.value:r!=null&&r.value?r.value:n!=null&&n.value?n.value:s??(i.value||"body")})}Pe.tdkey=Nt;Pe.propTo={type:[String,Object,Boolean],default:void 0};let he=null;function Ht(){if(he===null&&(he=document.getElementById("v-binder-view-measurer"),he===null)){he=document.createElement("div"),he.id="v-binder-view-measurer";const{style:e}=he;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(he)}return he.getBoundingClientRect()}function Pn(e,o){const t=Ht();return{top:o,left:e,height:0,width:0,right:t.width-e,bottom:t.height-o}}function io(e){const o=e.getBoundingClientRect(),t=Ht();return{left:o.left-t.left,top:o.top-t.top,bottom:t.height+t.top-o.bottom,right:t.width+t.left-o.right,width:o.width,height:o.height}}function $n(e){return e.nodeType===9?null:e.parentNode}function Bt(e){if(e===null)return null;const o=$n(e);if(o===null)return null;if(o.nodeType===9)return document;if(o.nodeType===1){const{overflow:t,overflowX:r,overflowY:n}=getComputedStyle(o);if(/(auto|scroll|overlay)/.test(t+n+r))return o}return Bt(o)}const An=K({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var o;J("VBinder",(o=Cr())===null||o===void 0?void 0:o.proxy);const t=W("VBinder",null),r=F(null),n=y=>{r.value=y,t&&e.syncTargetWithParent&&t.setTargetRef(y)};let i=[];const a=()=>{let y=r.value;for(;y=Bt(y),y!==null;)i.push(y);for(const E of i)le("scroll",E,h,!0)},s=()=>{for(const y of i)ne("scroll",y,h,!0);i=[]},l=new Set,c=y=>{l.size===0&&a(),l.has(y)||l.add(y)},f=y=>{l.has(y)&&l.delete(y),l.size===0&&s()},h=()=>{bn(u)},u=()=>{l.forEach(y=>y())},v=new Set,p=y=>{v.size===0&&le("resize",window,w),v.has(y)||v.add(y)},g=y=>{v.has(y)&&v.delete(y),v.size===0&&ne("resize",window,w)},w=()=>{v.forEach(y=>y())};return xe(()=>{ne("resize",window,w),s()}),{targetRef:r,setTargetRef:n,addScrollListener:c,removeScrollListener:f,addResizeListener:p,removeResizeListener:g}},render(){return wr("binder",this.$slots)}}),Et=An,Rt=K({name:"Target",setup(){const{setTargetRef:e,syncTarget:o}=W("VBinder");return{syncTarget:o,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:o}=this;return e?Me(Do("follower",this.$slots),[[o]]):Do("follower",this.$slots)}}),Ce="@@mmoContext",_n={mounted(e,{value:o}){e[Ce]={handler:void 0},typeof o=="function"&&(e[Ce].handler=o,le("mousemoveoutside",e,o))},updated(e,{value:o}){const t=e[Ce];typeof o=="function"?t.handler?t.handler!==o&&(ne("mousemoveoutside",e,t.handler),t.handler=o,le("mousemoveoutside",e,o)):(e[Ce].handler=o,le("mousemoveoutside",e,o)):t.handler&&(ne("mousemoveoutside",e,t.handler),t.handler=void 0)},unmounted(e){const{handler:o}=e[Ce];o&&ne("mousemoveoutside",e,o),e[Ce].handler=void 0}},kn=_n,{c:Be}=Sr(),On="vueuc-style",Ee={top:"bottom",bottom:"top",left:"right",right:"left"},Jo={start:"end",center:"center",end:"start"},lo={top:"height",bottom:"height",left:"width",right:"width"},Tn={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Mn={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},Nn={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Qo={top:!0,bottom:!1,left:!0,right:!1},et={top:"end",bottom:"start",left:"end",right:"start"};function Hn(e,o,t,r,n,i){if(!n||i)return{placement:e,top:0,left:0};const[a,s]=e.split("-");let l=s??"center",c={top:0,left:0};const f=(v,p,g)=>{let w=0,y=0;const E=t[v]-o[p]-o[v];return E>0&&r&&(g?y=Qo[p]?E:-E:w=Qo[p]?E:-E),{left:w,top:y}},h=a==="left"||a==="right";if(l!=="center"){const v=Nn[e],p=Ee[v],g=lo[v];if(t[g]>o[g]){if(o[v]+o[g]<t[g]){const w=(t[g]-o[g])/2;o[v]<w||o[p]<w?o[v]<o[p]?(l=Jo[s],c=f(g,p,h)):c=f(g,v,h):l="center"}}else t[g]<o[g]&&o[p]<0&&o[v]>o[p]&&(l=Jo[s])}else{const v=a==="bottom"||a==="top"?"left":"top",p=Ee[v],g=lo[v],w=(t[g]-o[g])/2;(o[v]<w||o[p]<w)&&(o[v]>o[p]?(l=et[v],c=f(g,v,h)):(l=et[p],c=f(g,p,h)))}let u=a;return o[a]<t[lo[a]]&&o[a]<o[Ee[a]]&&(u=Ee[a]),{placement:l!=="center"?`${u}-${l}`:u,left:c.left,top:c.top}}function Bn(e,o){return o?Mn[e]:Tn[e]}function En(e,o,t,r,n,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(t.top-o.top+t.height)}px`,left:`${Math.round(t.left-o.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-o.top+t.height)}px`,left:`${Math.round(t.left-o.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-o.top)}px`,left:`${Math.round(t.left-o.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-o.top)}px`,left:`${Math.round(t.left-o.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-o.top)}px`,left:`${Math.round(t.left-o.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-o.top+t.height)}px`,left:`${Math.round(t.left-o.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-o.top)}px`,left:`${Math.round(t.left-o.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-o.top+t.height)}px`,left:`${Math.round(t.left-o.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-o.top)}px`,left:`${Math.round(t.left-o.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-o.top+t.height/2)}px`,left:`${Math.round(t.left-o.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-o.top+t.height/2)}px`,left:`${Math.round(t.left-o.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-o.top+t.height)}px`,left:`${Math.round(t.left-o.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(t.top-o.top+t.height+r)}px`,left:`${Math.round(t.left-o.left+n)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-o.top+t.height+r)}px`,left:`${Math.round(t.left-o.left+t.width+n)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-o.top+r)}px`,left:`${Math.round(t.left-o.left+n)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-o.top+r)}px`,left:`${Math.round(t.left-o.left+t.width+n)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-o.top+r)}px`,left:`${Math.round(t.left-o.left+t.width+n)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-o.top+t.height+r)}px`,left:`${Math.round(t.left-o.left+t.width+n)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-o.top+r)}px`,left:`${Math.round(t.left-o.left+n)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-o.top+t.height+r)}px`,left:`${Math.round(t.left-o.left+n)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-o.top+r)}px`,left:`${Math.round(t.left-o.left+t.width/2+n)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-o.top+t.height/2+r)}px`,left:`${Math.round(t.left-o.left+t.width+n)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-o.top+t.height/2+r)}px`,left:`${Math.round(t.left-o.left+n)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-o.top+t.height+r)}px`,left:`${Math.round(t.left-o.left+t.width/2+n)}px`,transform:"translateX(-50%)"}}}const Rn=Be([Be(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),Be(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[Be("> *",{pointerEvents:"all"})])]),Lt=K({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const o=W("VBinder"),t=oe(()=>e.enabled!==void 0?e.enabled:e.show),r=F(null),n=F(null),i=()=>{const{syncTrigger:u}=e;u.includes("scroll")&&o.addScrollListener(l),u.includes("resize")&&o.addResizeListener(l)},a=()=>{o.removeScrollListener(l),o.removeResizeListener(l)};$e(()=>{t.value&&(l(),i())});const s=zr();Rn.mount({id:"vueuc/binder",head:!0,anchorMetaName:On,ssr:s}),xe(()=>{a()}),Sn(()=>{t.value&&l()});const l=()=>{if(!t.value)return;const u=r.value;if(u===null)return;const v=o.targetRef,{x:p,y:g,overlap:w}=e,y=p!==void 0&&g!==void 0?Pn(p,g):io(v);u.style.setProperty("--v-target-width",`${Math.round(y.width)}px`),u.style.setProperty("--v-target-height",`${Math.round(y.height)}px`);const{width:E,minWidth:A,placement:x,internalShift:C,flip:I}=e;u.setAttribute("v-placement",x),w?u.setAttribute("v-overlap",""):u.removeAttribute("v-overlap");const{style:S}=u;E==="target"?S.width=`${y.width}px`:E!==void 0?S.width=E:S.width="",A==="target"?S.minWidth=`${y.width}px`:A!==void 0?S.minWidth=A:S.minWidth="";const P=io(u),$=io(n.value),{left:d,top:T,placement:k}=Hn(x,y,P,C,I,w),L=Bn(k,w),{left:z,top:N,transform:b}=En(k,$,y,T,d,w);u.setAttribute("v-placement",k),u.style.setProperty("--v-offset-left",`${Math.round(d)}px`),u.style.setProperty("--v-offset-top",`${Math.round(T)}px`),u.style.transform=`translateX(${z}) translateY(${N}) ${b}`,u.style.setProperty("--v-transform-origin",L),u.style.transformOrigin=L};fe(t,u=>{u?(i(),c()):a()});const c=()=>{Ir().then(l).catch(u=>console.error(u))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(u=>{fe(q(e,u),l)}),["teleportDisabled"].forEach(u=>{fe(q(e,u),c)}),fe(q(e,"syncTrigger"),u=>{u.includes("resize")?o.addResizeListener(l):o.removeResizeListener(l),u.includes("scroll")?o.addScrollListener(l):o.removeScrollListener(l)});const f=bt(),h=oe(()=>{const{to:u}=e;if(u!==void 0)return u;f.value});return{VBinder:o,mergedEnabled:t,offsetContainerRef:n,followerRef:r,mergedTo:h,syncPosition:l}},render(){return m(Pr,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,o;const t=m("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[m("div",{class:"v-binder-follower-content",ref:"followerRef"},(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e))]);return this.zindexable?Me(t,[[yt,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});var Ln=Ge(Ue,"WeakMap");const xo=Ln;var Fn=$r(Object.keys,Object);const Kn=Fn;var Dn=Object.prototype,jn=Dn.hasOwnProperty;function Wn(e){if(!Ar(e))return Kn(e);var o=[];for(var t in Object(e))jn.call(e,t)&&t!="constructor"&&o.push(t);return o}function To(e){return Ao(e)?_r(e):Wn(e)}function Vn(e,o){for(var t=-1,r=o.length,n=e.length;++t<r;)e[n+t]=o[t];return e}function Gn(e,o){for(var t=-1,r=e==null?0:e.length,n=0,i=[];++t<r;){var a=e[t];o(a,t,e)&&(i[n++]=a)}return i}function Un(){return[]}var Yn=Object.prototype,qn=Yn.propertyIsEnumerable,ot=Object.getOwnPropertySymbols,Xn=ot?function(e){return e==null?[]:(e=Object(e),Gn(ot(e),function(o){return qn.call(e,o)}))}:Un;const Zn=Xn;function Jn(e,o,t){var r=o(e);return Ie(e)?r:Vn(r,t(e))}function tt(e){return Jn(e,To,Zn)}var Qn=Ge(Ue,"DataView");const Co=Qn;var ei=Ge(Ue,"Promise");const wo=ei;var oi=Ge(Ue,"Set");const So=oi;var rt="[object Map]",ti="[object Object]",nt="[object Promise]",it="[object Set]",lt="[object WeakMap]",at="[object DataView]",ri=Ae(Co),ni=Ae(go),ii=Ae(wo),li=Ae(So),ai=Ae(xo),be=xt;(Co&&be(new Co(new ArrayBuffer(1)))!=at||go&&be(new go)!=rt||wo&&be(wo.resolve())!=nt||So&&be(new So)!=it||xo&&be(new xo)!=lt)&&(be=function(e){var o=xt(e),t=o==ti?e.constructor:void 0,r=t?Ae(t):"";if(r)switch(r){case ri:return at;case ni:return rt;case ii:return nt;case li:return it;case ai:return lt}return o});const st=be;var si="__lodash_hash_undefined__";function di(e){return this.__data__.set(e,si),this}function ci(e){return this.__data__.has(e)}function je(e){var o=-1,t=e==null?0:e.length;for(this.__data__=new kr;++o<t;)this.add(e[o])}je.prototype.add=je.prototype.push=di;je.prototype.has=ci;function ui(e,o){for(var t=-1,r=e==null?0:e.length;++t<r;)if(o(e[t],t,e))return!0;return!1}function fi(e,o){return e.has(o)}var hi=1,vi=2;function Ft(e,o,t,r,n,i){var a=t&hi,s=e.length,l=o.length;if(s!=l&&!(a&&l>s))return!1;var c=i.get(e),f=i.get(o);if(c&&f)return c==o&&f==e;var h=-1,u=!0,v=t&vi?new je:void 0;for(i.set(e,o),i.set(o,e);++h<s;){var p=e[h],g=o[h];if(r)var w=a?r(g,p,h,o,e,i):r(p,g,h,e,o,i);if(w!==void 0){if(w)continue;u=!1;break}if(v){if(!ui(o,function(y,E){if(!fi(v,E)&&(p===y||n(p,y,t,r,i)))return v.push(E)})){u=!1;break}}else if(!(p===g||n(p,g,t,r,i))){u=!1;break}}return i.delete(e),i.delete(o),u}function pi(e){var o=-1,t=Array(e.size);return e.forEach(function(r,n){t[++o]=[n,r]}),t}function mi(e){var o=-1,t=Array(e.size);return e.forEach(function(r){t[++o]=r}),t}var gi=1,bi=2,yi="[object Boolean]",xi="[object Date]",Ci="[object Error]",wi="[object Map]",Si="[object Number]",zi="[object RegExp]",Ii="[object Set]",Pi="[object String]",$i="[object Symbol]",Ai="[object ArrayBuffer]",_i="[object DataView]",dt=jo?jo.prototype:void 0,ao=dt?dt.valueOf:void 0;function ki(e,o,t,r,n,i,a){switch(t){case _i:if(e.byteLength!=o.byteLength||e.byteOffset!=o.byteOffset)return!1;e=e.buffer,o=o.buffer;case Ai:return!(e.byteLength!=o.byteLength||!i(new Wo(e),new Wo(o)));case yi:case xi:case Si:return Or(+e,+o);case Ci:return e.name==o.name&&e.message==o.message;case zi:case Pi:return e==o+"";case wi:var s=pi;case Ii:var l=r&gi;if(s||(s=mi),e.size!=o.size&&!l)return!1;var c=a.get(e);if(c)return c==o;r|=bi,a.set(e,o);var f=Ft(s(e),s(o),r,n,i,a);return a.delete(e),f;case $i:if(ao)return ao.call(e)==ao.call(o)}return!1}var Oi=1,Ti=Object.prototype,Mi=Ti.hasOwnProperty;function Ni(e,o,t,r,n,i){var a=t&Oi,s=tt(e),l=s.length,c=tt(o),f=c.length;if(l!=f&&!a)return!1;for(var h=l;h--;){var u=s[h];if(!(a?u in o:Mi.call(o,u)))return!1}var v=i.get(e),p=i.get(o);if(v&&p)return v==o&&p==e;var g=!0;i.set(e,o),i.set(o,e);for(var w=a;++h<l;){u=s[h];var y=e[u],E=o[u];if(r)var A=a?r(E,y,u,o,e,i):r(y,E,u,e,o,i);if(!(A===void 0?y===E||n(y,E,t,r,i):A)){g=!1;break}w||(w=u=="constructor")}if(g&&!w){var x=e.constructor,C=o.constructor;x!=C&&"constructor"in e&&"constructor"in o&&!(typeof x=="function"&&x instanceof x&&typeof C=="function"&&C instanceof C)&&(g=!1)}return i.delete(e),i.delete(o),g}var Hi=1,ct="[object Arguments]",ut="[object Array]",Re="[object Object]",Bi=Object.prototype,ft=Bi.hasOwnProperty;function Ei(e,o,t,r,n,i){var a=Ie(e),s=Ie(o),l=a?ut:st(e),c=s?ut:st(o);l=l==ct?Re:l,c=c==ct?Re:c;var f=l==Re,h=c==Re,u=l==c;if(u&&Vo(e)){if(!Vo(o))return!1;a=!0,f=!1}if(u&&!f)return i||(i=new Fe),a||Tr(e)?Ft(e,o,t,r,n,i):ki(e,o,l,t,r,n,i);if(!(t&Hi)){var v=f&&ft.call(e,"__wrapped__"),p=h&&ft.call(o,"__wrapped__");if(v||p){var g=v?e.value():e,w=p?o.value():o;return i||(i=new Fe),n(g,w,t,r,i)}}return u?(i||(i=new Fe),Ni(e,o,t,r,n,i)):!1}function Mo(e,o,t,r,n){return e===o?!0:e==null||o==null||!Go(e)&&!Go(o)?e!==e&&o!==o:Ei(e,o,t,r,Mo,n)}var Ri=1,Li=2;function Fi(e,o,t,r){var n=t.length,i=n,a=!r;if(e==null)return!i;for(e=Object(e);n--;){var s=t[n];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++n<i;){s=t[n];var l=s[0],c=e[l],f=s[1];if(a&&s[2]){if(c===void 0&&!(l in e))return!1}else{var h=new Fe;if(r)var u=r(c,f,l,e,o,h);if(!(u===void 0?Mo(f,c,Ri|Li,r,h):u))return!1}}return!0}function Kt(e){return e===e&&!Mr(e)}function Ki(e){for(var o=To(e),t=o.length;t--;){var r=o[t],n=e[r];o[t]=[r,n,Kt(n)]}return o}function Dt(e,o){return function(t){return t==null?!1:t[e]===o&&(o!==void 0||e in Object(t))}}function Di(e){var o=Ki(e);return o.length==1&&o[0][2]?Dt(o[0][0],o[0][1]):function(t){return t===e||Fi(t,e,o)}}function ji(e,o){return e!=null&&o in Object(e)}function Wi(e,o,t){o=Nr(o,e);for(var r=-1,n=o.length,i=!1;++r<n;){var a=_o(o[r]);if(!(i=e!=null&&t(e,a)))break;e=e[a]}return i||++r!=n?i:(n=e==null?0:e.length,!!n&&Hr(n)&&Br(a,n)&&(Ie(e)||Er(e)))}function Vi(e,o){return e!=null&&Wi(e,o,ji)}var Gi=1,Ui=2;function Yi(e,o){return Ct(e)&&Kt(o)?Dt(_o(e),o):function(t){var r=Rr(t,e);return r===void 0&&r===o?Vi(t,e):Mo(o,r,Gi|Ui)}}function qi(e){return function(o){return o==null?void 0:o[e]}}function Xi(e){return function(o){return Lr(o,e)}}function Zi(e){return Ct(e)?qi(_o(e)):Xi(e)}function Ji(e){return typeof e=="function"?e:e==null?Fr:typeof e=="object"?Ie(e)?Yi(e[0],e[1]):Di(e):Zi(e)}function Qi(e,o){return e&&Kr(e,o,To)}function el(e,o){return function(t,r){if(t==null)return t;if(!Ao(t))return e(t,r);for(var n=t.length,i=o?n:-1,a=Object(t);(o?i--:++i<n)&&r(a[i],i,a)!==!1;);return t}}var ol=el(Qi);const tl=ol;function rl(e,o){var t=-1,r=Ao(e)?Array(e.length):[];return tl(e,function(n,i,a){r[++t]=o(n,i,a)}),r}function nl(e,o){var t=Ie(e)?Dr:rl;return t(e,Ji(o))}const jt=K({name:"ChevronRight",render(){return m("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),il=K({name:"ChevronDownFilled",render(){return m("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function ht(e){return Array.isArray(e)?e:[e]}const zo={STOP:"STOP"};function Wt(e,o){const t=o(e);e.children!==void 0&&t!==zo.STOP&&e.children.forEach(r=>Wt(r,o))}function ll(e,o={}){const{preserveGroup:t=!1}=o,r=[],n=t?a=>{a.isLeaf||(r.push(a.key),i(a.children))}:a=>{a.isLeaf||(a.isGroup||r.push(a.key),i(a.children))};function i(a){a.forEach(n)}return i(e),r}function al(e,o){const{isLeaf:t}=e;return t!==void 0?t:!o(e)}function sl(e){return e.children}function dl(e){return e.key}function cl(){return!1}function ul(e,o){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(o(e)))}function fl(e){return e.disabled===!0}function hl(e,o){return e.isLeaf===!1&&!Array.isArray(o(e))}function so(e){var o;return e==null?[]:Array.isArray(e)?e:(o=e.checkedKeys)!==null&&o!==void 0?o:[]}function co(e){var o;return e==null||Array.isArray(e)?[]:(o=e.indeterminateKeys)!==null&&o!==void 0?o:[]}function vl(e,o){const t=new Set(e);return o.forEach(r=>{t.has(r)||t.add(r)}),Array.from(t)}function pl(e,o){const t=new Set(e);return o.forEach(r=>{t.has(r)&&t.delete(r)}),Array.from(t)}function ml(e){return(e==null?void 0:e.type)==="group"}class gl extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function bl(e,o,t,r){return We(o.concat(e),t,r,!1)}function yl(e,o){const t=new Set;return e.forEach(r=>{const n=o.treeNodeMap.get(r);if(n!==void 0){let i=n.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function xl(e,o,t,r){const n=We(o,t,r,!1),i=We(e,t,r,!0),a=yl(e,t),s=[];return n.forEach(l=>{(i.has(l)||a.has(l))&&s.push(l)}),s.forEach(l=>n.delete(l)),n}function uo(e,o){const{checkedKeys:t,keysToCheck:r,keysToUncheck:n,indeterminateKeys:i,cascade:a,leafOnly:s,checkStrategy:l,allowNotLoaded:c}=e;if(!a)return r!==void 0?{checkedKeys:vl(t,r),indeterminateKeys:Array.from(i)}:n!==void 0?{checkedKeys:pl(t,n),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:f}=o;let h;n!==void 0?h=xl(n,t,o,c):r!==void 0?h=bl(r,t,o,c):h=We(t,o,c,!1);const u=l==="parent",v=l==="child"||s,p=h,g=new Set,w=Math.max.apply(null,Array.from(f.keys()));for(let y=w;y>=0;y-=1){const E=y===0,A=f.get(y);for(const x of A){if(x.isLeaf)continue;const{key:C,shallowLoaded:I}=x;if(v&&I&&x.children.forEach(d=>{!d.disabled&&!d.isLeaf&&d.shallowLoaded&&p.has(d.key)&&p.delete(d.key)}),x.disabled||!I)continue;let S=!0,P=!1,$=!0;for(const d of x.children){const T=d.key;if(!d.disabled){if($&&($=!1),p.has(T))P=!0;else if(g.has(T)){P=!0,S=!1;break}else if(S=!1,P)break}}S&&!$?(u&&x.children.forEach(d=>{!d.disabled&&p.has(d.key)&&p.delete(d.key)}),p.add(C)):P&&g.add(C),E&&v&&p.has(C)&&p.delete(C)}}return{checkedKeys:Array.from(p),indeterminateKeys:Array.from(g)}}function We(e,o,t,r){const{treeNodeMap:n,getChildren:i}=o,a=new Set,s=new Set(e);return e.forEach(l=>{const c=n.get(l);c!==void 0&&Wt(c,f=>{if(f.disabled)return zo.STOP;const{key:h}=f;if(!a.has(h)&&(a.add(h),s.add(h),hl(f.rawNode,i))){if(r)return zo.STOP;if(!t)throw new gl}})}),s}function Cl(e,{includeGroup:o=!1,includeSelf:t=!0},r){var n;const i=r.treeNodeMap;let a=e==null?null:(n=i.get(e))!==null&&n!==void 0?n:null;const s={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return s.treeNode=null,s;for(;a;)!a.ignored&&(o||!a.isGroup)&&s.treeNodePath.push(a),a=a.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(l=>l.key),s}function wl(e){if(e.length===0)return null;const o=e[0];return o.isGroup||o.ignored||o.disabled?o.getNext():o}function Sl(e,o){const t=e.siblings,r=t.length,{index:n}=e;return o?t[(n+1)%r]:n===t.length-1?null:t[n+1]}function vt(e,o,{loop:t=!1,includeDisabled:r=!1}={}){const n=o==="prev"?zl:Sl,i={reverse:o==="prev"};let a=!1,s=null;function l(c){if(c!==null){if(c===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!c.disabled||r)&&!c.ignored&&!c.isGroup){s=c;return}if(c.isGroup){const f=No(c,i);f!==null?s=f:l(n(c,t))}else{const f=n(c,!1);if(f!==null)l(f);else{const h=Il(c);h!=null&&h.isGroup?l(n(h,t)):t&&l(n(c,!0))}}}}return l(e),s}function zl(e,o){const t=e.siblings,r=t.length,{index:n}=e;return o?t[(n-1+r)%r]:n===0?null:t[n-1]}function Il(e){return e.parent}function No(e,o={}){const{reverse:t=!1}=o,{children:r}=e;if(r){const{length:n}=r,i=t?n-1:0,a=t?-1:n,s=t?-1:1;for(let l=i;l!==a;l+=s){const c=r[l];if(!c.disabled&&!c.ignored)if(c.isGroup){const f=No(c,o);if(f!==null)return f}else return c}}return null}const Pl={getChild(){return this.ignored?null:No(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return vt(this,"next",e)},getPrev(e={}){return vt(this,"prev",e)}};function $l(e,o){const t=o?new Set(o):void 0,r=[];function n(i){i.forEach(a=>{r.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||t===void 0||t.has(a.key))&&n(a.children)})}return n(e),r}function Al(e,o){const t=e.key;for(;o;){if(o.key===t)return!0;o=o.parent}return!1}function Vt(e,o,t,r,n,i=null,a=0){const s=[];return e.forEach((l,c)=>{var f;const h=Object.create(r);if(h.rawNode=l,h.siblings=s,h.level=a,h.index=c,h.isFirstChild=c===0,h.isLastChild=c+1===e.length,h.parent=i,!h.ignored){const u=n(l);Array.isArray(u)&&(h.children=Vt(u,o,t,r,n,h,a+1))}s.push(h),o.set(h.key,h),t.has(a)||t.set(a,[]),(f=t.get(a))===null||f===void 0||f.push(h)}),s}function Gt(e,o={}){var t;const r=new Map,n=new Map,{getDisabled:i=fl,getIgnored:a=cl,getIsGroup:s=ml,getKey:l=dl}=o,c=(t=o.getChildren)!==null&&t!==void 0?t:sl,f=o.ignoreEmptyChildren?x=>{const C=c(x);return Array.isArray(C)?C.length?C:null:C}:c,h=Object.assign({get key(){return l(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return al(this.rawNode,f)},get shallowLoaded(){return ul(this.rawNode,f)},get ignored(){return a(this.rawNode)},contains(x){return Al(this,x)}},Pl),u=Vt(e,r,n,h,f);function v(x){if(x==null)return null;const C=r.get(x);return C&&!C.isGroup&&!C.ignored?C:null}function p(x){if(x==null)return null;const C=r.get(x);return C&&!C.ignored?C:null}function g(x,C){const I=p(x);return I?I.getPrev(C):null}function w(x,C){const I=p(x);return I?I.getNext(C):null}function y(x){const C=p(x);return C?C.getParent():null}function E(x){const C=p(x);return C?C.getChild():null}const A={treeNodes:u,treeNodeMap:r,levelTreeNodeMap:n,maxLevel:Math.max(...n.keys()),getChildren:f,getFlattenedNodes(x){return $l(u,x)},getNode:v,getPrev:g,getNext:w,getParent:y,getChild:E,getFirstAvailableNode(){return wl(u)},getPath(x,C={}){return Cl(x,C,A)},getCheckedKeys(x,C={}){const{cascade:I=!0,leafOnly:S=!1,checkStrategy:P="all",allowNotLoaded:$=!1}=C;return uo({checkedKeys:so(x),indeterminateKeys:co(x),cascade:I,leafOnly:S,checkStrategy:P,allowNotLoaded:$},A)},check(x,C,I={}){const{cascade:S=!0,leafOnly:P=!1,checkStrategy:$="all",allowNotLoaded:d=!1}=I;return uo({checkedKeys:so(C),indeterminateKeys:co(C),keysToCheck:x==null?[]:ht(x),cascade:S,leafOnly:P,checkStrategy:$,allowNotLoaded:d},A)},uncheck(x,C,I={}){const{cascade:S=!0,leafOnly:P=!1,checkStrategy:$="all",allowNotLoaded:d=!1}=I;return uo({checkedKeys:so(C),indeterminateKeys:co(C),keysToUncheck:x==null?[]:ht(x),cascade:S,leafOnly:P,checkStrategy:$,allowNotLoaded:d},A)},getNonLeafKeys(x={}){return ll(u,x)}};return A}const _l={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"},kl=e=>{const{boxShadow2:o,popoverColor:t,textColor2:r,borderRadius:n,fontSize:i,dividerColor:a}=e;return Object.assign(Object.assign({},_l),{fontSize:i,borderRadius:n,color:t,dividerColor:a,textColor:r,boxShadow:o})},Ol={name:"Popover",common:pe,self:kl},Ho=Ol,fo={top:"bottom",bottom:"top",left:"right",right:"left"},X="var(--n-arrow-height) * 1.414",Tl=H([_("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[H(">",[_("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),Q("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[Q("scrollable",[Q("show-header-or-footer","padding: var(--n-padding);")])]),O("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),O("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),B("scrollable, show-header-or-footer",[O("content",`
 padding: var(--n-padding);
 `)])]),_("popover-shared",`
 transform-origin: inherit;
 `,[_("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[_("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${X});
 height: calc(${X});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),H("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),H("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),H("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),H("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),ee("top-start",`
 top: calc(${X} / -2);
 left: calc(${ue("top-start")} - var(--v-offset-left));
 `),ee("top",`
 top: calc(${X} / -2);
 transform: translateX(calc(${X} / -2)) rotate(45deg);
 left: 50%;
 `),ee("top-end",`
 top: calc(${X} / -2);
 right: calc(${ue("top-end")} + var(--v-offset-left));
 `),ee("bottom-start",`
 bottom: calc(${X} / -2);
 left: calc(${ue("bottom-start")} - var(--v-offset-left));
 `),ee("bottom",`
 bottom: calc(${X} / -2);
 transform: translateX(calc(${X} / -2)) rotate(45deg);
 left: 50%;
 `),ee("bottom-end",`
 bottom: calc(${X} / -2);
 right: calc(${ue("bottom-end")} + var(--v-offset-left));
 `),ee("left-start",`
 left: calc(${X} / -2);
 top: calc(${ue("left-start")} - var(--v-offset-top));
 `),ee("left",`
 left: calc(${X} / -2);
 transform: translateY(calc(${X} / -2)) rotate(45deg);
 top: 50%;
 `),ee("left-end",`
 left: calc(${X} / -2);
 bottom: calc(${ue("left-end")} + var(--v-offset-top));
 `),ee("right-start",`
 right: calc(${X} / -2);
 top: calc(${ue("right-start")} - var(--v-offset-top));
 `),ee("right",`
 right: calc(${X} / -2);
 transform: translateY(calc(${X} / -2)) rotate(45deg);
 top: 50%;
 `),ee("right-end",`
 right: calc(${X} / -2);
 bottom: calc(${ue("right-end")} + var(--v-offset-top));
 `),...nl({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,o)=>{const t=["right","left"].includes(o),r=t?"width":"height";return e.map(n=>{const i=n.split("-")[1]==="end",s=`calc((${`var(--v-target-${r}, 0px)`} - ${X}) / 2)`,l=ue(n);return H(`[v-placement="${n}"] >`,[_("popover-shared",[B("center-arrow",[_("popover-arrow",`${o}: calc(max(${s}, ${l}) ${i?"+":"-"} var(--v-offset-${t?"left":"top"}));`)])])])})})]);function ue(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function ee(e,o){const t=e.split("-")[0],r=["top","bottom"].includes(t)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return H(`[v-placement="${e}"] >`,[_("popover-shared",`
 margin-${fo[t]}: var(--n-space);
 `,[B("show-arrow",`
 margin-${fo[t]}: var(--n-space-arrow);
 `),B("overlap",`
 margin: 0;
 `),jr("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: 100%;
 ${fo[t]}: auto;
 ${r}
 `,[_("popover-arrow",o)])])])}const Ut=Object.assign(Object.assign({},G.props),{to:Pe.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),Yt=({arrowStyle:e,clsPrefix:o})=>m("div",{key:"__popover-arrow__",class:`${o}-popover-arrow-wrapper`},m("div",{class:`${o}-popover-arrow`,style:e})),Ml=K({name:"PopoverBody",inheritAttrs:!1,props:Ut,setup(e,{slots:o,attrs:t}){const{namespaceRef:r,mergedClsPrefixRef:n,inlineThemeDisabled:i}=se(e),a=G("Popover","-popover",Tl,Ho,e,n),s=F(null),l=W("NPopover"),c=F(null),f=F(e.show),h=F(!1);Oe(()=>{const{show:S}=e;S&&!xn()&&!e.internalDeactivateImmediately&&(h.value=!0)});const u=M(()=>{const{trigger:S,onClickoutside:P}=e,$=[],{positionManuallyRef:{value:d}}=l;return d||(S==="click"&&!P&&$.push([Uo,x,void 0,{capture:!0}]),S==="hover"&&$.push([kn,A])),P&&$.push([Uo,x,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&h.value)&&$.push([wt,e.show]),$}),v=M(()=>{const S=e.width==="trigger"?void 0:ye(e.width),P=[];S&&P.push({width:S});const{maxWidth:$,minWidth:d}=e;return $&&P.push({maxWidth:ye($)}),d&&P.push({maxWidth:ye(d)}),i||P.push(p.value),P}),p=M(()=>{const{common:{cubicBezierEaseInOut:S,cubicBezierEaseIn:P,cubicBezierEaseOut:$},self:{space:d,spaceArrow:T,padding:k,fontSize:L,textColor:z,dividerColor:N,color:b,boxShadow:R,borderRadius:D,arrowHeight:U,arrowOffset:te,arrowOffsetVertical:me}}=a.value;return{"--n-box-shadow":R,"--n-bezier":S,"--n-bezier-ease-in":P,"--n-bezier-ease-out":$,"--n-font-size":L,"--n-text-color":z,"--n-color":b,"--n-divider-color":N,"--n-border-radius":D,"--n-arrow-height":U,"--n-arrow-offset":te,"--n-arrow-offset-vertical":me,"--n-padding":k,"--n-space":d,"--n-space-arrow":T}}),g=i?de("popover",void 0,p,e):void 0;l.setBodyInstance({syncPosition:w}),xe(()=>{l.setBodyInstance(null)}),fe(q(e,"show"),S=>{e.animated||(S?f.value=!0:f.value=!1)});function w(){var S;(S=s.value)===null||S===void 0||S.syncPosition()}function y(S){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(S)}function E(S){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(S)}function A(S){e.trigger==="hover"&&!C().contains(Yo(S))&&l.handleMouseMoveOutside(S)}function x(S){(e.trigger==="click"&&!C().contains(Yo(S))||e.onClickoutside)&&l.handleClickOutside(S)}function C(){return l.getTriggerElement()}J(Ve,c),J($o,null),J(Po,null);function I(){if(g==null||g.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&h.value))return null;let P;const $=l.internalRenderBodyRef.value,{value:d}=n;if($)P=$([`${d}-popover-shared`,g==null?void 0:g.themeClass.value,e.overlap&&`${d}-popover-shared--overlap`,e.showArrow&&`${d}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${d}-popover-shared--center-arrow`],c,v.value,y,E);else{const{value:T}=l.extraClassRef,{internalTrapFocus:k}=e,L=!qo(o.header)||!qo(o.footer),z=()=>{var N;const b=L?m(ko,null,we(o.header,U=>U?m("div",{class:`${d}-popover__header`,style:e.headerStyle},U):null),we(o.default,U=>U?m("div",{class:`${d}-popover__content`,style:e.contentStyle},o):null),we(o.footer,U=>U?m("div",{class:`${d}-popover__footer`,style:e.footerStyle},U):null)):e.scrollable?(N=o.default)===null||N===void 0?void 0:N.call(o):m("div",{class:`${d}-popover__content`,style:e.contentStyle},o),R=e.scrollable?m(zt,{contentClass:L?void 0:`${d}-popover__content`,contentStyle:L?void 0:e.contentStyle},{default:()=>b}):b,D=e.showArrow?Yt({arrowStyle:e.arrowStyle,clsPrefix:d}):null;return[R,D]};P=m("div",Ye({class:[`${d}-popover`,`${d}-popover-shared`,g==null?void 0:g.themeClass.value,T.map(N=>`${d}-${N}`),{[`${d}-popover--scrollable`]:e.scrollable,[`${d}-popover--show-header-or-footer`]:L,[`${d}-popover--raw`]:e.raw,[`${d}-popover-shared--overlap`]:e.overlap,[`${d}-popover-shared--show-arrow`]:e.showArrow,[`${d}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:c,style:v.value,onKeydown:l.handleKeydown,onMouseenter:y,onMouseleave:E},t),k?m(Wr,{active:e.show,autoFocus:!0},{default:z}):z())}return Me(P,u.value)}return{displayed:h,namespace:r,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:s,adjustedTo:Pe(e),followerEnabled:f,renderContentNode:I}},render(){return m(Lt,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===Pe.tdkey},{default:()=>this.animated?m(St,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),Nl=Object.keys(Ut),Hl={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Bl(e,o,t){Hl[o].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const n=e.props[r],i=t[r];n?e.props[r]=(...a)=>{n(...a),i(...a)}:e.props[r]=i})}const El=bo("").type,Ze={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:Pe.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Rl=Object.assign(Object.assign(Object.assign({},G.props),Ze),{internalOnAfterLeave:Function,internalRenderBody:Function}),qt=K({name:"Popover",inheritAttrs:!1,props:Rl,__popover__:!0,setup(e){const o=bt(),t=F(null),r=M(()=>e.show),n=F(e.defaultShow),i=Te(r,n),a=oe(()=>e.disabled?!1:i.value),s=()=>{if(e.disabled)return!0;const{getDisabled:z}=e;return!!(z!=null&&z())},l=()=>s()?!1:i.value,c=Mt(e,["arrow","showArrow"]),f=M(()=>e.overlap?!1:c.value);let h=null;const u=F(null),v=F(null),p=oe(()=>e.x!==void 0&&e.y!==void 0);function g(z){const{"onUpdate:show":N,onUpdateShow:b,onShow:R,onHide:D}=e;n.value=z,N&&Z(N,z),b&&Z(b,z),z&&R&&Z(R,!0),z&&D&&Z(D,!1)}function w(){h&&h.syncPosition()}function y(){const{value:z}=u;z&&(window.clearTimeout(z),u.value=null)}function E(){const{value:z}=v;z&&(window.clearTimeout(z),v.value=null)}function A(){const z=s();if(e.trigger==="focus"&&!z){if(l())return;g(!0)}}function x(){const z=s();if(e.trigger==="focus"&&!z){if(!l())return;g(!1)}}function C(){const z=s();if(e.trigger==="hover"&&!z){if(E(),u.value!==null||l())return;const N=()=>{g(!0),u.value=null},{delay:b}=e;b===0?N():u.value=window.setTimeout(N,b)}}function I(){const z=s();if(e.trigger==="hover"&&!z){if(y(),v.value!==null||!l())return;const N=()=>{g(!1),v.value=null},{duration:b}=e;b===0?N():v.value=window.setTimeout(N,b)}}function S(){I()}function P(z){var N;l()&&(e.trigger==="click"&&(y(),E(),g(!1)),(N=e.onClickoutside)===null||N===void 0||N.call(e,z))}function $(){if(e.trigger==="click"&&!s()){y(),E();const z=!l();g(z)}}function d(z){e.internalTrapFocus&&z.key==="Escape"&&(y(),E(),g(!1))}function T(z){n.value=z}function k(){var z;return(z=t.value)===null||z===void 0?void 0:z.targetRef}function L(z){h=z}return J("NPopover",{getTriggerElement:k,handleKeydown:d,handleMouseEnter:C,handleMouseLeave:I,handleClickOutside:P,handleMouseMoveOutside:S,setBodyInstance:L,positionManuallyRef:p,isMountedRef:o,zIndexRef:q(e,"zIndex"),extraClassRef:q(e,"internalExtraClass"),internalRenderBodyRef:q(e,"internalRenderBody")}),Oe(()=>{i.value&&s()&&g(!1)}),{binderInstRef:t,positionManually:p,mergedShowConsideringDisabledProp:a,uncontrolledShow:n,mergedShowArrow:f,getMergedShow:l,setShow:T,handleClick:$,handleMouseEnter:C,handleMouseLeave:I,handleFocus:A,handleBlur:x,syncPosition:w}},render(){var e;const{positionManually:o,$slots:t}=this;let r,n=!1;if(!o&&(t.activator?r=Xo(t,"activator"):r=Xo(t,"trigger"),r)){r=Vr(r),r=r.type===El?m("span",[r]):r;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)n=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[i,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:a}=this,s=[i,...a],l={onBlur:c=>{s.forEach(f=>{f.onBlur(c)})},onFocus:c=>{s.forEach(f=>{f.onFocus(c)})},onClick:c=>{s.forEach(f=>{f.onClick(c)})},onMouseenter:c=>{s.forEach(f=>{f.onMouseenter(c)})},onMouseleave:c=>{s.forEach(f=>{f.onMouseleave(c)})}};Bl(r,a?"nested":o?"manual":this.trigger,l)}}return m(Et,{ref:"binderInstRef",syncTarget:!n,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?Me(m("div",{style:{position:"fixed",inset:0}}),[[yt,{enabled:i,zIndex:this.zIndex}]]):null,o?null:m(Rt,null,{default:()=>r}),m(Ml,_e(this.$props,Nl,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var a,s;return(s=(a=this.$slots).default)===null||s===void 0?void 0:s.call(a)},header:()=>{var a,s;return(s=(a=this.$slots).header)===null||s===void 0?void 0:s.call(a)},footer:()=>{var a,s;return(s=(a=this.$slots).footer)===null||s===void 0?void 0:s.call(a)}})]}})}}),Ll={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"},Fl=e=>{const{textColor2:o,primaryColorHover:t,primaryColorPressed:r,primaryColor:n,infoColor:i,successColor:a,warningColor:s,errorColor:l,baseColor:c,borderColor:f,opacityDisabled:h,tagColor:u,closeIconColor:v,closeIconColorHover:p,closeIconColorPressed:g,borderRadiusSmall:w,fontSizeMini:y,fontSizeTiny:E,fontSizeSmall:A,fontSizeMedium:x,heightMini:C,heightTiny:I,heightSmall:S,heightMedium:P,closeColorHover:$,closeColorPressed:d,buttonColor2Hover:T,buttonColor2Pressed:k,fontWeightStrong:L}=e;return Object.assign(Object.assign({},Ll),{closeBorderRadius:w,heightTiny:C,heightSmall:I,heightMedium:S,heightLarge:P,borderRadius:w,opacityDisabled:h,fontSizeTiny:y,fontSizeSmall:E,fontSizeMedium:A,fontSizeLarge:x,fontWeightStrong:L,textColorCheckable:o,textColorHoverCheckable:o,textColorPressedCheckable:o,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:T,colorPressedCheckable:k,colorChecked:n,colorCheckedHover:t,colorCheckedPressed:r,border:`1px solid ${f}`,textColor:o,color:u,colorBordered:"rgb(250, 250, 252)",closeIconColor:v,closeIconColorHover:p,closeIconColorPressed:g,closeColorHover:$,closeColorPressed:d,borderPrimary:`1px solid ${j(n,{alpha:.3})}`,textColorPrimary:n,colorPrimary:j(n,{alpha:.12}),colorBorderedPrimary:j(n,{alpha:.1}),closeIconColorPrimary:n,closeIconColorHoverPrimary:n,closeIconColorPressedPrimary:n,closeColorHoverPrimary:j(n,{alpha:.12}),closeColorPressedPrimary:j(n,{alpha:.18}),borderInfo:`1px solid ${j(i,{alpha:.3})}`,textColorInfo:i,colorInfo:j(i,{alpha:.12}),colorBorderedInfo:j(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:j(i,{alpha:.12}),closeColorPressedInfo:j(i,{alpha:.18}),borderSuccess:`1px solid ${j(a,{alpha:.3})}`,textColorSuccess:a,colorSuccess:j(a,{alpha:.12}),colorBorderedSuccess:j(a,{alpha:.1}),closeIconColorSuccess:a,closeIconColorHoverSuccess:a,closeIconColorPressedSuccess:a,closeColorHoverSuccess:j(a,{alpha:.12}),closeColorPressedSuccess:j(a,{alpha:.18}),borderWarning:`1px solid ${j(s,{alpha:.35})}`,textColorWarning:s,colorWarning:j(s,{alpha:.15}),colorBorderedWarning:j(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:j(s,{alpha:.12}),closeColorPressedWarning:j(s,{alpha:.18}),borderError:`1px solid ${j(l,{alpha:.23})}`,textColorError:l,colorError:j(l,{alpha:.1}),colorBorderedError:j(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:j(l,{alpha:.12}),closeColorPressedError:j(l,{alpha:.18})})},Kl={name:"Tag",common:pe,self:Fl},Dl=Kl,jl={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Wl=_("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[B("strong",`
 font-weight: var(--n-font-weight-strong);
 `),O("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),O("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),O("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),O("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),B("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[O("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),O("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),B("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),B("icon, avatar",[B("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),B("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),B("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[Q("disabled",[H("&:hover","background-color: var(--n-color-hover-checkable);",[Q("checked","color: var(--n-text-color-hover-checkable);")]),H("&:active","background-color: var(--n-color-pressed-checkable);",[Q("checked","color: var(--n-text-color-pressed-checkable);")])]),B("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[Q("disabled",[H("&:hover","background-color: var(--n-color-checked-hover);"),H("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Vl=Object.assign(Object.assign(Object.assign({},G.props),jl),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Xt=ie("n-tag");K({name:"Tag",props:Vl,setup(e){const o=F(null),{mergedBorderedRef:t,mergedClsPrefixRef:r,inlineThemeDisabled:n,mergedRtlRef:i}=se(e),a=G("Tag","-tag",Wl,Dl,e,r);J(Xt,{roundRef:q(e,"round")});function s(v){if(!e.disabled&&e.checkable){const{checked:p,onCheckedChange:g,onUpdateChecked:w,"onUpdate:checked":y}=e;w&&w(!p),y&&y(!p),g&&g(!p)}}function l(v){if(e.triggerClickOnClose||v.stopPropagation(),!e.disabled){const{onClose:p}=e;p&&Z(p,v)}}const c={setTextContent(v){const{value:p}=o;p&&(p.textContent=v)}},f=Gr("Tag",i,r),h=M(()=>{const{type:v,size:p,color:{color:g,textColor:w}={}}=e,{common:{cubicBezierEaseInOut:y},self:{padding:E,closeMargin:A,closeMarginRtl:x,borderRadius:C,opacityDisabled:I,textColorCheckable:S,textColorHoverCheckable:P,textColorPressedCheckable:$,textColorChecked:d,colorCheckable:T,colorHoverCheckable:k,colorPressedCheckable:L,colorChecked:z,colorCheckedHover:N,colorCheckedPressed:b,closeBorderRadius:R,fontWeightStrong:D,[Y("colorBordered",v)]:U,[Y("closeSize",p)]:te,[Y("closeIconSize",p)]:me,[Y("fontSize",p)]:ce,[Y("height",p)]:He,[Y("color",v)]:oo,[Y("textColor",v)]:to,[Y("border",v)]:ro,[Y("closeIconColor",v)]:V,[Y("closeIconColorHover",v)]:fr,[Y("closeIconColorPressed",v)]:hr,[Y("closeColorHover",v)]:vr,[Y("closeColorPressed",v)]:pr}}=a.value;return{"--n-font-weight-strong":D,"--n-avatar-size-override":`calc(${He} - 8px)`,"--n-bezier":y,"--n-border-radius":C,"--n-border":ro,"--n-close-icon-size":me,"--n-close-color-pressed":pr,"--n-close-color-hover":vr,"--n-close-border-radius":R,"--n-close-icon-color":V,"--n-close-icon-color-hover":fr,"--n-close-icon-color-pressed":hr,"--n-close-icon-color-disabled":V,"--n-close-margin":A,"--n-close-margin-rtl":x,"--n-close-size":te,"--n-color":g||(t.value?U:oo),"--n-color-checkable":T,"--n-color-checked":z,"--n-color-checked-hover":N,"--n-color-checked-pressed":b,"--n-color-hover-checkable":k,"--n-color-pressed-checkable":L,"--n-font-size":ce,"--n-height":He,"--n-opacity-disabled":I,"--n-padding":E,"--n-text-color":w||to,"--n-text-color-checkable":S,"--n-text-color-checked":d,"--n-text-color-hover-checkable":P,"--n-text-color-pressed-checkable":$}}),u=n?de("tag",M(()=>{let v="";const{type:p,size:g,color:{color:w,textColor:y}={}}=e;return v+=p[0],v+=g[0],w&&(v+=`a${yo(w)}`),y&&(v+=`b${yo(y)}`),t.value&&(v+="c"),v}),h,e):void 0;return Object.assign(Object.assign({},c),{rtlEnabled:f,mergedClsPrefix:r,contentRef:o,mergedBordered:t,handleClick:s,handleCloseClick:l,cssVars:n?void 0:h,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender})},render(){var e,o;const{mergedClsPrefix:t,rtlEnabled:r,closable:n,color:{borderColor:i}={},round:a,onRender:s,$slots:l}=this;s==null||s();const c=we(l.avatar,h=>h&&m("div",{class:`${t}-tag__avatar`},h)),f=we(l.icon,h=>h&&m("div",{class:`${t}-tag__icon`},h));return m("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:r,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:a,[`${t}-tag--avatar`]:c,[`${t}-tag--icon`]:f,[`${t}-tag--closable`]:n}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},f||c,m("span",{class:`${t}-tag__content`,ref:"contentRef"},(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e)),!this.checkable&&n?m(Ur,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:a,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?m("div",{class:`${t}-tag__border`,style:{borderColor:i}}):null)}});const ho=Yr&&"loading"in document.createElement("img"),Gl=(e={})=>{var o;const{root:t=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(o=e.threshold)!==null&&o!==void 0?o:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof t=="string"?document.querySelector(t):t)||document.documentElement})}},vo=new WeakMap,po=new WeakMap,mo=new WeakMap,Ul=(e,o,t)=>{if(!e)return()=>{};const r=Gl(o),{root:n}=r.options;let i;const a=vo.get(n);a?i=a:(i=new Map,vo.set(n,i));let s,l;i.has(r.hash)?(l=i.get(r.hash),l[1].has(e)||(s=l[0],l[1].add(e),s.observe(e))):(s=new IntersectionObserver(h=>{h.forEach(u=>{if(u.isIntersecting){const v=po.get(u.target),p=mo.get(u.target);v&&v(),p&&(p.value=!0)}})},r.options),s.observe(e),l=[s,new Set([e])],i.set(r.hash,l));let c=!1;const f=()=>{c||(po.delete(e),mo.delete(e),c=!0,l[1].has(e)&&(l[0].unobserve(e),l[1].delete(e)),l[1].size<=0&&i.delete(r.hash),i.size||vo.delete(n))};return po.set(e,f),mo.set(e,t),f},Yl=e=>{const{borderRadius:o,avatarColor:t,cardColor:r,fontSize:n,heightTiny:i,heightSmall:a,heightMedium:s,heightLarge:l,heightHuge:c,modalColor:f,popoverColor:h}=e;return{borderRadius:o,fontSize:n,border:`2px solid ${r}`,heightTiny:i,heightSmall:a,heightMedium:s,heightLarge:l,heightHuge:c,color:Se(r,t),colorModal:Se(f,t),colorPopover:Se(h,t)}},ql={name:"Avatar",common:pe,self:Yl},Xl=ql,Zl=ie("n-avatar-group"),Jl=_("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[qr(H("&","--n-merged-color: var(--n-color-modal);")),Xr(H("&","--n-merged-color: var(--n-color-popover);")),H("img",`
 width: 100%;
 height: 100%;
 `),O("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),_("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),O("text","line-height: 1.25")]),Ql=Object.assign(Object.assign({},G.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),ea=K({name:"Avatar",props:Ql,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=se(e),r=F(!1);let n=null;const i=F(null),a=F(null),s=()=>{const{value:A}=i;if(A&&(n===null||n!==A.innerHTML)){n=A.innerHTML;const{value:x}=a;if(x){const{offsetWidth:C,offsetHeight:I}=x,{offsetWidth:S,offsetHeight:P}=A,$=.9,d=Math.min(C/S*$,I/P*$,1);A.style.transform=`translateX(-50%) translateY(-50%) scale(${d})`}}},l=W(Zl,null),c=M(()=>{const{size:A}=e;if(A)return A;const{size:x}=l||{};return x||"medium"}),f=G("Avatar","-avatar",Jl,Xl,e,o),h=W(Xt,null),u=M(()=>{if(l)return!0;const{round:A,circle:x}=e;return A!==void 0||x!==void 0?A||x:h?h.roundRef.value:!1}),v=M(()=>l?!0:e.bordered||!1),p=A=>{var x;if(!y.value)return;r.value=!0;const{onError:C,imgProps:I}=e;(x=I==null?void 0:I.onError)===null||x===void 0||x.call(I,A),C&&C(A)};fe(()=>e.src,()=>r.value=!1);const g=M(()=>{const A=c.value,x=u.value,C=v.value,{color:I}=e,{self:{borderRadius:S,fontSize:P,color:$,border:d,colorModal:T,colorPopover:k},common:{cubicBezierEaseInOut:L}}=f.value;let z;return typeof A=="number"?z=`${A}px`:z=f.value.self[Y("height",A)],{"--n-font-size":P,"--n-border":C?d:"none","--n-border-radius":x?"50%":S,"--n-color":I||$,"--n-color-modal":I||T,"--n-color-popover":I||k,"--n-bezier":L,"--n-merged-size":`var(--n-avatar-size-override, ${z})`}}),w=t?de("avatar",M(()=>{const A=c.value,x=u.value,C=v.value,{color:I}=e;let S="";return A&&(typeof A=="number"?S+=`a${A}`:S+=A[0]),x&&(S+="b"),C&&(S+="c"),I&&(S+=yo(I)),S}),g,e):void 0,y=F(!e.lazy);$e(()=>{if(ho)return;let A;const x=Oe(()=>{A==null||A(),A=void 0,e.lazy&&(A=Ul(a.value,e.intersectionObserverOptions,y))});xe(()=>{x(),A==null||A()})});const E=F(!e.lazy);return{textRef:i,selfRef:a,mergedRoundRef:u,mergedClsPrefix:o,fitTextTransform:s,cssVars:t?void 0:g,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender,hasLoadError:r,handleError:p,shouldStartLoading:y,loaded:E,mergedOnLoad:A=>{var x;const{onLoad:C,imgProps:I}=e;C==null||C(A),(x=I==null?void 0:I.onLoad)===null||x===void 0||x.call(I,A),E.value=!0}}},render(){var e,o;const{$slots:t,src:r,mergedClsPrefix:n,lazy:i,onRender:a,mergedOnLoad:s,shouldStartLoading:l,loaded:c,hasLoadError:f}=this;a==null||a();let h;const u=!c&&!f&&(this.renderPlaceholder?this.renderPlaceholder():(o=(e=this.$slots).placeholder)===null||o===void 0?void 0:o.call(e));return this.hasLoadError?h=this.renderFallback?this.renderFallback():Zr(t.fallback,()=>[m("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):h=we(t.default,v=>{if(v)return m(Jr,{onResize:this.fitTextTransform},{default:()=>m("span",{ref:"textRef",class:`${n}-avatar__text`},v)});if(r){const{imgProps:p}=this;return m("img",Object.assign(Object.assign({},p),{loading:ho&&!this.intersectionObserverOptions&&i?"lazy":"eager",src:ho||l||c?r:void 0,onLoad:s,"data-image-src":r,onError:this.handleError,style:[p==null?void 0:p.style,{objectFit:this.objectFit},u?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),m("span",{ref:"selfRef",class:[`${n}-avatar`,this.themeClass],style:this.cssVars},h,i&&u)}}),oa={padding:"8px 14px"},ta=e=>{const{borderRadius:o,boxShadow2:t,baseColor:r}=e;return Object.assign(Object.assign({},oa),{borderRadius:o,boxShadow:t,color:Se(r,"rgba(0, 0, 0, .85)"),textColor:r})},ra=qe({name:"Tooltip",common:pe,peers:{Popover:Ho},self:ta}),Zt=ra,na={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},ia=e=>{const{primaryColor:o,textColor2:t,dividerColor:r,hoverColor:n,popoverColor:i,invertedColor:a,borderRadius:s,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:f,fontSizeHuge:h,heightSmall:u,heightMedium:v,heightLarge:p,heightHuge:g,textColor3:w,opacityDisabled:y}=e;return Object.assign(Object.assign({},na),{optionHeightSmall:u,optionHeightMedium:v,optionHeightLarge:p,optionHeightHuge:g,borderRadius:s,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:f,fontSizeHuge:h,optionTextColor:t,optionTextColorHover:t,optionTextColorActive:o,optionTextColorChildActive:o,color:i,dividerColor:r,suffixColor:t,prefixColor:t,optionColorHover:n,optionColorActive:j(o,{alpha:.1}),groupHeaderTextColor:w,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:a,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:o,optionColorActiveInverted:o,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:y})},la=qe({name:"Dropdown",common:pe,peers:{Popover:Ho},self:ia}),Jt=la,aa=Object.assign(Object.assign({},Ze),G.props),sa=K({name:"Tooltip",props:aa,__popover__:!0,setup(e){const o=G("Tooltip","-tooltip",void 0,Zt,e),t=F(null);return Object.assign(Object.assign({},{syncPosition(){t.value.syncPosition()},setShow(n){t.value.setShow(n)}}),{popoverRef:t,mergedTheme:o,popoverThemeOverrides:M(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:o}=this;return m(qt,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:o.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),Qt=K({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return m("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),da=e=>{const{textColorBase:o,opacity1:t,opacity2:r,opacity3:n,opacity4:i,opacity5:a}=e;return{color:o,opacity1Depth:t,opacity2Depth:r,opacity3Depth:n,opacity4Depth:i,opacity5Depth:a}},ca={name:"Icon",common:pe,self:da},ua=ca,fa=_("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[B("color-transition",{transition:"color .3s var(--n-bezier)"}),B("depth",{color:"var(--n-color)"},[H("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),H("svg",{height:"1em",width:"1em"})]),ha=Object.assign(Object.assign({},G.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),er=K({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:ha,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=se(e),r=G("Icon","-icon",fa,ua,e,o),n=M(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:s},self:l}=r.value;if(a!==void 0){const{color:c,[`opacity${a}Depth`]:f}=l;return{"--n-bezier":s,"--n-color":c,"--n-opacity":f}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=t?de("icon",M(()=>`${e.depth||"d"}`),n,e):void 0;return{mergedClsPrefix:o,mergedStyle:M(()=>{const{size:a,color:s}=e;return{fontSize:ye(a),color:s}}),cssVars:t?void 0:n,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:o,depth:t,mergedClsPrefix:r,component:n,onRender:i,themeClass:a}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&It("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),m("i",Ye(this.$attrs,{role:"img",class:[`${r}-icon`,a,{[`${r}-icon--depth`]:t,[`${r}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),n?m(n):this.$slots)}}),Bo=ie("n-dropdown-menu"),Je=ie("n-dropdown"),pt=ie("n-dropdown-option");function Io(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function va(e){return e.type==="group"}function or(e){return e.type==="divider"}function pa(e){return e.type==="render"}const tr=K({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=W(Je),{hoverKeyRef:t,keyboardKeyRef:r,lastToggledSubmenuKeyRef:n,pendingKeyPathRef:i,activeKeyPathRef:a,animatedRef:s,mergedShowRef:l,renderLabelRef:c,renderIconRef:f,labelFieldRef:h,childrenFieldRef:u,renderOptionRef:v,nodePropsRef:p,menuPropsRef:g}=o,w=W(pt,null),y=W(Bo),E=W(Ve),A=M(()=>e.tmNode.rawNode),x=M(()=>{const{value:R}=u;return Io(e.tmNode.rawNode,R)}),C=M(()=>{const{disabled:R}=e.tmNode;return R}),I=M(()=>{if(!x.value)return!1;const{key:R,disabled:D}=e.tmNode;if(D)return!1;const{value:U}=t,{value:te}=r,{value:me}=n,{value:ce}=i;return U!==null?ce.includes(R):te!==null?ce.includes(R)&&ce[ce.length-1]!==R:me!==null?ce.includes(R):!1}),S=M(()=>r.value===null&&!s.value),P=Cn(I,300,S),$=M(()=>!!(w!=null&&w.enteringSubmenuRef.value)),d=F(!1);J(pt,{enteringSubmenuRef:d});function T(){d.value=!0}function k(){d.value=!1}function L(){const{parentKey:R,tmNode:D}=e;D.disabled||l.value&&(n.value=R,r.value=null,t.value=D.key)}function z(){const{tmNode:R}=e;R.disabled||l.value&&t.value!==R.key&&L()}function N(R){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:D}=R;D&&!Zo({target:D},"dropdownOption")&&!Zo({target:D},"scrollbarRail")&&(t.value=null)}function b(){const{value:R}=x,{tmNode:D}=e;l.value&&!R&&!D.disabled&&(o.doSelect(D.key,D.rawNode),o.doUpdateShow(!1))}return{labelField:h,renderLabel:c,renderIcon:f,siblingHasIcon:y.showIconRef,siblingHasSubmenu:y.hasSubmenuRef,menuProps:g,popoverBody:E,animated:s,mergedShowSubmenu:M(()=>P.value&&!$.value),rawNode:A,hasSubmenu:x,pending:oe(()=>{const{value:R}=i,{key:D}=e.tmNode;return R.includes(D)}),childActive:oe(()=>{const{value:R}=a,{key:D}=e.tmNode,U=R.findIndex(te=>D===te);return U===-1?!1:U<R.length-1}),active:oe(()=>{const{value:R}=a,{key:D}=e.tmNode,U=R.findIndex(te=>D===te);return U===-1?!1:U===R.length-1}),mergedDisabled:C,renderOption:v,nodeProps:p,handleClick:b,handleMouseMove:z,handleMouseEnter:L,handleMouseLeave:N,handleSubmenuBeforeEnter:T,handleSubmenuAfterEnter:k}},render(){var e,o;const{animated:t,rawNode:r,mergedShowSubmenu:n,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:s,renderLabel:l,renderIcon:c,renderOption:f,nodeProps:h,props:u,scrollable:v}=this;let p=null;if(n){const E=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);p=m(rr,Object.assign({},E,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const g={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},w=h==null?void 0:h(r),y=m("div",Object.assign({class:[`${i}-dropdown-option`,w==null?void 0:w.class],"data-dropdown-option":!0},w),m("div",Ye(g,u),[m("div",{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(r):ae(r.icon)]),m("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},l?l(r):ae((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),m("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?m(er,null,{default:()=>m(jt,null)}):null)]),this.hasSubmenu?m(Et,null,{default:()=>[m(Rt,null,{default:()=>m("div",{class:`${i}-dropdown-offset-container`},m(Lt,{show:this.mergedShowSubmenu,placement:this.placement,to:v&&this.popoverBody||void 0,teleportDisabled:!v},{default:()=>m("div",{class:`${i}-dropdown-menu-wrapper`},t?m(St,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>p}):p)}))})]}):null);return f?f({node:y,option:r}):y}}),ma=K({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=W(Bo),{renderLabelRef:t,labelFieldRef:r,nodePropsRef:n,renderOptionRef:i}=W(Je);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:t,nodeProps:n,renderOption:i}},render(){var e;const{clsPrefix:o,hasSubmenu:t,showIcon:r,nodeProps:n,renderLabel:i,renderOption:a}=this,{rawNode:s}=this.tmNode,l=m("div",Object.assign({class:`${o}-dropdown-option`},n==null?void 0:n(s)),m("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},m("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},ae(s.icon)),m("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):ae((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),m("div",{class:[`${o}-dropdown-option-body__suffix`,t&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:l,option:s}):l}}),ga=K({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:t}=this,{children:r}=e;return m(ko,null,m(ma,{clsPrefix:t,tmNode:e,key:e.key}),r==null?void 0:r.map(n=>{const{rawNode:i}=n;return i.show===!1?null:or(i)?m(Qt,{clsPrefix:t,key:n.key}):n.isGroup?(It("dropdown","`group` node is not allowed to be put in `group` node."),null):m(tr,{clsPrefix:t,tmNode:n,parentKey:o,key:n.key})}))}}),ba=K({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return m("div",o,[e==null?void 0:e()])}}),rr=K({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:t}=W(Je);J(Bo,{showIconRef:M(()=>{const n=o.value;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>n?n(l):l.icon);const{rawNode:s}=i;return n?n(s):s.icon})}),hasSubmenuRef:M(()=>{const{value:n}=t;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>Io(l,n));const{rawNode:s}=i;return Io(s,n)})})});const r=F(null);return J(Po,null),J($o,null),J(Ve,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:t}=this,r=this.tmNodes.map(n=>{const{rawNode:i}=n;return i.show===!1?null:pa(i)?m(ba,{tmNode:n,key:n.key}):or(i)?m(Qt,{clsPrefix:o,key:n.key}):va(i)?m(ga,{clsPrefix:o,tmNode:n,parentKey:e,key:n.key}):m(tr,{clsPrefix:o,tmNode:n,parentKey:e,key:n.key,props:i.props,scrollable:t})});return m("div",{class:[`${o}-dropdown-menu`,t&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},t?m(zt,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Yt({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),ya=_("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Qr(),_("dropdown-option",`
 position: relative;
 `,[H("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[H("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),_("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[H("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),Q("disabled",[B("pending",`
 color: var(--n-option-text-color-hover);
 `,[O("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),H("&::before","background-color: var(--n-option-color-hover);")]),B("active",`
 color: var(--n-option-text-color-active);
 `,[O("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),H("&::before","background-color: var(--n-option-color-active);")]),B("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[O("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),B("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),B("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[O("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[B("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),O("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[B("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),_("icon",`
 font-size: var(--n-option-icon-size);
 `)]),O("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),O("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[B("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),_("icon",`
 font-size: var(--n-option-icon-size);
 `)]),_("dropdown-menu","pointer-events: all;")]),_("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),_("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),_("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),H(">",[_("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),Q("scrollable",`
 padding: var(--n-padding);
 `),B("scrollable",[O("content",`
 padding: var(--n-padding);
 `)])]),xa={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Ca=Object.keys(Ze),wa=Object.assign(Object.assign(Object.assign({},Ze),xa),G.props),Sa=K({name:"Dropdown",inheritAttrs:!1,props:wa,setup(e){const o=F(!1),t=Te(q(e,"show"),o),r=M(()=>{const{keyField:k,childrenField:L}=e;return Gt(e.options,{getKey(z){return z[k]},getDisabled(z){return z.disabled===!0},getIgnored(z){return z.type==="divider"||z.type==="render"},getChildren(z){return z[L]}})}),n=M(()=>r.value.treeNodes),i=F(null),a=F(null),s=F(null),l=M(()=>{var k,L,z;return(z=(L=(k=i.value)!==null&&k!==void 0?k:a.value)!==null&&L!==void 0?L:s.value)!==null&&z!==void 0?z:null}),c=M(()=>r.value.getPath(l.value).keyPath),f=M(()=>r.value.getPath(e.value).keyPath),h=oe(()=>e.keyboard&&t.value);zn({keydown:{ArrowUp:{prevent:!0,handler:C},ArrowRight:{prevent:!0,handler:x},ArrowDown:{prevent:!0,handler:I},ArrowLeft:{prevent:!0,handler:A},Enter:{prevent:!0,handler:S},Escape:E}},h);const{mergedClsPrefixRef:u,inlineThemeDisabled:v}=se(e),p=G("Dropdown","-dropdown",ya,Jt,e,u);J(Je,{labelFieldRef:q(e,"labelField"),childrenFieldRef:q(e,"childrenField"),renderLabelRef:q(e,"renderLabel"),renderIconRef:q(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:a,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:c,activeKeyPathRef:f,animatedRef:q(e,"animated"),mergedShowRef:t,nodePropsRef:q(e,"nodeProps"),renderOptionRef:q(e,"renderOption"),menuPropsRef:q(e,"menuProps"),doSelect:g,doUpdateShow:w}),fe(t,k=>{!e.animated&&!k&&y()});function g(k,L){const{onSelect:z}=e;z&&Z(z,k,L)}function w(k){const{"onUpdate:show":L,onUpdateShow:z}=e;L&&Z(L,k),z&&Z(z,k),o.value=k}function y(){i.value=null,a.value=null,s.value=null}function E(){w(!1)}function A(){$("left")}function x(){$("right")}function C(){$("up")}function I(){$("down")}function S(){const k=P();k!=null&&k.isLeaf&&t.value&&(g(k.key,k.rawNode),w(!1))}function P(){var k;const{value:L}=r,{value:z}=l;return!L||z===null?null:(k=L.getNode(z))!==null&&k!==void 0?k:null}function $(k){const{value:L}=l,{value:{getFirstAvailableNode:z}}=r;let N=null;if(L===null){const b=z();b!==null&&(N=b.key)}else{const b=P();if(b){let R;switch(k){case"down":R=b.getNext();break;case"up":R=b.getPrev();break;case"right":R=b.getChild();break;case"left":R=b.getParent();break}R&&(N=R.key)}}N!==null&&(i.value=null,a.value=N)}const d=M(()=>{const{size:k,inverted:L}=e,{common:{cubicBezierEaseInOut:z},self:N}=p.value,{padding:b,dividerColor:R,borderRadius:D,optionOpacityDisabled:U,[Y("optionIconSuffixWidth",k)]:te,[Y("optionSuffixWidth",k)]:me,[Y("optionIconPrefixWidth",k)]:ce,[Y("optionPrefixWidth",k)]:He,[Y("fontSize",k)]:oo,[Y("optionHeight",k)]:to,[Y("optionIconSize",k)]:ro}=N,V={"--n-bezier":z,"--n-font-size":oo,"--n-padding":b,"--n-border-radius":D,"--n-option-height":to,"--n-option-prefix-width":He,"--n-option-icon-prefix-width":ce,"--n-option-suffix-width":me,"--n-option-icon-suffix-width":te,"--n-option-icon-size":ro,"--n-divider-color":R,"--n-option-opacity-disabled":U};return L?(V["--n-color"]=N.colorInverted,V["--n-option-color-hover"]=N.optionColorHoverInverted,V["--n-option-color-active"]=N.optionColorActiveInverted,V["--n-option-text-color"]=N.optionTextColorInverted,V["--n-option-text-color-hover"]=N.optionTextColorHoverInverted,V["--n-option-text-color-active"]=N.optionTextColorActiveInverted,V["--n-option-text-color-child-active"]=N.optionTextColorChildActiveInverted,V["--n-prefix-color"]=N.prefixColorInverted,V["--n-suffix-color"]=N.suffixColorInverted,V["--n-group-header-text-color"]=N.groupHeaderTextColorInverted):(V["--n-color"]=N.color,V["--n-option-color-hover"]=N.optionColorHover,V["--n-option-color-active"]=N.optionColorActive,V["--n-option-text-color"]=N.optionTextColor,V["--n-option-text-color-hover"]=N.optionTextColorHover,V["--n-option-text-color-active"]=N.optionTextColorActive,V["--n-option-text-color-child-active"]=N.optionTextColorChildActive,V["--n-prefix-color"]=N.prefixColor,V["--n-suffix-color"]=N.suffixColor,V["--n-group-header-text-color"]=N.groupHeaderTextColor),V}),T=v?de("dropdown",M(()=>`${e.size[0]}${e.inverted?"i":""}`),d,e):void 0;return{mergedClsPrefix:u,mergedTheme:p,tmNodes:n,mergedShow:t,handleAfterLeave:()=>{e.animated&&y()},doUpdateShow:w,cssVars:v?void 0:d,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const e=(r,n,i,a,s)=>{var l;const{mergedClsPrefix:c,menuProps:f}=this;(l=this.onRender)===null||l===void 0||l.call(this);const h=(f==null?void 0:f(void 0,this.tmNodes.map(v=>v.rawNode)))||{},u={ref:yn(n),class:[r,`${c}-dropdown`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:s};return m(rr,Ye(this.$attrs,u,h))},{mergedTheme:o}=this,t={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return m(qt,Object.assign({},_e(this.$props,Ca),t),{trigger:()=>{var r,n;return(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r)}})}});function za(){const e=W(en,null);return e===null&&Pt("use-dialog","No outer <n-dialog-provider /> founded."),e}const Ia=e=>{const{baseColor:o,textColor2:t,bodyColor:r,cardColor:n,dividerColor:i,actionColor:a,scrollbarColor:s,scrollbarColorHover:l,invertedColor:c}=e;return{textColor:t,textColorInverted:"#FFF",color:r,colorEmbedded:a,headerColor:n,headerColorInverted:c,footerColor:a,footerColorInverted:c,headerBorderColor:i,headerBorderColorInverted:c,footerBorderColor:i,footerBorderColorInverted:c,siderBorderColor:i,siderBorderColorInverted:c,siderColor:n,siderColorInverted:c,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:o,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:Se(r,s),siderToggleBarColorHover:Se(r,l),__invertScrollbar:"true"}},Pa=qe({name:"Layout",common:pe,peers:{Scrollbar:on},self:Ia}),Qe=Pa;function $a(e,o,t,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:o,itemColorActiveHoverInverted:o,itemColorActiveCollapsedInverted:o,itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorChildActiveHoverInverted:t,itemTextColorActiveInverted:t,itemTextColorActiveHoverInverted:t,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:t,itemTextColorChildActiveHorizontalInverted:t,itemTextColorChildActiveHoverHorizontalInverted:t,itemTextColorActiveHorizontalInverted:t,itemTextColorActiveHoverHorizontalInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorActiveHoverInverted:t,itemIconColorChildActiveInverted:t,itemIconColorChildActiveHoverInverted:t,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:t,itemIconColorActiveHorizontalInverted:t,itemIconColorActiveHoverHorizontalInverted:t,itemIconColorChildActiveHorizontalInverted:t,itemIconColorChildActiveHoverHorizontalInverted:t,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorActiveInverted:t,arrowColorActiveHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorChildActiveHoverInverted:t,groupTextColorInverted:r}}const Aa=e=>{const{borderRadius:o,textColor3:t,primaryColor:r,textColor2:n,textColor1:i,fontSize:a,dividerColor:s,hoverColor:l,primaryColorHover:c}=e;return Object.assign({borderRadius:o,color:"#0000",groupTextColor:t,itemColorHover:l,itemColorActive:j(r,{alpha:.1}),itemColorActiveHover:j(r,{alpha:.1}),itemColorActiveCollapsed:j(r,{alpha:.1}),itemTextColor:n,itemTextColorHover:n,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:n,itemTextColorHoverHorizontal:c,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:c,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:n,arrowColorHover:n,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:a,dividerColor:s},$a("#BBB",r,"#FFF","#AAA"))},_a=qe({name:"Menu",common:pe,peers:{Tooltip:Zt,Dropdown:Jt},self:Aa}),ka=_a,nr=ie("n-layout-sider"),eo={type:String,default:"static"},Oa=_("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[_("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),B("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Ta={embedded:Boolean,position:eo,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},ir=ie("n-layout");function lr(e){return K({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},G.props),Ta),setup(o){const t=F(null),r=F(null),{mergedClsPrefixRef:n,inlineThemeDisabled:i}=se(o),a=G("Layout","-layout",Oa,Qe,o,n);function s(g,w){if(o.nativeScrollbar){const{value:y}=t;y&&(w===void 0?y.scrollTo(g):y.scrollTo(g,w))}else{const{value:y}=r;y&&y.scrollTo(g,w)}}J(ir,o);let l=0,c=0;const f=g=>{var w;const y=g.target;l=y.scrollLeft,c=y.scrollTop,(w=o.onScroll)===null||w===void 0||w.call(o,g)};$t(()=>{if(o.nativeScrollbar){const g=t.value;g&&(g.scrollTop=c,g.scrollLeft=l)}});const h={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},u={scrollTo:s},v=M(()=>{const{common:{cubicBezierEaseInOut:g},self:w}=a.value;return{"--n-bezier":g,"--n-color":o.embedded?w.colorEmbedded:w.color,"--n-text-color":w.textColor}}),p=i?de("layout",M(()=>o.embedded?"e":""),v,o):void 0;return Object.assign({mergedClsPrefix:n,scrollableElRef:t,scrollbarInstRef:r,hasSiderStyle:h,mergedTheme:a,handleNativeElScroll:f,cssVars:i?void 0:v,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender},u)},render(){var o;const{mergedClsPrefix:t,hasSider:r}=this;(o=this.onRender)===null||o===void 0||o.call(this);const n=r?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return m("div",{class:i,style:this.cssVars},this.nativeScrollbar?m("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,n],onScroll:this.handleNativeElScroll},this.$slots):m(At,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,n]}),this.$slots))}})}const Ma=lr(!1),Na=lr(!0),Ha=_("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[B("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),B("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Ba={position:eo,inverted:Boolean,bordered:{type:Boolean,default:!1}},Ea=K({name:"LayoutHeader",props:Object.assign(Object.assign({},G.props),Ba),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=se(e),r=G("Layout","-layout-header",Ha,Qe,e,o),n=M(()=>{const{common:{cubicBezierEaseInOut:a},self:s}=r.value,l={"--n-bezier":a};return e.inverted?(l["--n-color"]=s.headerColorInverted,l["--n-text-color"]=s.textColorInverted,l["--n-border-color"]=s.headerBorderColorInverted):(l["--n-color"]=s.headerColor,l["--n-text-color"]=s.textColor,l["--n-border-color"]=s.headerBorderColor),l}),i=t?de("layout-header",M(()=>e.inverted?"a":"b"),n,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:n,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),m("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Ra=_("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[B("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),B("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),La=Object.assign(Object.assign({},G.props),{inverted:Boolean,position:eo,bordered:Boolean}),Fa=K({name:"LayoutFooter",props:La,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=se(e),r=G("Layout","-layout-footer",Ra,Qe,e,o),n=M(()=>{const{common:{cubicBezierEaseInOut:a},self:s}=r.value,l={"--n-bezier":a};return e.inverted?(l["--n-color"]=s.footerColorInverted,l["--n-text-color"]=s.textColorInverted,l["--n-border-color"]=s.footerBorderColorInverted):(l["--n-color"]=s.footerColor,l["--n-text-color"]=s.textColor,l["--n-border-color"]=s.footerBorderColor),l}),i=t?de("layout-footer",M(()=>e.inverted?"a":"b"),n,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:n,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),m("div",{class:[`${o}-layout-footer`,this.themeClass,this.position&&`${o}-layout-footer--${this.position}-positioned`,this.bordered&&`${o}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),Ka=_("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[B("bordered",[O("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),O("left-placement",[B("bordered",[O("border",`
 right: 0;
 `)])]),B("right-placement",`
 justify-content: flex-start;
 `,[B("bordered",[O("border",`
 left: 0;
 `)]),B("collapsed",[_("layout-toggle-button",[_("base-icon",`
 transform: rotate(180deg);
 `)]),_("layout-toggle-bar",[H("&:hover",[O("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),O("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),_("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[_("base-icon",`
 transform: rotate(0);
 `)]),_("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[H("&:hover",[O("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),O("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),B("collapsed",[_("layout-toggle-bar",[H("&:hover",[O("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),O("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),_("layout-toggle-button",[_("base-icon",`
 transform: rotate(0);
 `)])]),_("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[_("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),_("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[O("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),O("bottom",`
 position: absolute;
 top: 34px;
 `),H("&:hover",[O("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),O("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),O("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),H("&:hover",[O("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),O("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),_("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),B("show-content",[_("layout-sider-scroll-container",{opacity:1})]),B("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Da=K({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return m("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},m(_t,{clsPrefix:e},{default:()=>m(jt,null)}))}}),ja=K({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return m("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},m("div",{class:`${e}-layout-toggle-bar__top`}),m("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Wa={position:eo,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Va=K({name:"LayoutSider",props:Object.assign(Object.assign({},G.props),Wa),setup(e){const o=W(ir),t=F(null),r=F(null),n=M(()=>ye(l.value?e.collapsedWidth:e.width)),i=M(()=>e.collapseMode!=="transform"?{}:{minWidth:ye(e.width)}),a=M(()=>o?o.siderPlacement:"left"),s=F(e.defaultCollapsed),l=Te(q(e,"collapsed"),s);function c(C,I){if(e.nativeScrollbar){const{value:S}=t;S&&(I===void 0?S.scrollTo(C):S.scrollTo(C,I))}else{const{value:S}=r;S&&S.scrollTo(C,I)}}function f(){const{"onUpdate:collapsed":C,onUpdateCollapsed:I,onExpand:S,onCollapse:P}=e,{value:$}=l;I&&Z(I,!$),C&&Z(C,!$),s.value=!$,$?S&&Z(S):P&&Z(P)}let h=0,u=0;const v=C=>{var I;const S=C.target;h=S.scrollLeft,u=S.scrollTop,(I=e.onScroll)===null||I===void 0||I.call(e,C)};$t(()=>{if(e.nativeScrollbar){const C=t.value;C&&(C.scrollTop=u,C.scrollLeft=h)}}),J(nr,{collapsedRef:l,collapseModeRef:q(e,"collapseMode")});const{mergedClsPrefixRef:p,inlineThemeDisabled:g}=se(e),w=G("Layout","-layout-sider",Ka,Qe,e,p);function y(C){var I,S;C.propertyName==="max-width"&&(l.value?(I=e.onAfterLeave)===null||I===void 0||I.call(e):(S=e.onAfterEnter)===null||S===void 0||S.call(e))}const E={scrollTo:c},A=M(()=>{const{common:{cubicBezierEaseInOut:C},self:I}=w.value,{siderToggleButtonColor:S,siderToggleButtonBorder:P,siderToggleBarColor:$,siderToggleBarColorHover:d}=I,T={"--n-bezier":C,"--n-toggle-button-color":S,"--n-toggle-button-border":P,"--n-toggle-bar-color":$,"--n-toggle-bar-color-hover":d};return e.inverted?(T["--n-color"]=I.siderColorInverted,T["--n-text-color"]=I.textColorInverted,T["--n-border-color"]=I.siderBorderColorInverted,T["--n-toggle-button-icon-color"]=I.siderToggleButtonIconColorInverted,T.__invertScrollbar=I.__invertScrollbar):(T["--n-color"]=I.siderColor,T["--n-text-color"]=I.textColor,T["--n-border-color"]=I.siderBorderColor,T["--n-toggle-button-icon-color"]=I.siderToggleButtonIconColor),T}),x=g?de("layout-sider",M(()=>e.inverted?"a":"b"),A,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:r,mergedClsPrefix:p,mergedTheme:w,styleMaxWidth:n,mergedCollapsed:l,scrollContainerStyle:i,siderPlacement:a,handleNativeElScroll:v,handleTransitionend:y,handleTriggerClick:f,inlineThemeDisabled:g,cssVars:A,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender},E)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),m("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ye(this.width)}]},this.nativeScrollbar?m("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):m(At,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?m(ja,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):m(Da,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?m("div",{class:`${o}-layout-sider__border`}):null)}}),Ne=ie("n-menu"),Eo=ie("n-submenu"),Ro=ie("n-menu-item-group"),Le=8;function Lo(e){const o=W(Ne),{props:t,mergedCollapsedRef:r}=o,n=W(Eo,null),i=W(Ro,null),a=M(()=>t.mode==="horizontal"),s=M(()=>a.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),l=M(()=>{var u;return Math.max((u=t.collapsedIconSize)!==null&&u!==void 0?u:t.iconSize,t.iconSize)}),c=M(()=>{var u;return!a.value&&e.root&&r.value&&(u=t.collapsedIconSize)!==null&&u!==void 0?u:t.iconSize}),f=M(()=>{if(a.value)return;const{collapsedWidth:u,indent:v,rootIndent:p}=t,{root:g,isGroup:w}=e,y=p===void 0?v:p;if(g)return r.value?u/2-l.value/2:y;if(i)return v/2+i.paddingLeftRef.value;if(n)return(w?v/2:v)+n.paddingLeftRef.value}),h=M(()=>{const{collapsedWidth:u,indent:v,rootIndent:p}=t,{value:g}=l,{root:w}=e;return a.value||!w||!r.value?Le:(p===void 0?v:p)+g+Le-(u+g)/2});return{dropdownPlacement:s,activeIconSize:c,maxIconSize:l,paddingLeft:f,iconMarginRight:h,NMenu:o,NSubmenu:n}}const Fo={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ar=Object.assign(Object.assign({},Fo),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Ga=K({name:"MenuOptionGroup",props:ar,setup(e){J(Eo,null);const o=Lo(e);J(Ro,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:t,props:r}=W(Ne);return function(){const{value:n}=t,i=o.paddingLeft.value,{nodeProps:a}=r,s=a==null?void 0:a(e.tmNode.rawNode);return m("div",{class:`${n}-menu-item-group`,role:"group"},m("div",Object.assign({},s,{class:[`${n}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),ae(e.title),e.extra?m(ko,null," ",ae(e.extra)):null),m("div",null,e.tmNodes.map(l=>Ko(l,r))))}}}),sr=K({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:o}=W(Ne);return{menuProps:o,style:M(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:M(()=>{const{maxIconSize:t,activeIconSize:r,iconMarginRight:n}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${r}px`,marginRight:`${n}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:r,renderExtra:n,expandIcon:i}}=this,a=t?t(o.rawNode):ae(this.icon);return m("div",{onClick:s=>{var l;(l=this.onClick)===null||l===void 0||l.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},a&&m("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[a]),m("div",{class:`${e}-menu-item-content-header`,role:"none"},r?r(o.rawNode):ae(this.title),this.extra||n?m("span",{class:`${e}-menu-item-content-header__extra`}," ",n?n(o.rawNode):ae(this.extra)):null),this.showArrow?m(_t,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(o.rawNode):m(il,null)}):null)}}),dr=Object.assign(Object.assign({},Fo),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Ua=K({name:"Submenu",props:dr,setup(e){const o=Lo(e),{NMenu:t,NSubmenu:r}=o,{props:n,mergedCollapsedRef:i,mergedThemeRef:a}=t,s=M(()=>{const{disabled:u}=e;return r!=null&&r.mergedDisabledRef.value||n.disabled?!0:u}),l=F(!1);J(Eo,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:s}),J(Ro,null);function c(){const{onClick:u}=e;u&&u()}function f(){s.value||(i.value||t.toggleExpand(e.internalKey),c())}function h(u){l.value=u}return{menuProps:n,mergedTheme:a,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:l,paddingLeft:o.paddingLeft,mergedDisabled:s,mergedValue:t.mergedValueRef,childActive:oe(()=>t.activePathRef.value.includes(e.internalKey)),collapsed:M(()=>n.mode==="horizontal"?!1:i.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:M(()=>!s.value&&(n.mode==="horizontal"||i.value)),handlePopoverShowChange:h,handleClick:f}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:r}}=this,n=()=>{const{isHorizontal:a,paddingLeft:s,collapsed:l,mergedDisabled:c,maxIconSize:f,activeIconSize:h,title:u,childActive:v,icon:p,handleClick:g,menuProps:{nodeProps:w},dropdownShow:y,iconMarginRight:E,tmNode:A,mergedClsPrefix:x}=this,C=w==null?void 0:w(A.rawNode);return m("div",Object.assign({},C,{class:[`${x}-menu-item`,C==null?void 0:C.class],role:"menuitem"}),m(sr,{tmNode:A,paddingLeft:s,collapsed:l,disabled:c,iconMarginRight:E,maxIconSize:f,activeIconSize:h,title:u,extra:this.extra,showArrow:!a,childActive:v,clsPrefix:x,icon:p,hover:y,onClick:g}))},i=()=>m(tn,null,{default:()=>{const{tmNodes:a,collapsed:s}=this;return s?null:m("div",{class:`${o}-submenu-children`,role:"menu"},a.map(l=>Ko(l,this.menuProps)))}});return this.root?m(Sa,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:r}),{default:()=>m("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},n(),this.isHorizontal?null:i())}):m("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},n(),i())}}),cr=Object.assign(Object.assign({},Fo),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Ya=K({name:"MenuOption",props:cr,setup(e){const o=Lo(e),{NSubmenu:t,NMenu:r}=o,{props:n,mergedClsPrefixRef:i,mergedCollapsedRef:a}=r,s=t?t.mergedDisabledRef:{value:!1},l=M(()=>s.value||e.disabled);function c(h){const{onClick:u}=e;u&&u(h)}function f(h){l.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),c(h))}return{mergedClsPrefix:i,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:n,dropdownEnabled:oe(()=>e.root&&a.value&&n.mode!=="horizontal"&&!l.value),selected:oe(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:l,handleClick:f}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:r,nodeProps:n}}=this,i=n==null?void 0:n(t.rawNode);return m("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),m(sa,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(t.rawNode):ae(this.title),trigger:()=>m(sr,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),qa=K({name:"MenuDivider",setup(){const e=W(Ne),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:m("div",{class:`${o.value}-menu-divider`})}}),Xa=Oo(ar),Za=Oo(cr),Ja=Oo(dr);function ur(e){return e.type==="divider"||e.type==="render"}function Qa(e){return e.type==="divider"}function Ko(e,o){const{rawNode:t}=e,{show:r}=t;if(r===!1)return null;if(ur(t))return Qa(t)?m(qa,Object.assign({key:e.key},t.props)):null;const{labelField:n}=o,{key:i,level:a,isGroup:s}=e,l=Object.assign(Object.assign({},t),{title:t.title||t[n],extra:t.titleExtra||t.extra,key:i,internalKey:i,level:a,root:a===0,isGroup:s});return e.children?e.isGroup?m(Ga,_e(l,Xa,{tmNode:e,tmNodes:e.children,key:i})):m(Ua,_e(l,Ja,{key:i,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):m(Ya,_e(l,Za,{key:i,tmNode:e}))}const mt=[H("&::before","background-color: var(--n-item-color-hover);"),O("arrow",`
 color: var(--n-arrow-color-hover);
 `),O("icon",`
 color: var(--n-item-icon-color-hover);
 `),_("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[H("a",`
 color: var(--n-item-text-color-hover);
 `),O("extra",`
 color: var(--n-item-text-color-hover);
 `)])],gt=[O("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),_("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[H("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),O("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],es=H([_("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[B("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[_("submenu","margin: 0;"),_("menu-item","margin: 0;"),_("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[H("&::before","display: none;"),B("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),_("menu-item-content",[B("selected",[O("icon","color: var(--n-item-icon-color-active-horizontal);"),_("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[H("a","color: var(--n-item-text-color-active-horizontal);"),O("extra","color: var(--n-item-text-color-active-horizontal);")])]),B("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[_("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[H("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),O("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),O("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),Q("disabled",[Q("selected, child-active",[H("&:focus-within",gt)]),B("selected",[ge(null,[O("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),_("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[H("a","color: var(--n-item-text-color-active-hover-horizontal);"),O("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),B("child-active",[ge(null,[O("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),_("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[H("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),O("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),ge("border-bottom: 2px solid var(--n-border-color-horizontal);",gt)]),_("menu-item-content-header",[H("a","color: var(--n-item-text-color-horizontal);")])])]),B("collapsed",[_("menu-item-content",[B("selected",[H("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),_("menu-item-content-header","opacity: 0;"),O("arrow","opacity: 0;"),O("icon","color: var(--n-item-icon-color-collapsed);")])]),_("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),_("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[H("> *","z-index: 1;"),H("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),B("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),B("collapsed",[O("arrow","transform: rotate(0);")]),B("selected",[H("&::before","background-color: var(--n-item-color-active);"),O("arrow","color: var(--n-arrow-color-active);"),O("icon","color: var(--n-item-icon-color-active);"),_("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[H("a","color: var(--n-item-text-color-active);"),O("extra","color: var(--n-item-text-color-active);")])]),B("child-active",[_("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[H("a",`
 color: var(--n-item-text-color-child-active);
 `),O("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),O("arrow",`
 color: var(--n-arrow-color-child-active);
 `),O("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),Q("disabled",[Q("selected, child-active",[H("&:focus-within",mt)]),B("selected",[ge(null,[O("arrow","color: var(--n-arrow-color-active-hover);"),O("icon","color: var(--n-item-icon-color-active-hover);"),_("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[H("a","color: var(--n-item-text-color-active-hover);"),O("extra","color: var(--n-item-text-color-active-hover);")])])]),B("child-active",[ge(null,[O("arrow","color: var(--n-arrow-color-child-active-hover);"),O("icon","color: var(--n-item-icon-color-child-active-hover);"),_("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[H("a","color: var(--n-item-text-color-child-active-hover);"),O("extra","color: var(--n-item-text-color-child-active-hover);")])])]),B("selected",[ge(null,[H("&::before","background-color: var(--n-item-color-active-hover);")])]),ge(null,mt)]),O("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),O("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),_("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[H("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[H("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),O("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),_("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[_("menu-item-content",`
 height: var(--n-item-height);
 `),_("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[rn({duration:".2s"})])]),_("menu-item-group",[_("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),_("menu-tooltip",[H("a",`
 color: inherit;
 text-decoration: none;
 `)]),_("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function ge(e,o){return[B("hover",e,o),H("&:hover",e,o)]}const os=Object.assign(Object.assign({},G.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),ts=K({name:"Menu",props:os,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=se(e),r=G("Menu","-menu",es,ka,e,o),n=W(nr,null),i=M(()=>{var P;const{collapsed:$}=e;if($!==void 0)return $;if(n){const{collapseModeRef:d,collapsedRef:T}=n;if(d.value==="width")return(P=T.value)!==null&&P!==void 0?P:!1}return!1}),a=M(()=>{const{keyField:P,childrenField:$,disabledField:d}=e;return Gt(e.items||e.options,{getIgnored(T){return ur(T)},getChildren(T){return T[$]},getDisabled(T){return T[d]},getKey(T){var k;return(k=T[P])!==null&&k!==void 0?k:T.name}})}),s=M(()=>new Set(a.value.treeNodes.map(P=>P.key))),{watchProps:l}=e,c=F(null);l!=null&&l.includes("defaultValue")?Oe(()=>{c.value=e.defaultValue}):c.value=e.defaultValue;const f=q(e,"value"),h=Te(f,c),u=F([]),v=()=>{u.value=e.defaultExpandAll?a.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||a.value.getPath(h.value,{includeSelf:!1}).keyPath};l!=null&&l.includes("defaultExpandedKeys")?Oe(v):v();const p=Mt(e,["expandedNames","expandedKeys"]),g=Te(p,u),w=M(()=>a.value.treeNodes),y=M(()=>a.value.getPath(h.value).keyPath);J(Ne,{props:e,mergedCollapsedRef:i,mergedThemeRef:r,mergedValueRef:h,mergedExpandedKeysRef:g,activePathRef:y,mergedClsPrefixRef:o,isHorizontalRef:M(()=>e.mode==="horizontal"),invertedRef:q(e,"inverted"),doSelect:E,toggleExpand:x});function E(P,$){const{"onUpdate:value":d,onUpdateValue:T,onSelect:k}=e;T&&Z(T,P,$),d&&Z(d,P,$),k&&Z(k,P,$),c.value=P}function A(P){const{"onUpdate:expandedKeys":$,onUpdateExpandedKeys:d,onExpandedNamesChange:T,onOpenNamesChange:k}=e;$&&Z($,P),d&&Z(d,P),T&&Z(T,P),k&&Z(k,P),u.value=P}function x(P){const $=Array.from(g.value),d=$.findIndex(T=>T===P);if(~d)$.splice(d,1);else{if(e.accordion&&s.value.has(P)){const T=$.findIndex(k=>s.value.has(k));T>-1&&$.splice(T,1)}$.push(P)}A($)}const C=P=>{const $=a.value.getPath(P??h.value,{includeSelf:!1}).keyPath;if(!$.length)return;const d=Array.from(g.value),T=new Set([...d,...$]);e.accordion&&s.value.forEach(k=>{T.has(k)&&!$.includes(k)&&T.delete(k)}),A(Array.from(T))},I=M(()=>{const{inverted:P}=e,{common:{cubicBezierEaseInOut:$},self:d}=r.value,{borderRadius:T,borderColorHorizontal:k,fontSize:L,itemHeight:z,dividerColor:N}=d,b={"--n-divider-color":N,"--n-bezier":$,"--n-font-size":L,"--n-border-color-horizontal":k,"--n-border-radius":T,"--n-item-height":z};return P?(b["--n-group-text-color"]=d.groupTextColorInverted,b["--n-color"]=d.colorInverted,b["--n-item-text-color"]=d.itemTextColorInverted,b["--n-item-text-color-hover"]=d.itemTextColorHoverInverted,b["--n-item-text-color-active"]=d.itemTextColorActiveInverted,b["--n-item-text-color-child-active"]=d.itemTextColorChildActiveInverted,b["--n-item-text-color-child-active-hover"]=d.itemTextColorChildActiveInverted,b["--n-item-text-color-active-hover"]=d.itemTextColorActiveHoverInverted,b["--n-item-icon-color"]=d.itemIconColorInverted,b["--n-item-icon-color-hover"]=d.itemIconColorHoverInverted,b["--n-item-icon-color-active"]=d.itemIconColorActiveInverted,b["--n-item-icon-color-active-hover"]=d.itemIconColorActiveHoverInverted,b["--n-item-icon-color-child-active"]=d.itemIconColorChildActiveInverted,b["--n-item-icon-color-child-active-hover"]=d.itemIconColorChildActiveHoverInverted,b["--n-item-icon-color-collapsed"]=d.itemIconColorCollapsedInverted,b["--n-item-text-color-horizontal"]=d.itemTextColorHorizontalInverted,b["--n-item-text-color-hover-horizontal"]=d.itemTextColorHoverHorizontalInverted,b["--n-item-text-color-active-horizontal"]=d.itemTextColorActiveHorizontalInverted,b["--n-item-text-color-child-active-horizontal"]=d.itemTextColorChildActiveHorizontalInverted,b["--n-item-text-color-child-active-hover-horizontal"]=d.itemTextColorChildActiveHoverHorizontalInverted,b["--n-item-text-color-active-hover-horizontal"]=d.itemTextColorActiveHoverHorizontalInverted,b["--n-item-icon-color-horizontal"]=d.itemIconColorHorizontalInverted,b["--n-item-icon-color-hover-horizontal"]=d.itemIconColorHoverHorizontalInverted,b["--n-item-icon-color-active-horizontal"]=d.itemIconColorActiveHorizontalInverted,b["--n-item-icon-color-active-hover-horizontal"]=d.itemIconColorActiveHoverHorizontalInverted,b["--n-item-icon-color-child-active-horizontal"]=d.itemIconColorChildActiveHorizontalInverted,b["--n-item-icon-color-child-active-hover-horizontal"]=d.itemIconColorChildActiveHoverHorizontalInverted,b["--n-arrow-color"]=d.arrowColorInverted,b["--n-arrow-color-hover"]=d.arrowColorHoverInverted,b["--n-arrow-color-active"]=d.arrowColorActiveInverted,b["--n-arrow-color-active-hover"]=d.arrowColorActiveHoverInverted,b["--n-arrow-color-child-active"]=d.arrowColorChildActiveInverted,b["--n-arrow-color-child-active-hover"]=d.arrowColorChildActiveHoverInverted,b["--n-item-color-hover"]=d.itemColorHoverInverted,b["--n-item-color-active"]=d.itemColorActiveInverted,b["--n-item-color-active-hover"]=d.itemColorActiveHoverInverted,b["--n-item-color-active-collapsed"]=d.itemColorActiveCollapsedInverted):(b["--n-group-text-color"]=d.groupTextColor,b["--n-color"]=d.color,b["--n-item-text-color"]=d.itemTextColor,b["--n-item-text-color-hover"]=d.itemTextColorHover,b["--n-item-text-color-active"]=d.itemTextColorActive,b["--n-item-text-color-child-active"]=d.itemTextColorChildActive,b["--n-item-text-color-child-active-hover"]=d.itemTextColorChildActiveHover,b["--n-item-text-color-active-hover"]=d.itemTextColorActiveHover,b["--n-item-icon-color"]=d.itemIconColor,b["--n-item-icon-color-hover"]=d.itemIconColorHover,b["--n-item-icon-color-active"]=d.itemIconColorActive,b["--n-item-icon-color-active-hover"]=d.itemIconColorActiveHover,b["--n-item-icon-color-child-active"]=d.itemIconColorChildActive,b["--n-item-icon-color-child-active-hover"]=d.itemIconColorChildActiveHover,b["--n-item-icon-color-collapsed"]=d.itemIconColorCollapsed,b["--n-item-text-color-horizontal"]=d.itemTextColorHorizontal,b["--n-item-text-color-hover-horizontal"]=d.itemTextColorHoverHorizontal,b["--n-item-text-color-active-horizontal"]=d.itemTextColorActiveHorizontal,b["--n-item-text-color-child-active-horizontal"]=d.itemTextColorChildActiveHorizontal,b["--n-item-text-color-child-active-hover-horizontal"]=d.itemTextColorChildActiveHoverHorizontal,b["--n-item-text-color-active-hover-horizontal"]=d.itemTextColorActiveHoverHorizontal,b["--n-item-icon-color-horizontal"]=d.itemIconColorHorizontal,b["--n-item-icon-color-hover-horizontal"]=d.itemIconColorHoverHorizontal,b["--n-item-icon-color-active-horizontal"]=d.itemIconColorActiveHorizontal,b["--n-item-icon-color-active-hover-horizontal"]=d.itemIconColorActiveHoverHorizontal,b["--n-item-icon-color-child-active-horizontal"]=d.itemIconColorChildActiveHorizontal,b["--n-item-icon-color-child-active-hover-horizontal"]=d.itemIconColorChildActiveHoverHorizontal,b["--n-arrow-color"]=d.arrowColor,b["--n-arrow-color-hover"]=d.arrowColorHover,b["--n-arrow-color-active"]=d.arrowColorActive,b["--n-arrow-color-active-hover"]=d.arrowColorActiveHover,b["--n-arrow-color-child-active"]=d.arrowColorChildActive,b["--n-arrow-color-child-active-hover"]=d.arrowColorChildActiveHover,b["--n-item-color-hover"]=d.itemColorHover,b["--n-item-color-active"]=d.itemColorActive,b["--n-item-color-active-hover"]=d.itemColorActiveHover,b["--n-item-color-active-collapsed"]=d.itemColorActiveCollapsed),b}),S=t?de("menu",M(()=>e.inverted?"a":"b"),I,e):void 0;return{mergedClsPrefix:o,controlledExpandedKeys:p,uncontrolledExpanededKeys:u,mergedExpandedKeys:g,uncontrolledValue:c,mergedValue:h,activePath:y,tmNodes:w,mergedTheme:r,mergedCollapsed:i,cssVars:t?void 0:I,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender,showOption:C}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:r}=this;return r==null||r(),m("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(n=>Ko(n,this.$props)))}});function rs(){const e=W(nn,null);return e===null&&Pt("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}const ns={class:"h-12 flex items-center justify-end"},is=K({__name:"HeaderBar",setup(e){const o=cn(),t=ln(),r=za(),n=rs();$e(()=>{t.fetchUserInfo()});function i(){r.warning({title:"警告",content:"你确定要退出登录吗？",positiveText:"确定",negativeText:"不确定",maskClosable:!1,transformOrigin:"center",onPositiveClick:()=>{a()}})}function a(){localStorage.removeItem("token"),o.push("/login"),n.success("已退出登录")}return(s,l)=>{const c=ea,f=dn;return Xe(),kt("header",ns,[re(c,{class:"mr-4",round:""},{default:ve(()=>[bo(an(sn(t).getUsername),1)]),_:1}),re(f,{class:"mr-8",strong:"",secondary:"",round:"",type:"error",onClick:i},{default:ve(()=>[bo("登出")]),_:1})])}}}),ls={},as={class:"h-6 flex items-center"};function ss(e,o){return Xe(),kt("footer",as,"尾部，放一些网站信息")}const ds=un(ls,[["render",ss]]),cs=K({__name:"SideNav",setup(e){const o={itemTextColorActive:"#2080f0",itemTextColorActiveHover:"#2080f0",itemIconColorActive:"#2080f0",itemIconColorActiveHover:"#2080f0",itemColorActive:"#2080f020",itemColorActiveHover:"#2080f020",itemColorActiveCollapsed:"#2080f020"},t=fn(),r=F(),n=F("");$e(()=>{r.value=a(hn),s(t.name)});function i(l){return()=>m(er,null,{default:()=>m(l)})}function a(l){return l.map(f=>{var v,p;let h=((v=f.children)==null?void 0:v.length)===1?f.children[0].name:f.name;return{label:()=>m(vn,{to:{name:h}},{default:()=>{var g;return(g=f.meta)==null?void 0:g.title}}),key:h,icon:i((p=f.meta)==null?void 0:p.icon)}})}function s(l){n.value=l}return(l,c)=>{const f=ts;return Xe(),Ot(f,{options:r.value,value:n.value,"onUpdate:value":s,"theme-overrides":o},null,8,["options","value"])}}});const us={class:"h-20 flex justify-center items-center"},fs={class:"flex"},hs=Ke("img",{class:"w-11 -mt-1",src:mn,alt:"eBook"},null,-1),vs=Ke("h2",{class:"font-bold text-4xl ml-2 tracking-wide"},"eBook",-1),ps=[hs,vs],gs=K({__name:"index",setup(e){const o=F(!1);return(t,r)=>{const n=Va,i=Ea,a=pn("RouterView"),s=Na,l=Fa,c=Ma;return Xe(),Ot(c,{position:"absolute","has-sider":""},{default:ve(()=>[re(n,{"show-trigger":"","collapse-mode":"width",collapsed:o.value,onCollapse:r[0]||(r[0]=f=>o.value=!0),onExpand:r[1]||(r[1]=f=>o.value=!1),bordered:!0},{default:ve(()=>[Ke("header",us,[Me(Ke("div",fs,ps,512),[[wt,!o.value]])]),re(cs)]),_:1},8,["collapsed"]),re(c,null,{default:ve(()=>[re(i,{class:"z-50",position:"absolute",bordered:!0},{default:ve(()=>[re(is)]),_:1}),re(s,{class:"h-screen pt-12 pb-6",bordered:!0},{default:ve(()=>[re(a)]),_:1}),re(l,{position:"absolute",bordered:!0},{default:ve(()=>[re(ds)]),_:1})]),_:1})]),_:1})}}});export{gs as default};
