"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[115],{8115:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r=t(2791),o=t(9434),i="NOT_FOUND";var u=function(n,e){return n===e};function c(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?u:r,c=t.maxSize,a=void 0===c?1:c,s=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),f=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:i},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return i}return{get:r,put:function(e,o){r(e)===i&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,l);function d(){var e=f.get(arguments);if(e===i){if(e=n.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(n){return s(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return d.clearCache=function(){return f.clear()},d}function a(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function s(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,u=0,c={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(c=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=c,f=l.memoizeOptions,d=void 0===f?t:f,h=Array.isArray(d)?d:[d],m=a(r),p=n.apply(void 0,[function(){return u++,s.apply(null,arguments)}].concat(h)),g=n((function(){for(var n=[],e=m.length,t=0;t<e;t++)n.push(m[t].apply(null,arguments));return i=p.apply(null,n)}));return Object.assign(g,{resultFunc:s,memoizedResultFunc:p,dependencies:m,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),g};return o}var l,f,d,h,m,p,g,b,v,x,y=s(c),w=function(n){return n.contacts.items},j=function(n){return n.contacts.isLoading},k=function(n){return n.contacts.error},Z=function(n){return n.filter.filter},A=y([w,Z],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),z=t(3634),C=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},P=t(5218),_=t(168),S=t(6444),F=S.ZP.form(l||(l=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  label {\n    margin-top: ",";\n    color: ",";\n  }\n\n  input {\n    margin-top: ",";\n\n    display: inline-block;\n    width: 250px;\n    height: ",";\n    padding: ",";\n    line-height: ",";\n\n    color: #efefef;\n    background-color: #202223;\n\n    border: "," ",";\n    border-radius: ",";\n\n    transition: border linear 0.2s, box-shadow linear 0.2s;\n  }\n\n  input:focus {\n    border: "," ",";\n    outline: none;\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.label}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(4.5)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.lineHeights.body}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.borderAccent}),(function(n){return n.theme.shadows.input})),E=S.ZP.button(f||(f=(0,_.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  gap: ",";\n\n  margin-right: auto;\n  margin-top: ",";\n\n  font-size: ",";\n  text-align: center;\n  min-width: 90px;\n\n  padding-left: ",";\n  padding-right: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n\n  border: ",";\n  border-radius: ",";\n  background-color: ",";\n\n  transition: background-color ",";\n\n  box-shadow: ",", ",";\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.fontSizes.sm}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.transitions.normal}),(function(n){return n.theme.shadows.normal}),(function(n){return n.theme.shadows.button}),(function(n){return n.theme.colors.backgroundLight})),L=t(184),q=function(){var n=(0,o.I0)(),e=(0,o.v9)(w),t=C(4),r=C(4);return(0,L.jsxs)(F,{onSubmit:function(t){t.preventDefault();var r=t.target,o=r.elements.name.value,i=r.elements.number.value,u=e.map((function(n){return n.name.toLowerCase()})).includes(o.toLowerCase()),c="".concat(o," is already in contacts");u?P.Am.error(c):n((0,z.uK)({name:o,number:i})),r.reset()},children:[(0,L.jsx)("label",{htmlFor:t,children:"Name"}),(0,L.jsx)("input",{type:"text",name:"name",id:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,L.jsx)("label",{htmlFor:r,children:"Number"}),(0,L.jsx)("input",{type:"tel",name:"number",id:r,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,L.jsx)(E,{type:"submit",children:"Add contact"})]})},O=t(4808),R=S.ZP.div(d||(d=(0,_.Z)(["\n  margin-top: ",";\n\n  label {\n    color: ",";\n  }\n\n  input {\n    margin-top: ",";\n    display: inline-block;\n    width: 250px;\n    height: ",";\n    padding: ",";\n    line-height: ",";\n\n    color: #efefef;\n    background-color: #202223;\n\n    border: "," ",";\n    border-radius: ",";\n\n    transition: border linear 0.2s, box-shadow linear 0.2s;\n  }\n\n  input:focus {\n    border: "," ",";\n    outline: none;\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.label}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(4.5)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.lineHeights.body}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.borderAccent}),(function(n){return n.theme.shadows.input})),I=function(){var n=(0,o.I0)(),e=(0,o.v9)(Z);return(0,L.jsx)(R,{children:(0,L.jsxs)("label",{children:["Find contacts by name",(0,L.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){n((0,O.f)(e.target.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"})]})})},N=S.ZP.ul(h||(h=(0,_.Z)(["\n  margin-top: ",";\n"])),(function(n){return n.theme.spacing(4)})),D=S.ZP.li(m||(m=(0,_.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding-top: ",";\n  padding-bottom: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(2)})),K=function(){var n=(0,o.v9)(A);return(0,L.jsx)(N,{children:n.map((function(n){return(0,L.jsx)(D,{children:(0,L.jsx)(H,{contact:n})},n.id)}))})},U=S.ZP.button(p||(p=(0,_.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  gap: ",";\n\n  font-size: ",";\n  min-width: 60px;\n  text-align: center;\n\n  padding-left: ",";\n  padding-right: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n\n  border: ",";\n  border-radius: ",";\n  background-color: ",";\n\n  transition: background-color ",";\n\n  box-shadow: ",", ",";\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.transitions.normal}),(function(n){return n.theme.shadows.normal}),(function(n){return n.theme.shadows.button}),(function(n){return n.theme.colors.backgroundLight})),H=function(n){var e=n.contact,t=e.id,r=e.name,i=e.number,u=(0,o.I0)();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)("p",{children:[r,": ",i]}),(0,L.jsx)(U,{type:"button",onClick:function(){return u((0,z.GK)(t))},children:"Delete"})]})},$=S.ZP.div(g||(g=(0,_.Z)(["\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  font-size: ",";\n  color: ",";\n  background-color: ",";\n"])),(function(n){return n.theme.fontSizes.sm}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.white})),B=S.ZP.div(b||(b=(0,_.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-height: 80vh;\n  overflow: auto;\n\n  width: 410px;\n  padding: ",";\n\n  background-color: ",";\n  box-shadow: ",";\n  border-radius: ",";\n\n  h1,\n  h2 {\n    color: ",";\n  }\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.shadows.normal}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.colors.header})),G=S.ZP.div(v||(v=(0,_.Z)(["\n  margin-top: ",";\n"])),(function(n){return n.theme.spacing(8)})),J=S.ZP.p(x||(x=(0,_.Z)(["\n  margin-top: ",";\n"])),(function(n){return n.theme.spacing(4)})),M=function(){var n=(0,o.I0)(),e=(0,o.v9)(w),t=(0,o.v9)(j),i=(0,o.v9)(k);return(0,r.useEffect)((function(){n((0,z.K2)())}),[n]),(0,L.jsx)($,{children:(0,L.jsxs)(B,{children:[(0,L.jsx)("h1",{children:"Phonebook"}),(0,L.jsx)(q,{}),(0,L.jsxs)(G,{children:[(0,L.jsx)("h2",{children:"Contacts"}),(0,L.jsx)(I,{}),t&&(0,L.jsx)("p",{children:"Request in progress..."}),e.length>0&&(0,L.jsx)(K,{}),0===e.length&&!i&&!t&&(0,L.jsx)(J,{children:"You don't have contacts yet."}),i&&(0,L.jsx)(J,{children:"Oops, something went wrong. Reload the page"})]})]})})}}}]);
//# sourceMappingURL=115.65226113.chunk.js.map