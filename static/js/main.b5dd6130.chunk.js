(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{127:function(e,t,n){},128:function(e,t,n){},131:function(e,t){},134:function(e,t){},265:function(e,t,n){"use strict";n.r(t);n(127),n(128);var r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(129);var a=n(11),s=n(1),i=n.n(s),o=n(12),u=n(48),l=n(41),d=n(7),p=Object(d.a)({});function b(e){var t=Object(d.c)(p);Object(s.useEffect)((function(){void 0===t[e].get()&&l.getItem(e).then((function(n){t.merge(Object(u.a)({},e,n))}))}),[e,t]);var n=t[e].get();return void 0===n&&(n="NOT_READY"),[n,function(n){t.merge(Object(u.a)({},e,n)),l.setItem(e,n)}]}var j=n(19);var f,m=n(9),h=n(120),O=n(2),g=n.n(O),x=n(4),v=n(38),y=n(39),w=n(42),k=function(){function e(t,n){Object(v.a)(this,e),this.secret=t,this.storage=n}return Object(y.a)(e,[{key:"encrypt",value:function(e,t){if("object"===typeof t)t=JSON.stringify(t);else if("number"===typeof t)t=t.toString();else if("string"!==typeof t)throw new Error("invalid type");var n=w.AES.encrypt(t,this.secret);return this.storage.setItem(e,n.toString())}},{key:"decrypt",value:function(){var e=Object(x.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.storage.getItem(t);case 2:if(n=e.sent,r=null,n){r=w.AES.decrypt(n,this.secret).toString(w.enc.Utf8);try{r=JSON.parse(r)}catch(c){}}return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"remove",value:function(e){return this.storage.removeItem(e)}}]),e}(),N=Object(d.a)({privateKey:null,publicKey:null});function E(){var e=Object(d.c)(N);return{privateKey:e.privateKey.get(),publicKey:e.publicKey.get(),setKeyPair:function(e){var t=e.publicKey,n=e.privateKey;N.merge({privateKey:n,publicKey:t})}}}function C(e){return f?f.decrypt(e):null}function I(e,t){if(!f)throw new Error("Pin not set");return f.encrypt(e,t)}function P(e){f=new k(e,l)}function S(){f=null,N.merge({privateKey:null,publicKey:null})}window.localforage=l;var K=n.p+"static/media/enigma-logo.d8f45653.jpg",D=n(0);function M(e){var t=e.children;return Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{className:"flex justify-center",children:Object(D.jsx)("img",{src:K,alt:"enigma"})}),Object(D.jsx)("div",{className:"py-2",children:t}),Object(D.jsx)("div",{className:"flex",children:Object(D.jsxs)("div",{className:"w-full md:w-1/2",children:[Object(D.jsx)("div",{className:"font-bold text-3xl",children:"Engima R3loaded"}),Object(D.jsx)("div",{children:"DIY Encrypt and decrypt messages and files"}),Object(D.jsx)("div",{children:'Don\'t trust "words" such as privacy, encryption, safety etc, coming from platforms which monetize your data. Only Mathematics and control can be trusted'}),Object(D.jsx)("div",{children:"Open source"}),Object(D.jsx)("div",{children:"No server or internet needed, 100% offline support"}),Object(D.jsxs)("div",{children:["Works with any service such as: ",Object(D.jsx)("b",{children:"Messenger, Signal, Slack, Whatsapp, Twitter, Instagram DM, SMS etc"})]})]})})]})}var T=n(125);function V(e){var t=e.isOpened,n=e.close,r=e.children;Object(s.useEffect)((function(){return t?document.body.classList.add("overflow-y-hidden"):document.body.classList.remove("overflow-y-hidden")}),[t]);var c=Object(s.useRef)(null);return Object(T.a)(c,n),t?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("div",{className:"absolute inset-0 bg-gray-500 opacity-70"}),Object(D.jsx)("div",{className:"absolute inset-0 items-center py-20 overflow-y-auto",children:Object(D.jsx)("div",{className:"mb-20 bg-white w-1/3 p-4 rounded shadow mx-auto",ref:c,children:r})})]}):null}function A(){var e=b("pk-initialized"),t=Object(a.a)(e,2),n=(t[0],t[1]),r=Object(d.c)({confirmMatch:!0,confirmPinValue:"",emailValue:"",nameValue:"",passwordStrength:"Too weak",pinValue:"",setupPinModal:!1});var c=Object(m.isEmpty)(r.pinValue.get())||"Too weak"===r.passwordStrength.get()||Object(m.isEmpty)(r.confirmPinValue.get())||!r.confirmMatch.get();return Object(D.jsxs)("div",{children:[Object(D.jsx)(M,{children:Object(D.jsx)("div",{className:"flex justify-center",children:Object(D.jsx)("button",{onClick:function(e){e.preventDefault(),r.merge({setupPinModal:!0})},className:"bg-black text-white text-4xl rounded p-2",children:"Get started"})})}),Object(D.jsx)(V,{isOpened:r.setupPinModal.get(),close:function(e){e.preventDefault(),r.merge({setupPinModal:!1})},children:Object(D.jsx)("form",{className:"pure-form pure-form-aligned",onSubmit:function(e){e.preventDefault();var t=j.box.keyPair();P(r.pinValue.get()),I("key-pair",{publicKey:Array.from(t.publicKey),secretKey:Array.from(t.secretKey)}),I("name",r.nameValue.get()),I("email",r.emailValue.get().toLowerCase().replace(/\s/g,"")),n(!0)},children:Object(D.jsxs)("fieldset",{children:[Object(D.jsx)("legend",{children:"PIN setup"}),Object(D.jsxs)("div",{className:"pure-control-group",children:[Object(D.jsx)("input",{name:"name",value:r.nameValue.get(),onChange:function(e){r.merge({nameValue:e.target.value})},placeholder:"Enter your name",className:"w-full"}),Object(D.jsx)("span",{className:"pure-form-message",children:"Optional"})]}),Object(D.jsxs)("div",{className:"pure-control-group",children:[Object(D.jsx)("input",{type:"email",name:"email",value:r.emailValue.get(),onChange:function(e){r.merge({emailValue:e.target.value})},placeholder:"Your email to have a avatar from gravatar.com",className:"w-full"}),Object(D.jsx)("span",{className:"pure-form-message",children:"Optional"})]}),Object(D.jsxs)("div",{className:"pure-control-group",children:[Object(D.jsx)("input",{name:"pin",value:r.pinValue.get(),onChange:function(e){var t=e.target.value,n=Object(h.passwordStrength)(t).value;r.merge({passwordStrength:n,pinValue:e.target.value})},placeholder:"Enter new PIN",className:"w-full",required:!0}),r.pinValue.get().length>0&&Object(D.jsx)("span",{className:"pure-form-message",children:r.passwordStrength.get()}),Object(D.jsxs)("span",{className:"pure-form-message",children:["You can't recover or change the PIN later. ",Object(D.jsx)("span",{className:"underline",children:"Make sure you remember it and keep it secret"})]})]}),Object(D.jsxs)("div",{className:"pure-control-group",children:[Object(D.jsx)("input",{name:"pinConfirm",value:r.confirmPinValue.get(),onChange:function(e){var t=e.target.value;r.merge((function(e){return{confirmMatch:t===e.pinValue,confirmPinValue:t}}))},placeholder:"Confirm your PIN",className:"w-full",required:!0}),!r.confirmMatch.get()&&Object(D.jsx)("span",{className:"pure-form-message text-red-500",children:"Pins don't match"})]}),Object(D.jsx)("button",{type:"submit",className:"pure-button pure-button-primary w-full",disabled:c,children:"Submit"})]})})})]})}function F(e){var t=e.children,n=Object(o.g)(),r=Object(o.f)(),c=b("pk-initialized"),i=Object(a.a)(c,1)[0],u=null!==i,l="NOT_READY"===i;return Object(s.useEffect)((function(){l||u||"/"===n.pathname||r.push("/")}),[n,r,l,u]),l?null:u?t:Object(D.jsx)(A,{})}var R=n(40),B=n(74),U=n(126),L=n(268);var W=n(14);function z(){var e=Object(o.f)();return Object(D.jsxs)("div",{className:"my-2",children:[Object(D.jsx)("div",{className:"flex justify-center",children:Object(D.jsx)("img",{src:K,alt:"enigma"})}),Object(D.jsxs)("div",{className:"flex flex-wrap justify-center pt-2",children:[Object(D.jsx)(H,{text:"Home",to:"/"}),Object(D.jsx)(H,{text:"Contacts",to:"/contacts"}),Object(D.jsx)("div",{className:"pl-3",children:Object(D.jsx)("button",{className:"mx-1 text-center bg-black p-2 rounded text-white",onClick:function(t){t.preventDefault(),e.push("/unlock"),setTimeout(S,50)},children:"Lock"})})]})]})}function H(e){var t=e.text,n=e.to;return Object(D.jsx)(W.b,{to:n,children:Object(D.jsx)("button",{className:"mx-1 text-center bg-black p-2 rounded text-white",children:t})})}function J(e){var t=e.children,n=function(){var e=Object(o.f)(),t=Object(o.g)(),n=E().publicKey,r=Object(s.useState)(!1),c=Object(a.a)(r,2),i=c[0],u=c[1],l=Object(L.a)(12e4);return Object(s.useEffect)((function(){if(!n)return e.push("/unlock?redirectTo=".concat(t.pathname));u(!0)}),[n,u,e,t]),Object(s.useEffect)((function(){n&&l&&(e.push("/unlock?redirectTo=".concat(t.pathname)),setTimeout(S,50))}),[l,n,e,t.pathname]),i}();return Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{children:Object(D.jsx)(z,{})}),n&&Object(D.jsx)("div",{children:t})]})}function Y(e){var t=e.children,n=Object(U.a)(e,["children"]);return Object(D.jsx)(o.a,Object(B.a)(Object(B.a)({},n),{},{children:Object(D.jsx)(F,{children:Object(D.jsx)(J,{children:t})})}))}function q(e){var t=e.children;return Object(D.jsx)("div",{className:"p-4",children:t})}var $=n(23),_=document.title;function G(e){return e?"".concat(e," ").concat(_):_}function Q(e){var t=e.children;return Object(D.jsxs)($.b,{children:[Object(D.jsx)($.a,{children:Object(D.jsx)("title",{children:_})}),t]})}function X(e){var t=document.createElement("input");t.setAttribute("value",e),document.body.appendChild(t),t.select();var n=document.execCommand("copy");return document.body.removeChild(t),n}function Z(e){R.b.success(e)}function ee(e){for(var t,n,r,c="",a=e.length,s=0;s<a;s++)t||(n=1,r=10,t=Math.floor(Math.random()*(r-n+1))+n),c+=e[s],(t-=1)||(c+=" ");return c}var te=n(267),ne=function(){function e(t){var n=t.id,r=t.messageRaw,c=t.encryptedMessage,a=t.contact,s=t.createdAt,i=t.mine;Object(v.a)(this,e),this.id=n,this.messageRaw=r,this.encryptedMessage=c,this.contact=a,this.createdAt=s,this.mine=i}return Object(y.a)(e,[{key:"copyToClipBoard",value:function(){X(ee(this.encryptedMessage)),Z("Encrypted message copied to clipboard")}},{key:"save",value:function(){var e=Object(x.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.contact.messages.merge([this]),t="private-messages-".concat(this.contact.id.get()),e.next=4,C(t);case 4:n=e.sent,Object(m.isEmpty)(n)&&(n=[]),n.push(this.serialize()),I(t,n);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"serialize",value:function(){return{createdAt:this.createdAt,encryptedMessage:this.encryptedMessage,id:this.id,messageRaw:this.messageRaw,mine:this.mine}}},{key:"destroy",value:function(){var e=Object(x.a)(g.a.mark((function e(){var t,n,r,c=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.contact.messages.findIndex((function(e){return e.id.get()===c.id})),this.contact.messages[t].set(d.b),n="private-messages-".concat(this.contact.id.get()),e.next=5,C(n);case 5:r=(r=e.sent).filter((function(e){return e.id!==c.id})),I(n,r);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}();function re(e,t,n){return ce.apply(this,arguments)}function ce(){return(ce=Object(x.a)(g.a.mark((function e(t,n,r){var c,a,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=(new Date).toISOString(),a=Object(te.a)(),!0,s=new ne({contact:r,createdAt:c,encryptedMessage:n,id:a,messageRaw:t,mine:true}),e.next=6,s.save();case 6:return e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(e,t,n){return se.apply(this,arguments)}function se(){return(se=Object(x.a)(g.a.mark((function e(t,n,r){var c,a,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=(new Date).toISOString(),a=Object(te.a)(),!1,s=new ne({contact:r,createdAt:c,encryptedMessage:n,id:a,messageRaw:t,mine:false}),e.next=6,s.save();case 6:return e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(x.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="private-messages-".concat(t.id),e.next=3,C(n);case 3:if(r=e.sent,!Object(m.isEmpty)(r)){e.next=6;break}return e.abrupt("return",[]);case 6:return e.abrupt("return",r.map((function(e){var n=new ne(e);return n.contact=t,n})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ue,le=function(){function e(t){var n=t.id,r=t.name,c=t.emailHash,a=t.publicKey;Object(v.a)(this,e),this.id=n,this.name=r,this.emailHash=c,this.publicKey=a,this.messages=[]}return Object(y.a)(e,[{key:"save",value:function(){return e=this,void C("contacts").then((function(t){Object(m.isEmpty)(t)&&(t=[]);var n=t.find((function(t){return t.publicKey===e.publicKey}));n?(Object.assign(n,e.serializeWithoutId()),de.contacts.find((function(t){return t.publicKey.get()===e.publicKey})).merge(e.serializeWithoutId())):(de.contacts.merge([e]),t.push(e.serialize())),I("contacts",t)}));var e}},{key:"destroy",value:function(){return function(e){return pe.apply(this,arguments)}(this)}},{key:"serialize",value:function(){return{emailHash:this.emailHash,id:this.id,name:this.name,publicKey:this.publicKey}}},{key:"serializeWithoutId",value:function(){var e=this.serialize();return delete e.id,e}},{key:"loadPrivateMessages",value:function(){var e=Object(x.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.messages,e.next=3,ie(this);case 3:e.t1=e.sent,e.t0.set.call(e.t0,e.t1);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),de=Object(d.a)({contacts:[]});function pe(){return(pe=Object(x.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("contacts");case 2:if(n=e.sent,!Object(m.isEmpty)(n)){e.next=5;break}return e.abrupt("return");case 5:return n=n.filter((function(e){return e.publicKey!==t.publicKey})),void 0!==(r=de.contacts.findIndex((function(e){return e.publicKey.get()===t.publicKey})))&&de.contacts[r].set(d.b),e.next=10,I("contacts",n);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(){return je.apply(this,arguments)}function je(){return(je=Object(x.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ue){e.next=2;break}return e.abrupt("return",de);case 2:return ue=!0,e.next=5,C("contacts");case 5:if(t=e.sent,!Object(m.isEmpty)(t)){e.next=8;break}return e.abrupt("return",de);case 8:return t=t.map((function(e){return new le(e)})),de.merge({contacts:t}),e.abrupt("return",de);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(){return(fe=Object(x.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be();case 2:if(n=e.sent,(r=n.contacts.find((function(e){return e.id.get()===t}))).get()){e.next=6;break}return e.abrupt("return",{});case 6:return e.abrupt("return",new le(JSON.parse(JSON.stringify(r.get()))));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(e){var t=e.contact,n=e.height,r=e.width,c="http://www.gravatar.com/avatar/".concat(t.emailHash.get());return Object(D.jsx)("img",{src:c,className:"rounded-full ".concat(n," ").concat(r)})}var he,Oe=n(27),ge=n(18);function xe(e){if(!Object(m.isEmpty)(e))return Object(ge.encodeBase64)(e).replace(/=/g,"")}function ve(){return ye.apply(this,arguments)}function ye(){return(ye=Object(x.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(m.isEmpty)(he)){e.next=2;break}return e.abrupt("return",he);case 2:return e.next=4,C("key-pair");case 4:if(t=e.sent,!Object(m.isEmpty)(t)){e.next=7;break}return e.abrupt("return");case 7:return e.abrupt("return",he=Uint8Array.from(t.secretKey));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function we(e,t){return ke.apply(this,arguments)}function ke(){return(ke=Object(x.a)(g.a.mark((function e(t,n){var r,c,a,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(ge.decodeBase64)(t),c=Object(ge.decodeUTF8)(n),a=Object(j.randomBytes)(j.box.nonceLength),e.t0=j.box,e.t1=c,e.t2=a,e.t3=r,e.next=9,ve();case 9:return e.t4=e.sent,s=(0,e.t0)(e.t1,e.t2,e.t3,e.t4),e.abrupt("return",xe(s)+Ne(a));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ne(e){return Object(m.sample)(["?","!",".",","])+xe(e)}function Ee(e){var t=e.contact,n=Object(s.useRef)(),r=Object(d.c)({modalIsOpened:!1});Object(s.useEffect)((function(){r.modalIsOpened.get()&&n.current.focus()}),[r.modalIsOpened.get()]);var c=Object(s.useState)((function(){return Oe.EditorState.createEmpty()})),i=Object(a.a)(c,2),o=i[0],u=i[1];function l(){return(l=Object(x.a)(g.a.mark((function e(n){var c,a,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=(c=Object(Oe.convertToRaw)(o.getCurrentContent())).blocks.map((function(e){return e.text.trim()?e.text:"\n"})).join("\n"),e.next=5,we(t.publicKey.get(),c);case 5:return a=e.sent,e.next=8,re(c,a,t);case 8:s=e.sent,r.merge({modalIsOpened:!1}),u(Oe.EditorState.createEmpty()),s.copyToClipBoard();case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("button",{type:"submit",className:"pure-button pure-button-primary bg-black w-full",onClick:function(e){e.preventDefault(),r.merge({modalIsOpened:!0})},children:"Encrypt message"}),Object(D.jsx)(V,{isOpened:r.modalIsOpened.get(),close:function(){r.merge({modalIsOpened:!1})},children:Object(D.jsxs)("form",{onSubmit:function(e){return l.apply(this,arguments)},children:[Object(D.jsx)("div",{className:"border-gray-300 border border-solid p-2",children:Object(D.jsx)(Oe.Editor,{editorState:o,onChange:u,placeholder:"Type your message",ref:n})}),Object(D.jsx)("div",{className:"flex justify-end my-2",children:Object(D.jsx)("button",{type:"submit",className:"pure-button pure-button-primary bg-black w-1/3",disabled:!o.getCurrentContent().hasText(),children:"Encrypt message"})})]})})]})}function Ce(e){return e.length%4!==0&&(e+="===".slice(0,4-e.length%4)),Object(ge.decodeBase64)(e)}function Ie(e,t){return Pe.apply(this,arguments)}function Pe(){return(Pe=Object(x.a)(g.a.mark((function e(t,n){var r,c,s,i,o,u,l,d;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.split(/\?|!|\.|,/),c=Object(a.a)(r,2),s=c[0],i=c[1],!Object(m.isEmpty)(s)&&!Object(m.isEmpty)(i)){e.next=3;break}throw new Error("Invalid encrypted message");case 3:return o=Object(ge.decodeBase64)(t),u=Ce(i),l=Ce(s),e.t0=j.box,e.t1=l,e.t2=u,e.t3=o,e.next=12,ve();case 12:return e.t4=e.sent,d=e.t0.open.call(e.t0,e.t1,e.t2,e.t3,e.t4),e.abrupt("return",Object(ge.encodeUTF8)(d));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Se(e){R.b.error(e)}function Ke(e){var t=e.contact,n=Object(s.useRef)(),r=Object(d.c)({modalIsOpened:!1});Object(s.useEffect)((function(){r.modalIsOpened.get()&&n.current.focus()}),[r.modalIsOpened.get()]);var c=Object(s.useState)((function(){return Oe.EditorState.createEmpty()})),i=Object(a.a)(c,2),o=i[0],u=i[1];function l(){return(l=Object(x.a)(g.a.mark((function e(n){var c,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=(c=Object(Oe.convertToRaw)(o.getCurrentContent())).blocks.map((function(e){return e.text.trim()?e.text:"\n"})).join("").replace(/\s/g,""),e.prev=3,e.next=6,Ie(t.publicKey.get(),c);case 6:a=e.sent,e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(3),e.abrupt("return",Se("Invalid encrypted message"));case 12:return e.next=14,ae(a,c,t);case 14:r.merge({modalIsOpened:!1}),u(Oe.EditorState.createEmpty()),Z("Message decrypted!");case 17:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("button",{type:"submit",className:"pure-button pure-button-primary bg-black w-full",onClick:function(e){e.preventDefault(),r.merge({modalIsOpened:!0})},children:"Decrypt message"}),Object(D.jsx)(V,{isOpened:r.modalIsOpened.get(),close:function(){r.merge({modalIsOpened:!1})},children:Object(D.jsxs)("form",{onSubmit:function(e){return l.apply(this,arguments)},children:[Object(D.jsx)("div",{className:"border-gray-300 border border-solid p-2",children:Object(D.jsx)(Oe.Editor,{editorState:o,onChange:u,placeholder:"Paste the encrypted message",ref:n})}),Object(D.jsx)("div",{className:"flex justify-end my-2",children:Object(D.jsx)("button",{type:"submit",className:"pure-button pure-button-primary bg-black w-1/3",disabled:!o.getCurrentContent().hasText(),children:"Decrypt message"})})]})})]})}function De(e,t){return Me.apply(this,arguments)}function Me(){return(Me=Object(x.a)(g.a.mark((function e(t,n){var r,c,s,i,o,u,l,d;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.name.match(/-(.*)\.txt$/),!Object(m.isEmpty)(r)){e.next=3;break}throw new Error("Invalid encrypted file");case 3:return c=Object(a.a)(r,2),s=c[0],i=c[1],o=Ce(n.name.replace(s,"")),u=Object(ge.decodeBase64)(t),e.t0=j.box,e.t1=Uint8Array,e.next=10,n.arrayBuffer();case 10:return e.t2=e.sent,e.t3=new e.t1(e.t2),e.t4=o,e.t5=u,e.next=16,ve();case 16:return e.t6=e.sent,l=e.t0.open.call(e.t0,e.t3,e.t4,e.t5,e.t6),d=new Blob([l],{type:"application/octet-stream"}),e.abrupt("return",{decryptedFile:d,fileName:"".concat(Object(te.a)(),".").concat(i)});case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Te(e,t){var n=window.URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,r.classList.add("hidden"),document.body.appendChild(r),r.click(),r.remove(),setTimeout((function(){window.URL.revokeObjectURL(e)}),1e3)}function Ve(e){var t=e.contact,n=Object(s.useRef)(),r=Object(d.c)({fileProcessing:!1,modalIsOpened:!1});function c(){return(c=Object(x.a)(g.a.mark((function e(n){var c,a,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r.merge({fileProcessing:!0}),e.prev=2,e.next=5,De(t.publicKey.get(),n.target.files[0]);case 5:c=e.sent,a=c.decryptedFile,s=c.fileName,Te(a,s),e.next=16;break;case 11:return e.prev=11,e.t0=e.catch(2),n.target.value="",r.merge({fileProcessing:!1}),e.abrupt("return",Se("Unable to decrypt file"));case 16:n.target.value="",r.merge({fileProcessing:!1,modalIsOpened:!1}),Z("File ready");case 19:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("button",{type:"submit",className:"pure-button pure-button-primary bg-black w-full",onClick:function(e){e.preventDefault(),r.merge({modalIsOpened:!0})},children:"Decrypt file"}),Object(D.jsxs)(V,{isOpened:r.modalIsOpened.get(),close:function(){r.fileProcessing.get()||r.merge({modalIsOpened:!1})},children:[Object(D.jsx)("input",{type:"file",className:"hidden",ref:n,onChange:function(e){return c.apply(this,arguments)}}),Object(D.jsx)("div",{className:"my-1",children:"As soon as the file is decrypted, you can download it"}),Object(D.jsx)("button",{className:"pure-button pure-button-primary bg-black w-full",onClick:function(e){e.preventDefault(),n.current.click()},disabled:r.fileProcessing.get(),children:"Select encrypted file"})]})]})}function Ae(e,t){return Fe.apply(this,arguments)}function Fe(){return(Fe=Object(x.a)(g.a.mark((function e(t,n){var r,c,a,s,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(j.randomBytes)(j.box.nonceLength),c=Object(ge.decodeBase64)(t),e.t0=j.box,e.t1=Uint8Array,e.next=6,n.arrayBuffer();case 6:return e.t2=e.sent,e.t3=new e.t1(e.t2),e.t4=r,e.t5=c,e.next=12,ve();case 12:return e.t6=e.sent,a=(0,e.t0)(e.t3,e.t4,e.t5,e.t6),s=new Blob([a],{type:"application/octet-stream"}),i=n.name.split(".").pop(),e.abrupt("return",{fileName:"".concat(xe(r),"-").concat(i,".txt"),outputFile:s});case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Re(e){var t=e.contact,n=Object(s.useRef)(),r=Object(d.c)({fileProcessing:!1,modalIsOpened:!1});function c(){return(c=Object(x.a)(g.a.mark((function e(n){var c,a,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r.merge({fileProcessing:!0}),e.next=4,Ae(t.publicKey.get(),n.target.files[0]);case 4:c=e.sent,a=c.outputFile,s=c.fileName,n.target.value="",Te(a,s),r.merge({fileProcessing:!1,modalIsOpened:!1}),Z("File encrypted");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("button",{type:"submit",className:"pure-button pure-button-primary bg-black w-full",onClick:function(e){e.preventDefault(),r.merge({modalIsOpened:!0})},children:"Encrypt file"}),Object(D.jsxs)(V,{isOpened:r.modalIsOpened.get(),close:function(){r.fileProcessing.get()||r.merge({modalIsOpened:!1})},children:[Object(D.jsx)("input",{type:"file",className:"hidden",ref:n,onChange:function(e){return c.apply(this,arguments)}}),Object(D.jsxs)("div",{className:"my-1",children:["As soon as the file is encrypted you will download it, ",Object(D.jsx)("span",{className:"font-bold",children:"do not rename it"})]}),Object(D.jsx)("button",{className:"pure-button pure-button-primary bg-black w-full",onClick:function(e){e.preventDefault(),n.current.click()},disabled:r.fileProcessing.get(),children:"Select unencrypted file"})]})]})}function Be(){for(var e=[],t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.forEach((function(t){t&&t.split(/\s/g).forEach((function(t){t.length>0&&e.push(t)}))})),e.join(" ")}var Ue=n(124);function Le(e){var t,n,r=e.message,c=r.messageRaw,a=r.createdAt,s=r.mine,i=r.encryptedMessage;return s.get()?(t="justify-end pl-20",n="text-right"):(t="pr-20",n="bg-green-300"),Object(D.jsx)("div",{className:Be("flex",t),children:Object(D.jsxs)("div",{className:Be("whitespace-pre-wrap my-1 p-2 border border-solid border-gray-300 rounded break-all",n),children:[c.get(),Object(D.jsx)("div",{className:Be("pt-1"),children:Object(D.jsx)(Ue.a,{datetime:a.get()})}),Object(D.jsxs)("div",{className:"text-xs border-solid border-gray-300 border-t p-1",children:["#",i.get().substring(0,8)]})]})})}function We(e){var t=e.contact;return Object(s.useEffect)((function(){t.messages.length>0||t.get().loadPrivateMessages(t)}),[t.id.get()]),Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{className:"text-lg italic",children:"Private messages"}),Object(D.jsxs)("div",{className:"py-2 flex justify-between",children:[Object(D.jsxs)("div",{className:"w-1/2 pr-1",children:[Object(D.jsx)(Ke,{contact:t}),Object(D.jsx)("div",{className:"pt-1",children:Object(D.jsx)(Ve,{contact:t})})]}),Object(D.jsxs)("div",{className:"w-1/2 pl-1",children:[Object(D.jsx)(Ee,{contact:t}),Object(D.jsx)("div",{className:"pt-1",children:Object(D.jsx)(Re,{contact:t})})]})]}),t.messages.map((function(e){return Object(D.jsx)("div",{children:Object(D.jsx)(Le,{message:e})},e.id.get())})).reverse()]})}function ze(){return Object(D.jsx)("div",{children:"public"})}function He(){var e,t,n=Object(o.h)().id,r=Object(o.i)(),c=r.path,a=r.url,i=Object(d.c)({contact:null,ready:!1});Object(s.useEffect)((function(){(function(e){return fe.apply(this,arguments)})(n).then((function(e){i.merge({contact:e,ready:!0})}))}),[n]);var u=i.contact,l=i.ready;return(null===u||void 0===u||null===(e=u.id)||void 0===e?void 0:e.get())||l.get()?(null===u||void 0===u||null===(t=u.id)||void 0===t?void 0:t.get())?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)($.a,{children:Object(D.jsx)("title",{children:G(u.name.get())})}),Object(D.jsx)("div",{className:"w-full md:w-1/3 mx-auto",children:Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{className:"flex justify-center pb-2",children:Object(D.jsx)(me,{contact:u,height:"h-20",width:"w-20"})}),Object(D.jsx)("h1",{className:"text-center",children:u.name.get()}),Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{className:"my-1 flex justify-center",children:[Object(D.jsx)("div",{className:"px-1 underline",children:Object(D.jsx)(W.b,{to:"".concat(a),children:"Private Messages"})}),Object(D.jsx)("div",{className:"px-1 underline",children:Object(D.jsx)(W.b,{to:"".concat(a,"/public-messages"),children:"Public Messages"})})]}),Object(D.jsxs)(o.c,{children:[Object(D.jsx)(o.a,{exact:!0,path:c,children:Object(D.jsx)(We,{contact:u})}),Object(D.jsx)(o.a,{path:"".concat(c,"/public-messages"),children:Object(D.jsx)(ze,{})})]})]})]})})]}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)($.a,{children:Object(D.jsx)("title",{children:G("Contact not found")})}),Object(D.jsx)("div",{children:"Contact not found"})]}):null}function Je(){var e=Object(d.c)({inputPkNameEmail:"",modalOpened:!1});return Object(D.jsxs)("div",{children:[Object(D.jsx)("button",{className:"bg-black text-white p-3",onClick:function(t){t.preventDefault(),e.merge({modalOpened:!0})},children:"+ Add new contact"}),Object(D.jsx)(V,{isOpened:e.modalOpened.get(),close:function(){e.merge({modalOpened:!1})},children:Object(D.jsx)("form",{className:"pure-form pure-form-aligned",onSubmit:function(t){t.preventDefault(),function(e){var t=e.replace(/\s/g,"").split("."),n=Object(a.a)(t,3),r=n[0],c=n[1],s=n[2];c=atob(c),new le({emailHash:s,id:Object(te.a)(),name:c,publicKey:r}).save()}(e.inputPkNameEmail.get()),e.merge({inputPkNameEmail:"",modalOpened:!1})},children:Object(D.jsxs)("fieldset",{children:[Object(D.jsx)("legend",{children:"Contact public key, name and email hashed"}),Object(D.jsx)("div",{className:"pure-control-group",children:Object(D.jsx)("input",{name:"inputPkNameEmail",value:e.inputPkNameEmail.get(),onChange:function(t){var n=t.target.value;e.merge({inputPkNameEmail:n})},placeholder:"Paste the contact code",className:"w-full"})}),Object(D.jsx)("button",{type:"submit",className:"pure-button pure-button-primary bg-black w-full",disabled:Object(m.isEmpty)(e.inputPkNameEmail.get()),children:"Add"})]})})})]})}function Ye(e){var t=e.contact;return Object(D.jsxs)("div",{className:"flex flex-wrap items-center justify-between p-2 bg-gray-300 my-2 rounded",children:[Object(D.jsx)("div",{children:Object(D.jsx)(W.b,{to:"/contacts/".concat(t.id.get()),children:Object(D.jsxs)("div",{className:"flex items-center",children:[Object(D.jsx)(me,{contact:t,height:"h-20",width:"w-20"}),Object(D.jsx)("span",{className:"pl-2",children:t.name.get()})]})})}),Object(D.jsx)("div",{children:Object(D.jsx)("button",{onClick:function(e){e.preventDefault(),t.get().destroy()},children:"Remove"})})]})}function qe(){var e=Object(d.c)(de);return Object(D.jsx)(D.Fragment,{children:e.contacts.map((function(e){return Object(D.jsx)(Ye,{contact:e},e.id.get())}))})}function $e(e){var t=e.children,n=Object(s.useState)(),r=Object(a.a)(n,2),c=r[0],i=r[1];return Object(s.useEffect)((function(){be().then((function(e){i(e)}))}),[i]),c?t:null}function _e(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)($.a,{children:Object(D.jsx)("title",{children:G("Contacts")})}),Object(D.jsxs)("div",{className:"w-full md:w-1/3 mx-auto pt-4",children:[Object(D.jsx)("h1",{className:"text-center text-2xl font-bold",children:"Contacts"}),Object(D.jsx)("div",{className:"flex justify-end",children:Object(D.jsx)(Je,{})}),Object(D.jsx)("div",{children:Object(D.jsx)($e,{children:Object(D.jsx)(qe,{})})})]})]})}function Ge(e){var t=Object(s.useState)(),n=Object(a.a)(t,2),r=n[0],c=n[1];Object(s.useEffect)((function(){C(e).then((function(e){c(e)}))}),[c,e]);return[r,function(t){c(t),I(e,t)}]}function Qe(){var e,t=E().publicKey,n=xe(t),r=Ge("name"),c=Object(a.a)(r,1)[0],s=Ge("email"),i=Object(a.a)(s,1)[0],o=c?xe((e=c,(new TextEncoder).encode(e))):"",u=i?function(e){return Object(w.MD5)(e).toString()}(i):"",l="".concat(n,".").concat(o,".").concat(u),p=Object(d.c)({showCopied:!1});if(!n)return null;if(!c||!i)return null;return Object(D.jsx)("div",{className:"p-3",children:Object(D.jsxs)("button",{className:"text-center bg-gray-300 hover:bg-gray-200 rounded p-2 border border-solid border-gray-300",onClick:function(e){e.preventDefault(),X(ee(l)),p.merge({showCopied:!0}),setTimeout((function(){p.merge({showCopied:!1})}),1500)},children:[Object(D.jsx)("div",{className:"font-bold",children:"My public key, name and email hashed"}),Object(D.jsx)("div",{children:p.showCopied.get()?"Copied":l}),Object(D.jsx)("div",{className:"text-right text-sm",children:"Click to copy"})]})})}function Xe(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)($.a,{children:Object(D.jsx)("title",{children:G("Home")})}),Object(D.jsx)("div",{className:"flex justify-center",children:Object(D.jsx)(Qe,{})})]})}function Ze(){return Object(D.jsx)("div",{className:"text-center text-3xl font-bold",children:"Page not found"})}function et(e){var t=e.children;return Object(D.jsx)(W.a,{children:t})}function tt(){var e=Object(d.c)({pinValue:"",showError:!1}),t=Object(o.f)(),n=new URLSearchParams(Object(o.g)().search),r=E().setKeyPair;function c(){return(c=Object(x.a)(g.a.mark((function c(a){var s,i;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a.preventDefault(),s=n.get("redirectTo")||"/",P(e.pinValue.get()),c.prev=3,c.next=6,C("key-pair");case 6:if(i=c.sent,!Object(m.isEmpty)(i)){c.next=9;break}return c.abrupt("return",e.merge({pinValue:"",showError:!0}));case 9:r(i),t.push(s),c.next=16;break;case 13:return c.prev=13,c.t0=c.catch(3),c.abrupt("return",e.merge({pinValue:"",showError:!0}));case 16:case"end":return c.stop()}}),c,null,[[3,13]])})))).apply(this,arguments)}return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)($.a,{children:Object(D.jsx)("title",{children:G("Unlock")})}),Object(D.jsxs)("div",{className:"w-full md:w-1/3 mx-auto",children:[Object(D.jsx)("div",{className:"flex justify-center",children:Object(D.jsx)("img",{src:K,alt:"enigma"})}),Object(D.jsx)("form",{className:"pure-form",onSubmit:function(e){return c.apply(this,arguments)},children:Object(D.jsxs)("fieldset",{children:[Object(D.jsxs)("div",{className:"pure-control-group pb-4",children:[Object(D.jsx)("input",{type:"password",value:e.pinValue.get(),onChange:function(t){var n=t.target.value;e.merge({pinValue:n})},className:"w-full",placeholder:"Enter your PIN to continue"}),e.showError.get()&&Object(D.jsx)("span",{className:"pure-form-message text-red-500",children:"Invalid PIN"})]}),Object(D.jsx)("button",{type:"submit",className:"pure-button pure-button-primary w-full",disabled:Object(m.isEmpty)(e.pinValue.get()),children:"Unlock"})]})})]})]})}function nt(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(Q,{children:Object(D.jsx)(et,{children:Object(D.jsx)(q,{children:Object(D.jsxs)(o.c,{children:[Object(D.jsx)(Y,{path:"/",exact:!0,children:Object(D.jsx)(Xe,{})}),Object(D.jsx)(Y,{path:"/contacts/:id",children:Object(D.jsx)(He,{})}),Object(D.jsx)(Y,{path:"/contacts",children:Object(D.jsx)(_e,{})}),Object(D.jsx)(o.a,{path:"/unlock",children:Object(D.jsx)(F,{children:Object(D.jsx)(tt,{})})}),Object(D.jsx)(o.a,{path:"*",children:Object(D.jsx)(Ze,{})})]})})})}),Object(D.jsx)(R.a,{})]})}var rt=n(47),ct=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,269)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};n.n(rt).a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(nt,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/enigma-reloaded",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/enigma-reloaded","/service-worker.js");r?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):c(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):c(t,e)}))}}(),ct()}},[[265,1,2]]]);
//# sourceMappingURL=main.b5dd6130.chunk.js.map