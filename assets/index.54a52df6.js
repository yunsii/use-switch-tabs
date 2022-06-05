import{S as re,U as oe,V as se,X as G,Z as le,ac as ce,W as U,Y as ie,b as z,c as L,o as ue,_ as $,a as A,l as de}from"./index.f5d833f0.js";import{C as pe}from"./index.6cf2841e.js";import{B as Q}from"./button.bdc34fe0.js";import{F as fe}from"./index.301505ff.js";import{_ as W,J as ve}from"./isEqual.1730bb27.js";import{c as T,R as y,r as o,u as he,h as xe}from"./index.9e13e0a2.js";import"./CheckCircleFilled.0459c003.js";var X=function(a){re(c,a);var r=oe(c);function c(e){var t;se(this,c),t=r.call(this,e),t.handleChange=function(l){var f=t.props,b=f.disabled,u=f.onChange;b||("checked"in t.props||t.setState({checked:l.target.checked}),u&&u({target:G(G({},t.props),{},{checked:l.target.checked}),stopPropagation:function(){l.stopPropagation()},preventDefault:function(){l.preventDefault()},nativeEvent:l.nativeEvent}))},t.saveInput=function(l){t.input=l};var n="checked"in e?e.checked:e.defaultChecked;return t.state={checked:n},t}return le(c,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var t,n=this.props,l=n.prefixCls,f=n.className,b=n.style,u=n.name,v=n.id,d=n.type,g=n.disabled,O=n.readOnly,i=n.tabIndex,P=n.onClick,E=n.onFocus,C=n.onBlur,s=n.onKeyDown,w=n.onKeyPress,h=n.onKeyUp,x=n.autoFocus,S=n.value,_=n.required,I=ce(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),j=Object.keys(I).reduce(function(K,k){return(k.substr(0,5)==="aria-"||k.substr(0,5)==="data-"||k==="role")&&(K[k]=I[k]),K},{}),F=this.state.checked,R=T(l,f,(t={},U(t,"".concat(l,"-checked"),F),U(t,"".concat(l,"-disabled"),g),t));return y.createElement("span",{className:R,style:b},y.createElement("input",ie({name:u,id:v,type:d,required:_,readOnly:O,disabled:g,tabIndex:i,className:"".concat(l,"-input"),checked:!!F,onClick:P,onFocus:E,onBlur:C,onKeyUp:h,onKeyDown:s,onKeyPress:w,onChange:this.handleChange,autoFocus:x,ref:this.saveInput,value:S},j)),y.createElement("span",{className:"".concat(l,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(t,n){return"checked"in t?G(G({},n),{},{checked:t.checked}):null}}]),c}(o.exports.Component);X.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var me=globalThis&&globalThis.__rest||function(a,r){var c={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&r.indexOf(e)<0&&(c[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(a);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(a,e[t])&&(c[e[t]]=a[e[t]]);return c},H=o.exports.createContext(null),ye=function(r,c){var e=r.defaultValue,t=r.children,n=r.options,l=n===void 0?[]:n,f=r.prefixCls,b=r.className,u=r.style,v=r.onChange,d=me(r,["defaultValue","children","options","prefixCls","className","style","onChange"]),g=o.exports.useContext(z),O=g.getPrefixCls,i=g.direction,P=o.exports.useState(d.value||e||[]),E=L(P,2),C=E[0],s=E[1],w=o.exports.useState([]),h=L(w,2),x=h[0],S=h[1];o.exports.useEffect(function(){"value"in d&&s(d.value||[])},[d.value]);var _=function(){return l.map(function(m){return typeof m=="string"?{label:m,value:m}:m})},I=function(m){S(function(N){return N.filter(function(V){return V!==m})})},j=function(m){S(function(N){return[].concat(W(N),[m])})},F=function(m){var N=C.indexOf(m.value),V=W(C);N===-1?V.push(m.value):V.splice(N,1),"value"in d||s(V);var M=_();v==null||v(V.filter(function(B){return x.indexOf(B)!==-1}).sort(function(B,te){var ne=M.findIndex(function(D){return D.value===B}),ae=M.findIndex(function(D){return D.value===te});return ne-ae}))},R=O("checkbox",f),K="".concat(R,"-group"),k=ue(d,["value","disabled"]);l&&l.length>0&&(t=_().map(function(p){return o.exports.createElement(Y,{prefixCls:R,key:p.value.toString(),disabled:"disabled"in p?p.disabled:d.disabled,value:p.value,checked:C.indexOf(p.value)!==-1,onChange:p.onChange,className:"".concat(K,"-item"),style:p.style},p.label)}));var Z={toggleOption:F,value:C,disabled:d.disabled,name:d.name,registerValue:j,cancelValue:I},ee=T(K,$({},"".concat(K,"-rtl"),i==="rtl"),b);return o.exports.createElement("div",A({className:ee,style:u},k,{ref:c}),o.exports.createElement(H.Provider,{value:Z},t))},be=o.exports.forwardRef(ye),ge=o.exports.memo(be),Ce=globalThis&&globalThis.__rest||function(a,r){var c={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&r.indexOf(e)<0&&(c[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(a);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(a,e[t])&&(c[e[t]]=a[e[t]]);return c},ke=function(r,c){var e,t=r.prefixCls,n=r.className,l=r.children,f=r.indeterminate,b=f===void 0?!1:f,u=r.style,v=r.onMouseEnter,d=r.onMouseLeave,g=r.skipGroup,O=g===void 0?!1:g,i=Ce(r,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),P=o.exports.useContext(z),E=P.getPrefixCls,C=P.direction,s=o.exports.useContext(H),w=o.exports.useRef(i.value);o.exports.useEffect(function(){s==null||s.registerValue(i.value),de("checked"in i||!!s||!("value"in i),"Checkbox","`value` is not a valid prop, do you mean `checked`?")},[]),o.exports.useEffect(function(){if(!O)return i.value!==w.current&&(s==null||s.cancelValue(w.current),s==null||s.registerValue(i.value)),function(){return s==null?void 0:s.cancelValue(i.value)}},[i.value]);var h=E("checkbox",t),x=A({},i);s&&!O&&(x.onChange=function(){i.onChange&&i.onChange.apply(i,arguments),s.toggleOption&&s.toggleOption({label:l,value:i.value})},x.name=s.name,x.checked=s.value.indexOf(i.value)!==-1,x.disabled=i.disabled||s.disabled);var S=T((e={},$(e,"".concat(h,"-wrapper"),!0),$(e,"".concat(h,"-rtl"),C==="rtl"),$(e,"".concat(h,"-wrapper-checked"),x.checked),$(e,"".concat(h,"-wrapper-disabled"),x.disabled),e),n),_=T($({},"".concat(h,"-indeterminate"),b));return o.exports.createElement("label",{className:S,style:u,onMouseEnter:v,onMouseLeave:d},o.exports.createElement(X,A({},x,{prefixCls:h,className:_,ref:c})),l!==void 0&&o.exports.createElement("span",null,l))},J=o.exports.forwardRef(ke);J.displayName="Checkbox";var Y=J,q=Y;q.Group=ge;q.__ANT_CHECKBOX=!0;var Oe=q;function Ve(){const[a,r]=o.exports.useState(),[c,e]=o.exports.useState([]),t=he(),n=o.exports.useRef(window.tabsAction.getTabKey(t)),[l,f]=o.exports.useState(n.current===window.tabsAction.getTabKey());o.exports.useEffect(()=>{const u=window.tabsAction.listenActiveChange(v=>{f(n.current===v)});return()=>u()},[]);const b=()=>{xe.push({pathname:"/result",state:c.includes("withState")?{state:"yes",text:a}:null,query:c.includes("withQuery")?{query:"yes",text:a||null}:{text:a||null}})};return y.createElement(pe,{title:`Query [${l?"active":"inactive"}]`},y.createElement(fe.Item,{labelCol:{xs:24},labelAlign:"left",label:"text",extra:y.createElement(y.Fragment,null,y.createElement(Oe.Group,{style:{marginTop:12},value:c,options:[{label:'with state (`{ state: "yes"}`)',value:"withState"},{label:'with query (`{ query: "yes"}`)',value:"withQuery"}],onChange:u=>{e(u)}}),y.createElement(Q,{onClick:()=>{r("nice")}},"setText: nice"))},y.createElement(ve,{value:a,onChange:u=>r(u.target.value),onPressEnter:()=>{b()}})),y.createElement(Q,{type:"primary",onClick:()=>b()},"\u67E5\u8BE2"))}export{Ve as default};