import{d as B,h as v,i as F,a as Me,t as je,c as xe,b as Ce,s as Ke,e as he,f as re,g as Y,j as m,k as y,u as E,r as L,l as G,p as D,m as ye,n as x,o as W,N as ze,q as u,v as C,w as Ie,x as le,y as Q,z as ne,A as O,B as U,F as Ve,C as ae,D as De,E as ie,G as ce,H as Z,I as Ue,J as fe,K as qe,L as we,M as Se,O as ee,P as _e,Q as k,R as j,S as ge,T as Ye,U as He,V as Ge,W as We,_ as Xe,X as K,Y as Ae,Z as Ze,$ as Je,a0 as Qe,a1 as eo,a2 as oo,a3 as to,a4 as ro,a5 as no}from"./index-65fa99b2.js";import{t as io,d as lo,C as ao,N as co,a as so,u as uo,c as vo,b as mo,e as ho}from"./Dropdown-bcd36fa9.js";const fo=B({name:"ChevronDownFilled",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function go(){const e=F(Me,null);return e===null&&je("use-dialog","No outer <n-dialog-provider /> founded."),e}const po=e=>{const{baseColor:t,textColor2:o,bodyColor:n,cardColor:c,dividerColor:l,actionColor:d,scrollbarColor:s,scrollbarColorHover:a,invertedColor:h}=e;return{textColor:o,textColorInverted:"#FFF",color:n,colorEmbedded:d,headerColor:c,headerColorInverted:h,footerColor:d,footerColorInverted:h,headerBorderColor:l,headerBorderColorInverted:h,footerBorderColor:l,footerBorderColorInverted:h,siderBorderColor:l,siderBorderColorInverted:h,siderColor:c,siderColorInverted:h,siderToggleButtonBorder:`1px solid ${l}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:he(n,s),siderToggleBarColorHover:he(n,a),__invertScrollbar:"true"}},bo=xe({name:"Layout",common:Ce,peers:{Scrollbar:Ke},self:po}),oe=bo;function xo(e,t,o,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:n}}const Co=e=>{const{borderRadius:t,textColor3:o,primaryColor:n,textColor2:c,textColor1:l,fontSize:d,dividerColor:s,hoverColor:a,primaryColorHover:h}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:a,itemColorActive:re(n,{alpha:.1}),itemColorActiveHover:re(n,{alpha:.1}),itemColorActiveCollapsed:re(n,{alpha:.1}),itemTextColor:c,itemTextColorHover:c,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:c,itemTextColorHoverHorizontal:h,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:l,itemIconColorHover:l,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:l,itemIconColorHorizontal:l,itemIconColorHoverHorizontal:h,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:c,arrowColorHover:c,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:d,dividerColor:s},xo("#BBB",n,"#FFF","#AAA"))},yo=xe({name:"Menu",common:Ce,peers:{Tooltip:io,Dropdown:lo},self:Co}),zo=yo,Re=Y("n-layout-sider"),te={type:String,default:"static"},Io=m("layout",`
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
`,[m("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),y("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),wo={embedded:Boolean,position:te,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Pe=Y("n-layout");function Te(e){return B({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},E.props),wo),setup(t){const o=L(null),n=L(null),{mergedClsPrefixRef:c,inlineThemeDisabled:l}=G(t),d=E("Layout","-layout",Io,oe,t,c);function s(I,S){if(t.nativeScrollbar){const{value:T}=o;T&&(S===void 0?T.scrollTo(I):T.scrollTo(I,S))}else{const{value:T}=n;T&&T.scrollTo(I,S)}}D(Pe,t);let a=0,h=0;const R=I=>{var S;const T=I.target;a=T.scrollLeft,h=T.scrollTop,(S=t.onScroll)===null||S===void 0||S.call(t,I)};ye(()=>{if(t.nativeScrollbar){const I=o.value;I&&(I.scrollTop=h,I.scrollLeft=a)}});const A={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},g={scrollTo:s},P=x(()=>{const{common:{cubicBezierEaseInOut:I},self:S}=d.value;return{"--n-bezier":I,"--n-color":t.embedded?S.colorEmbedded:S.color,"--n-text-color":S.textColor}}),H=l?W("layout",x(()=>t.embedded?"e":""),P,t):void 0;return Object.assign({mergedClsPrefix:c,scrollableElRef:o,scrollbarInstRef:n,hasSiderStyle:A,mergedTheme:d,handleNativeElScroll:R,cssVars:l?void 0:P,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender},g)},render(){var t;const{mergedClsPrefix:o,hasSider:n}=this;(t=this.onRender)===null||t===void 0||t.call(this);const c=n?this.hasSiderStyle:void 0,l=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return v("div",{class:l,style:this.cssVars},this.nativeScrollbar?v("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,c],onScroll:this.handleNativeElScroll},this.$slots):v(ze,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,c]}),this.$slots))}})}const So=Te(!1),_o=Te(!0),Ho=m("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[y("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),y("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Ao={position:te,inverted:Boolean,bordered:{type:Boolean,default:!1}},Ro=B({name:"LayoutHeader",props:Object.assign(Object.assign({},E.props),Ao),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=G(e),n=E("Layout","-layout-header",Ho,oe,e,t),c=x(()=>{const{common:{cubicBezierEaseInOut:d},self:s}=n.value,a={"--n-bezier":d};return e.inverted?(a["--n-color"]=s.headerColorInverted,a["--n-text-color"]=s.textColorInverted,a["--n-border-color"]=s.headerBorderColorInverted):(a["--n-color"]=s.headerColor,a["--n-text-color"]=s.textColor,a["--n-border-color"]=s.headerBorderColor),a}),l=o?W("layout-header",x(()=>e.inverted?"a":"b"),c,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:c,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Po=m("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[y("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),y("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),To=Object.assign(Object.assign({},E.props),{inverted:Boolean,position:te,bordered:Boolean}),No=B({name:"LayoutFooter",props:To,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=G(e),n=E("Layout","-layout-footer",Po,oe,e,t),c=x(()=>{const{common:{cubicBezierEaseInOut:d},self:s}=n.value,a={"--n-bezier":d};return e.inverted?(a["--n-color"]=s.footerColorInverted,a["--n-text-color"]=s.textColorInverted,a["--n-border-color"]=s.footerBorderColorInverted):(a["--n-color"]=s.footerColor,a["--n-text-color"]=s.textColor,a["--n-border-color"]=s.footerBorderColor),a}),l=o?W("layout-footer",x(()=>e.inverted?"a":"b"),c,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:c,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{class:[`${t}-layout-footer`,this.themeClass,this.position&&`${t}-layout-footer--${this.position}-positioned`,this.bordered&&`${t}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),Bo=m("layout-sider",`
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
`,[y("bordered",[u("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),u("left-placement",[y("bordered",[u("border",`
 right: 0;
 `)])]),y("right-placement",`
 justify-content: flex-start;
 `,[y("bordered",[u("border",`
 left: 0;
 `)]),y("collapsed",[m("layout-toggle-button",[m("base-icon",`
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",[C("&:hover",[u("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),m("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[m("base-icon",`
 transform: rotate(0);
 `)]),m("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[C("&:hover",[u("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),y("collapsed",[m("layout-toggle-bar",[C("&:hover",[u("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),m("layout-toggle-button",[m("base-icon",`
 transform: rotate(0);
 `)])]),m("layout-toggle-button",`
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
 `,[m("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[u("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),u("bottom",`
 position: absolute;
 top: 34px;
 `),C("&:hover",[u("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),u("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),C("&:hover",[u("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),u("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),m("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),y("show-content",[m("layout-sider-scroll-container",{opacity:1})]),y("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),$o=B({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return v("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},v(Ie,{clsPrefix:e},{default:()=>v(ao,null)}))}}),ko=B({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return v("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},v("div",{class:`${e}-layout-toggle-bar__top`}),v("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Oo={position:te,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Lo=B({name:"LayoutSider",props:Object.assign(Object.assign({},E.props),Oo),setup(e){const t=F(Pe),o=L(null),n=L(null),c=x(()=>ne(a.value?e.collapsedWidth:e.width)),l=x(()=>e.collapseMode!=="transform"?{}:{minWidth:ne(e.width)}),d=x(()=>t?t.siderPlacement:"left"),s=L(e.defaultCollapsed),a=le(Q(e,"collapsed"),s);function h(_,z){if(e.nativeScrollbar){const{value:w}=o;w&&(z===void 0?w.scrollTo(_):w.scrollTo(_,z))}else{const{value:w}=n;w&&w.scrollTo(_,z)}}function R(){const{"onUpdate:collapsed":_,onUpdateCollapsed:z,onExpand:w,onCollapse:p}=e,{value:b}=a;z&&O(z,!b),_&&O(_,!b),s.value=!b,b?w&&O(w):p&&O(p)}let A=0,g=0;const P=_=>{var z;const w=_.target;A=w.scrollLeft,g=w.scrollTop,(z=e.onScroll)===null||z===void 0||z.call(e,_)};ye(()=>{if(e.nativeScrollbar){const _=o.value;_&&(_.scrollTop=g,_.scrollLeft=A)}}),D(Re,{collapsedRef:a,collapseModeRef:Q(e,"collapseMode")});const{mergedClsPrefixRef:H,inlineThemeDisabled:I}=G(e),S=E("Layout","-layout-sider",Bo,oe,e,H);function T(_){var z,w;_.propertyName==="max-width"&&(a.value?(z=e.onAfterLeave)===null||z===void 0||z.call(e):(w=e.onAfterEnter)===null||w===void 0||w.call(e))}const q={scrollTo:h},M=x(()=>{const{common:{cubicBezierEaseInOut:_},self:z}=S.value,{siderToggleButtonColor:w,siderToggleButtonBorder:p,siderToggleBarColor:b,siderToggleBarColorHover:r}=z,f={"--n-bezier":_,"--n-toggle-button-color":w,"--n-toggle-button-border":p,"--n-toggle-bar-color":b,"--n-toggle-bar-color-hover":r};return e.inverted?(f["--n-color"]=z.siderColorInverted,f["--n-text-color"]=z.textColorInverted,f["--n-border-color"]=z.siderBorderColorInverted,f["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColorInverted,f.__invertScrollbar=z.__invertScrollbar):(f["--n-color"]=z.siderColor,f["--n-text-color"]=z.textColor,f["--n-border-color"]=z.siderBorderColor,f["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColor),f}),$=I?W("layout-sider",x(()=>e.inverted?"a":"b"),M,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:n,mergedClsPrefix:H,mergedTheme:S,styleMaxWidth:c,mergedCollapsed:a,scrollContainerStyle:l,siderPlacement:d,handleNativeElScroll:P,handleTransitionend:T,handleTriggerClick:R,inlineThemeDisabled:I,cssVars:M,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender},q)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ne(this.width)}]},this.nativeScrollbar?v("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):v(ze,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),n?n==="bar"?v(ko,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):v($o,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?v("div",{class:`${t}-layout-sider__border`}):null)}}),X=Y("n-menu"),se=Y("n-submenu"),de=Y("n-menu-item-group"),J=8;function ue(e){const t=F(X),{props:o,mergedCollapsedRef:n}=t,c=F(se,null),l=F(de,null),d=x(()=>o.mode==="horizontal"),s=x(()=>d.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=x(()=>{var g;return Math.max((g=o.collapsedIconSize)!==null&&g!==void 0?g:o.iconSize,o.iconSize)}),h=x(()=>{var g;return!d.value&&e.root&&n.value&&(g=o.collapsedIconSize)!==null&&g!==void 0?g:o.iconSize}),R=x(()=>{if(d.value)return;const{collapsedWidth:g,indent:P,rootIndent:H}=o,{root:I,isGroup:S}=e,T=H===void 0?P:H;if(I)return n.value?g/2-a.value/2:T;if(l)return P/2+l.paddingLeftRef.value;if(c)return(S?P/2:P)+c.paddingLeftRef.value}),A=x(()=>{const{collapsedWidth:g,indent:P,rootIndent:H}=o,{value:I}=a,{root:S}=e;return d.value||!S||!n.value?J:(H===void 0?P:H)+I+J-(g+I)/2});return{dropdownPlacement:s,activeIconSize:h,maxIconSize:a,paddingLeft:R,iconMarginRight:A,NMenu:t,NSubmenu:c}}const ve={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Ne=Object.assign(Object.assign({},ve),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Eo=B({name:"MenuOptionGroup",props:Ne,setup(e){D(se,null);const t=ue(e);D(de,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=F(X);return function(){const{value:c}=o,l=t.paddingLeft.value,{nodeProps:d}=n,s=d==null?void 0:d(e.tmNode.rawNode);return v("div",{class:`${c}-menu-item-group`,role:"group"},v("div",Object.assign({},s,{class:[`${c}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),U(e.title),e.extra?v(Ve,null," ",U(e.extra)):null),v("div",null,e.tmNodes.map(a=>me(a,n))))}}}),Be=B({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=F(X);return{menuProps:t,style:x(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:x(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:c}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${c}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:c,expandIcon:l}}=this,d=o?o(t.rawNode):U(this.icon);return v("div",{onClick:s=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&v("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),v("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(t.rawNode):U(this.title),this.extra||c?v("span",{class:`${e}-menu-item-content-header__extra`}," ",c?c(t.rawNode):U(this.extra)):null),this.showArrow?v(Ie,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(t.rawNode):v(fo,null)}):null)}}),$e=Object.assign(Object.assign({},ve),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Fo=B({name:"Submenu",props:$e,setup(e){const t=ue(e),{NMenu:o,NSubmenu:n}=t,{props:c,mergedCollapsedRef:l,mergedThemeRef:d}=o,s=x(()=>{const{disabled:g}=e;return n!=null&&n.mergedDisabledRef.value||c.disabled?!0:g}),a=L(!1);D(se,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:s}),D(de,null);function h(){const{onClick:g}=e;g&&g()}function R(){s.value||(l.value||o.toggleExpand(e.internalKey),h())}function A(g){a.value=g}return{menuProps:c,mergedTheme:d,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:a,paddingLeft:t.paddingLeft,mergedDisabled:s,mergedValue:o.mergedValueRef,childActive:ae(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:x(()=>c.mode==="horizontal"?!1:l.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:x(()=>!s.value&&(c.mode==="horizontal"||l.value)),handlePopoverShowChange:A,handleClick:R}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,c=()=>{const{isHorizontal:d,paddingLeft:s,collapsed:a,mergedDisabled:h,maxIconSize:R,activeIconSize:A,title:g,childActive:P,icon:H,handleClick:I,menuProps:{nodeProps:S},dropdownShow:T,iconMarginRight:q,tmNode:M,mergedClsPrefix:$}=this,_=S==null?void 0:S(M.rawNode);return v("div",Object.assign({},_,{class:[`${$}-menu-item`,_==null?void 0:_.class],role:"menuitem"}),v(Be,{tmNode:M,paddingLeft:s,collapsed:a,disabled:h,iconMarginRight:q,maxIconSize:R,activeIconSize:A,title:g,extra:this.extra,showArrow:!d,childActive:P,clsPrefix:$,icon:H,hover:T,onClick:I}))},l=()=>v(De,null,{default:()=>{const{tmNodes:d,collapsed:s}=this;return s?null:v("div",{class:`${t}-submenu-children`,role:"menu"},d.map(a=>me(a,this.menuProps)))}});return this.root?v(co,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>v("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},c(),this.isHorizontal?null:l())}):v("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},c(),l())}}),ke=Object.assign(Object.assign({},ve),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Mo=B({name:"MenuOption",props:ke,setup(e){const t=ue(e),{NSubmenu:o,NMenu:n}=t,{props:c,mergedClsPrefixRef:l,mergedCollapsedRef:d}=n,s=o?o.mergedDisabledRef:{value:!1},a=x(()=>s.value||e.disabled);function h(A){const{onClick:g}=e;g&&g(A)}function R(A){a.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),h(A))}return{mergedClsPrefix:l,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:c,dropdownEnabled:ae(()=>e.root&&d.value&&c.mode!=="horizontal"&&!a.value),selected:ae(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:R}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n,nodeProps:c}}=this,l=c==null?void 0:c(o.rawNode);return v("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),v(so,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):U(this.title),trigger:()=>v(Be,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),jo=B({name:"MenuDivider",setup(){const e=F(X),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:v("div",{class:`${t.value}-menu-divider`})}}),Ko=ce(Ne),Vo=ce(ke),Do=ce($e);function Oe(e){return e.type==="divider"||e.type==="render"}function Uo(e){return e.type==="divider"}function me(e,t){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(Oe(o))return Uo(o)?v(jo,Object.assign({key:e.key},o.props)):null;const{labelField:c}=t,{key:l,level:d,isGroup:s}=e,a=Object.assign(Object.assign({},o),{title:o.title||o[c],extra:o.titleExtra||o.extra,key:l,internalKey:l,level:d,root:d===0,isGroup:s});return e.children?e.isGroup?v(Eo,ie(a,Ko,{tmNode:e,tmNodes:e.children,key:l})):v(Fo,ie(a,Do,{key:l,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):v(Mo,ie(a,Vo,{key:l,tmNode:e}))}const pe=[C("&::before","background-color: var(--n-item-color-hover);"),u("arrow",`
 color: var(--n-arrow-color-hover);
 `),u("icon",`
 color: var(--n-item-icon-color-hover);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[C("a",`
 color: var(--n-item-text-color-hover);
 `),u("extra",`
 color: var(--n-item-text-color-hover);
 `)])],be=[u("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),u("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],qo=C([m("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[y("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[m("submenu","margin: 0;"),m("menu-item","margin: 0;"),m("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[C("&::before","display: none;"),y("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),m("menu-item-content",[y("selected",[u("icon","color: var(--n-item-icon-color-active-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-horizontal);"),u("extra","color: var(--n-item-text-color-active-horizontal);")])]),y("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),u("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),u("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),Z("disabled",[Z("selected, child-active",[C("&:focus-within",be)]),y("selected",[V(null,[u("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-hover-horizontal);"),u("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),y("child-active",[V(null,[u("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),u("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),V("border-bottom: 2px solid var(--n-border-color-horizontal);",be)]),m("menu-item-content-header",[C("a","color: var(--n-item-text-color-horizontal);")])])]),y("collapsed",[m("menu-item-content",[y("selected",[C("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),m("menu-item-content-header","opacity: 0;"),u("arrow","opacity: 0;"),u("icon","color: var(--n-item-icon-color-collapsed);")])]),m("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),m("menu-item-content",`
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
 `,[C("> *","z-index: 1;"),C("&::before",`
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
 `),y("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),y("collapsed",[u("arrow","transform: rotate(0);")]),y("selected",[C("&::before","background-color: var(--n-item-color-active);"),u("arrow","color: var(--n-arrow-color-active);"),u("icon","color: var(--n-item-icon-color-active);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[C("a","color: var(--n-item-text-color-active);"),u("extra","color: var(--n-item-text-color-active);")])]),y("child-active",[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[C("a",`
 color: var(--n-item-text-color-child-active);
 `),u("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),u("arrow",`
 color: var(--n-arrow-color-child-active);
 `),u("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),Z("disabled",[Z("selected, child-active",[C("&:focus-within",pe)]),y("selected",[V(null,[u("arrow","color: var(--n-arrow-color-active-hover);"),u("icon","color: var(--n-item-icon-color-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[C("a","color: var(--n-item-text-color-active-hover);"),u("extra","color: var(--n-item-text-color-active-hover);")])])]),y("child-active",[V(null,[u("arrow","color: var(--n-arrow-color-child-active-hover);"),u("icon","color: var(--n-item-icon-color-child-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[C("a","color: var(--n-item-text-color-child-active-hover);"),u("extra","color: var(--n-item-text-color-child-active-hover);")])])]),y("selected",[V(null,[C("&::before","background-color: var(--n-item-color-active-hover);")])]),V(null,pe)]),u("icon",`
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
 `),u("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),m("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[C("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[C("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),u("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),m("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[m("menu-item-content",`
 height: var(--n-item-height);
 `),m("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Ue({duration:".2s"})])]),m("menu-item-group",[m("menu-item-group-title",`
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
 `)])]),m("menu-tooltip",[C("a",`
 color: inherit;
 text-decoration: none;
 `)]),m("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function V(e,t){return[y("hover",e,t),C("&:hover",e,t)]}const Yo=Object.assign(Object.assign({},E.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),Go=B({name:"Menu",props:Yo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=G(e),n=E("Menu","-menu",qo,zo,e,t),c=F(Re,null),l=x(()=>{var p;const{collapsed:b}=e;if(b!==void 0)return b;if(c){const{collapseModeRef:r,collapsedRef:f}=c;if(r.value==="width")return(p=f.value)!==null&&p!==void 0?p:!1}return!1}),d=x(()=>{const{keyField:p,childrenField:b,disabledField:r}=e;return vo(e.items||e.options,{getIgnored(f){return Oe(f)},getChildren(f){return f[b]},getDisabled(f){return f[r]},getKey(f){var N;return(N=f[p])!==null&&N!==void 0?N:f.name}})}),s=x(()=>new Set(d.value.treeNodes.map(p=>p.key))),{watchProps:a}=e,h=L(null);a!=null&&a.includes("defaultValue")?fe(()=>{h.value=e.defaultValue}):h.value=e.defaultValue;const R=Q(e,"value"),A=le(R,h),g=L([]),P=()=>{g.value=e.defaultExpandAll?d.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||d.value.getPath(A.value,{includeSelf:!1}).keyPath};a!=null&&a.includes("defaultExpandedKeys")?fe(P):P();const H=uo(e,["expandedNames","expandedKeys"]),I=le(H,g),S=x(()=>d.value.treeNodes),T=x(()=>d.value.getPath(A.value).keyPath);D(X,{props:e,mergedCollapsedRef:l,mergedThemeRef:n,mergedValueRef:A,mergedExpandedKeysRef:I,activePathRef:T,mergedClsPrefixRef:t,isHorizontalRef:x(()=>e.mode==="horizontal"),invertedRef:Q(e,"inverted"),doSelect:q,toggleExpand:$});function q(p,b){const{"onUpdate:value":r,onUpdateValue:f,onSelect:N}=e;f&&O(f,p,b),r&&O(r,p,b),N&&O(N,p,b),h.value=p}function M(p){const{"onUpdate:expandedKeys":b,onUpdateExpandedKeys:r,onExpandedNamesChange:f,onOpenNamesChange:N}=e;b&&O(b,p),r&&O(r,p),f&&O(f,p),N&&O(N,p),g.value=p}function $(p){const b=Array.from(I.value),r=b.findIndex(f=>f===p);if(~r)b.splice(r,1);else{if(e.accordion&&s.value.has(p)){const f=b.findIndex(N=>s.value.has(N));f>-1&&b.splice(f,1)}b.push(p)}M(b)}const _=p=>{const b=d.value.getPath(p??A.value,{includeSelf:!1}).keyPath;if(!b.length)return;const r=Array.from(I.value),f=new Set([...r,...b]);e.accordion&&s.value.forEach(N=>{f.has(N)&&!b.includes(N)&&f.delete(N)}),M(Array.from(f))},z=x(()=>{const{inverted:p}=e,{common:{cubicBezierEaseInOut:b},self:r}=n.value,{borderRadius:f,borderColorHorizontal:N,fontSize:Le,itemHeight:Ee,dividerColor:Fe}=r,i={"--n-divider-color":Fe,"--n-bezier":b,"--n-font-size":Le,"--n-border-color-horizontal":N,"--n-border-radius":f,"--n-item-height":Ee};return p?(i["--n-group-text-color"]=r.groupTextColorInverted,i["--n-color"]=r.colorInverted,i["--n-item-text-color"]=r.itemTextColorInverted,i["--n-item-text-color-hover"]=r.itemTextColorHoverInverted,i["--n-item-text-color-active"]=r.itemTextColorActiveInverted,i["--n-item-text-color-child-active"]=r.itemTextColorChildActiveInverted,i["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveInverted,i["--n-item-text-color-active-hover"]=r.itemTextColorActiveHoverInverted,i["--n-item-icon-color"]=r.itemIconColorInverted,i["--n-item-icon-color-hover"]=r.itemIconColorHoverInverted,i["--n-item-icon-color-active"]=r.itemIconColorActiveInverted,i["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHoverInverted,i["--n-item-icon-color-child-active"]=r.itemIconColorChildActiveInverted,i["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHoverInverted,i["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsedInverted,i["--n-item-text-color-horizontal"]=r.itemTextColorHorizontalInverted,i["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontalInverted,i["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontalInverted,i["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontalInverted,i["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontalInverted,i["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontalInverted,i["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontalInverted,i["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontalInverted,i["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontalInverted,i["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontalInverted,i["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontalInverted,i["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontalInverted,i["--n-arrow-color"]=r.arrowColorInverted,i["--n-arrow-color-hover"]=r.arrowColorHoverInverted,i["--n-arrow-color-active"]=r.arrowColorActiveInverted,i["--n-arrow-color-active-hover"]=r.arrowColorActiveHoverInverted,i["--n-arrow-color-child-active"]=r.arrowColorChildActiveInverted,i["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHoverInverted,i["--n-item-color-hover"]=r.itemColorHoverInverted,i["--n-item-color-active"]=r.itemColorActiveInverted,i["--n-item-color-active-hover"]=r.itemColorActiveHoverInverted,i["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsedInverted):(i["--n-group-text-color"]=r.groupTextColor,i["--n-color"]=r.color,i["--n-item-text-color"]=r.itemTextColor,i["--n-item-text-color-hover"]=r.itemTextColorHover,i["--n-item-text-color-active"]=r.itemTextColorActive,i["--n-item-text-color-child-active"]=r.itemTextColorChildActive,i["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveHover,i["--n-item-text-color-active-hover"]=r.itemTextColorActiveHover,i["--n-item-icon-color"]=r.itemIconColor,i["--n-item-icon-color-hover"]=r.itemIconColorHover,i["--n-item-icon-color-active"]=r.itemIconColorActive,i["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHover,i["--n-item-icon-color-child-active"]=r.itemIconColorChildActive,i["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHover,i["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsed,i["--n-item-text-color-horizontal"]=r.itemTextColorHorizontal,i["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontal,i["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontal,i["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontal,i["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontal,i["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontal,i["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontal,i["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontal,i["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontal,i["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontal,i["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontal,i["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontal,i["--n-arrow-color"]=r.arrowColor,i["--n-arrow-color-hover"]=r.arrowColorHover,i["--n-arrow-color-active"]=r.arrowColorActive,i["--n-arrow-color-active-hover"]=r.arrowColorActiveHover,i["--n-arrow-color-child-active"]=r.arrowColorChildActive,i["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHover,i["--n-item-color-hover"]=r.itemColorHover,i["--n-item-color-active"]=r.itemColorActive,i["--n-item-color-active-hover"]=r.itemColorActiveHover,i["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsed),i}),w=o?W("menu",x(()=>e.inverted?"a":"b"),z,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:H,uncontrolledExpanededKeys:g,mergedExpandedKeys:I,uncontrolledValue:h,mergedValue:A,activePath:T,tmNodes:S,mergedTheme:n,mergedCollapsed:l,cssVars:o?void 0:z,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender,showOption:_}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;return n==null||n(),v("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(c=>me(c,this.$props)))}}),Wo={class:"h-12 flex items-center justify-end"},Xo=B({__name:"HeaderBar",setup(e){const t=We(),o=qe(),n=go(),c=we();Se(()=>{o.fetchUserInfo()});function l(){n.warning({title:"警告",content:"你确定要登出吗？",positiveText:"确定",negativeText:"取消",maskClosable:!1,transformOrigin:"center",showIcon:!1,closeOnEsc:!1,negativeButtonProps:{type:"info"},positiveButtonProps:{type:"info"},onPositiveClick:()=>{d()}})}function d(){localStorage.removeItem("token"),t.push("/login"),c.success("已退出登录")}return(s,a)=>{const h=mo,R=Ge;return ee(),_e("header",Wo,[k(h,{class:"mr-4",round:""},{default:j(()=>[ge(Ye(He(o).getUsername),1)]),_:1}),k(R,{class:"mr-8",strong:"",secondary:"",round:"",type:"error",onClick:l},{default:j(()=>[ge("登出")]),_:1})])}}}),Zo={},Jo={class:"h-6 flex justify-center items-center bg-white text-xs gap-1"},Qo=K("span",null,"Powered By",-1),et=K("a",{class:"text-blue-600 font-bold hover:underline",href:"https://vuejs.org",target:"_blank"}," @Vue ",-1),ot=K("a",{class:"text-blue-600 font-bold hover:underline",href:"https://www.naiveui.com",target:"_blank"}," @Naive - ui ",-1),tt=K("span",{class:"ml-2"},"© 2023 EBOOK",-1),rt=[Qo,et,ot,tt];function nt(e,t){return ee(),_e("footer",Jo,rt)}const it=Xe(Zo,[["render",nt]]),lt=B({__name:"SideNav",setup(e){const t=Je(),o=L(),n=L("");Se(()=>{o.value=l(Qe),d(t.name)});function c(s){return()=>v(ho,null,{default:()=>v(s)})}function l(s){return s.map(h=>{var g,P;let R=((g=h.children)==null?void 0:g.length)===1?h.children[0].name:h.name;return{label:()=>v(eo,{to:{name:R}},{default:()=>{var H;return(H=h.meta)==null?void 0:H.title}}),key:R,icon:c((P=h.meta)==null?void 0:P.icon)}})}function d(s){n.value=s}return(s,a)=>{const h=Go;return ee(),Ae(h,{options:o.value,value:n.value,"onUpdate:value":d,"theme-overrides":He(Ze)},null,8,["options","value","theme-overrides"])}}});const at={class:"h-20 flex justify-center items-center"},ct={class:"flex"},st=K("img",{class:"w-11 -mt-1",src:no,alt:"eBook"},null,-1),dt=K("h2",{class:"font-bold text-4xl ml-2 tracking-wide"},"eBook",-1),ut=[st,dt],ht=B({__name:"index",setup(e){const t=L(!0);return window.$message===void 0&&(window.$message=we()),(o,n)=>{const c=Lo,l=Ro,d=ro("RouterView"),s=_o,a=No,h=So;return ee(),Ae(h,{position:"absolute","has-sider":""},{default:j(()=>[k(c,{"show-trigger":"","collapse-mode":"width",collapsed:t.value,onCollapse:n[0]||(n[0]=R=>t.value=!0),onExpand:n[1]||(n[1]=R=>t.value=!1),bordered:!0},{default:j(()=>[K("header",at,[oo(K("div",ct,ut,512),[[to,!t.value]])]),k(lt)]),_:1},8,["collapsed"]),k(h,null,{default:j(()=>[k(l,{class:"z-50",position:"absolute",bordered:!0},{default:j(()=>[k(Xo)]),_:1}),k(s,{class:"h-screen pt-12 pb-6",bordered:!0},{default:j(()=>[k(d)]),_:1}),k(a,{position:"absolute",bordered:!0},{default:j(()=>[k(it)]),_:1})]),_:1})]),_:1})}}});export{ht as default};
