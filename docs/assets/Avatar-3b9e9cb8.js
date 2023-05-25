import{i as F,e as _,o as A}from"./Dropdown-637a77b4.js";import{a as K,b as P,f as V,g as $,ag as G,o as T,ah as D,n as w,d as U,j as X,r as x,l as R,u as M,ai as Y,m as q,K as J,H as Q,aj as Z,ak as ee,al as oe,h as L,x as B,am as re,an as te,ao as ne}from"./index-24d23373.js";const ae=r=>{const{borderRadius:d,avatarColor:s,cardColor:a,fontSize:c,heightTiny:f,heightSmall:l,heightMedium:p,heightLarge:v,heightHuge:h,modalColor:g,popoverColor:u}=r;return{borderRadius:d,fontSize:c,border:`2px solid ${a}`,heightTiny:f,heightSmall:l,heightMedium:p,heightLarge:v,heightHuge:h,color:P(a,s),colorModal:P(g,s),colorPopover:P(u,s)}},ie={name:"Avatar",common:K,self:ae},se=ie,le=V("n-avatar-group"),de=$("avatar",`
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
`,[G(T("&","--n-merged-color: var(--n-color-modal);")),D(T("&","--n-merged-color: var(--n-color-popover);")),T("img",`
 width: 100%;
 height: 100%;
 `),w("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),$("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),w("text","line-height: 1.25")]),ce=Object.assign(Object.assign({},M.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),ve=U({name:"Avatar",props:ce,setup(r){const{mergedClsPrefixRef:d,inlineThemeDisabled:s}=X(r),a=x(!1);let c=null;const f=x(null),l=x(null),p=()=>{const{value:e}=f;if(e&&(c===null||c!==e.innerHTML)){c=e.innerHTML;const{value:o}=l;if(o){const{offsetWidth:n,offsetHeight:t}=o,{offsetWidth:i,offsetHeight:C}=e,j=.9,O=Math.min(n/i*j,t/C*j,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${O})`}}},v=B(le,null),h=R(()=>{const{size:e}=r;if(e)return e;const{size:o}=v||{};return o||"medium"}),g=M("Avatar","-avatar",de,se,r,d),u=B(_,null),m=R(()=>{if(v)return!0;const{round:e,circle:o}=r;return e!==void 0||o!==void 0?e||o:u?u.roundRef.value:!1}),y=R(()=>v?!0:r.bordered||!1),b=e=>{var o;if(!S.value)return;a.value=!0;const{onError:n,imgProps:t}=r;(o=t==null?void 0:t.onError)===null||o===void 0||o.call(t,e),n&&n(e)};Y(()=>r.src,()=>a.value=!1);const H=R(()=>{const e=h.value,o=m.value,n=y.value,{color:t}=r,{self:{borderRadius:i,fontSize:C,color:j,border:O,colorModal:I,colorPopover:N},common:{cubicBezierEaseInOut:W}}=g.value;let E;return typeof e=="number"?E=`${e}px`:E=g.value.self[re("height",e)],{"--n-font-size":C,"--n-border":n?O:"none","--n-border-radius":o?"50%":i,"--n-color":t||j,"--n-color-modal":t||I,"--n-color-popover":t||N,"--n-bezier":W,"--n-merged-size":`var(--n-avatar-size-override, ${E})`}}),z=s?q("avatar",R(()=>{const e=h.value,o=m.value,n=y.value,{color:t}=r;let i="";return e&&(typeof e=="number"?i+=`a${e}`:i+=e[0]),o&&(i+="b"),n&&(i+="c"),t&&(i+=te(t)),i}),H,r):void 0,S=x(!r.lazy);J(()=>{if(F)return;let e;const o=Q(()=>{e==null||e(),e=void 0,r.lazy&&(e=A(l.value,r.intersectionObserverOptions,S))});Z(()=>{o(),e==null||e()})});const k=x(!r.lazy);return{textRef:f,selfRef:l,mergedRoundRef:m,mergedClsPrefix:d,fitTextTransform:p,cssVars:s?void 0:H,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender,hasLoadError:a,handleError:b,shouldStartLoading:S,loaded:k,mergedOnLoad:e=>{var o;const{onLoad:n,imgProps:t}=r;n==null||n(e),(o=t==null?void 0:t.onLoad)===null||o===void 0||o.call(t,e),k.value=!0}}},render(){var r,d;const{$slots:s,src:a,mergedClsPrefix:c,lazy:f,onRender:l,mergedOnLoad:p,shouldStartLoading:v,loaded:h,hasLoadError:g}=this;l==null||l();let u;const m=!h&&!g&&(this.renderPlaceholder?this.renderPlaceholder():(d=(r=this.$slots).placeholder)===null||d===void 0?void 0:d.call(r));return this.hasLoadError?u=this.renderFallback?this.renderFallback():ee(s.fallback,()=>[L("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):u=oe(s.default,y=>{if(y)return L(ne,{onResize:this.fitTextTransform},{default:()=>L("span",{ref:"textRef",class:`${c}-avatar__text`},y)});if(a){const{imgProps:b}=this;return L("img",Object.assign(Object.assign({},b),{loading:F&&!this.intersectionObserverOptions&&f?"lazy":"eager",src:F||v||h?a:void 0,onLoad:p,"data-image-src":a,onError:this.handleError,style:[b==null?void 0:b.style,{objectFit:this.objectFit},m?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),L("span",{ref:"selfRef",class:[`${c}-avatar`,this.themeClass],style:this.cssVars},u,f&&m)}});export{ve as N};
