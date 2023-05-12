import{r as E,w as xe,a as Po,h as _o,o as Ho,b as qe,c as ue,d as Ao,e as ve,f as F,g as c,i as No,j as de,k as se,l as J,m as f,n as ko,p as H,q as To,s as p,u as oe,t as g,v as V,x as te,y as ke,z as Ae,A as Oo,B as $o,C as D,D as Q,E as Bo,V as Lo,F as ye,G as me,H as T,I as fe,J as Ge,K as Te,L as Ye,M as G,N as le,T as Fo,O as X,P as Xe,Q as jo,R as Eo,X as Mo,S as Ko,U as ae,W as ge,Y as q,Z as U,_ as pe,$ as Do,a0 as Vo,a1 as Wo,a2 as Ze,a3 as Je,a4 as Qe,a5 as Uo,a6 as Oe,a7 as qo,a8 as Go,a9 as eo,aa as Ce,ab as oo,ac as Y,ad as ee,ae as Ke,af as Yo,ag as Xo,ah as Zo,ai as Jo,aj as Qo,ak as to,al as et,am as ot,an as tt,ao as be,ap as rt,aq as nt,ar as it,as as lt}from"./index-3dcad9e9.js";import{t as at,p as ro,N as no,a as $e,V as st,b as dt,c as ct,h as De,r as ut,d as io,e as vt,u as ht}from"./Tag-f97fdc53.js";function mt(e,t,o){if(!t)return e;const r=E(e.value);let i=null;return xe(e,n=>{i!==null&&window.clearTimeout(i),n===!0?o&&!o.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function ft(e={},t){const o=Po({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,n=l=>{switch(l.key){case"Control":o.ctrl=!0;break;case"Meta":o.command=!0,o.win=!0;break;case"Shift":o.shift=!0;break;case"Tab":o.tab=!0;break}r!==void 0&&Object.keys(r).forEach(v=>{if(v!==l.key)return;const h=r[v];if(typeof h=="function")h(l);else{const{stop:y=!1,prevent:m=!1}=h;y&&l.stopPropagation(),m&&l.preventDefault(),h.handler(l)}})},d=l=>{switch(l.key){case"Control":o.ctrl=!1;break;case"Meta":o.command=!1,o.win=!1;break;case"Shift":o.shift=!1;break;case"Tab":o.tab=!1;break}i!==void 0&&Object.keys(i).forEach(v=>{if(v!==l.key)return;const h=i[v];if(typeof h=="function")h(l);else{const{stop:y=!1,prevent:m=!1}=h;y&&l.stopPropagation(),m&&l.preventDefault(),h.handler(l)}})},s=()=>{(t===void 0||t.value)&&(ve("keydown",document,n),ve("keyup",document,d)),t!==void 0&&xe(t,l=>{l?(ve("keydown",document,n),ve("keyup",document,d)):(ue("keydown",document,n),ue("keyup",document,d))})};return _o()?(Ho(s),qe(()=>{(t===void 0||t.value)&&(ue("keydown",document,n),ue("keyup",document,d))})):s(),Ao(o)}const lo=F({name:"ChevronRight",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),pt=F({name:"ChevronDownFilled",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Re=No&&"loading"in document.createElement("img"),gt=(e={})=>{var t;const{root:o=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(t=e.threshold)!==null&&t!==void 0?t:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof o=="string"?document.querySelector(o):o)||document.documentElement})}},Pe=new WeakMap,_e=new WeakMap,He=new WeakMap,bt=(e,t,o)=>{if(!e)return()=>{};const r=gt(t),{root:i}=r.options;let n;const d=Pe.get(i);d?n=d:(n=new Map,Pe.set(i,n));let s,l;n.has(r.hash)?(l=n.get(r.hash),l[1].has(e)||(s=l[0],l[1].add(e),s.observe(e))):(s=new IntersectionObserver(y=>{y.forEach(m=>{if(m.isIntersecting){const A=_e.get(m.target),I=He.get(m.target);A&&A(),I&&(I.value=!0)}})},r.options),s.observe(e),l=[s,new Set([e])],n.set(r.hash,l));let v=!1;const h=()=>{v||(_e.delete(e),He.delete(e),v=!0,l[1].has(e)&&(l[0].unobserve(e),l[1].delete(e)),l[1].size<=0&&n.delete(r.hash),n.size||Pe.delete(i))};return _e.set(e,h),He.set(e,o),h},xt=e=>{const{borderRadius:t,avatarColor:o,cardColor:r,fontSize:i,heightTiny:n,heightSmall:d,heightMedium:s,heightLarge:l,heightHuge:v,modalColor:h,popoverColor:y}=e;return{borderRadius:t,fontSize:i,border:`2px solid ${r}`,heightTiny:n,heightSmall:d,heightMedium:s,heightLarge:l,heightHuge:v,color:se(r,o),colorModal:se(h,o),colorPopover:se(y,o)}},yt={name:"Avatar",common:de,self:xt},Ct=yt,wt=J("n-avatar-group"),zt=f("avatar",`
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
`,[ko(H("&","--n-merged-color: var(--n-color-modal);")),To(H("&","--n-merged-color: var(--n-color-popover);")),H("img",`
 width: 100%;
 height: 100%;
 `),p("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),f("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),p("text","line-height: 1.25")]),It=Object.assign(Object.assign({},V.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),St=F({name:"Avatar",props:It,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=oe(e),r=E(!1);let i=null;const n=E(null),d=E(null),s=()=>{const{value:w}=n;if(w&&(i===null||i!==w.innerHTML)){i=w.innerHTML;const{value:N}=d;if(N){const{offsetWidth:_,offsetHeight:x}=N,{offsetWidth:k,offsetHeight:P}=w,S=.9,a=Math.min(_/k*S,x/P*S,1);w.style.transform=`translateX(-50%) translateY(-50%) scale(${a})`}}},l=D(wt,null),v=g(()=>{const{size:w}=e;if(w)return w;const{size:N}=l||{};return N||"medium"}),h=V("Avatar","-avatar",zt,Ct,e,t),y=D(at,null),m=g(()=>{if(l)return!0;const{round:w,circle:N}=e;return w!==void 0||N!==void 0?w||N:y?y.roundRef.value:!1}),A=g(()=>l?!0:e.bordered||!1),I=w=>{var N;if(!O.value)return;r.value=!0;const{onError:_,imgProps:x}=e;(N=x==null?void 0:x.onError)===null||N===void 0||N.call(x,w),_&&_(w)};xe(()=>e.src,()=>r.value=!1);const R=g(()=>{const w=v.value,N=m.value,_=A.value,{color:x}=e,{self:{borderRadius:k,fontSize:P,color:S,border:a,colorModal:C,colorPopover:b},common:{cubicBezierEaseInOut:j}}=h.value;let B;return typeof w=="number"?B=`${w}px`:B=h.value.self[Q("height",w)],{"--n-font-size":P,"--n-border":_?a:"none","--n-border-radius":N?"50%":k,"--n-color":x||S,"--n-color-modal":x||C,"--n-color-popover":x||b,"--n-bezier":j,"--n-merged-size":`var(--n-avatar-size-override, ${B})`}}),z=o?te("avatar",g(()=>{const w=v.value,N=m.value,_=A.value,{color:x}=e;let k="";return w&&(typeof w=="number"?k+=`a${w}`:k+=w[0]),N&&(k+="b"),_&&(k+="c"),x&&(k+=Bo(x)),k}),R,e):void 0,O=E(!e.lazy);ke(()=>{if(Re)return;let w;const N=Ae(()=>{w==null||w(),w=void 0,e.lazy&&(w=bt(d.value,e.intersectionObserverOptions,O))});qe(()=>{N(),w==null||w()})});const W=E(!e.lazy);return{textRef:n,selfRef:d,mergedRoundRef:m,mergedClsPrefix:t,fitTextTransform:s,cssVars:o?void 0:R,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender,hasLoadError:r,handleError:I,shouldStartLoading:O,loaded:W,mergedOnLoad:w=>{var N;const{onLoad:_,imgProps:x}=e;_==null||_(w),(N=x==null?void 0:x.onLoad)===null||N===void 0||N.call(x,w),W.value=!0}}},render(){var e,t;const{$slots:o,src:r,mergedClsPrefix:i,lazy:n,onRender:d,mergedOnLoad:s,shouldStartLoading:l,loaded:v,hasLoadError:h}=this;d==null||d();let y;const m=!v&&!h&&(this.renderPlaceholder?this.renderPlaceholder():(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e));return this.hasLoadError?y=this.renderFallback?this.renderFallback():Oo(o.fallback,()=>[c("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):y=$o(o.default,A=>{if(A)return c(Lo,{onResize:this.fitTextTransform},{default:()=>c("span",{ref:"textRef",class:`${i}-avatar__text`},A)});if(r){const{imgProps:I}=this;return c("img",Object.assign(Object.assign({},I),{loading:Re&&!this.intersectionObserverOptions&&n?"lazy":"eager",src:Re||l||v?r:void 0,onLoad:s,"data-image-src":r,onError:this.handleError,style:[I==null?void 0:I.style,{objectFit:this.objectFit},m?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),c("span",{ref:"selfRef",class:[`${i}-avatar`,this.themeClass],style:this.cssVars},y,n&&m)}}),Rt={padding:"8px 14px"},Pt=e=>{const{borderRadius:t,boxShadow2:o,baseColor:r}=e;return Object.assign(Object.assign({},Rt),{borderRadius:t,boxShadow:o,color:se(r,"rgba(0, 0, 0, .85)"),textColor:r})},_t=ye({name:"Tooltip",common:de,peers:{Popover:ro},self:Pt}),ao=_t,Ht={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},At=e=>{const{primaryColor:t,textColor2:o,dividerColor:r,hoverColor:i,popoverColor:n,invertedColor:d,borderRadius:s,fontSizeSmall:l,fontSizeMedium:v,fontSizeLarge:h,fontSizeHuge:y,heightSmall:m,heightMedium:A,heightLarge:I,heightHuge:R,textColor3:z,opacityDisabled:O}=e;return Object.assign(Object.assign({},Ht),{optionHeightSmall:m,optionHeightMedium:A,optionHeightLarge:I,optionHeightHuge:R,borderRadius:s,fontSizeSmall:l,fontSizeMedium:v,fontSizeLarge:h,fontSizeHuge:y,optionTextColor:o,optionTextColorHover:o,optionTextColorActive:t,optionTextColorChildActive:t,color:n,dividerColor:r,suffixColor:o,prefixColor:o,optionColorHover:i,optionColorActive:me(t,{alpha:.1}),groupHeaderTextColor:z,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:d,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:t,optionColorActiveInverted:t,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:O})},Nt=ye({name:"Dropdown",common:de,peers:{Popover:ro},self:At}),so=Nt,kt=Object.assign(Object.assign({},$e),V.props),Tt=F({name:"Tooltip",props:kt,__popover__:!0,setup(e){const t=V("Tooltip","-tooltip",void 0,ao,e),o=E(null);return Object.assign(Object.assign({},{syncPosition(){o.value.syncPosition()},setShow(i){o.value.setShow(i)}}),{popoverRef:o,mergedTheme:t,popoverThemeOverrides:g(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return c(no,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),co=F({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return c("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Ot=e=>{const{textColorBase:t,opacity1:o,opacity2:r,opacity3:i,opacity4:n,opacity5:d}=e;return{color:t,opacity1Depth:o,opacity2Depth:r,opacity3Depth:i,opacity4Depth:n,opacity5Depth:d}},$t={name:"Icon",common:de,self:Ot},Bt=$t,Lt=f("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[T("color-transition",{transition:"color .3s var(--n-bezier)"}),T("depth",{color:"var(--n-color)"},[H("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),H("svg",{height:"1em",width:"1em"})]),Ft=Object.assign(Object.assign({},V.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),uo=F({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Ft,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=oe(e),r=V("Icon","-icon",Lt,Bt,e,t),i=g(()=>{const{depth:d}=e,{common:{cubicBezierEaseInOut:s},self:l}=r.value;if(d!==void 0){const{color:v,[`opacity${d}Depth`]:h}=l;return{"--n-bezier":s,"--n-color":v,"--n-opacity":h}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),n=o?te("icon",g(()=>`${e.depth||"d"}`),i,e):void 0;return{mergedClsPrefix:t,mergedStyle:g(()=>{const{size:d,color:s}=e;return{fontSize:fe(d),color:s}}),cssVars:o?void 0:i,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$parent:t,depth:o,mergedClsPrefix:r,component:i,onRender:n,themeClass:d}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&Ge("icon","don't wrap `n-icon` inside `n-icon`"),n==null||n(),c("i",Te(this.$attrs,{role:"img",class:[`${r}-icon`,d,{[`${r}-icon--depth`]:o,[`${r}-icon--color-transition`]:o!==void 0}],style:[this.cssVars,this.mergedStyle]}),i?c(i):this.$slots)}}),Be=J("n-dropdown-menu"),we=J("n-dropdown"),Ve=J("n-dropdown-option");function Ne(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function jt(e){return e.type==="group"}function vo(e){return e.type==="divider"}function Et(e){return e.type==="render"}const ho=F({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=D(we),{hoverKeyRef:o,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:n,activeKeyPathRef:d,animatedRef:s,mergedShowRef:l,renderLabelRef:v,renderIconRef:h,labelFieldRef:y,childrenFieldRef:m,renderOptionRef:A,nodePropsRef:I,menuPropsRef:R}=t,z=D(Ve,null),O=D(Be),W=D(Ye),w=g(()=>e.tmNode.rawNode),N=g(()=>{const{value:$}=m;return Ne(e.tmNode.rawNode,$)}),_=g(()=>{const{disabled:$}=e.tmNode;return $}),x=g(()=>{if(!N.value)return!1;const{key:$,disabled:K}=e.tmNode;if(K)return!1;const{value:Z}=o,{value:re}=r,{value:Se}=i,{value:ne}=n;return Z!==null?ne.includes($):re!==null?ne.includes($)&&ne[ne.length-1]!==$:Se!==null?ne.includes($):!1}),k=g(()=>r.value===null&&!s.value),P=mt(x,300,k),S=g(()=>!!(z!=null&&z.enteringSubmenuRef.value)),a=E(!1);G(Ve,{enteringSubmenuRef:a});function C(){a.value=!0}function b(){a.value=!1}function j(){const{parentKey:$,tmNode:K}=e;K.disabled||l.value&&(i.value=$,r.value=null,o.value=K.key)}function B(){const{tmNode:$}=e;$.disabled||l.value&&o.value!==$.key&&j()}function L($){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:K}=$;K&&!De({target:K},"dropdownOption")&&!De({target:K},"scrollbarRail")&&(o.value=null)}function u(){const{value:$}=N,{tmNode:K}=e;l.value&&!$&&!K.disabled&&(t.doSelect(K.key,K.rawNode),t.doUpdateShow(!1))}return{labelField:y,renderLabel:v,renderIcon:h,siblingHasIcon:O.showIconRef,siblingHasSubmenu:O.hasSubmenuRef,menuProps:R,popoverBody:W,animated:s,mergedShowSubmenu:g(()=>P.value&&!S.value),rawNode:w,hasSubmenu:N,pending:le(()=>{const{value:$}=n,{key:K}=e.tmNode;return $.includes(K)}),childActive:le(()=>{const{value:$}=d,{key:K}=e.tmNode,Z=$.findIndex(re=>K===re);return Z===-1?!1:Z<$.length-1}),active:le(()=>{const{value:$}=d,{key:K}=e.tmNode,Z=$.findIndex(re=>K===re);return Z===-1?!1:Z===$.length-1}),mergedDisabled:_,renderOption:A,nodeProps:I,handleClick:u,handleMouseMove:B,handleMouseEnter:j,handleMouseLeave:L,handleSubmenuBeforeEnter:C,handleSubmenuAfterEnter:b}},render(){var e,t;const{animated:o,rawNode:r,mergedShowSubmenu:i,clsPrefix:n,siblingHasIcon:d,siblingHasSubmenu:s,renderLabel:l,renderIcon:v,renderOption:h,nodeProps:y,props:m,scrollable:A}=this;let I=null;if(i){const W=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);I=c(mo,Object.assign({},W,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const R={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},z=y==null?void 0:y(r),O=c("div",Object.assign({class:[`${n}-dropdown-option`,z==null?void 0:z.class],"data-dropdown-option":!0},z),c("div",Te(R,m),[c("div",{class:[`${n}-dropdown-option-body__prefix`,d&&`${n}-dropdown-option-body__prefix--show-icon`]},[v?v(r):X(r.icon)]),c("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},l?l(r):X((t=r[this.labelField])!==null&&t!==void 0?t:r.title)),c("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,s&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?c(uo,null,{default:()=>c(lo,null)}):null)]),this.hasSubmenu?c(st,null,{default:()=>[c(dt,null,{default:()=>c("div",{class:`${n}-dropdown-offset-container`},c(ct,{show:this.mergedShowSubmenu,placement:this.placement,to:A&&this.popoverBody||void 0,teleportDisabled:!A},{default:()=>c("div",{class:`${n}-dropdown-menu-wrapper`},o?c(Fo,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>I}):I)}))})]}):null);return h?h({node:O,option:r}):O}}),Mt=F({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=D(Be),{renderLabelRef:o,labelFieldRef:r,nodePropsRef:i,renderOptionRef:n}=D(we);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:o,nodeProps:i,renderOption:n}},render(){var e;const{clsPrefix:t,hasSubmenu:o,showIcon:r,nodeProps:i,renderLabel:n,renderOption:d}=this,{rawNode:s}=this.tmNode,l=c("div",Object.assign({class:`${t}-dropdown-option`},i==null?void 0:i(s)),c("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},c("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,r&&`${t}-dropdown-option-body__prefix--show-icon`]},X(s.icon)),c("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(s):X((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),c("div",{class:[`${t}-dropdown-option-body__suffix`,o&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return d?d({node:l,option:s}):l}}),Kt=F({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:o}=this,{children:r}=e;return c(Xe,null,c(Mt,{clsPrefix:o,tmNode:e,key:e.key}),r==null?void 0:r.map(i=>{const{rawNode:n}=i;return n.show===!1?null:vo(n)?c(co,{clsPrefix:o,key:i.key}):i.isGroup?(Ge("dropdown","`group` node is not allowed to be put in `group` node."),null):c(ho,{clsPrefix:o,tmNode:i,parentKey:t,key:i.key})}))}}),Dt=F({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return c("div",t,[e==null?void 0:e()])}}),mo=F({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:o}=D(we);G(Be,{showIconRef:g(()=>{const i=t.value;return e.tmNodes.some(n=>{var d;if(n.isGroup)return(d=n.children)===null||d===void 0?void 0:d.some(({rawNode:l})=>i?i(l):l.icon);const{rawNode:s}=n;return i?i(s):s.icon})}),hasSubmenuRef:g(()=>{const{value:i}=o;return e.tmNodes.some(n=>{var d;if(n.isGroup)return(d=n.children)===null||d===void 0?void 0:d.some(({rawNode:l})=>Ne(l,i));const{rawNode:s}=n;return Ne(s,i)})})});const r=E(null);return G(jo,null),G(Eo,null),G(Ye,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:t,scrollable:o}=this,r=this.tmNodes.map(i=>{const{rawNode:n}=i;return n.show===!1?null:Et(n)?c(Dt,{tmNode:i,key:i.key}):vo(n)?c(co,{clsPrefix:t,key:i.key}):jt(n)?c(Kt,{clsPrefix:t,tmNode:i,parentKey:e,key:i.key}):c(ho,{clsPrefix:t,tmNode:i,parentKey:e,key:i.key,props:n.props,scrollable:o})});return c("div",{class:[`${t}-dropdown-menu`,o&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},o?c(Mo,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?ut({clsPrefix:t,arrowStyle:this.arrowStyle}):null)}}),Vt=f("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ko(),f("dropdown-option",`
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
 `)]),f("dropdown-option-body",`
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
 `),ae("disabled",[T("pending",`
 color: var(--n-option-text-color-hover);
 `,[p("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),H("&::before","background-color: var(--n-option-color-hover);")]),T("active",`
 color: var(--n-option-text-color-active);
 `,[p("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),H("&::before","background-color: var(--n-option-color-active);")]),T("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[p("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),T("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),T("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[p("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[T("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),p("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[T("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),f("icon",`
 font-size: var(--n-option-icon-size);
 `)]),p("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),p("suffix",`
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
 `,[T("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),f("icon",`
 font-size: var(--n-option-icon-size);
 `)]),f("dropdown-menu","pointer-events: all;")]),f("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),f("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),f("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),H(">",[f("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ae("scrollable",`
 padding: var(--n-padding);
 `),T("scrollable",[p("content",`
 padding: var(--n-padding);
 `)])]),Wt={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Ut=Object.keys($e),qt=Object.assign(Object.assign(Object.assign({},$e),Wt),V.props),Gt=F({name:"Dropdown",inheritAttrs:!1,props:qt,setup(e){const t=E(!1),o=ge(q(e,"show"),t),r=g(()=>{const{keyField:b,childrenField:j}=e;return io(e.options,{getKey(B){return B[b]},getDisabled(B){return B.disabled===!0},getIgnored(B){return B.type==="divider"||B.type==="render"},getChildren(B){return B[j]}})}),i=g(()=>r.value.treeNodes),n=E(null),d=E(null),s=E(null),l=g(()=>{var b,j,B;return(B=(j=(b=n.value)!==null&&b!==void 0?b:d.value)!==null&&j!==void 0?j:s.value)!==null&&B!==void 0?B:null}),v=g(()=>r.value.getPath(l.value).keyPath),h=g(()=>r.value.getPath(e.value).keyPath),y=le(()=>e.keyboard&&o.value);ft({keydown:{ArrowUp:{prevent:!0,handler:_},ArrowRight:{prevent:!0,handler:N},ArrowDown:{prevent:!0,handler:x},ArrowLeft:{prevent:!0,handler:w},Enter:{prevent:!0,handler:k},Escape:W}},y);const{mergedClsPrefixRef:m,inlineThemeDisabled:A}=oe(e),I=V("Dropdown","-dropdown",Vt,so,e,m);G(we,{labelFieldRef:q(e,"labelField"),childrenFieldRef:q(e,"childrenField"),renderLabelRef:q(e,"renderLabel"),renderIconRef:q(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:d,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:v,activeKeyPathRef:h,animatedRef:q(e,"animated"),mergedShowRef:o,nodePropsRef:q(e,"nodeProps"),renderOptionRef:q(e,"renderOption"),menuPropsRef:q(e,"menuProps"),doSelect:R,doUpdateShow:z}),xe(o,b=>{!e.animated&&!b&&O()});function R(b,j){const{onSelect:B}=e;B&&U(B,b,j)}function z(b){const{"onUpdate:show":j,onUpdateShow:B}=e;j&&U(j,b),B&&U(B,b),t.value=b}function O(){n.value=null,d.value=null,s.value=null}function W(){z(!1)}function w(){S("left")}function N(){S("right")}function _(){S("up")}function x(){S("down")}function k(){const b=P();b!=null&&b.isLeaf&&o.value&&(R(b.key,b.rawNode),z(!1))}function P(){var b;const{value:j}=r,{value:B}=l;return!j||B===null?null:(b=j.getNode(B))!==null&&b!==void 0?b:null}function S(b){const{value:j}=l,{value:{getFirstAvailableNode:B}}=r;let L=null;if(j===null){const u=B();u!==null&&(L=u.key)}else{const u=P();if(u){let $;switch(b){case"down":$=u.getNext();break;case"up":$=u.getPrev();break;case"right":$=u.getChild();break;case"left":$=u.getParent();break}$&&(L=$.key)}}L!==null&&(n.value=null,d.value=L)}const a=g(()=>{const{size:b,inverted:j}=e,{common:{cubicBezierEaseInOut:B},self:L}=I.value,{padding:u,dividerColor:$,borderRadius:K,optionOpacityDisabled:Z,[Q("optionIconSuffixWidth",b)]:re,[Q("optionSuffixWidth",b)]:Se,[Q("optionIconPrefixWidth",b)]:ne,[Q("optionPrefixWidth",b)]:zo,[Q("fontSize",b)]:Io,[Q("optionHeight",b)]:So,[Q("optionIconSize",b)]:Ro}=L,M={"--n-bezier":B,"--n-font-size":Io,"--n-padding":u,"--n-border-radius":K,"--n-option-height":So,"--n-option-prefix-width":zo,"--n-option-icon-prefix-width":ne,"--n-option-suffix-width":Se,"--n-option-icon-suffix-width":re,"--n-option-icon-size":Ro,"--n-divider-color":$,"--n-option-opacity-disabled":Z};return j?(M["--n-color"]=L.colorInverted,M["--n-option-color-hover"]=L.optionColorHoverInverted,M["--n-option-color-active"]=L.optionColorActiveInverted,M["--n-option-text-color"]=L.optionTextColorInverted,M["--n-option-text-color-hover"]=L.optionTextColorHoverInverted,M["--n-option-text-color-active"]=L.optionTextColorActiveInverted,M["--n-option-text-color-child-active"]=L.optionTextColorChildActiveInverted,M["--n-prefix-color"]=L.prefixColorInverted,M["--n-suffix-color"]=L.suffixColorInverted,M["--n-group-header-text-color"]=L.groupHeaderTextColorInverted):(M["--n-color"]=L.color,M["--n-option-color-hover"]=L.optionColorHover,M["--n-option-color-active"]=L.optionColorActive,M["--n-option-text-color"]=L.optionTextColor,M["--n-option-text-color-hover"]=L.optionTextColorHover,M["--n-option-text-color-active"]=L.optionTextColorActive,M["--n-option-text-color-child-active"]=L.optionTextColorChildActive,M["--n-prefix-color"]=L.prefixColor,M["--n-suffix-color"]=L.suffixColor,M["--n-group-header-text-color"]=L.groupHeaderTextColor),M}),C=A?te("dropdown",g(()=>`${e.size[0]}${e.inverted?"i":""}`),a,e):void 0;return{mergedClsPrefix:m,mergedTheme:I,tmNodes:i,mergedShow:o,handleAfterLeave:()=>{e.animated&&O()},doUpdateShow:z,cssVars:A?void 0:a,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender}},render(){const e=(r,i,n,d,s)=>{var l;const{mergedClsPrefix:v,menuProps:h}=this;(l=this.onRender)===null||l===void 0||l.call(this);const y=(h==null?void 0:h(void 0,this.tmNodes.map(A=>A.rawNode)))||{},m={ref:vt(i),class:[r,`${v}-dropdown`,this.themeClass],clsPrefix:v,tmNodes:this.tmNodes,style:[n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:d,onMouseleave:s};return c(mo,Te(this.$attrs,m,y))},{mergedTheme:t}=this,o={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return c(no,Object.assign({},pe(this.$props,Ut),o),{trigger:()=>{var r,i;return(i=(r=this.$slots).default)===null||i===void 0?void 0:i.call(r)}})}});function Yt(){const e=D(Do,null);return e===null&&Vo("use-dialog","No outer <n-dialog-provider /> founded."),e}const Xt=e=>{const{baseColor:t,textColor2:o,bodyColor:r,cardColor:i,dividerColor:n,actionColor:d,scrollbarColor:s,scrollbarColorHover:l,invertedColor:v}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:d,headerColor:i,headerColorInverted:v,footerColor:d,footerColorInverted:v,headerBorderColor:n,headerBorderColorInverted:v,footerBorderColor:n,footerBorderColorInverted:v,siderBorderColor:n,siderBorderColorInverted:v,siderColor:i,siderColorInverted:v,siderToggleButtonBorder:`1px solid ${n}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:se(r,s),siderToggleBarColorHover:se(r,l),__invertScrollbar:"true"}},Zt=ye({name:"Layout",common:de,peers:{Scrollbar:Wo},self:Xt}),ze=Zt;function Jt(e,t,o,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:r}}const Qt=e=>{const{borderRadius:t,textColor3:o,primaryColor:r,textColor2:i,textColor1:n,fontSize:d,dividerColor:s,hoverColor:l,primaryColorHover:v}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:l,itemColorActive:me(r,{alpha:.1}),itemColorActiveHover:me(r,{alpha:.1}),itemColorActiveCollapsed:me(r,{alpha:.1}),itemTextColor:i,itemTextColorHover:i,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:i,itemTextColorHoverHorizontal:v,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:n,itemIconColorHover:n,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:n,itemIconColorHorizontal:n,itemIconColorHoverHorizontal:v,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:i,arrowColorHover:i,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:d,dividerColor:s},Jt("#BBB",r,"#FFF","#AAA"))},er=ye({name:"Menu",common:de,peers:{Tooltip:ao,Dropdown:so},self:Qt}),or=er,fo=J("n-layout-sider"),Ie={type:String,default:"static"},tr=f("layout",`
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
`,[f("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),T("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),rr={embedded:Boolean,position:Ie,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},po=J("n-layout");function go(e){return F({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},V.props),rr),setup(t){const o=E(null),r=E(null),{mergedClsPrefixRef:i,inlineThemeDisabled:n}=oe(t),d=V("Layout","-layout",tr,ze,t,i);function s(R,z){if(t.nativeScrollbar){const{value:O}=o;O&&(z===void 0?O.scrollTo(R):O.scrollTo(R,z))}else{const{value:O}=r;O&&O.scrollTo(R,z)}}G(po,t);let l=0,v=0;const h=R=>{var z;const O=R.target;l=O.scrollLeft,v=O.scrollTop,(z=t.onScroll)===null||z===void 0||z.call(t,R)};Ze(()=>{if(t.nativeScrollbar){const R=o.value;R&&(R.scrollTop=v,R.scrollLeft=l)}});const y={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},m={scrollTo:s},A=g(()=>{const{common:{cubicBezierEaseInOut:R},self:z}=d.value;return{"--n-bezier":R,"--n-color":t.embedded?z.colorEmbedded:z.color,"--n-text-color":z.textColor}}),I=n?te("layout",g(()=>t.embedded?"e":""),A,t):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:y,mergedTheme:d,handleNativeElScroll:h,cssVars:n?void 0:A,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender},m)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const i=r?this.hasSiderStyle:void 0,n=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return c("div",{class:n,style:this.cssVars},this.nativeScrollbar?c("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):c(Je,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,i]}),this.$slots))}})}const nr=go(!1),ir=go(!0),lr=f("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[T("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),T("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),ar={position:Ie,inverted:Boolean,bordered:{type:Boolean,default:!1}},sr=F({name:"LayoutHeader",props:Object.assign(Object.assign({},V.props),ar),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=oe(e),r=V("Layout","-layout-header",lr,ze,e,t),i=g(()=>{const{common:{cubicBezierEaseInOut:d},self:s}=r.value,l={"--n-bezier":d};return e.inverted?(l["--n-color"]=s.headerColorInverted,l["--n-text-color"]=s.textColorInverted,l["--n-border-color"]=s.headerBorderColorInverted):(l["--n-color"]=s.headerColor,l["--n-text-color"]=s.textColor,l["--n-border-color"]=s.headerBorderColor),l}),n=o?te("layout-header",g(()=>e.inverted?"a":"b"),i,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:i,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),dr=f("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[T("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),T("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),cr=Object.assign(Object.assign({},V.props),{inverted:Boolean,position:Ie,bordered:Boolean}),ur=F({name:"LayoutFooter",props:cr,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=oe(e),r=V("Layout","-layout-footer",dr,ze,e,t),i=g(()=>{const{common:{cubicBezierEaseInOut:d},self:s}=r.value,l={"--n-bezier":d};return e.inverted?(l["--n-color"]=s.footerColorInverted,l["--n-text-color"]=s.textColorInverted,l["--n-border-color"]=s.footerBorderColorInverted):(l["--n-color"]=s.footerColor,l["--n-text-color"]=s.textColor,l["--n-border-color"]=s.footerBorderColor),l}),n=o?te("layout-footer",g(()=>e.inverted?"a":"b"),i,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:i,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("div",{class:[`${t}-layout-footer`,this.themeClass,this.position&&`${t}-layout-footer--${this.position}-positioned`,this.bordered&&`${t}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),vr=f("layout-sider",`
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
`,[T("bordered",[p("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),p("left-placement",[T("bordered",[p("border",`
 right: 0;
 `)])]),T("right-placement",`
 justify-content: flex-start;
 `,[T("bordered",[p("border",`
 left: 0;
 `)]),T("collapsed",[f("layout-toggle-button",[f("base-icon",`
 transform: rotate(180deg);
 `)]),f("layout-toggle-bar",[H("&:hover",[p("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),p("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),f("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[f("base-icon",`
 transform: rotate(0);
 `)]),f("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[H("&:hover",[p("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),p("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),T("collapsed",[f("layout-toggle-bar",[H("&:hover",[p("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),p("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),f("layout-toggle-button",[f("base-icon",`
 transform: rotate(0);
 `)])]),f("layout-toggle-button",`
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
 `,[f("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),f("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[p("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),p("bottom",`
 position: absolute;
 top: 34px;
 `),H("&:hover",[p("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),p("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),p("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),H("&:hover",[p("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),p("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),f("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),T("show-content",[f("layout-sider-scroll-container",{opacity:1})]),T("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),hr=F({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},c(Qe,{clsPrefix:e},{default:()=>c(lo,null)}))}}),mr=F({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},c("div",{class:`${e}-layout-toggle-bar__top`}),c("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),fr={position:Ie,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},pr=F({name:"LayoutSider",props:Object.assign(Object.assign({},V.props),fr),setup(e){const t=D(po),o=E(null),r=E(null),i=g(()=>fe(l.value?e.collapsedWidth:e.width)),n=g(()=>e.collapseMode!=="transform"?{}:{minWidth:fe(e.width)}),d=g(()=>t?t.siderPlacement:"left"),s=E(e.defaultCollapsed),l=ge(q(e,"collapsed"),s);function v(_,x){if(e.nativeScrollbar){const{value:k}=o;k&&(x===void 0?k.scrollTo(_):k.scrollTo(_,x))}else{const{value:k}=r;k&&k.scrollTo(_,x)}}function h(){const{"onUpdate:collapsed":_,onUpdateCollapsed:x,onExpand:k,onCollapse:P}=e,{value:S}=l;x&&U(x,!S),_&&U(_,!S),s.value=!S,S?k&&U(k):P&&U(P)}let y=0,m=0;const A=_=>{var x;const k=_.target;y=k.scrollLeft,m=k.scrollTop,(x=e.onScroll)===null||x===void 0||x.call(e,_)};Ze(()=>{if(e.nativeScrollbar){const _=o.value;_&&(_.scrollTop=m,_.scrollLeft=y)}}),G(fo,{collapsedRef:l,collapseModeRef:q(e,"collapseMode")});const{mergedClsPrefixRef:I,inlineThemeDisabled:R}=oe(e),z=V("Layout","-layout-sider",vr,ze,e,I);function O(_){var x,k;_.propertyName==="max-width"&&(l.value?(x=e.onAfterLeave)===null||x===void 0||x.call(e):(k=e.onAfterEnter)===null||k===void 0||k.call(e))}const W={scrollTo:v},w=g(()=>{const{common:{cubicBezierEaseInOut:_},self:x}=z.value,{siderToggleButtonColor:k,siderToggleButtonBorder:P,siderToggleBarColor:S,siderToggleBarColorHover:a}=x,C={"--n-bezier":_,"--n-toggle-button-color":k,"--n-toggle-button-border":P,"--n-toggle-bar-color":S,"--n-toggle-bar-color-hover":a};return e.inverted?(C["--n-color"]=x.siderColorInverted,C["--n-text-color"]=x.textColorInverted,C["--n-border-color"]=x.siderBorderColorInverted,C["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColorInverted,C.__invertScrollbar=x.__invertScrollbar):(C["--n-color"]=x.siderColor,C["--n-text-color"]=x.textColor,C["--n-border-color"]=x.siderBorderColor,C["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColor),C}),N=R?te("layout-sider",g(()=>e.inverted?"a":"b"),w,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:I,mergedTheme:z,styleMaxWidth:i,mergedCollapsed:l,scrollContainerStyle:n,siderPlacement:d,handleNativeElScroll:A,handleTransitionend:O,handleTriggerClick:h,inlineThemeDisabled:R,cssVars:w,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender},W)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:fe(this.width)}]},this.nativeScrollbar?c("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):c(Je,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?c(mr,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):c(hr,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?c("div",{class:`${t}-layout-sider__border`}):null)}}),ce=J("n-menu"),Le=J("n-submenu"),Fe=J("n-menu-item-group"),he=8;function je(e){const t=D(ce),{props:o,mergedCollapsedRef:r}=t,i=D(Le,null),n=D(Fe,null),d=g(()=>o.mode==="horizontal"),s=g(()=>d.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),l=g(()=>{var m;return Math.max((m=o.collapsedIconSize)!==null&&m!==void 0?m:o.iconSize,o.iconSize)}),v=g(()=>{var m;return!d.value&&e.root&&r.value&&(m=o.collapsedIconSize)!==null&&m!==void 0?m:o.iconSize}),h=g(()=>{if(d.value)return;const{collapsedWidth:m,indent:A,rootIndent:I}=o,{root:R,isGroup:z}=e,O=I===void 0?A:I;if(R)return r.value?m/2-l.value/2:O;if(n)return A/2+n.paddingLeftRef.value;if(i)return(z?A/2:A)+i.paddingLeftRef.value}),y=g(()=>{const{collapsedWidth:m,indent:A,rootIndent:I}=o,{value:R}=l,{root:z}=e;return d.value||!z||!r.value?he:(I===void 0?A:I)+R+he-(m+R)/2});return{dropdownPlacement:s,activeIconSize:v,maxIconSize:l,paddingLeft:h,iconMarginRight:y,NMenu:t,NSubmenu:i}}const Ee={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},bo=Object.assign(Object.assign({},Ee),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),gr=F({name:"MenuOptionGroup",props:bo,setup(e){G(Le,null);const t=je(e);G(Fe,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:r}=D(ce);return function(){const{value:i}=o,n=t.paddingLeft.value,{nodeProps:d}=r,s=d==null?void 0:d(e.tmNode.rawNode);return c("div",{class:`${i}-menu-item-group`,role:"group"},c("div",Object.assign({},s,{class:[`${i}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",n!==void 0?`padding-left: ${n}px;`:""]}),X(e.title),e.extra?c(Xe,null," ",X(e.extra)):null),c("div",null,e.tmNodes.map(l=>Me(l,r))))}}}),xo=F({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=D(ce);return{menuProps:t,style:g(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:g(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:i}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${i}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:r,renderExtra:i,expandIcon:n}}=this,d=o?o(t.rawNode):X(this.icon);return c("div",{onClick:s=>{var l;(l=this.onClick)===null||l===void 0||l.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&c("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),c("div",{class:`${e}-menu-item-content-header`,role:"none"},r?r(t.rawNode):X(this.title),this.extra||i?c("span",{class:`${e}-menu-item-content-header__extra`}," ",i?i(t.rawNode):X(this.extra)):null),this.showArrow?c(Qe,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>n?n(t.rawNode):c(pt,null)}):null)}}),yo=Object.assign(Object.assign({},Ee),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),br=F({name:"Submenu",props:yo,setup(e){const t=je(e),{NMenu:o,NSubmenu:r}=t,{props:i,mergedCollapsedRef:n,mergedThemeRef:d}=o,s=g(()=>{const{disabled:m}=e;return r!=null&&r.mergedDisabledRef.value||i.disabled?!0:m}),l=E(!1);G(Le,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:s}),G(Fe,null);function v(){const{onClick:m}=e;m&&m()}function h(){s.value||(n.value||o.toggleExpand(e.internalKey),v())}function y(m){l.value=m}return{menuProps:i,mergedTheme:d,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:l,paddingLeft:t.paddingLeft,mergedDisabled:s,mergedValue:o.mergedValueRef,childActive:le(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:g(()=>i.mode==="horizontal"?!1:n.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:g(()=>!s.value&&(i.mode==="horizontal"||n.value)),handlePopoverShowChange:y,handleClick:h}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:r}}=this,i=()=>{const{isHorizontal:d,paddingLeft:s,collapsed:l,mergedDisabled:v,maxIconSize:h,activeIconSize:y,title:m,childActive:A,icon:I,handleClick:R,menuProps:{nodeProps:z},dropdownShow:O,iconMarginRight:W,tmNode:w,mergedClsPrefix:N}=this,_=z==null?void 0:z(w.rawNode);return c("div",Object.assign({},_,{class:[`${N}-menu-item`,_==null?void 0:_.class],role:"menuitem"}),c(xo,{tmNode:w,paddingLeft:s,collapsed:l,disabled:v,iconMarginRight:W,maxIconSize:h,activeIconSize:y,title:m,extra:this.extra,showArrow:!d,childActive:A,clsPrefix:N,icon:I,hover:O,onClick:R}))},n=()=>c(Uo,null,{default:()=>{const{tmNodes:d,collapsed:s}=this;return s?null:c("div",{class:`${t}-submenu-children`,role:"menu"},d.map(l=>Me(l,this.menuProps)))}});return this.root?c(Gt,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>c("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},i(),this.isHorizontal?null:n())}):c("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},i(),n())}}),Co=Object.assign(Object.assign({},Ee),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),xr=F({name:"MenuOption",props:Co,setup(e){const t=je(e),{NSubmenu:o,NMenu:r}=t,{props:i,mergedClsPrefixRef:n,mergedCollapsedRef:d}=r,s=o?o.mergedDisabledRef:{value:!1},l=g(()=>s.value||e.disabled);function v(y){const{onClick:m}=e;m&&m(y)}function h(y){l.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),v(y))}return{mergedClsPrefix:n,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:i,dropdownEnabled:le(()=>e.root&&d.value&&i.mode!=="horizontal"&&!l.value),selected:le(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:l,handleClick:h}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:r,nodeProps:i}}=this,n=i==null?void 0:i(o.rawNode);return c("div",Object.assign({},n,{role:"menuitem",class:[`${e}-menu-item`,n==null?void 0:n.class]}),c(Tt,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):X(this.title),trigger:()=>c(xo,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),yr=F({name:"MenuDivider",setup(){const e=D(ce),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:c("div",{class:`${t.value}-menu-divider`})}}),Cr=Oe(bo),wr=Oe(Co),zr=Oe(yo);function wo(e){return e.type==="divider"||e.type==="render"}function Ir(e){return e.type==="divider"}function Me(e,t){const{rawNode:o}=e,{show:r}=o;if(r===!1)return null;if(wo(o))return Ir(o)?c(yr,Object.assign({key:e.key},o.props)):null;const{labelField:i}=t,{key:n,level:d,isGroup:s}=e,l=Object.assign(Object.assign({},o),{title:o.title||o[i],extra:o.titleExtra||o.extra,key:n,internalKey:n,level:d,root:d===0,isGroup:s});return e.children?e.isGroup?c(gr,pe(l,Cr,{tmNode:e,tmNodes:e.children,key:n})):c(br,pe(l,zr,{key:n,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):c(xr,pe(l,wr,{key:n,tmNode:e}))}const We=[H("&::before","background-color: var(--n-item-color-hover);"),p("arrow",`
 color: var(--n-arrow-color-hover);
 `),p("icon",`
 color: var(--n-item-icon-color-hover);
 `),f("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[H("a",`
 color: var(--n-item-text-color-hover);
 `),p("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ue=[p("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),f("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[H("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),p("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Sr=H([f("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[T("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[f("submenu","margin: 0;"),f("menu-item","margin: 0;"),f("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[H("&::before","display: none;"),T("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),f("menu-item-content",[T("selected",[p("icon","color: var(--n-item-icon-color-active-horizontal);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[H("a","color: var(--n-item-text-color-active-horizontal);"),p("extra","color: var(--n-item-text-color-active-horizontal);")])]),T("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[H("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),p("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),p("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ae("disabled",[ae("selected, child-active",[H("&:focus-within",Ue)]),T("selected",[ie(null,[p("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[H("a","color: var(--n-item-text-color-active-hover-horizontal);"),p("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),T("child-active",[ie(null,[p("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[H("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),p("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),ie("border-bottom: 2px solid var(--n-border-color-horizontal);",Ue)]),f("menu-item-content-header",[H("a","color: var(--n-item-text-color-horizontal);")])])]),T("collapsed",[f("menu-item-content",[T("selected",[H("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),f("menu-item-content-header","opacity: 0;"),p("arrow","opacity: 0;"),p("icon","color: var(--n-item-icon-color-collapsed);")])]),f("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),f("menu-item-content",`
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
 `),T("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),T("collapsed",[p("arrow","transform: rotate(0);")]),T("selected",[H("&::before","background-color: var(--n-item-color-active);"),p("arrow","color: var(--n-arrow-color-active);"),p("icon","color: var(--n-item-icon-color-active);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[H("a","color: var(--n-item-text-color-active);"),p("extra","color: var(--n-item-text-color-active);")])]),T("child-active",[f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[H("a",`
 color: var(--n-item-text-color-child-active);
 `),p("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),p("arrow",`
 color: var(--n-arrow-color-child-active);
 `),p("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ae("disabled",[ae("selected, child-active",[H("&:focus-within",We)]),T("selected",[ie(null,[p("arrow","color: var(--n-arrow-color-active-hover);"),p("icon","color: var(--n-item-icon-color-active-hover);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[H("a","color: var(--n-item-text-color-active-hover);"),p("extra","color: var(--n-item-text-color-active-hover);")])])]),T("child-active",[ie(null,[p("arrow","color: var(--n-arrow-color-child-active-hover);"),p("icon","color: var(--n-item-icon-color-child-active-hover);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[H("a","color: var(--n-item-text-color-child-active-hover);"),p("extra","color: var(--n-item-text-color-child-active-hover);")])])]),T("selected",[ie(null,[H("&::before","background-color: var(--n-item-color-active-hover);")])]),ie(null,We)]),p("icon",`
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
 `),p("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),f("menu-item-content-header",`
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
 `)]),p("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),f("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[f("menu-item-content",`
 height: var(--n-item-height);
 `),f("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[qo({duration:".2s"})])]),f("menu-item-group",[f("menu-item-group-title",`
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
 `)])]),f("menu-tooltip",[H("a",`
 color: inherit;
 text-decoration: none;
 `)]),f("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function ie(e,t){return[T("hover",e,t),H("&:hover",e,t)]}const Rr=Object.assign(Object.assign({},V.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),Pr=F({name:"Menu",props:Rr,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=oe(e),r=V("Menu","-menu",Sr,or,e,t),i=D(fo,null),n=g(()=>{var P;const{collapsed:S}=e;if(S!==void 0)return S;if(i){const{collapseModeRef:a,collapsedRef:C}=i;if(a.value==="width")return(P=C.value)!==null&&P!==void 0?P:!1}return!1}),d=g(()=>{const{keyField:P,childrenField:S,disabledField:a}=e;return io(e.items||e.options,{getIgnored(C){return wo(C)},getChildren(C){return C[S]},getDisabled(C){return C[a]},getKey(C){var b;return(b=C[P])!==null&&b!==void 0?b:C.name}})}),s=g(()=>new Set(d.value.treeNodes.map(P=>P.key))),{watchProps:l}=e,v=E(null);l!=null&&l.includes("defaultValue")?Ae(()=>{v.value=e.defaultValue}):v.value=e.defaultValue;const h=q(e,"value"),y=ge(h,v),m=E([]),A=()=>{m.value=e.defaultExpandAll?d.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||d.value.getPath(y.value,{includeSelf:!1}).keyPath};l!=null&&l.includes("defaultExpandedKeys")?Ae(A):A();const I=ht(e,["expandedNames","expandedKeys"]),R=ge(I,m),z=g(()=>d.value.treeNodes),O=g(()=>d.value.getPath(y.value).keyPath);G(ce,{props:e,mergedCollapsedRef:n,mergedThemeRef:r,mergedValueRef:y,mergedExpandedKeysRef:R,activePathRef:O,mergedClsPrefixRef:t,isHorizontalRef:g(()=>e.mode==="horizontal"),invertedRef:q(e,"inverted"),doSelect:W,toggleExpand:N});function W(P,S){const{"onUpdate:value":a,onUpdateValue:C,onSelect:b}=e;C&&U(C,P,S),a&&U(a,P,S),b&&U(b,P,S),v.value=P}function w(P){const{"onUpdate:expandedKeys":S,onUpdateExpandedKeys:a,onExpandedNamesChange:C,onOpenNamesChange:b}=e;S&&U(S,P),a&&U(a,P),C&&U(C,P),b&&U(b,P),m.value=P}function N(P){const S=Array.from(R.value),a=S.findIndex(C=>C===P);if(~a)S.splice(a,1);else{if(e.accordion&&s.value.has(P)){const C=S.findIndex(b=>s.value.has(b));C>-1&&S.splice(C,1)}S.push(P)}w(S)}const _=P=>{const S=d.value.getPath(P??y.value,{includeSelf:!1}).keyPath;if(!S.length)return;const a=Array.from(R.value),C=new Set([...a,...S]);e.accordion&&s.value.forEach(b=>{C.has(b)&&!S.includes(b)&&C.delete(b)}),w(Array.from(C))},x=g(()=>{const{inverted:P}=e,{common:{cubicBezierEaseInOut:S},self:a}=r.value,{borderRadius:C,borderColorHorizontal:b,fontSize:j,itemHeight:B,dividerColor:L}=a,u={"--n-divider-color":L,"--n-bezier":S,"--n-font-size":j,"--n-border-color-horizontal":b,"--n-border-radius":C,"--n-item-height":B};return P?(u["--n-group-text-color"]=a.groupTextColorInverted,u["--n-color"]=a.colorInverted,u["--n-item-text-color"]=a.itemTextColorInverted,u["--n-item-text-color-hover"]=a.itemTextColorHoverInverted,u["--n-item-text-color-active"]=a.itemTextColorActiveInverted,u["--n-item-text-color-child-active"]=a.itemTextColorChildActiveInverted,u["--n-item-text-color-child-active-hover"]=a.itemTextColorChildActiveInverted,u["--n-item-text-color-active-hover"]=a.itemTextColorActiveHoverInverted,u["--n-item-icon-color"]=a.itemIconColorInverted,u["--n-item-icon-color-hover"]=a.itemIconColorHoverInverted,u["--n-item-icon-color-active"]=a.itemIconColorActiveInverted,u["--n-item-icon-color-active-hover"]=a.itemIconColorActiveHoverInverted,u["--n-item-icon-color-child-active"]=a.itemIconColorChildActiveInverted,u["--n-item-icon-color-child-active-hover"]=a.itemIconColorChildActiveHoverInverted,u["--n-item-icon-color-collapsed"]=a.itemIconColorCollapsedInverted,u["--n-item-text-color-horizontal"]=a.itemTextColorHorizontalInverted,u["--n-item-text-color-hover-horizontal"]=a.itemTextColorHoverHorizontalInverted,u["--n-item-text-color-active-horizontal"]=a.itemTextColorActiveHorizontalInverted,u["--n-item-text-color-child-active-horizontal"]=a.itemTextColorChildActiveHorizontalInverted,u["--n-item-text-color-child-active-hover-horizontal"]=a.itemTextColorChildActiveHoverHorizontalInverted,u["--n-item-text-color-active-hover-horizontal"]=a.itemTextColorActiveHoverHorizontalInverted,u["--n-item-icon-color-horizontal"]=a.itemIconColorHorizontalInverted,u["--n-item-icon-color-hover-horizontal"]=a.itemIconColorHoverHorizontalInverted,u["--n-item-icon-color-active-horizontal"]=a.itemIconColorActiveHorizontalInverted,u["--n-item-icon-color-active-hover-horizontal"]=a.itemIconColorActiveHoverHorizontalInverted,u["--n-item-icon-color-child-active-horizontal"]=a.itemIconColorChildActiveHorizontalInverted,u["--n-item-icon-color-child-active-hover-horizontal"]=a.itemIconColorChildActiveHoverHorizontalInverted,u["--n-arrow-color"]=a.arrowColorInverted,u["--n-arrow-color-hover"]=a.arrowColorHoverInverted,u["--n-arrow-color-active"]=a.arrowColorActiveInverted,u["--n-arrow-color-active-hover"]=a.arrowColorActiveHoverInverted,u["--n-arrow-color-child-active"]=a.arrowColorChildActiveInverted,u["--n-arrow-color-child-active-hover"]=a.arrowColorChildActiveHoverInverted,u["--n-item-color-hover"]=a.itemColorHoverInverted,u["--n-item-color-active"]=a.itemColorActiveInverted,u["--n-item-color-active-hover"]=a.itemColorActiveHoverInverted,u["--n-item-color-active-collapsed"]=a.itemColorActiveCollapsedInverted):(u["--n-group-text-color"]=a.groupTextColor,u["--n-color"]=a.color,u["--n-item-text-color"]=a.itemTextColor,u["--n-item-text-color-hover"]=a.itemTextColorHover,u["--n-item-text-color-active"]=a.itemTextColorActive,u["--n-item-text-color-child-active"]=a.itemTextColorChildActive,u["--n-item-text-color-child-active-hover"]=a.itemTextColorChildActiveHover,u["--n-item-text-color-active-hover"]=a.itemTextColorActiveHover,u["--n-item-icon-color"]=a.itemIconColor,u["--n-item-icon-color-hover"]=a.itemIconColorHover,u["--n-item-icon-color-active"]=a.itemIconColorActive,u["--n-item-icon-color-active-hover"]=a.itemIconColorActiveHover,u["--n-item-icon-color-child-active"]=a.itemIconColorChildActive,u["--n-item-icon-color-child-active-hover"]=a.itemIconColorChildActiveHover,u["--n-item-icon-color-collapsed"]=a.itemIconColorCollapsed,u["--n-item-text-color-horizontal"]=a.itemTextColorHorizontal,u["--n-item-text-color-hover-horizontal"]=a.itemTextColorHoverHorizontal,u["--n-item-text-color-active-horizontal"]=a.itemTextColorActiveHorizontal,u["--n-item-text-color-child-active-horizontal"]=a.itemTextColorChildActiveHorizontal,u["--n-item-text-color-child-active-hover-horizontal"]=a.itemTextColorChildActiveHoverHorizontal,u["--n-item-text-color-active-hover-horizontal"]=a.itemTextColorActiveHoverHorizontal,u["--n-item-icon-color-horizontal"]=a.itemIconColorHorizontal,u["--n-item-icon-color-hover-horizontal"]=a.itemIconColorHoverHorizontal,u["--n-item-icon-color-active-horizontal"]=a.itemIconColorActiveHorizontal,u["--n-item-icon-color-active-hover-horizontal"]=a.itemIconColorActiveHoverHorizontal,u["--n-item-icon-color-child-active-horizontal"]=a.itemIconColorChildActiveHorizontal,u["--n-item-icon-color-child-active-hover-horizontal"]=a.itemIconColorChildActiveHoverHorizontal,u["--n-arrow-color"]=a.arrowColor,u["--n-arrow-color-hover"]=a.arrowColorHover,u["--n-arrow-color-active"]=a.arrowColorActive,u["--n-arrow-color-active-hover"]=a.arrowColorActiveHover,u["--n-arrow-color-child-active"]=a.arrowColorChildActive,u["--n-arrow-color-child-active-hover"]=a.arrowColorChildActiveHover,u["--n-item-color-hover"]=a.itemColorHover,u["--n-item-color-active"]=a.itemColorActive,u["--n-item-color-active-hover"]=a.itemColorActiveHover,u["--n-item-color-active-collapsed"]=a.itemColorActiveCollapsed),u}),k=o?te("menu",g(()=>e.inverted?"a":"b"),x,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:I,uncontrolledExpanededKeys:m,mergedExpandedKeys:R,uncontrolledValue:v,mergedValue:y,activePath:O,tmNodes:z,mergedTheme:r,mergedCollapsed:n,cssVars:o?void 0:x,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender,showOption:_}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:r}=this;return r==null||r(),c("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(i=>Me(i,this.$props)))}}),_r={class:"h-12 flex items-center justify-end"},Hr=F({__name:"HeaderBar",setup(e){const t=Jo(),o=Go(),r=Yt(),i=eo();ke(()=>{o.fetchUserInfo()});function n(){r.warning({title:"警告",content:"你确定要登出吗？",positiveText:"确定",negativeText:"取消",maskClosable:!1,transformOrigin:"center",showIcon:!1,closeOnEsc:!1,negativeButtonProps:{type:"info"},positiveButtonProps:{type:"info"},onPositiveClick:()=>{d()}})}function d(){localStorage.removeItem("token"),t.push("/login"),i.success("已退出登录")}return(s,l)=>{const v=St,h=Zo;return Ce(),oo("header",_r,[Y(v,{class:"mr-4",round:""},{default:ee(()=>[Ke(Yo(Xo(o).getUsername),1)]),_:1}),Y(h,{class:"mr-8",strong:"",secondary:"",round:"",type:"error",onClick:n},{default:ee(()=>[Ke("登出")]),_:1})])}}}),Ar={},Nr={class:"h-6 flex justify-center items-center bg-white text-xs"};function kr(e,t){return Ce(),oo("footer",Nr," 尾部，放一些网站信息 ")}const Tr=Qo(Ar,[["render",kr]]),Or=F({__name:"SideNav",setup(e){const t={itemTextColorActive:"#2080f0",itemTextColorActiveHover:"#2080f0",itemIconColorActive:"#2080f0",itemIconColorActiveHover:"#2080f0",itemColorActive:"#2080f020",itemColorActiveHover:"#2080f020",itemColorActiveCollapsed:"#2080f020"},o=et(),r=E(),i=E("");ke(()=>{r.value=d(ot),s(o.name)});function n(l){return()=>c(uo,null,{default:()=>c(l)})}function d(l){return l.map(h=>{var A,I;let y=((A=h.children)==null?void 0:A.length)===1?h.children[0].name:h.name;return{label:()=>c(tt,{to:{name:y}},{default:()=>{var R;return(R=h.meta)==null?void 0:R.title}}),key:y,icon:n((I=h.meta)==null?void 0:I.icon)}})}function s(l){i.value=l}return(l,v)=>{const h=Pr;return Ce(),to(h,{options:r.value,value:i.value,"onUpdate:value":s,"theme-overrides":t},null,8,["options","value"])}}});const $r={class:"h-20 flex justify-center items-center"},Br={class:"flex"},Lr=be("img",{class:"w-11 -mt-1",src:lt,alt:"eBook"},null,-1),Fr=be("h2",{class:"font-bold text-4xl ml-2 tracking-wide"},"eBook",-1),jr=[Lr,Fr],Kr=F({__name:"index",setup(e){const t=E(!1);return window.$message===void 0&&(window.$message=eo()),(o,r)=>{const i=pr,n=sr,d=it("RouterView"),s=ir,l=ur,v=nr;return Ce(),to(v,{position:"absolute","has-sider":""},{default:ee(()=>[Y(i,{"show-trigger":"","collapse-mode":"width",collapsed:t.value,onCollapse:r[0]||(r[0]=h=>t.value=!0),onExpand:r[1]||(r[1]=h=>t.value=!1),bordered:!0},{default:ee(()=>[be("header",$r,[rt(be("div",Br,jr,512),[[nt,!t.value]])]),Y(Or)]),_:1},8,["collapsed"]),Y(v,null,{default:ee(()=>[Y(n,{class:"z-50",position:"absolute",bordered:!0},{default:ee(()=>[Y(Hr)]),_:1}),Y(s,{class:"h-screen pt-12 pb-6",bordered:!0},{default:ee(()=>[Y(d)]),_:1}),Y(l,{position:"absolute",bordered:!0},{default:ee(()=>[Y(Tr)]),_:1})]),_:1})]),_:1})}}});export{Kr as default};
