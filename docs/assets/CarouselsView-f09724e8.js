import{N as ot,_ as jt,r as At,P as Ht,a as Wt,b as Vt}from"./naiveuiUtils-023f115f.js";import{ap as nt,d as V,h as t,aq as oe,u as ce,f as Be,c as it,a as ze,ar as qt,e as Zt,o as E,g as m,as as He,at as Xt,E as Gt,v as H,r as _,au as Yt,ai as Kt,aj as at,av as ve,l as $,j as he,m as De,aw as Jt,ax as Qt,a1 as We,ay as er,az as Se,F as Te,q as W,a2 as tr,x as ae,aA as Pe,aB as rr,aC as Oe,p as Ue,aD as or,K as _e,H as $e,i as D,w as ue,aE as lt,aF as st,aG as ut,aH as dt,am as Ve,aI as xe,aJ as nr,ak as ir,B as ct,A as ar,V as ie,aK as lr,aL as sr,aM as ur,G as qe,n as ee,aN as dr,aO as cr,t as fr,aP as gr,aQ as hr,y as Ze,J as Me,L as Fe,X as ft,S as re,aR as pr,aS as vr,aT as mr,a5 as Ce,P as te,O as X,a6 as Xe,ab as gt,Q as Ie,a7 as wr,a8 as br,a9 as xr,aa as Cr,M as yr,W as be,ad as Rr,ae as kr}from"./index-150cb9dd.js";import{t as Sr,a as Pr,f as Lr,i as Le,o as Tr}from"./Dropdown-c9571bf6.js";import{u as Or}from"./composables-a8032ec2.js";function _r(e,o,r,n){var i=-1,u=e==null?0:e.length;for(n&&u&&(r=e[++i]);++i<u;)r=o(r,e[i],i,e);return r}function $r(e){return function(o){return e==null?void 0:e[o]}}var Ir={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Br=$r(Ir);const zr=Br;var Dr=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ur="\\u0300-\\u036f",Mr="\\ufe20-\\ufe2f",Fr="\\u20d0-\\u20ff",Er=Ur+Mr+Fr,Nr="["+Er+"]",jr=RegExp(Nr,"g");function Ar(e){return e=nt(e),e&&e.replace(Dr,zr).replace(jr,"")}var Hr=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Wr(e){return e.match(Hr)||[]}var Vr=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function qr(e){return Vr.test(e)}var ht="\\ud800-\\udfff",Zr="\\u0300-\\u036f",Xr="\\ufe20-\\ufe2f",Gr="\\u20d0-\\u20ff",Yr=Zr+Xr+Gr,pt="\\u2700-\\u27bf",vt="a-z\\xdf-\\xf6\\xf8-\\xff",Kr="\\xac\\xb1\\xd7\\xf7",Jr="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Qr="\\u2000-\\u206f",eo=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",mt="A-Z\\xc0-\\xd6\\xd8-\\xde",to="\\ufe0e\\ufe0f",wt=Kr+Jr+Qr+eo,bt="['’]",Ge="["+wt+"]",ro="["+Yr+"]",xt="\\d+",oo="["+pt+"]",Ct="["+vt+"]",yt="[^"+ht+wt+xt+pt+vt+mt+"]",no="\\ud83c[\\udffb-\\udfff]",io="(?:"+ro+"|"+no+")",ao="[^"+ht+"]",Rt="(?:\\ud83c[\\udde6-\\uddff]){2}",kt="[\\ud800-\\udbff][\\udc00-\\udfff]",de="["+mt+"]",lo="\\u200d",Ye="(?:"+Ct+"|"+yt+")",so="(?:"+de+"|"+yt+")",Ke="(?:"+bt+"(?:d|ll|m|re|s|t|ve))?",Je="(?:"+bt+"(?:D|LL|M|RE|S|T|VE))?",St=io+"?",Pt="["+to+"]?",uo="(?:"+lo+"(?:"+[ao,Rt,kt].join("|")+")"+Pt+St+")*",co="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",fo="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",go=Pt+St+uo,ho="(?:"+[oo,Rt,kt].join("|")+")"+go,po=RegExp([de+"?"+Ct+"+"+Ke+"(?="+[Ge,de,"$"].join("|")+")",so+"+"+Je+"(?="+[Ge,de+Ye,"$"].join("|")+")",de+"?"+Ye+"+"+Ke,de+"+"+Je,fo,co,xt,ho].join("|"),"g");function vo(e){return e.match(po)||[]}function mo(e,o,r){return e=nt(e),o=r?void 0:o,o===void 0?qr(e)?vo(e):Wr(e):e.match(o)||[]}var wo="['’]",bo=RegExp(wo,"g");function xo(e){return function(o){return _r(mo(Ar(o).replace(bo,"")),e,"")}}var Co=xo(function(e,o,r){return e+(r?"-":"")+o.toLowerCase()});const yo=Co,Ro=V({name:"Add",render(){return t("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),ko=oe("attach",t("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},t("g",{fill:"currentColor","fill-rule":"nonzero"},t("path",{d:"M3.25735931,8.70710678 L7.85355339,4.1109127 C8.82986412,3.13460197 10.4127766,3.13460197 11.3890873,4.1109127 C12.365398,5.08722343 12.365398,6.67013588 11.3890873,7.64644661 L6.08578644,12.9497475 C5.69526215,13.3402718 5.06209717,13.3402718 4.67157288,12.9497475 C4.28104858,12.5592232 4.28104858,11.9260582 4.67157288,11.5355339 L9.97487373,6.23223305 C10.1701359,6.0369709 10.1701359,5.72038841 9.97487373,5.52512627 C9.77961159,5.32986412 9.4630291,5.32986412 9.26776695,5.52512627 L3.96446609,10.8284271 C3.18341751,11.6094757 3.18341751,12.8758057 3.96446609,13.6568542 C4.74551468,14.4379028 6.01184464,14.4379028 6.79289322,13.6568542 L12.0961941,8.35355339 C13.4630291,6.98671837 13.4630291,4.77064094 12.0961941,3.40380592 C10.7293591,2.0369709 8.51328163,2.0369709 7.14644661,3.40380592 L2.55025253,8 C2.35499039,8.19526215 2.35499039,8.51184464 2.55025253,8.70710678 C2.74551468,8.90236893 3.06209717,8.90236893 3.25735931,8.70710678 Z"}))))),So=oe("trash",t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t("path",{d:"M432,144,403.33,419.74A32,32,0,0,1,371.55,448H140.46a32,32,0,0,1-31.78-28.26L80,144",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),t("rect",{x:"32",y:"64",width:"448",height:"80",rx:"16",ry:"16",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),t("line",{x1:"312",y1:"240",x2:"200",y2:"352",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),t("line",{x1:"312",y1:"352",x2:"200",y2:"240",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}))),Po=oe("download",t("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},t("g",{fill:"currentColor","fill-rule":"nonzero"},t("path",{d:"M3.5,13 L12.5,13 C12.7761424,13 13,13.2238576 13,13.5 C13,13.7454599 12.8231248,13.9496084 12.5898756,13.9919443 L12.5,14 L3.5,14 C3.22385763,14 3,13.7761424 3,13.5 C3,13.2545401 3.17687516,13.0503916 3.41012437,13.0080557 L3.5,13 L12.5,13 L3.5,13 Z M7.91012437,1.00805567 L8,1 C8.24545989,1 8.44960837,1.17687516 8.49194433,1.41012437 L8.5,1.5 L8.5,10.292 L11.1819805,7.6109127 C11.3555469,7.43734635 11.6249713,7.4180612 11.8198394,7.55305725 L11.8890873,7.6109127 C12.0626536,7.78447906 12.0819388,8.05390346 11.9469427,8.2487716 L11.8890873,8.31801948 L8.35355339,11.8535534 C8.17998704,12.0271197 7.91056264,12.0464049 7.7156945,11.9114088 L7.64644661,11.8535534 L4.1109127,8.31801948 C3.91565056,8.12275734 3.91565056,7.80617485 4.1109127,7.6109127 C4.28447906,7.43734635 4.55390346,7.4180612 4.7487716,7.55305725 L4.81801948,7.6109127 L7.5,10.292 L7.5,1.5 C7.5,1.25454011 7.67687516,1.05039163 7.91012437,1.00805567 L8,1 L7.91012437,1.00805567 Z"}))))),Lo=oe("cancel",t("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},t("g",{fill:"currentColor","fill-rule":"nonzero"},t("path",{d:"M2.58859116,2.7156945 L2.64644661,2.64644661 C2.82001296,2.47288026 3.08943736,2.45359511 3.2843055,2.58859116 L3.35355339,2.64644661 L8,7.293 L12.6464466,2.64644661 C12.8417088,2.45118446 13.1582912,2.45118446 13.3535534,2.64644661 C13.5488155,2.84170876 13.5488155,3.15829124 13.3535534,3.35355339 L8.707,8 L13.3535534,12.6464466 C13.5271197,12.820013 13.5464049,13.0894374 13.4114088,13.2843055 L13.3535534,13.3535534 C13.179987,13.5271197 12.9105626,13.5464049 12.7156945,13.4114088 L12.6464466,13.3535534 L8,8.707 L3.35355339,13.3535534 C3.15829124,13.5488155 2.84170876,13.5488155 2.64644661,13.3535534 C2.45118446,13.1582912 2.45118446,12.8417088 2.64644661,12.6464466 L7.293,8 L2.64644661,3.35355339 C2.47288026,3.17998704 2.45359511,2.91056264 2.58859116,2.7156945 L2.64644661,2.64644661 L2.58859116,2.7156945 Z"}))))),To=oe("retry",t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t("path",{d:"M320,146s24.36-12-64-12A160,160,0,1,0,416,294",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 32px;"}),t("polyline",{points:"256 58 336 138 256 218",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}))),Oo=oe("rotateClockwise",t("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",fill:"currentColor"}),t("path",{d:"M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",fill:"currentColor"}))),_o=oe("rotateClockwise",t("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",fill:"currentColor"}),t("path",{d:"M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",fill:"currentColor"}))),$o=oe("zoomIn",t("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",fill:"currentColor"}),t("path",{d:"M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",fill:"currentColor"}))),Io=oe("zoomOut",t("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",fill:"currentColor"}),t("path",{d:"M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",fill:"currentColor"}))),Bo=V({name:"ResizeSmall",render(){return t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},t("g",{fill:"none"},t("path",{d:"M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",fill:"currentColor"})))}}),Ee=Object.assign(Object.assign({},ce.props),{showToolbar:{type:Boolean,default:!0},showToolbarTooltip:Boolean}),Lt=Be("n-image");function zo(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const Do=it({name:"Image",common:ze,peers:{Tooltip:Sr},self:zo}),Uo=e=>{const{infoColor:o,successColor:r,warningColor:n,errorColor:i,textColor2:u,progressRailColor:d,fontSize:c,fontWeight:s}=e;return{fontSize:c,fontSizeCircle:"28px",fontWeightCircle:s,railColor:d,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:o,iconColorInfo:o,iconColorSuccess:r,iconColorWarning:n,iconColorError:i,textColorCircle:u,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:u,fillColor:o,fillColorInfo:o,fillColorSuccess:r,fillColorWarning:n,fillColorError:i,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}},Mo={name:"Progress",common:ze,self:Uo},Tt=Mo,Fo=e=>{const{iconColor:o,primaryColor:r,errorColor:n,textColor2:i,successColor:u,opacityDisabled:d,actionColor:c,borderColor:s,hoverColor:a,lineHeight:l,borderRadius:f,fontSize:C}=e;return{fontSize:C,lineHeight:l,borderRadius:f,draggerColor:c,draggerBorder:`1px dashed ${s}`,draggerBorderHover:`1px dashed ${r}`,itemColorHover:a,itemColorHoverError:Zt(n,{alpha:.06}),itemTextColor:i,itemTextColorError:n,itemTextColorSuccess:u,itemIconColor:o,itemDisabledOpacity:d,itemBorderImageCardError:`1px solid ${n}`,itemBorderImageCard:`1px solid ${s}`}},Eo=it({name:"Upload",common:ze,peers:{Button:qt,Progress:Tt},self:Fo}),No=Eo,jo=t("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",fill:"currentColor"})),Ao=t("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",fill:"currentColor"})),Ho=t("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",fill:"currentColor"})),Wo=E([E("body >",[m("image-container","position: fixed;")]),m("image-preview-container",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `),m("image-preview-overlay",`
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `,[He()]),m("image-preview-toolbar",`
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[m("base-icon",`
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `),He()]),m("image-preview-wrapper",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `,[Xt()]),m("image-preview",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `),m("image",`
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `,[Gt("preview-disabled",`
 cursor: pointer;
 `),E("img",`
 border-radius: inherit;
 `)])]),me=32,Ot=V({name:"ImagePreview",props:Object.assign(Object.assign({},Ee),{onNext:Function,onPrev:Function,clsPrefix:{type:String,required:!0}}),setup(e){const o=ce("Image","-image",Wo,Do,e,H(e,"clsPrefix"));let r=null;const n=_(null),i=_(null),u=_(void 0),d=_(!1),c=_(!1),{localeRef:s}=Yt("Image");function a(){const{value:p}=i;if(!r||!p)return;const{style:y}=p,v=r.getBoundingClientRect(),B=v.left+v.width/2,z=v.top+v.height/2;y.transformOrigin=`${B}px ${z}px`}function l(p){var y,v;switch(p.key){case" ":p.preventDefault();break;case"ArrowLeft":(y=e.onPrev)===null||y===void 0||y.call(e);break;case"ArrowRight":(v=e.onNext)===null||v===void 0||v.call(e);break;case"Escape":Ne();break}}Kt(d,p=>{p?Pe("keydown",document,l):ve("keydown",document,l)}),at(()=>{ve("keydown",document,l)});let f=0,C=0,g=0,k=0,h=0,x=0,R=0,L=0,S=!1;function U(p){const{clientX:y,clientY:v}=p;g=y-f,k=v-C,Lr(G)}function b(p){const{mouseUpClientX:y,mouseUpClientY:v,mouseDownClientX:B,mouseDownClientY:z}=p,Z=B-y,J=z-v,Q=`vertical${J>0?"Top":"Bottom"}`,ne=`horizontal${Z>0?"Left":"Right"}`;return{moveVerticalDirection:Q,moveHorizontalDirection:ne,deltaHorizontal:Z,deltaVertical:J}}function P(p){const{value:y}=n;if(!y)return{offsetX:0,offsetY:0};const v=y.getBoundingClientRect(),{moveVerticalDirection:B,moveHorizontalDirection:z,deltaHorizontal:Z,deltaVertical:J}=p||{};let Q=0,ne=0;return v.width<=window.innerWidth?Q=0:v.left>0?Q=(v.width-window.innerWidth)/2:v.right<window.innerWidth?Q=-(v.width-window.innerWidth)/2:z==="horizontalRight"?Q=Math.min((v.width-window.innerWidth)/2,h-(Z??0)):Q=Math.max(-((v.width-window.innerWidth)/2),h-(Z??0)),v.height<=window.innerHeight?ne=0:v.top>0?ne=(v.height-window.innerHeight)/2:v.bottom<window.innerHeight?ne=-(v.height-window.innerHeight)/2:B==="verticalBottom"?ne=Math.min((v.height-window.innerHeight)/2,x-(J??0)):ne=Math.max(-((v.height-window.innerHeight)/2),x-(J??0)),{offsetX:Q,offsetY:ne}}function T(p){ve("mousemove",document,U),ve("mouseup",document,T);const{clientX:y,clientY:v}=p;S=!1;const B=b({mouseUpClientX:y,mouseUpClientY:v,mouseDownClientX:R,mouseDownClientY:L}),z=P(B);g=z.offsetX,k=z.offsetY,G()}const N=ae(Lt,null);function w(p){var y,v;if((v=(y=N==null?void 0:N.previewedImgPropsRef.value)===null||y===void 0?void 0:y.onMousedown)===null||v===void 0||v.call(y,p),p.button!==0)return;const{clientX:B,clientY:z}=p;S=!0,f=B-g,C=z-k,h=g,x=k,R=B,L=z,G(),Pe("mousemove",document,U),Pe("mouseup",document,T)}function M(p){var y,v;(v=(y=N==null?void 0:N.previewedImgPropsRef.value)===null||y===void 0?void 0:y.onDblclick)===null||v===void 0||v.call(y,p);const B=pe();O=O===B?1:B,G()}const I=1.5;let q=0,O=1,j=0;function F(){O=1,q=0}function A(){var p;F(),j=0,(p=e.onPrev)===null||p===void 0||p.call(e)}function Y(){var p;F(),j=0,(p=e.onNext)===null||p===void 0||p.call(e)}function K(){j-=90,G()}function le(){j+=90,G()}function ye(){const{value:p}=n;if(!p)return 1;const{innerWidth:y,innerHeight:v}=window,B=Math.max(1,p.naturalHeight/(v-me)),z=Math.max(1,p.naturalWidth/(y-me));return Math.max(3,B*2,z*2)}function pe(){const{value:p}=n;if(!p)return 1;const{innerWidth:y,innerHeight:v}=window,B=p.naturalHeight/(v-me),z=p.naturalWidth/(y-me);return B<1&&z<1?1:Math.max(B,z)}function Re(){const p=ye();O<p&&(q+=1,O=Math.min(p,Math.pow(I,q)),G())}function ke(){if(O>.5){const p=O;q-=1,O=Math.max(.5,Math.pow(I,q));const y=p-O;G(!1);const v=P();O+=y,G(!1),O-=y,g=v.offsetX,k=v.offsetY,G()}}function G(p=!0){var y;const{value:v}=n;if(!v)return;const{style:B}=v,z=rr((y=N==null?void 0:N.previewedImgPropsRef.value)===null||y===void 0?void 0:y.style);let Z="";if(typeof z=="string")Z=z+";";else for(const Q in z)Z+=`${yo(Q)}: ${z[Q]};`;const J=`transform-origin: center; transform: translateX(${g}px) translateY(${k}px) rotate(${j}deg) scale(${O});`;S?B.cssText=Z+"cursor: grabbing; transition: none;"+J:B.cssText=Z+"cursor: grab;"+J+(p?"":"transition: none;"),p||v.offsetHeight}function Ne(){d.value=!d.value,c.value=!0}function Ft(){O=pe(),q=Math.ceil(Math.log(O)/Math.log(I)),g=0,k=0,G()}const Et={setPreviewSrc:p=>{u.value=p},setThumbnailEl:p=>{r=p},toggleShow:Ne};function Nt(p,y){if(e.showToolbarTooltip){const{value:v}=o;return t(Pr,{to:!1,theme:v.peers.Tooltip,themeOverrides:v.peerOverrides.Tooltip,keepAliveOnHover:!1},{default:()=>s.value[y],trigger:()=>p})}else return p}const je=$(()=>{const{common:{cubicBezierEaseInOut:p},self:{toolbarIconColor:y,toolbarBorderRadius:v,toolbarBoxShadow:B,toolbarColor:z}}=o.value;return{"--n-bezier":p,"--n-toolbar-icon-color":y,"--n-toolbar-color":z,"--n-toolbar-border-radius":v,"--n-toolbar-box-shadow":B}}),{inlineThemeDisabled:Ae}=he(),se=Ae?De("image-preview",void 0,je,e):void 0;return Object.assign({previewRef:n,previewWrapperRef:i,previewSrc:u,show:d,appear:Jt(),displayed:c,previewedImgProps:N==null?void 0:N.previewedImgPropsRef,handleWheel(p){p.preventDefault()},handlePreviewMousedown:w,handlePreviewDblclick:M,syncTransformOrigin:a,handleAfterLeave:()=>{F(),j=0,c.value=!1},handleDragStart:p=>{var y,v;(v=(y=N==null?void 0:N.previewedImgPropsRef.value)===null||y===void 0?void 0:y.onDragstart)===null||v===void 0||v.call(y,p),p.preventDefault()},zoomIn:Re,zoomOut:ke,rotateCounterclockwise:K,rotateClockwise:le,handleSwitchPrev:A,handleSwitchNext:Y,withTooltip:Nt,resizeToOrignalImageSize:Ft,cssVars:Ae?void 0:je,themeClass:se==null?void 0:se.themeClass,onRender:se==null?void 0:se.onRender},Et)},render(){var e,o;const{clsPrefix:r}=this;return t(Te,null,(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e),t(Qt,{show:this.show},{default:()=>{var n;return this.show||this.displayed?((n=this.onRender)===null||n===void 0||n.call(this),We(t("div",{class:[`${r}-image-preview-container`,this.themeClass],style:this.cssVars,onWheel:this.handleWheel},t(Se,{name:"fade-in-transition",appear:this.appear},{default:()=>this.show?t("div",{class:`${r}-image-preview-overlay`,onClick:this.toggleShow}):null}),this.showToolbar?t(Se,{name:"fade-in-transition",appear:this.appear},{default:()=>{if(!this.show)return null;const{withTooltip:i}=this;return t("div",{class:`${r}-image-preview-toolbar`},this.onPrev?t(Te,null,i(t(W,{clsPrefix:r,onClick:this.handleSwitchPrev},{default:()=>jo}),"tipPrevious"),i(t(W,{clsPrefix:r,onClick:this.handleSwitchNext},{default:()=>Ao}),"tipNext")):null,i(t(W,{clsPrefix:r,onClick:this.rotateCounterclockwise},{default:()=>t(_o,null)}),"tipCounterclockwise"),i(t(W,{clsPrefix:r,onClick:this.rotateClockwise},{default:()=>t(Oo,null)}),"tipClockwise"),i(t(W,{clsPrefix:r,onClick:this.resizeToOrignalImageSize},{default:()=>t(Bo,null)}),"tipOriginalSize"),i(t(W,{clsPrefix:r,onClick:this.zoomOut},{default:()=>t(Io,null)}),"tipZoomOut"),i(t(W,{clsPrefix:r,onClick:this.zoomIn},{default:()=>t($o,null)}),"tipZoomIn"),i(t(W,{clsPrefix:r,onClick:this.toggleShow},{default:()=>Ho}),"tipClose"))}}):null,t(Se,{name:"fade-in-scale-up-transition",onAfterLeave:this.handleAfterLeave,appear:this.appear,onEnter:this.syncTransformOrigin,onBeforeLeave:this.syncTransformOrigin},{default:()=>{const{previewedImgProps:i={}}=this;return We(t("div",{class:`${r}-image-preview-wrapper`,ref:"previewWrapperRef"},t("img",Object.assign({},i,{draggable:!1,onMousedown:this.handlePreviewMousedown,onDblclick:this.handlePreviewDblclick,class:[`${r}-image-preview`,i.class],key:this.previewSrc,src:this.previewSrc,ref:"previewRef",onDragstart:this.handleDragStart}))),[[tr,this.show]])}})),[[er,{enabled:this.show}]])):null}}))}}),_t=Be("n-image-group"),Vo=Ee,qo=V({name:"ImageGroup",props:Vo,setup(e){let o;const{mergedClsPrefixRef:r}=he(e),n=`c${Oe()}`,i=or(),u=s=>{var a;o=s,(a=c.value)===null||a===void 0||a.setPreviewSrc(s)};function d(s){if(!(i!=null&&i.proxy))return;const l=i.proxy.$el.parentElement.querySelectorAll(`[data-group-id=${n}]:not([data-error=true])`);if(!l.length)return;const f=Array.from(l).findIndex(C=>C.dataset.previewSrc===o);~f?u(l[(f+s+l.length)%l.length].dataset.previewSrc):u(l[0].dataset.previewSrc)}Ue(_t,{mergedClsPrefixRef:r,setPreviewSrc:u,setThumbnailEl:s=>{var a;(a=c.value)===null||a===void 0||a.setThumbnailEl(s)},toggleShow:()=>{var s;(s=c.value)===null||s===void 0||s.toggleShow()},groupId:n});const c=_(null);return{mergedClsPrefix:r,previewInstRef:c,next:()=>d(1),prev:()=>d(-1)}},render(){return t(Ot,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:this.mergedClsPrefix,ref:"previewInstRef",onPrev:this.prev,onNext:this.next,showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},this.$slots)}}),Zo=Object.assign({alt:String,height:[String,Number],imgProps:Object,previewedImgProps:Object,lazy:Boolean,intersectionObserverOptions:Object,objectFit:{type:String,default:"fill"},previewSrc:String,fallbackSrc:String,width:[String,Number],src:String,previewDisabled:Boolean,loadDescription:String,onError:Function,onLoad:Function},Ee),$t=V({name:"Image",props:Zo,inheritAttrs:!1,setup(e){const o=_(null),r=_(!1),n=_(null),i=ae(_t,null),{mergedClsPrefixRef:u}=i||he(e),d={click:()=>{if(e.previewDisabled||r.value)return;const a=e.previewSrc||e.src;if(i){i.setPreviewSrc(a),i.setThumbnailEl(o.value),i.toggleShow();return}const{value:l}=n;l&&(l.setPreviewSrc(a),l.setThumbnailEl(o.value),l.toggleShow())}},c=_(!e.lazy);_e(()=>{var a;(a=o.value)===null||a===void 0||a.setAttribute("data-group-id",(i==null?void 0:i.groupId)||"")}),_e(()=>{if(Le)return;let a;const l=$e(()=>{a==null||a(),a=void 0,e.lazy&&(a=Tr(o.value,e.intersectionObserverOptions,c))});at(()=>{l(),a==null||a()})}),$e(()=>{var a;e.src,(a=e.imgProps)===null||a===void 0||a.src,r.value=!1});const s=_(!1);return Ue(Lt,{previewedImgPropsRef:H(e,"previewedImgProps")}),Object.assign({mergedClsPrefix:u,groupId:i==null?void 0:i.groupId,previewInstRef:n,imageRef:o,showError:r,shouldStartLoading:c,loaded:s,mergedOnClick:a=>{var l,f;d.click(),(f=(l=e.imgProps)===null||l===void 0?void 0:l.onClick)===null||f===void 0||f.call(l,a)},mergedOnError:a=>{if(!c.value)return;r.value=!0;const{onError:l,imgProps:{onError:f}={}}=e;l==null||l(a),f==null||f(a)},mergedOnLoad:a=>{const{onLoad:l,imgProps:{onLoad:f}={}}=e;l==null||l(a),f==null||f(a),s.value=!0}},d)},render(){var e,o;const{mergedClsPrefix:r,imgProps:n={},loaded:i,$attrs:u,lazy:d}=this,c=(o=(e=this.$slots).placeholder)===null||o===void 0?void 0:o.call(e),s=this.src||n.src||"",a=t("img",Object.assign(Object.assign({},n),{ref:"imageRef",width:this.width||n.width,height:this.height||n.height,src:Le?s:this.showError?this.fallbackSrc:this.shouldStartLoading?s:void 0,alt:this.alt||n.alt,"aria-label":this.alt||n.alt,onClick:this.mergedOnClick,onError:this.mergedOnError,onLoad:this.mergedOnLoad,loading:Le&&d&&!this.intersectionObserverOptions?"lazy":"eager",style:[n.style||"",c&&!i?{height:"0",width:"0",visibility:"hidden"}:"",{objectFit:this.objectFit}],"data-error":this.showError,"data-preview-src":this.previewSrc||this.src}));return t("div",Object.assign({},u,{role:"none",class:[u.class,`${r}-image`,(this.previewDisabled||this.showError)&&`${r}-image--preview-disabled`]}),this.groupId?a:t(Ot,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:r,ref:"previewInstRef",showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},{default:()=>a}),!i&&c)}}),Xo=E([m("progress",{display:"inline-block"},[m("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),D("line",`
 width: 100%;
 display: block;
 `,[m("progress-content",`
 display: flex;
 align-items: center;
 `,[m("progress-graph",{flex:1})]),m("progress-custom-content",{marginLeft:"14px"}),m("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[D("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),D("circle, dashboard",{width:"120px"},[m("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),m("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),m("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),D("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[m("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),m("progress-content",{position:"relative"}),m("progress-graph",{position:"relative"},[m("progress-graph-circle",[E("svg",{verticalAlign:"bottom"}),m("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[D("empty",{opacity:0})]),m("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),m("progress-graph-line",[D("indicator-inside",[m("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[m("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),m("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),D("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[m("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),m("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),m("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[m("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[D("processing",[E("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),E("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),Go={success:t(lt,null),error:t(st,null),warning:t(ut,null),info:t(dt,null)},Yo=V({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:o}){const r=$(()=>ue(e.height)),n=$(()=>e.railBorderRadius!==void 0?ue(e.railBorderRadius):e.height!==void 0?ue(e.height,{c:.5}):""),i=$(()=>e.fillBorderRadius!==void 0?ue(e.fillBorderRadius):e.railBorderRadius!==void 0?ue(e.railBorderRadius):e.height!==void 0?ue(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:u,railColor:d,railStyle:c,percentage:s,unit:a,indicatorTextColor:l,status:f,showIndicator:C,fillColor:g,processing:k,clsPrefix:h}=e;return t("div",{class:`${h}-progress-content`,role:"none"},t("div",{class:`${h}-progress-graph`,"aria-hidden":!0},t("div",{class:[`${h}-progress-graph-line`,{[`${h}-progress-graph-line--indicator-${u}`]:!0}]},t("div",{class:`${h}-progress-graph-line-rail`,style:[{backgroundColor:d,height:r.value,borderRadius:n.value},c]},t("div",{class:[`${h}-progress-graph-line-fill`,k&&`${h}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:g,height:r.value,lineHeight:r.value,borderRadius:i.value}},u==="inside"?t("div",{class:`${h}-progress-graph-line-indicator`,style:{color:l}},s,a):null)))),C&&u==="outside"?t("div",null,o.default?t("div",{class:`${h}-progress-custom-content`,style:{color:l},role:"none"},o.default()):f==="default"?t("div",{role:"none",class:`${h}-progress-icon ${h}-progress-icon--as-text`,style:{color:l}},s,a):t("div",{class:`${h}-progress-icon`,"aria-hidden":!0},t(W,{clsPrefix:h},{default:()=>Go[f]}))):null)}}}),Ko={success:t(lt,null),error:t(st,null),warning:t(ut,null),info:t(dt,null)},Jo=V({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:o}){function r(n,i,u){const{gapDegree:d,viewBoxWidth:c,strokeWidth:s}=e,a=50,l=0,f=a,C=0,g=2*a,k=50+s/2,h=`M ${k},${k} m ${l},${f}
      a ${a},${a} 0 1 1 ${C},${-g}
      a ${a},${a} 0 1 1 ${-C},${g}`,x=Math.PI*2*a,R={stroke:u,strokeDasharray:`${n/100*(x-d)}px ${c*8}px`,strokeDashoffset:`-${d/2}px`,transformOrigin:i?"center":void 0,transform:i?`rotate(${i}deg)`:void 0};return{pathString:h,pathStyle:R}}return()=>{const{fillColor:n,railColor:i,strokeWidth:u,offsetDegree:d,status:c,percentage:s,showIndicator:a,indicatorTextColor:l,unit:f,gapOffsetDegree:C,clsPrefix:g}=e,{pathString:k,pathStyle:h}=r(100,0,i),{pathString:x,pathStyle:R}=r(s,d,n),L=100+u;return t("div",{class:`${g}-progress-content`,role:"none"},t("div",{class:`${g}-progress-graph`,"aria-hidden":!0},t("div",{class:`${g}-progress-graph-circle`,style:{transform:C?`rotate(${C}deg)`:void 0}},t("svg",{viewBox:`0 0 ${L} ${L}`},t("g",null,t("path",{class:`${g}-progress-graph-circle-rail`,d:k,"stroke-width":u,"stroke-linecap":"round",fill:"none",style:h})),t("g",null,t("path",{class:[`${g}-progress-graph-circle-fill`,s===0&&`${g}-progress-graph-circle-fill--empty`],d:x,"stroke-width":u,"stroke-linecap":"round",fill:"none",style:R}))))),a?t("div",null,o.default?t("div",{class:`${g}-progress-custom-content`,role:"none"},o.default()):c!=="default"?t("div",{class:`${g}-progress-icon`,"aria-hidden":!0},t(W,{clsPrefix:g},{default:()=>Ko[c]})):t("div",{class:`${g}-progress-text`,style:{color:l},role:"none"},t("span",{class:`${g}-progress-text__percentage`},s),t("span",{class:`${g}-progress-text__unit`},f))):null)}}});function Qe(e,o,r=100){return`m ${r/2} ${r/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const Qo=V({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:o}){const r=$(()=>e.percentage.map((i,u)=>`${Math.PI*i/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*u)-e.circleGap*u)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:n,strokeWidth:i,circleGap:u,showIndicator:d,fillColor:c,railColor:s,railStyle:a,percentage:l,clsPrefix:f}=e;return t("div",{class:`${f}-progress-content`,role:"none"},t("div",{class:`${f}-progress-graph`,"aria-hidden":!0},t("div",{class:`${f}-progress-graph-circle`},t("svg",{viewBox:`0 0 ${n} ${n}`},l.map((C,g)=>t("g",{key:g},t("path",{class:`${f}-progress-graph-circle-rail`,d:Qe(n/2-i/2*(1+2*g)-u*g,i,n),"stroke-width":i,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:s[g]},a[g]]}),t("path",{class:[`${f}-progress-graph-circle-fill`,C===0&&`${f}-progress-graph-circle-fill--empty`],d:Qe(n/2-i/2*(1+2*g)-u*g,i,n),"stroke-width":i,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:r.value[g],strokeDashoffset:0,stroke:c[g]}})))))),d&&o.default?t("div",null,t("div",{class:`${f}-progress-text`},o.default())):null)}}}),en=Object.assign(Object.assign({},ce.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),tn=V({name:"Progress",props:en,setup(e){const o=$(()=>e.indicatorPlacement||e.indicatorPosition),r=$(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:n,inlineThemeDisabled:i}=he(e),u=ce("Progress","-progress",Xo,Tt,e,n),d=$(()=>{const{status:s}=e,{common:{cubicBezierEaseInOut:a},self:{fontSize:l,fontSizeCircle:f,railColor:C,railHeight:g,iconSizeCircle:k,iconSizeLine:h,textColorCircle:x,textColorLineInner:R,textColorLineOuter:L,lineBgProcessing:S,fontWeightCircle:U,[Ve("iconColor",s)]:b,[Ve("fillColor",s)]:P}}=u.value;return{"--n-bezier":a,"--n-fill-color":P,"--n-font-size":l,"--n-font-size-circle":f,"--n-font-weight-circle":U,"--n-icon-color":b,"--n-icon-size-circle":k,"--n-icon-size-line":h,"--n-line-bg-processing":S,"--n-rail-color":C,"--n-rail-height":g,"--n-text-color-circle":x,"--n-text-color-line-inner":R,"--n-text-color-line-outer":L}}),c=i?De("progress",$(()=>e.status[0]),d,e):void 0;return{mergedClsPrefix:n,mergedIndicatorPlacement:o,gapDeg:r,cssVars:i?void 0:d,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{type:e,cssVars:o,indicatorTextColor:r,showIndicator:n,status:i,railColor:u,railStyle:d,color:c,percentage:s,viewBoxWidth:a,strokeWidth:l,mergedIndicatorPlacement:f,unit:C,borderRadius:g,fillBorderRadius:k,height:h,processing:x,circleGap:R,mergedClsPrefix:L,gapDeg:S,gapOffsetDegree:U,themeClass:b,$slots:P,onRender:T}=this;return T==null||T(),t("div",{class:[b,`${L}-progress`,`${L}-progress--${e}`,`${L}-progress--${i}`],style:o,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":s,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?t(Jo,{clsPrefix:L,status:i,showIndicator:n,indicatorTextColor:r,railColor:u,fillColor:c,railStyle:d,offsetDegree:this.offsetDegree,percentage:s,viewBoxWidth:a,strokeWidth:l,gapDegree:S===void 0?e==="dashboard"?75:0:S,gapOffsetDegree:U,unit:C},P):e==="line"?t(Yo,{clsPrefix:L,status:i,showIndicator:n,indicatorTextColor:r,railColor:u,fillColor:c,railStyle:d,percentage:s,processing:x,indicatorPlacement:f,unit:C,fillBorderRadius:k,railBorderRadius:g,height:h},P):e==="multiple-circle"?t(Qo,{clsPrefix:L,strokeWidth:l,railColor:u,fillColor:c,railStyle:d,viewBoxWidth:a,percentage:s,showIndicator:n,circleGap:R},P):null)}}),fe=Be("n-upload"),It="__UPLOAD_DRAGGER__",rn=V({name:"UploadDragger",[It]:!0,setup(e,{slots:o}){const r=ae(fe,null);return r||xe("upload-dragger","`n-upload-dragger` must be placed inside `n-upload`."),()=>{const{mergedClsPrefixRef:{value:n},mergedDisabledRef:{value:i},maxReachedRef:{value:u}}=r;return t("div",{class:[`${n}-upload-dragger`,(i||u)&&`${n}-upload-dragger--disabled`]},o)}}});var Bt=globalThis&&globalThis.__awaiter||function(e,o,r,n){function i(u){return u instanceof r?u:new r(function(d){d(u)})}return new(r||(r=Promise))(function(u,d){function c(l){try{a(n.next(l))}catch(f){d(f)}}function s(l){try{a(n.throw(l))}catch(f){d(f)}}function a(l){l.done?u(l.value):i(l.value).then(c,s)}a((n=n.apply(e,o||[])).next())})};const zt=e=>e.includes("image/"),et=(e="")=>{const o=e.split("/"),n=o[o.length-1].split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(n)||[""])[0]},tt=/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i,Dt=e=>{if(e.type)return zt(e.type);const o=et(e.name||"");if(tt.test(o))return!0;const r=e.thumbnailUrl||e.url||"",n=et(r);return!!(/^data:image\//.test(r)||tt.test(n))};function on(e){return Bt(this,void 0,void 0,function*(){return yield new Promise(o=>{if(!e.type||!zt(e.type)){o("");return}o(window.URL.createObjectURL(e))})})}const nn=nr&&window.FileReader&&window.File;function an(e){return e.isDirectory}function ln(e){return e.isFile}function sn(e,o){return Bt(this,void 0,void 0,function*(){const r=[];let n,i=0;function u(){i++}function d(){i--,i||n(r)}function c(s){s.forEach(a=>{if(a){if(u(),o&&an(a)){const l=a.createReader();u(),l.readEntries(f=>{c(f),d()},()=>{d()})}else ln(a)&&(u(),a.file(l=>{r.push({file:l,entry:a,source:"dnd"}),d()},()=>{d()}));d()}})}return yield new Promise(s=>{n=s,c(e)}),r})}function ge(e){const{id:o,name:r,percentage:n,status:i,url:u,file:d,thumbnailUrl:c,type:s,fullPath:a,batchId:l}=e;return{id:o,name:r,percentage:n??null,status:i,url:u??null,file:d??null,thumbnailUrl:c??null,type:s??null,fullPath:a??null,batchId:l??null}}function un(e,o,r){return e=e.toLowerCase(),o=o.toLocaleLowerCase(),r=r.toLocaleLowerCase(),r.split(",").map(i=>i.trim()).filter(Boolean).some(i=>{if(i.startsWith(".")){if(e.endsWith(i))return!0}else if(i.includes("/")){const[u,d]=o.split("/"),[c,s]=i.split("/");if((c==="*"||u&&c&&c===u)&&(s==="*"||d&&s&&s===d))return!0}else return!0;return!1})}const dn=(e,o)=>{if(!e)return;const r=document.createElement("a");r.href=e,o!==void 0&&(r.download=o),document.body.appendChild(r),r.click(),document.body.removeChild(r)},Ut=V({name:"UploadTrigger",props:{abstract:Boolean},setup(e,{slots:o}){const r=ae(fe,null);r||xe("upload-trigger","`n-upload-trigger` must be placed inside `n-upload`.");const{mergedClsPrefixRef:n,mergedDisabledRef:i,maxReachedRef:u,listTypeRef:d,dragOverRef:c,openOpenFileDialog:s,draggerInsideRef:a,handleFileAddition:l,mergedDirectoryDndRef:f,triggerStyleRef:C}=r,g=$(()=>d.value==="image-card");function k(){i.value||u.value||s()}function h(S){S.preventDefault(),c.value=!0}function x(S){S.preventDefault(),c.value=!0}function R(S){S.preventDefault(),c.value=!1}function L(S){var U;if(S.preventDefault(),!a.value||i.value||u.value){c.value=!1;return}const b=(U=S.dataTransfer)===null||U===void 0?void 0:U.items;b!=null&&b.length?sn(Array.from(b).map(P=>P.webkitGetAsEntry()),f.value).then(P=>{l(P)}).finally(()=>{c.value=!1}):c.value=!1}return()=>{var S;const{value:U}=n;return e.abstract?(S=o.default)===null||S===void 0?void 0:S.call(o,{handleClick:k,handleDrop:L,handleDragOver:h,handleDragEnter:x,handleDragLeave:R}):t("div",{class:[`${U}-upload-trigger`,(i.value||u.value)&&`${U}-upload-trigger--disabled`,g.value&&`${U}-upload-trigger--image-card`],style:C.value,onClick:k,onDrop:L,onDragover:h,onDragenter:x,onDragleave:R},g.value?t(rn,null,{default:()=>ir(o.default,()=>[t(W,{clsPrefix:U},{default:()=>t(Ro,null)})])}):o)}}}),cn=V({name:"UploadProgress",props:{show:Boolean,percentage:{type:Number,required:!0},status:{type:String,required:!0}},setup(){return{mergedTheme:ae(fe).mergedThemeRef}},render(){return t(ct,null,{default:()=>this.show?t(tn,{type:"line",showIndicator:!1,percentage:this.percentage,status:this.status,height:2,theme:this.mergedTheme.peers.Progress,themeOverrides:this.mergedTheme.peerOverrides.Progress}):null})}}),fn=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},t("g",{fill:"none"},t("path",{d:"M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5zm.583 20.4l-7.807-7.68a.75.75 0 0 0-.968-.07l-.084.07l-7.808 7.68c.183.065.38.1.584.1h15.5c.204 0 .4-.035.583-.1l-7.807-7.68l7.807 7.68zM21.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .208.036.408.103.593l7.82-7.692a2.25 2.25 0 0 1 3.026-.117l.129.117l7.82 7.692c.066-.185.102-.385.102-.593V6.25a1.75 1.75 0 0 0-1.75-1.75zm-3.25 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm0 1.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z",fill:"currentColor"}))),gn=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},t("g",{fill:"none"},t("path",{d:"M6.4 2A2.4 2.4 0 0 0 4 4.4v19.2A2.4 2.4 0 0 0 6.4 26h15.2a2.4 2.4 0 0 0 2.4-2.4V11.578c0-.729-.29-1.428-.805-1.944l-6.931-6.931A2.4 2.4 0 0 0 14.567 2H6.4zm-.9 2.4a.9.9 0 0 1 .9-.9H14V10a2 2 0 0 0 2 2h6.5v11.6a.9.9 0 0 1-.9.9H6.4a.9.9 0 0 1-.9-.9V4.4zm16.44 6.1H16a.5.5 0 0 1-.5-.5V4.06l6.44 6.44z",fill:"currentColor"})));var hn=globalThis&&globalThis.__awaiter||function(e,o,r,n){function i(u){return u instanceof r?u:new r(function(d){d(u)})}return new(r||(r=Promise))(function(u,d){function c(l){try{a(n.next(l))}catch(f){d(f)}}function s(l){try{a(n.throw(l))}catch(f){d(f)}}function a(l){l.done?u(l.value):i(l.value).then(c,s)}a((n=n.apply(e,o||[])).next())})};const we={paddingMedium:"0 3px",heightMedium:"24px",iconSizeMedium:"18px"},pn=V({name:"UploadFile",props:{clsPrefix:{type:String,required:!0},file:{type:Object,required:!0},listType:{type:String,required:!0}},setup(e){const o=ae(fe),r=_(null),n=_(""),i=$(()=>{const{file:b}=e;return b.status==="finished"?"success":b.status==="error"?"error":"info"}),u=$(()=>{const{file:b}=e;if(b.status==="error")return"error"}),d=$(()=>{const{file:b}=e;return b.status==="uploading"}),c=$(()=>{if(!o.showCancelButtonRef.value)return!1;const{file:b}=e;return["uploading","pending","error"].includes(b.status)}),s=$(()=>{if(!o.showRemoveButtonRef.value)return!1;const{file:b}=e;return["finished"].includes(b.status)}),a=$(()=>{if(!o.showDownloadButtonRef.value)return!1;const{file:b}=e;return["finished"].includes(b.status)}),l=$(()=>{if(!o.showRetryButtonRef.value)return!1;const{file:b}=e;return["error"].includes(b.status)}),f=ar(()=>n.value||e.file.thumbnailUrl||e.file.url),C=$(()=>{if(!o.showPreviewButtonRef.value)return!1;const{file:{status:b},listType:P}=e;return["finished"].includes(b)&&f.value&&P==="image-card"});function g(){o.submit(e.file.id)}function k(b){b.preventDefault();const{file:P}=e;["finished","pending","error"].includes(P.status)?x(P):["uploading"].includes(P.status)?L(P):ur("upload","The button clicked type is unknown.")}function h(b){b.preventDefault(),R(e.file)}function x(b){const{xhrMap:P,doChange:T,onRemoveRef:{value:N},mergedFileListRef:{value:w}}=o;Promise.resolve(N?N({file:Object.assign({},b),fileList:w}):!0).then(M=>{if(M===!1)return;const I=Object.assign({},b,{status:"removed"});P.delete(b.id),T(I,void 0,{remove:!0})})}function R(b){const{onDownloadRef:{value:P}}=o;Promise.resolve(P?P(Object.assign({},b)):!0).then(T=>{T!==!1&&dn(b.url,b.name)})}function L(b){const{xhrMap:P}=o,T=P.get(b.id);T==null||T.abort(),x(Object.assign({},b))}function S(){const{onPreviewRef:{value:b}}=o;if(b)b(e.file);else if(e.listType==="image-card"){const{value:P}=r;if(!P)return;P.click()}}const U=()=>hn(this,void 0,void 0,function*(){const{listType:b}=e;b!=="image"&&b!=="image-card"||o.shouldUseThumbnailUrlRef.value(e.file)&&(n.value=yield o.getFileThumbnailUrlResolver(e.file))});return $e(()=>{U()}),{mergedTheme:o.mergedThemeRef,progressStatus:i,buttonType:u,showProgress:d,disabled:o.mergedDisabledRef,showCancelButton:c,showRemoveButton:s,showDownloadButton:a,showRetryButton:l,showPreviewButton:C,mergedThumbnailUrl:f,shouldUseThumbnailUrl:o.shouldUseThumbnailUrlRef,renderIcon:o.renderIconRef,imageRef:r,handleRemoveOrCancelClick:k,handleDownloadClick:h,handleRetryClick:g,handlePreviewClick:S}},render(){const{clsPrefix:e,mergedTheme:o,listType:r,file:n,renderIcon:i}=this;let u;const d=r==="image";d||r==="image-card"?u=!this.shouldUseThumbnailUrl(n)||!this.mergedThumbnailUrl?t("span",{class:`${e}-upload-file-info__thumbnail`},i?i(n):Dt(n)?t(W,{clsPrefix:e},{default:()=>fn}):t(W,{clsPrefix:e},{default:()=>gn})):t("a",{rel:"noopener noreferer",target:"_blank",href:n.url||void 0,class:`${e}-upload-file-info__thumbnail`,onClick:this.handlePreviewClick},r==="image-card"?t($t,{src:this.mergedThumbnailUrl||void 0,previewSrc:n.url||void 0,alt:n.name,ref:"imageRef"}):t("img",{src:this.mergedThumbnailUrl||void 0,alt:n.name})):u=t("span",{class:`${e}-upload-file-info__thumbnail`},i?i(n):t(W,{clsPrefix:e},{default:()=>t(ko,null)}));const s=t(cn,{show:this.showProgress,percentage:n.percentage||0,status:this.progressStatus}),a=r==="text"||r==="image";return t("div",{class:[`${e}-upload-file`,`${e}-upload-file--${this.progressStatus}-status`,n.url&&n.status!=="error"&&r!=="image-card"&&`${e}-upload-file--with-url`,`${e}-upload-file--${r}-type`]},t("div",{class:`${e}-upload-file-info`},u,t("div",{class:`${e}-upload-file-info__name`},a&&(n.url&&n.status!=="error"?t("a",{rel:"noopener noreferer",target:"_blank",href:n.url||void 0,onClick:this.handlePreviewClick},n.name):t("span",{onClick:this.handlePreviewClick},n.name)),d&&s),t("div",{class:[`${e}-upload-file-info__action`,`${e}-upload-file-info__action--${r}-type`]},this.showPreviewButton?t(ie,{key:"preview",quaternary:!0,type:this.buttonType,onClick:this.handlePreviewClick,theme:o.peers.Button,themeOverrides:o.peerOverrides.Button,builtinThemeOverrides:we},{icon:()=>t(W,{clsPrefix:e},{default:()=>t(lr,null)})}):null,(this.showRemoveButton||this.showCancelButton)&&!this.disabled&&t(ie,{key:"cancelOrTrash",theme:o.peers.Button,themeOverrides:o.peerOverrides.Button,quaternary:!0,builtinThemeOverrides:we,type:this.buttonType,onClick:this.handleRemoveOrCancelClick},{icon:()=>t(sr,null,{default:()=>this.showRemoveButton?t(W,{clsPrefix:e,key:"trash"},{default:()=>t(So,null)}):t(W,{clsPrefix:e,key:"cancel"},{default:()=>t(Lo,null)})})}),this.showRetryButton&&!this.disabled&&t(ie,{key:"retry",quaternary:!0,type:this.buttonType,onClick:this.handleRetryClick,theme:o.peers.Button,themeOverrides:o.peerOverrides.Button,builtinThemeOverrides:we},{icon:()=>t(W,{clsPrefix:e},{default:()=>t(To,null)})}),this.showDownloadButton?t(ie,{key:"download",quaternary:!0,type:this.buttonType,onClick:this.handleDownloadClick,theme:o.peers.Button,themeOverrides:o.peerOverrides.Button,builtinThemeOverrides:we},{icon:()=>t(W,{clsPrefix:e},{default:()=>t(Po,null)})}):null)),!d&&s)}}),vn=V({name:"UploadFileList",setup(e,{slots:o}){const r=ae(fe,null);r||xe("upload-file-list","`n-upload-file-list` must be placed inside `n-upload`.");const{abstractRef:n,mergedClsPrefixRef:i,listTypeRef:u,mergedFileListRef:d,fileListStyleRef:c,cssVarsRef:s,themeClassRef:a,maxReachedRef:l,showTriggerRef:f,imageGroupPropsRef:C}=r,g=$(()=>u.value==="image-card"),k=()=>d.value.map(x=>t(pn,{clsPrefix:i.value,key:x.id,file:x,listType:u.value})),h=()=>g.value?t(qo,Object.assign({},C.value),{default:k}):t(ct,{group:!0},{default:k});return()=>{const{value:x}=i,{value:R}=n;return t("div",{class:[`${x}-upload-file-list`,g.value&&`${x}-upload-file-list--grid`,R?a==null?void 0:a.value:void 0],style:[R&&s?s.value:"",c.value]},h(),f.value&&!l.value&&g.value&&t(Ut,null,o))}}}),mn=E([m("upload","width: 100%;",[D("dragger-inside",[m("upload-trigger",`
 display: block;
 `)]),D("drag-over",[m("upload-dragger",`
 border: var(--n-dragger-border-hover);
 `)])]),m("upload-dragger",`
 cursor: pointer;
 box-sizing: border-box;
 width: 100%;
 text-align: center;
 border-radius: var(--n-border-radius);
 padding: 24px;
 opacity: 1;
 transition:
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-dragger-color);
 border: var(--n-dragger-border);
 `,[E("&:hover",`
 border: var(--n-dragger-border-hover);
 `),D("disabled",`
 cursor: not-allowed;
 `)]),m("upload-trigger",`
 display: inline-block;
 box-sizing: border-box;
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[E("+",[m("upload-file-list","margin-top: 8px;")]),D("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `),D("image-card",`
 width: 96px;
 height: 96px;
 `,[m("base-icon",`
 font-size: 24px;
 `),m("upload-dragger",`
 padding: 0;
 height: 100%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `)])]),m("upload-file-list",`
 line-height: var(--n-line-height);
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[E("a, img","outline: none;"),D("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `,[m("upload-file","cursor: not-allowed;")]),D("grid",`
 display: grid;
 grid-template-columns: repeat(auto-fill, 96px);
 grid-gap: 8px;
 margin-top: 0;
 `),m("upload-file",`
 display: block;
 box-sizing: border-box;
 cursor: default;
 padding: 0px 12px 0 6px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `,[qe(),m("progress",[qe({foldPadding:!0})]),E("&:hover",`
 background-color: var(--n-item-color-hover);
 `,[m("upload-file-info",[ee("action",`
 opacity: 1;
 `)])]),D("image-type",`
 border-radius: var(--n-border-radius);
 text-decoration: underline;
 text-decoration-color: #0000;
 `,[m("upload-file-info",`
 padding-top: 0px;
 padding-bottom: 0px;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 6px 0;
 `,[m("progress",`
 padding: 2px 0;
 margin-bottom: 0;
 `),ee("name",`
 padding: 0 8px;
 `),ee("thumbnail",`
 width: 32px;
 height: 32px;
 font-size: 28px;
 display: flex;
 justify-content: center;
 align-items: center;
 `,[E("img",`
 width: 100%;
 `)])])]),D("text-type",[m("progress",`
 box-sizing: border-box;
 padding-bottom: 6px;
 margin-bottom: 6px;
 `)]),D("image-card-type",`
 position: relative;
 width: 96px;
 height: 96px;
 border: var(--n-item-border-image-card);
 border-radius: var(--n-border-radius);
 padding: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: border-color .3s var(--n-bezier), background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 overflow: hidden;
 `,[m("progress",`
 position: absolute;
 left: 8px;
 bottom: 8px;
 right: 8px;
 width: unset;
 `),m("upload-file-info",`
 padding: 0;
 width: 100%;
 height: 100%;
 `,[ee("thumbnail",`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 36px;
 `,[E("img",`
 width: 100%;
 `)])]),E("&::before",`
 position: absolute;
 z-index: 1;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 opacity: 0;
 transition: opacity .2s var(--n-bezier);
 content: "";
 `),E("&:hover",[E("&::before","opacity: 1;"),m("upload-file-info",[ee("thumbnail","opacity: .12;")])])]),D("error-status",[E("&:hover",`
 background-color: var(--n-item-color-hover-error);
 `),m("upload-file-info",[ee("name","color: var(--n-item-text-color-error);"),ee("thumbnail","color: var(--n-item-text-color-error);")]),D("image-card-type",`
 border: var(--n-item-border-image-card-error);
 `)]),D("with-url",`
 cursor: pointer;
 `,[m("upload-file-info",[ee("name",`
 color: var(--n-item-text-color-success);
 text-decoration-color: var(--n-item-text-color-success);
 `,[E("a",`
 text-decoration: underline;
 `)])])]),m("upload-file-info",`
 position: relative;
 padding-top: 6px;
 padding-bottom: 6px;
 display: flex;
 flex-wrap: nowrap;
 `,[ee("thumbnail",`
 font-size: 18px;
 opacity: 1;
 transition: opacity .2s var(--n-bezier);
 color: var(--n-item-icon-color);
 `,[m("base-icon",`
 margin-right: 2px;
 vertical-align: middle;
 transition: color .3s var(--n-bezier);
 `)]),ee("action",`
 padding-top: inherit;
 padding-bottom: inherit;
 position: absolute;
 right: 0;
 top: 0;
 bottom: 0;
 width: 80px;
 display: flex;
 align-items: center;
 transition: opacity .2s var(--n-bezier);
 justify-content: flex-end;
 opacity: 0;
 `,[m("button",[E("&:not(:last-child)",{marginRight:"4px"}),m("base-icon",[E("svg",[dr()])])]),D("image-type",`
 position: relative;
 max-width: 80px;
 width: auto;
 `),D("image-card-type",`
 z-index: 2;
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0;
 right: 0;
 bottom: 0;
 top: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 `)]),ee("name",`
 color: var(--n-item-text-color);
 flex: 1;
 display: flex;
 justify-content: center;
 text-overflow: ellipsis;
 overflow: hidden;
 flex-direction: column;
 text-decoration-color: #0000;
 font-size: var(--n-font-size);
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier); 
 `,[E("a",`
 color: inherit;
 text-decoration: underline;
 `)])])])]),m("upload-file-input",`
 display: block;
 width: 0;
 height: 0;
 opacity: 0;
 `)]);var rt=globalThis&&globalThis.__awaiter||function(e,o,r,n){function i(u){return u instanceof r?u:new r(function(d){d(u)})}return new(r||(r=Promise))(function(u,d){function c(l){try{a(n.next(l))}catch(f){d(f)}}function s(l){try{a(n.throw(l))}catch(f){d(f)}}function a(l){l.done?u(l.value):i(l.value).then(c,s)}a((n=n.apply(e,o||[])).next())})};function wn(e,o,r){const{doChange:n,xhrMap:i}=e;let u=0;function d(s){var a;let l=Object.assign({},o,{status:"error",percentage:u});i.delete(o.id),l=ge(((a=e.onError)===null||a===void 0?void 0:a.call(e,{file:l,event:s}))||l),n(l,s)}function c(s){var a;if(e.isErrorState){if(e.isErrorState(r)){d(s);return}}else if(r.status<200||r.status>=300){d(s);return}let l=Object.assign({},o,{status:"finished",percentage:u});i.delete(o.id),l=ge(((a=e.onFinish)===null||a===void 0?void 0:a.call(e,{file:l,event:s}))||l),n(l,s)}return{handleXHRLoad:c,handleXHRError:d,handleXHRAbort(s){const a=Object.assign({},o,{status:"removed",file:null,percentage:u});i.delete(o.id),n(a,s)},handleXHRProgress(s){const a=Object.assign({},o,{status:"uploading"});if(s.lengthComputable){const l=Math.ceil(s.loaded/s.total*100);a.percentage=l,u=l}n(a,s)}}}function bn(e){const{inst:o,file:r,data:n,headers:i,withCredentials:u,action:d,customRequest:c}=e,{doChange:s}=e.inst;let a=0;c({file:r,data:n,headers:i,withCredentials:u,action:d,onProgress(l){const f=Object.assign({},r,{status:"uploading"}),C=l.percent;f.percentage=C,a=C,s(f)},onFinish(){var l;let f=Object.assign({},r,{status:"finished",percentage:a});f=ge(((l=o.onFinish)===null||l===void 0?void 0:l.call(o,{file:f}))||f),s(f)},onError(){var l;let f=Object.assign({},r,{status:"error",percentage:a});f=ge(((l=o.onError)===null||l===void 0?void 0:l.call(o,{file:f}))||f),s(f)}})}function xn(e,o,r){const n=wn(e,o,r);r.onabort=n.handleXHRAbort,r.onerror=n.handleXHRError,r.onload=n.handleXHRLoad,r.upload&&(r.upload.onprogress=n.handleXHRProgress)}function Mt(e,o){return typeof e=="function"?e({file:o}):e||{}}function Cn(e,o,r){const n=Mt(o,r);n&&Object.keys(n).forEach(i=>{e.setRequestHeader(i,n[i])})}function yn(e,o,r){const n=Mt(o,r);n&&Object.keys(n).forEach(i=>{e.append(i,n[i])})}function Rn(e,o,r,{method:n,action:i,withCredentials:u,responseType:d,headers:c,data:s}){const a=new XMLHttpRequest;a.responseType=d,e.xhrMap.set(r.id,a),a.withCredentials=u;const l=new FormData;if(yn(l,s,r),l.append(o,r.file),xn(e,r,a),i!==void 0){a.open(n.toUpperCase(),i),Cn(a,c,r),a.send(l);const f=Object.assign({},r,{status:"uploading"});e.doChange(f)}}const kn=Object.assign(Object.assign({},ce.props),{name:{type:String,default:"file"},accept:String,action:String,customRequest:Function,directory:Boolean,directoryDnd:{type:Boolean,default:void 0},method:{type:String,default:"POST"},multiple:Boolean,showFileList:{type:Boolean,default:!0},data:[Object,Function],headers:[Object,Function],withCredentials:Boolean,responseType:{type:String,default:""},disabled:{type:Boolean,default:void 0},onChange:Function,onRemove:Function,onFinish:Function,onError:Function,onBeforeUpload:Function,isErrorState:Function,onDownload:Function,defaultUpload:{type:Boolean,default:!0},fileList:Array,"onUpdate:fileList":[Function,Array],onUpdateFileList:[Function,Array],fileListStyle:[String,Object],defaultFileList:{type:Array,default:()=>[]},showCancelButton:{type:Boolean,default:!0},showRemoveButton:{type:Boolean,default:!0},showDownloadButton:Boolean,showRetryButton:{type:Boolean,default:!0},showPreviewButton:{type:Boolean,default:!0},listType:{type:String,default:"text"},onPreview:Function,shouldUseThumbnailUrl:{type:Function,default:e=>nn?Dt(e):!1},createThumbnailUrl:Function,abstract:Boolean,max:Number,showTrigger:{type:Boolean,default:!0},imageGroupProps:Object,inputProps:Object,triggerStyle:[String,Object],renderIcon:Object}),Sn=V({name:"Upload",props:kn,setup(e){e.abstract&&e.listType==="image-card"&&xe("upload","when the list-type is image-card, abstract is not supported.");const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=he(e),n=ce("Upload","-upload",mn,No,e,o),i=cr(e),u=$(()=>{const{max:w}=e;return w!==void 0?g.value.length>=w:!1}),d=_(e.defaultFileList),c=H(e,"fileList"),s=_(null),a={value:!1},l=_(!1),f=new Map,C=fr(c,d),g=$(()=>C.value.map(ge));function k(){var w;(w=s.value)===null||w===void 0||w.click()}function h(w){const M=w.target;L(M.files?Array.from(M.files).map(I=>({file:I,entry:null,source:"input"})):null,w),M.value=""}function x(w){const{"onUpdate:fileList":M,onUpdateFileList:I}=e;M&&Ze(M,w),I&&Ze(I,w),d.value=w}const R=$(()=>e.multiple||e.directory);function L(w,M){if(!w||w.length===0)return;const{onBeforeUpload:I}=e;w=R.value?w:[w[0]];const{max:q,accept:O}=e;w=w.filter(({file:F,source:A})=>A==="dnd"&&(O!=null&&O.trim())?un(F.name,F.type,O):!0),q&&(w=w.slice(0,q-g.value.length));const j=Oe();Promise.all(w.map(({file:F,entry:A})=>rt(this,void 0,void 0,function*(){var Y;const K={id:Oe(),batchId:j,name:F.name,status:"pending",percentage:0,file:F,url:null,type:F.type,thumbnailUrl:null,fullPath:(Y=A==null?void 0:A.fullPath)!==null&&Y!==void 0?Y:`/${F.webkitRelativePath||F.name}`};return!I||(yield I({file:K,fileList:g.value}))!==!1?K:null}))).then(F=>rt(this,void 0,void 0,function*(){let A=Promise.resolve();return F.forEach(Y=>{A=A.then(hr).then(()=>{Y&&U(Y,M,{append:!0})})}),yield A})).then(()=>{e.defaultUpload&&S()})}function S(w){const{method:M,action:I,withCredentials:q,headers:O,data:j,name:F}=e,A=w!==void 0?g.value.filter(K=>K.id===w):g.value,Y=w!==void 0;A.forEach(K=>{const{status:le}=K;(le==="pending"||le==="error"&&Y)&&(e.customRequest?bn({inst:{doChange:U,xhrMap:f,onFinish:e.onFinish,onError:e.onError},file:K,action:I,withCredentials:q,headers:O,data:j,customRequest:e.customRequest}):Rn({doChange:U,xhrMap:f,onFinish:e.onFinish,onError:e.onError,isErrorState:e.isErrorState},F,K,{method:M,action:I,withCredentials:q,responseType:e.responseType,headers:O,data:j}))})}const U=(w,M,I={append:!1,remove:!1})=>{const{append:q,remove:O}=I,j=Array.from(g.value),F=j.findIndex(A=>A.id===w.id);if(q||O||~F){q?j.push(w):O?j.splice(F,1):j.splice(F,1,w);const{onChange:A}=e;A&&A({file:w,fileList:j,event:M}),x(j)}};function b(w){var M;if(w.thumbnailUrl)return w.thumbnailUrl;const{createThumbnailUrl:I}=e;return I?(M=I(w.file,w))!==null&&M!==void 0?M:w.url||"":w.url?w.url:w.file?on(w.file):""}const P=$(()=>{const{common:{cubicBezierEaseInOut:w},self:{draggerColor:M,draggerBorder:I,draggerBorderHover:q,itemColorHover:O,itemColorHoverError:j,itemTextColorError:F,itemTextColorSuccess:A,itemTextColor:Y,itemIconColor:K,itemDisabledOpacity:le,lineHeight:ye,borderRadius:pe,fontSize:Re,itemBorderImageCardError:ke,itemBorderImageCard:G}}=n.value;return{"--n-bezier":w,"--n-border-radius":pe,"--n-dragger-border":I,"--n-dragger-border-hover":q,"--n-dragger-color":M,"--n-font-size":Re,"--n-item-color-hover":O,"--n-item-color-hover-error":j,"--n-item-disabled-opacity":le,"--n-item-icon-color":K,"--n-item-text-color":Y,"--n-item-text-color-error":F,"--n-item-text-color-success":A,"--n-line-height":ye,"--n-item-border-image-card-error":ke,"--n-item-border-image-card":G}}),T=r?De("upload",void 0,P,e):void 0;Ue(fe,{mergedClsPrefixRef:o,mergedThemeRef:n,showCancelButtonRef:H(e,"showCancelButton"),showDownloadButtonRef:H(e,"showDownloadButton"),showRemoveButtonRef:H(e,"showRemoveButton"),showRetryButtonRef:H(e,"showRetryButton"),onRemoveRef:H(e,"onRemove"),onDownloadRef:H(e,"onDownload"),mergedFileListRef:g,triggerStyleRef:H(e,"triggerStyle"),shouldUseThumbnailUrlRef:H(e,"shouldUseThumbnailUrl"),renderIconRef:H(e,"renderIcon"),xhrMap:f,submit:S,doChange:U,showPreviewButtonRef:H(e,"showPreviewButton"),onPreviewRef:H(e,"onPreview"),getFileThumbnailUrlResolver:b,listTypeRef:H(e,"listType"),dragOverRef:l,openOpenFileDialog:k,draggerInsideRef:a,handleFileAddition:L,mergedDisabledRef:i.mergedDisabledRef,maxReachedRef:u,fileListStyleRef:H(e,"fileListStyle"),abstractRef:H(e,"abstract"),acceptRef:H(e,"accept"),cssVarsRef:r?void 0:P,themeClassRef:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender,showTriggerRef:H(e,"showTrigger"),imageGroupPropsRef:H(e,"imageGroupProps"),mergedDirectoryDndRef:$(()=>{var w;return(w=e.directoryDnd)!==null&&w!==void 0?w:e.directory})});const N={clear:()=>{d.value=[]},submit:S,openOpenFileDialog:k};return Object.assign({mergedClsPrefix:o,draggerInsideRef:a,inputElRef:s,mergedTheme:n,dragOver:l,mergedMultiple:R,cssVars:r?void 0:P,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender,handleFileInputChange:h},N)},render(){var e,o;const{draggerInsideRef:r,mergedClsPrefix:n,$slots:i,directory:u,onRender:d}=this;if(i.default&&!this.abstract){const s=i.default()[0];!((e=s==null?void 0:s.type)===null||e===void 0)&&e[It]&&(r.value=!0)}const c=t("input",Object.assign({},this.inputProps,{ref:"inputElRef",type:"file",class:`${n}-upload-file-input`,accept:this.accept,multiple:this.mergedMultiple,onChange:this.handleFileInputChange,webkitdirectory:u||void 0,directory:u||void 0}));return this.abstract?t(Te,null,(o=i.default)===null||o===void 0?void 0:o.call(i),t(gr,{to:"body"},c)):(d==null||d(),t("div",{class:[`${n}-upload`,r.value&&`${n}-upload--dragger-inside`,this.dragOver&&`${n}-upload--drag-over`,this.themeClass],style:this.cssVars},c,this.showTrigger&&this.listType!=="image-card"&&t(Ut,null,i),this.showFileList&&t(vn,null,i)))}}),Pn=V({__name:"ImageUpload",emits:["afterUploadImage"],setup(e,{emit:o}){const r=Me(),n=_(""),i=_(""),u=async function({file:s,onFinish:a,onError:l,onProgress:f}){o("afterUploadImage","uploading");try{const C=await vr();if((C==null?void 0:C.status)!==200)return;const g=new FormData,k=`${Date.now()}${Math.floor(Math.random()*1e3)}.${s.name.split(".").pop()}`;g.append("key",k),g.append("OSSAccessKeyId",C.data.accessid),g.append("policy",C.data.policy),g.append("Signature",C.data.signature),g.append("file",s.file);const h=await mr.post(C.data.host,g,{headers:{"Content-Type":s.type},onUploadProgress:({loaded:x,total:R})=>{f({percent:Math.ceil(x*100/R)})}});(h==null?void 0:h.status)===204&&(n.value=k,i.value=`${C.data.host}${k}`,a(),r.success("上传成功"))}catch{l(),r.error("上传失败")}},d=function({file:s}){return s.name=n.value,s.url=i.value,o("afterUploadImage",i.value),s};return(c,s)=>{const a=Sn;return Fe(),ft(a,{"list-type":"image-card","theme-overrides":re(pr),"custom-request":u,onFinish:d},null,8,["theme-overrides"])}}}),Ln=e=>Ce.get("/admin/slides",{params:{current:e}}),Tn=e=>Ce.post("/admin/slides",e),On=e=>Ce.patch(`/admin/slides/${e}/status`),_n=e=>Ce.delete(`/admin/slides/${e}`),$n=V({__name:"CreateCarousel",emits:["reloadCarouselList"],setup(e,{emit:o}){const r=Me(),n=_(null),i=_({title:"",img:"",url:"",status:0}),u={title:[{required:!0,message:"请输入标题",trigger:"blur"}],url:[{required:!0,message:"请输入跳转链接",trigger:"blur"},{type:"url",message:"请输入正确的链接地址",trigger:"input"}],img:[{required:!0,message:"请上传图片"}]},d=async function(){var a;if(await((a=n.value)==null?void 0:a.validate(l=>{})),i.value.img==="uploading")return r.warning("上传中，请稍后"),!1;try{const l=await Tn(i.value);(l==null?void 0:l.status)===201&&r.success("创建成功")}catch{return!1}i.value.title="",i.value.img="",i.value.url="",o("reloadCarouselList")},c=function(a){i.value.img=a};return(s,a)=>{const l=wr,f=br,C=ot,g=xr,k=Cr;return Fe(),ft(k,{preset:"dialog",title:"创建轮播图","positive-text":"创建","negative-text":"取消","positive-button-props":{type:"info"},"negative-button-props":{type:"info"},"show-icon":!1,"mask-closable":!1,"transform-origin":"center",onPositiveClick:d},{default:te(()=>[X(g,{class:"p-4",ref_key:"formRef",ref:n,model:i.value,rules:u,"label-placement":"left","label-width":"auto","show-require-mark":!1},{default:te(()=>[X(f,{path:"title",label:"标题"},{default:te(()=>[X(l,{value:i.value.title,"onUpdate:value":a[0]||(a[0]=h=>i.value.title=h),placeholder:"请输入标题","theme-overrides":re(Xe),clearable:""},null,8,["value","theme-overrides"])]),_:1}),X(f,{path:"url",label:"跳转链接"},{default:te(()=>[X(l,{value:i.value.url,"onUpdate:value":a[1]||(a[1]=h=>i.value.url=h),placeholder:"请输入跳转链接","theme-overrides":re(Xe),clearable:""},null,8,["value","theme-overrides"])]),_:1}),X(f,{path:"status",label:"状态"},{default:te(()=>[X(C,{value:i.value.status,"onUpdate:value":a[2]||(a[2]=h=>i.value.status=h),"checked-value":1,"unchecked-value":0,"theme-overrides":re(gt)},{checked:te(()=>[Ie("启用")]),unchecked:te(()=>[Ie("禁用")]),_:1},8,["value","theme-overrides"])]),_:1}),X(f,{path:"img",label:"上传图片"},{default:te(()=>[X(Pn,{onAfterUploadImage:c})]),_:1})]),_:1},8,["model"])]),_:1})}}}),In={class:"p-2 bg-gray-100 h-full flex flex-col box-border"},Bn={class:"bg-white p-2 mt-2 rounded flex flex-col flex-1"},zn={class:"flex justify-between items-center mb-2 px-4"},Dn=be("h3",{class:"text-xl"},"轮播图列表",-1),Un={class:"flex-1"},jn=V({__name:"CarouselsView",setup(e){const o=Me(),r=Or(),n=_(1),i=_(1),u=_(!1),d=_(!1),c=_([]),s=_([{title:"图片",key:"img_url",render(h){return t($t,{class:"p-2 w-32",src:h.img_url,showToolbarTooltip:!0})}},{title:"标题",key:"title"},{title:"跳转链接",key:"url",render(h){return t("a",{class:"text-blue-600 font-bold hover:underline",href:h.url,target:"_blank"},h.url)}},{title:"状态",key:"status",width:"8rem",render(h){return t(ot,{size:"medium",rubberBand:!1,checkedValue:1,uncheckedValue:0,value:h.status,themeOverrides:gt,onClick:()=>C(h.id)},{checked:()=>"启用",unchecked:()=>"禁用"})}},{title:"排序",key:"seq",sorter:(h,x)=>h.seq-x.seq,width:"6rem"},{title:"创建时间",key:"created_at"},{title:"操作",key:"option",render(h){return[t(ie,{class:"mr-2",size:"small",type:"info",dashed:!0,strong:!0},{default:()=>"编辑"}),t(ie,{size:"small",type:"error",dashed:!0,strong:!0,onClick:()=>g(h.id)},{default:()=>"删除"})]}}]);_e(()=>{a(n.value)});const a=async function(x){if(!u.value)try{u.value=!0;const R=await Ln(x);u.value=!1,(R==null?void 0:R.status)===200&&(c.value=R.data.data,n.value=R.data.meta.pagination.current_page,i.value=R.data.meta.pagination.total_pages)}catch{u.value=!1}},l=function(){d.value=!0},f=function(x){a(x)},C=async function(x){try{const R=await On(x);if((R==null?void 0:R.status)!==204)return;const L=c.value.find(S=>S.id===x);L!==void 0&&(L.status=L.status===0?1:0,o.success(`${L.status===1?"启用":"禁用"}成功`))}catch{}},g=function(x){r.warning({title:"警告",content:"你确定要删除吗？",positiveText:"确定",negativeText:"取消",maskClosable:!1,transformOrigin:"center",showIcon:!1,closeOnEsc:!1,negativeButtonProps:{type:"info"},positiveButtonProps:{type:"info"},onPositiveClick:()=>{k(x)}})},k=async function(x){try{const R=await _n(x);if((R==null?void 0:R.status)!==204)return;o.success("删除成功"),a(n.value)}catch{a(n.value)}};return(h,x)=>{const R=Wt,L=Vt;return Fe(),yr("main",In,[X(jt,{title:"轮播图管理"}),be("div",Bn,[be("header",zn,[Dn,X(re(ie),{type:"info","render-icon":re(At)(re(Ht)),onClick:l},{default:te(()=>[Ie("新建")]),_:1},8,["render-icon"])]),be("div",Un,[X(R,{class:"h-full",columns:s.value,data:c.value,loading:u.value,"theme-overrides":re(Rr),"flex-height":""},null,8,["columns","data","loading","theme-overrides"])]),X(L,{class:"mt-2 justify-center",page:n.value,"onUpdate:page":x[0]||(x[0]=S=>n.value=S),"page-count":i.value,"theme-overrides":re(kr)},null,8,["page","page-count","theme-overrides"])]),X($n,{show:d.value,"onUpdate:show":x[1]||(x[1]=S=>d.value=S),onReloadCarouselList:x[2]||(x[2]=S=>f(1))},null,8,["show"])])}}});export{jn as default};
