(this.webpackJsonpadmin_panel=this.webpackJsonpadmin_panel||[]).push([[0],{25:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(22),r=n.n(o),s=(n(65),n(25),n(17)),i=n(11),l=n(6),u=(n(66),n(12)),d=n.n(u),j=n(101),p=n(103),b=n(100),h=(n(33),n(1));var O=function(){var e=d.a.get("userInfo"),t=Object(a.useState)(),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){e&&o(!0)}),[]),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(j.a,{className:"Navabr",collapseOnSelect:!0,expand:"sm",variant:"dark",fixed:"top",children:[Object(h.jsx)(j.a.Brand,{children:Object(h.jsx)("h6",{children:Object(h.jsx)(s.b,{to:"/",className:"bism",children:"PAGHAM 365"})})}),Object(h.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),c&&Object(h.jsxs)(j.a.Collapse,{id:"responsive-navbar-nav",children:[Object(h.jsxs)(p.a,{className:"mr-auto",children:[Object(h.jsxs)(b.a,{className:"depart",title:"\u062f\u0631\u062c \u06a9\u0631\u06cc\u06ba",id:"collasible-nav-dropdown",children:[Object(h.jsx)(b.a.Item,{herf:"#1",to:"/addtopic",as:s.b,children:"\u0639\u0646\u0648\u0627\u0646\u0627\u062a \u062f\u0631\u062c \u06a9\u0631\u06cc\u06ba"}),Object(h.jsx)(b.a.Item,{herf:"#3",to:"/addsubtopic",as:s.b,children:"\u0633\u0628 \u0639\u0646\u0648\u0627\u0646\u0627\u062a \u062f\u0631\u062c \u06a9\u0631\u06cc\u06ba"}),Object(h.jsx)(b.a.Item,{herf:"#6",to:"/adddetail",as:s.b,children:"\u062a\u0641\u0635\u06cc\u0644 \u062f\u0631\u062c \u06a9\u0631\u06cc\u06ba"})]}),Object(h.jsx)(b.a,{className:"depart",title:"\u062f\u06cc\u06a9\u06be\u06cc\u06ba",id:"collasible-nav-dropdown",children:Object(h.jsx)(b.a.Item,{herf:"#2",to:"/viewtopic",as:s.b,children:"\u0639\u0646\u0648\u0627\u0646\u0627\u062a \u062f\u06cc\u06a9\u06be\u06cc\u06ba"})})]}),Object(h.jsx)(p.a,{children:Object(h.jsx)(p.a.Link,{onClick:function(){console.log("userInfo"),d.a.remove("userInfo"),o(!1),window.location.href="https://quirky-goldwasser-be4cf9.netlify.app/login"},children:Object(h.jsx)("h6",{children:"Logout"})})})]})]})})},m=n(60),x=n(59);var f=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1],o=d.a.get("userInfo");return Object(a.useEffect)((function(){null==o&&c(!0)})),Object(h.jsx)("div",{className:"forHomeCenter1",children:Object(h.jsxs)(m.a,{sm:"8",xm:"12",children:[Object(h.jsx)("h1",{className:"text",children:" \u067e\u06cc\u063a\u0627\u0645 365 \u0645\u06cc\u06ba \u062e\u0648\u0634 \u0622\u0645\u062f\u06cc\u062f"}),n&&Object(h.jsx)(s.b,{to:"/login",children:Object(h.jsx)(x.a,{variant:"primary",className:"linkhome",type:"submit",children:"Login"})})]})})},g=n(7),v=n.n(g),w=n(10),y=n(9),I=n.n(y),S=n(104),N=n(102);var C=function(e){var t=Object(a.useState)(),n=Object(l.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(),s=Object(l.a)(r,2),i=(s[0],s[1]),u=function(){var t=Object(w.a)(v.a.mark((function t(n){var a,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),a=document.getElementById("banImg").files[0],(o=new FormData).append("Img",a),o.append("depart",c),I.a.post("https://wtitsolution.com/Quran365/AdminPanel/AddData/AddTopic.php",o).then((function(t){console.log(t),e.history.push("/viewtopic")})).catch((function(e){console.log(e)}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){null==d.a.get("userInfo")&&e.history.push("/login")}),[]),Object(h.jsx)("div",{className:"Adddepart3",children:Object(h.jsx)("div",{children:Object(h.jsx)(S.a,{style:{borderColor:"rgb(238, 91, 46)"},children:Object(h.jsx)(S.a.Body,{children:Object(h.jsxs)(N.a,{onSubmit:u,children:[Object(h.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(N.a.Label,{children:"\u0639\u0646\u0648\u0627\u0646\u0627\u062a"}),Object(h.jsx)(N.a.Control,{type:"text",placeholder:"\u0639\u0646\u0648\u0627\u0646 \u062f\u0631\u062c \u06a9\u0631\u06cc\u06ba",required:!0,onChange:function(e){return o(e.target.value)}}),Object(h.jsx)(N.a.Label,{children:"\u062a\u0635\u0648\u06cc\u0631"}),Object(h.jsx)(N.a.Control,{type:"file",id:"banImg",placeholder:"\u062a\u0635\u0648\u06cc\u0631 \u06a9\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0631\u06cc\u06ba",required:!0,onChange:function(e){return i(e.target.value)}})]}),Object(h.jsx)(x.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})})};var D=function(e){var t=Object(a.useState)(),n=Object(l.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(),s=Object(l.a)(r,2),i=s[0],u=s[1],j=Object(a.useState)([]),p=Object(l.a)(j,2),b=p[0],O=p[1],m=function(){var e=Object(w.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://wtitsolution.com/Quran365/AdminPanel/ViewData/Topic.php").then((function(e){O(e.data)})).catch((function(e){console.log(e)}));case 2:console.log(b.topicId);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var t=Object(w.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(i),n.preventDefault(),(a=new FormData).append("depart",c),a.append("depart1",i),I.a.post("https://wtitsolution.com/Quran365/AdminPanel/AddData/SubTopic.php",a).then((function(t){console.log(t),e.history.push("/viewsubtopic/".concat(i))})).catch((function(e){console.log(e)}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){null==d.a.get("userInfo")&&e.history.push("/login"),m()}),[]),Object(h.jsx)("div",{className:"Adddepart3",children:Object(h.jsx)("div",{children:Object(h.jsx)(S.a,{style:{borderColor:"rgb(238, 91, 46)"},children:Object(h.jsx)(S.a.Body,{children:Object(h.jsxs)(N.a,{onSubmit:f,children:[Object(h.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(N.a.Label,{children:"\u0639\u0646\u0648\u0627\u0646"}),Object(h.jsxs)(N.a.Control,{as:"select",defaultValue:"\u0639\u0646\u0648\u0627\u0646 \u06a9\u0627\u0627\u062a\u062e\u0627\u0628 \u06a9\u0631\u06cc\u06ba",required:!0,onLoad:function(e){return u(e.target.value)},onChange:function(e){return u(e.target.value)},children:[Object(h.jsx)("option",{className:"opt",selected:"true",disabled:"disabled",children:"\u0639\u0646\u0648\u0627\u0646 \u06a9\u0627\u0627\u062a\u062e\u0627\u0628 \u06a9\u0631\u06cc\u06ba"}),b.map((function(e,t){return console.log(b[t].topicId),Object(h.jsx)("option",{className:"opt",value:b[t].topicId,children:b[t].topicName})}))]})]}),Object(h.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(N.a.Label,{children:"\u0633\u0628 \u0639\u0646\u0648\u0627\u0646"}),Object(h.jsx)(N.a.Control,{type:"text",placeholder:"\u0633\u0628 \u0639\u0646\u0648\u0627\u0646 \u062f\u0631\u062c \u06a9\u0631\u06cc\u06ba",required:!0,onChange:function(e){return o(e.target.value)}})]}),Object(h.jsx)(x.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})})},A=n(32),E=n(99);var T=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(),i=Object(l.a)(r,2),u=i[0],j=i[1],p=Object(a.useState)(),b=Object(l.a)(p,2),O=(b[0],b[1]),m=function(){var e=Object(w.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://wtitsolution.com/Quran365/AdminPanel/ViewData/Topic.php").then((function(e){o(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(w.a)(v.a.mark((function e(t,n,a){var c,o,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log(n),console.log(a),c=document.getElementById("banImg").files[0],o="",c&&(o=c.name),console.log(o),(r=new FormData).append("Img",c),r.append("imageName",o||n),r.append("depart",u||a),r.append("id",t),e.next=14,I.a.post("https://wtitsolution.com/Quran365/AdminPanel/UpdateData/Topic.php",r).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 14:e.sent,m();case 16:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),g=function(){var e=Object(w.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),(n=new FormData).append("id",t),e.next=5,I.a.post("https://wtitsolution.com/Quran365/AdminPanel/DeleteData/Topic.php",n).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 5:e.sent,m();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){null==d.a.get("userInfo")&&e.history.push("/login"),m()}),[]),Object(h.jsx)("div",{className:"ViewTopic",children:Object(h.jsxs)(E.a,{striped:!0,bordered:!0,hover:!0,size:"sm",variant:"light",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{}),Object(h.jsx)("th",{children:"\u062a\u0635\u0648\u06cc\u0631"}),Object(h.jsx)("th",{children:"\u0646\u0627\u0645"}),Object(h.jsx)("th",{children:"#"})]})}),Object(h.jsx)("tbody",{children:c.map((function(e,t){console.log(c[t].topicId);var n=c[t].topicImg,a=c[t].topicName,o=c[t].topicId;return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)(A.a,{trigger:Object(h.jsx)("input",{className:"edittopic",type:"button",value:"Edit"}),position:"right top",children:Object(h.jsx)("div",{children:Object(h.jsx)(S.a,{style:{borderColor:"rgb(238, 91, 46)"},children:Object(h.jsx)(S.a.Body,{children:Object(h.jsxs)(N.a,{onSubmit:function(e){e.preventDefault(),f(o,n,a,m())},children:[Object(h.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(N.a.Label,{children:"\u0639\u0646\u0648\u0627\u0646\u0627\u062a"}),Object(h.jsx)(N.a.Control,{type:"text",defaultValue:c[t].topicName,placeholder:"\u0639\u0646\u0648\u0627\u0646 \u062f\u0631\u062c \u06a9\u0631\u06cc\u06ba",required:!0,onChange:function(e){return j(e.target.value)}}),Object(h.jsx)(N.a.Label,{children:"\u062a\u0635\u0648\u06cc\u0631"}),Object(h.jsx)(N.a.Control,{type:"file",id:"banImg",placeholder:"\u062a\u0635\u0648\u06cc\u0631 \u06a9\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0631\u06cc\u06ba",onChange:function(e){return O(e.target.value)}})]}),Object(h.jsx)(x.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})}),Object(h.jsx)("div",{children:Object(h.jsx)("form",{onClick:function(e){e.preventDefault(),g(o,m())},children:Object(h.jsx)(x.a,{className:"deletetopic",children:"Delete"})})})]}),Object(h.jsx)("td",{children:Object(h.jsx)("img",{className:"images",src:"https://wtitsolution.com/Quran365/AdminPanel/images/"+n})}),Object(h.jsx)(s.b,{className:"newpagelink",to:"/viewsubtopic/".concat(c[t].topicId),children:Object(h.jsx)("td",{class:"colum",children:c[t].topicName})}),Object(h.jsx)("td",{children:t+1})]})}))})]})})};var L=function(e){var t=Object(a.useState)(),n=Object(l.a)(t,2),c=(n[0],n[1],Object(a.useState)()),o=Object(l.a)(c,2),r=(o[0],o[1],Object(a.useState)("")),s=Object(l.a)(r,2),i=s[0],u=s[1],j=Object(a.useState)(),p=Object(l.a)(j,2),b=p[0],O=p[1],m=Object(a.useState)(),f=Object(l.a)(m,2),g=f[0],y=f[1],C=Object(a.useState)([]),D=Object(l.a)(C,2),A=D[0],E=D[1],T=Object(a.useState)(),L=Object(l.a)(T,2),k=(L[0],L[1],Object(a.useState)("")),B=Object(l.a)(k,2),P=B[0],G=B[1],Q=Object(a.useState)(""),V=Object(l.a)(Q,2),F=V[0],q=V[1],z=Object(a.useState)([]),R=Object(l.a)(z,2),U=R[0],W=R[1];console.log(i),console.log(P),console.log(F),console.log(b),console.log(g);var H=function(){var e=Object(w.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://wtitsolution.com/Quran365/AdminPanel/ViewData/Topic.php").then((function(e){E(e.data)})).catch((function(e){console.log(e)}));case 2:console.log(A.topicId);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(w.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("topicid",t),e.next=4,I.a.post("https://wtitsolution.com/Quran365/AdminPanel/ViewData/SelectSubTopic.php",n).then((function(e){W(e.data),console.log(e.data)})).catch((function(e){console.log(e)}));case 4:console.log(U.subTopicId);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var t=Object(w.a)(v.a.mark((function t(n){var a,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(b),n.preventDefault(),a=document.getElementById("banImg").files[0],(c=new FormData).append("depart1",b),c.append("depart2",g),c.append("head1",P),c.append("head2",F),c.append("detail",i),c.append("Img",a),I.a.post("https://wtitsolution.com/Quran365/AdminPanel/AddData/Detail.php",c).then((function(t){console.log(t),e.history.push("/viewdetail/".concat(g,"/").concat(b))})).catch((function(e){console.log(e)}));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){null==d.a.get("userInfo")&&e.history.push("/login"),H()}),[]),Object(h.jsx)("div",{className:"Adddepart3",children:Object(h.jsx)("div",{children:Object(h.jsx)(S.a,{style:{borderColor:"rgb(238, 91, 46)"},children:Object(h.jsx)(S.a.Body,{children:Object(h.jsxs)(N.a,{onSubmit:M,children:[Object(h.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(N.a.Label,{children:"\u0639\u0646\u0648\u0627\u0646"}),Object(h.jsxs)(N.a.Control,{as:"select",defaultValue:"\u0639\u0646\u0648\u0627\u0646 \u06a9\u0627\u0627\u062a\u062e\u0627\u0628 \u06a9\u0631\u06cc\u06ba",required:!0,onLoad:function(e){return O(e.target.value)},onChange:function(e){return O(e.target.value),J(e.target.value)},children:[Object(h.jsx)("option",{className:"opt",selected:"true",disabled:"disabled",children:"\u0639\u0646\u0648\u0627\u0646 \u06a9\u0627\u0627\u062a\u062e\u0627\u0628 \u06a9\u0631\u06cc\u06ba"}),A.map((function(e,t){return console.log(A[t].topicId),Object(h.jsx)("option",{className:"opt",value:A[t].topicId,children:A[t].topicName})}))]})]}),Object(h.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(N.a.Label,{children:"\u0633\u0628 \u0639\u0646\u0648\u0627\u0646"}),Object(h.jsxs)(N.a.Control,{as:"select",defaultValue:"\u0633\u0628 \u0639\u0646\u0648\u0627\u0646 \u06a9\u0627\u0627\u062a\u062e\u0627\u0628 \u06a9\u0631\u06cc\u06ba",required:!0,onLoad:function(e){return y(e.target.value)},onChange:function(e){return y(e.target.value)},children:[Object(h.jsx)("option",{className:"opt",selected:"true",disabled:"disabled",children:" \u0633\u0628 \u0639\u0646\u0648\u0627\u0646 \u06a9\u0627\u0627\u062a\u062e\u0627\u0628 \u06a9\u0631\u06cc\u06ba"}),U.map((function(e,t){return console.log(U[t].subTopicId),Object(h.jsx)("option",{className:"opt",value:U[t].subTopicId,children:U[t].subTopicName})}))]})]}),Object(h.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(N.a.Label,{children:"\u0633\u0631\u062e\u06cc \u0646\u0645\u0628\u0631 1"}),Object(h.jsx)(N.a.Control,{type:"text",placeholder:"\u062f\u0631\u062c \u06a9\u0631\u06cc\u06ba",onChange:function(e){return G(e.target.value)}})]}),Object(h.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(N.a.Label,{children:"\u0633\u0631\u062e\u06cc \u0646\u0645\u0628\u0631 2"}),Object(h.jsx)(N.a.Control,{type:"text",placeholder:"\u062f\u0631\u062c \u06a9\u0631\u06cc\u06ba",onChange:function(e){return q(e.target.value)}})]}),Object(h.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(N.a.Label,{children:"\u062a\u0641\u0635\u06cc\u0644 "}),Object(h.jsx)(N.a.Control,{type:"text",placeholder:"\u062f\u0631\u062c \u06a9\u0631\u06cc\u06ba",as:"textarea","aria-label":"With textarea",onChange:function(e){return u(e.target.value)}})]}),Object(h.jsxs)(N.a.Group,{children:[Object(h.jsx)(N.a.Label,{children:"\u062a\u0635\u0648\u06cc\u0631"}),Object(h.jsx)(N.a.Control,{type:"file",id:"banImg",placeholder:"\u062a\u0635\u0648\u06cc\u0631 \u06a9\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0631\u06cc\u06ba"})]}),Object(h.jsx)(x.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})})};var k=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(),i=Object(l.a)(r,2),u=i[0],j=i[1],p=Object(a.useState)(),b=Object(l.a)(p,2),O=b[0],m=b[1],f=Object(a.useState)([]),g=Object(l.a)(f,2),y=g[0],C=g[1],D=Object(a.useState)(e.match.params.id),T=Object(l.a)(D,2),L=T[0],k=(T[1],Object(a.useState)(e.match.params.id)),B=Object(l.a)(k,2),P=B[0],G=(B[1],e.match.params.id,function(){var e=Object(w.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("topicid",L),e.next=4,I.a.post("https://wtitsolution.com/Quran365/AdminPanel/ViewData/SelectSubTopic.php",n).then((function(e){o(e.data)})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Q=function(){var e=Object(w.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://wtitsolution.com/Quran365/AdminPanel/ViewData/Topic.php").then((function(e){C(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(w.a)(v.a.mark((function e(t,n,a){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(O),console.log(t),console.log(n),console.log(a),(c=new FormData).append("Id",t),c.append("depart",O||n),c.append("Name",u||a),e.next=10,I.a.post("https://wtitsolution.com/Quran365/AdminPanel/UpdateData/SubTopic.php",c).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 10:e.sent,G();case 12:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),F=function(){var e=Object(w.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),(n=new FormData).append("id",t),e.next=5,I.a.post("https://wtitsolution.com/Quran365/AdminPanel/DeleteData/SubTopic.php",n).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 5:e.sent,G();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(t){null==d.a.get("userInfo")&&e.history.push("/login"),G(t),Q()}),[]),Object(h.jsx)("div",{className:"ViewTopic",children:Object(h.jsxs)(E.a,{striped:!0,bordered:!0,hover:!0,size:"sm",variant:"light",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{}),Object(h.jsx)("th",{children:"\u0646\u0627\u0645"}),Object(h.jsx)("th",{children:"#"})]})}),Object(h.jsx)("tbody",{children:c.map((function(e,t){var n=c[t].subTopicName,a=c[t].subTopicId,o=c[t].topicId;return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)(A.a,{trigger:Object(h.jsx)("input",{className:"edittopic",type:"button",value:"Edit"}),position:"right top",children:Object(h.jsx)("div",{children:Object(h.jsx)(S.a,{style:{borderColor:"rgb(238, 91, 46)"},children:Object(h.jsx)(S.a.Body,{children:Object(h.jsxs)(N.a,{onSubmit:function(e){e.preventDefault(),V(a,o,n)},children:[Object(h.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(N.a.Label,{children:"\u0639\u0646\u0648\u0627\u0646"}),Object(h.jsxs)(N.a.Control,{as:"select",required:!0,onChange:function(e){return m(e.target.value)},children:[Object(h.jsx)("option",{className:"opt",selected:"true",disabled:"disabled",children:"\u0639\u0646\u0648\u0627\u0646 \u06a9\u0627\u0627\u062a\u062e\u0627\u0628 \u06a9\u0631\u06cc\u06ba"}),y.map((function(e,t){return Object(h.jsx)("option",{className:"opt",value:y[t].topicId,children:y[t].topicName})}))]})]}),Object(h.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(N.a.Label,{children:"\u0633\u0628 \u0639\u0646\u0648\u0627\u0646"}),Object(h.jsx)(N.a.Control,{type:"text",placeholder:"\u0633\u0628 \u0639\u0646\u0648\u0627\u0646 \u062f\u0631\u062c \u06a9\u0631\u06cc\u06ba",required:!0,defaultValue:c[t].subTopicName,onChange:function(e){return j(e.target.value)}})]}),Object(h.jsx)(x.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})}),Object(h.jsx)("div",{children:Object(h.jsx)("form",{onClick:function(e){e.preventDefault(),F(a)},children:Object(h.jsx)(x.a,{className:"deletetopic",children:"Delete"})})})]}),Object(h.jsx)(s.b,{className:"newpagelink",to:"/viewdetail/".concat(c[t].subTopicId,"/").concat(P),children:Object(h.jsx)("td",{class:"colum",children:c[t].subTopicName})}),Object(h.jsx)("td",{children:t+1})]})}))})]})})};var B=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)([]),s=Object(l.a)(r,2),i=s[0],u=s[1],j=Object(a.useState)([]),p=Object(l.a)(j,2),b=p[0],O=p[1],m=Object(a.useState)(e.match.params.id),f=Object(l.a)(m,2),g=f[0],y=(f[1],Object(a.useState)()),C=Object(l.a)(y,2),D=C[0],T=C[1],L=Object(a.useState)(),k=Object(l.a)(L,2),B=k[0],P=k[1],G=Object(a.useState)(),Q=Object(l.a)(G,2),V=Q[0],F=Q[1],q=Object(a.useState)(),z=Object(l.a)(q,2),R=z[0],U=z[1],W=Object(a.useState)(),H=Object(l.a)(W,2),J=H[0],M=H[1],_=Object(a.useState)(),K=Object(l.a)(_,2),X=K[0],Y=K[1],Z=Object(a.useState)(),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=function(){var e=Object(w.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("subTopicId",g),console.log(g),e.next=5,I.a.post("https://wtitsolution.com/Quran365/AdminPanel/ViewData/SelectDetail.php",n).then((function(e){O(e.data),console.log(e.data)})).catch((function(e){console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(w.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://wtitsolution.com/Quran365/AdminPanel/ViewData/Topic.php").then((function(e){u(e.data),console.log(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(w.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("topicid",t),e.next=4,I.a.post("https://wtitsolution.com/Quran365/AdminPanel/ViewData/SelectSubTopic.php",n).then((function(e){o(e.data),console.log(e.data)})).catch((function(e){console.log(e)}));case 4:console.log(c.subTopicId);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(w.a)(v.a.mark((function e(t,n,a,c,o,r,s){var i,l,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),console.log(a),console.log(c),i=document.getElementById("banImg").files[0],l="",i&&(l=i.name),console.log(l),(u=new FormData).append("DetailId",t),u.append("topicId",V||n),u.append("subTopicId",R||a),u.append("h1",J||c),u.append("h2",X||o),u.append("h3",ee||r),u.append("Img",i),u.append("imageName",l||s),e.next=18,I.a.post("https://wtitsolution.com/Quran365/AdminPanel/UpdateData/Detail.php",u).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 18:e.sent,ne();case 20:case"end":return e.stop()}}),e)})));return function(t,n,a,c,o,r,s){return e.apply(this,arguments)}}(),re=function(){var e=Object(w.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),(n=new FormData).append("id",t),e.next=5,I.a.post("https://wtitsolution.com/Quran365/AdminPanel/DeleteData/Detail.php",n).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 5:e.sent,ne();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(t){null==d.a.get("userInfo")&&e.history.push("/login"),ne(t),42==e.match.params.name?T(e.match.params.name):41!=e.match.params.name&&46!=e.match.params.name||P(e.match.params.name),ae()}),[]),Object(h.jsx)("div",{className:"ViewTopic",children:Object(h.jsxs)(E.a,{striped:!0,bordered:!0,hover:!0,size:"sm",variant:"light",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{}),Object(h.jsx)("th",{children:"\u0641\u0627\u0626\u0644"}),Object(h.jsx)("th",{children:"\u062a\u0641\u0635\u06cc\u0644"}),Object(h.jsx)("th",{children:"\u0633\u0631\u062e\u06cc \u0646\u0645\u0628\u0631 2"}),Object(h.jsx)("th",{children:"\u0633\u0631\u062e\u06cc \u0646\u0645\u0628\u0631 1"}),Object(h.jsx)("th",{children:"#"})]})}),Object(h.jsx)("tbody",{children:b.map((function(e,t){console.log(b[t].topicId);var n=b[t].detailId,a=b[t].topicId,o=b[t].subTopicId,r=b[t].head1,s=b[t].head2,l=b[t].detail,u=b[t].imageName;return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)(A.a,{trigger:Object(h.jsx)("input",{className:"edittopic",type:"button",value:"Edit"}),position:"right top",children:Object(h.jsx)("div",{children:Object(h.jsx)(S.a,{style:{borderColor:"rgb(238, 91, 46)"},children:Object(h.jsx)(S.a.Body,{children:Object(h.jsxs)(N.a,{onSubmit:function(e){e.preventDefault(),oe(n,a,o,r,s,l,u)},children:[Object(h.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(N.a.Label,{children:"\u0639\u0646\u0648\u0627\u0646"}),Object(h.jsxs)(N.a.Control,{as:"select",required:!0,onChange:function(e){return F(e.target.value),ce(e.target.value)},children:[Object(h.jsx)("option",{className:"opt",selected:"true",disabled:"disabled",children:"\u0639\u0646\u0648\u0627\u0646 \u06a9\u0627\u0627\u062a\u062e\u0627\u0628 \u06a9\u0631\u06cc\u06ba"}),i.map((function(e,t){return Object(h.jsx)("option",{className:"opt",value:i[t].topicId,children:i[t].topicName})}))]})]}),Object(h.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(N.a.Label,{children:"\u0633\u0628 \u0639\u0646\u0648\u0627\u0646"}),Object(h.jsxs)(N.a.Control,{as:"select",defaultValue:"\u0633\u0628 \u0639\u0646\u0648\u0627\u0646 \u06a9\u0627\u0627\u062a\u062e\u0627\u0628 \u06a9\u0631\u06cc\u06ba",required:!0,onChange:function(e){return U(e.target.value)},children:[Object(h.jsx)("option",{className:"opt",selected:"true",disabled:"disabled",children:" \u0633\u0628 \u0639\u0646\u0648\u0627\u0646 \u06a9\u0627\u0627\u062a\u062e\u0627\u0628 \u06a9\u0631\u06cc\u06ba"}),c.map((function(e,t){return console.log(c[t].subTopicId),Object(h.jsx)("option",{className:"opt",value:c[t].subTopicId,children:c[t].subTopicName})}))]})]}),Object(h.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(N.a.Label,{children:"\u0633\u0628 \u0639\u0646\u0648\u0627\u0646"}),Object(h.jsx)(N.a.Control,{type:"text",defaultValue:b[t].head1,onChange:function(e){return M(e.target.value)}})]}),Object(h.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(N.a.Label,{children:"\u0633\u0628 \u0639\u0646\u0648\u0627\u0646"}),Object(h.jsx)(N.a.Control,{type:"text",defaultValue:b[t].head2,as:"textarea","aria-label":"With textarea",onChange:function(e){return Y(e.target.value)}})]}),Object(h.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(N.a.Label,{children:"\u0633\u0628 \u0639\u0646\u0648\u0627\u0646"}),Object(h.jsx)(N.a.Control,{type:"text",defaultValue:b[t].detail,as:"textarea","aria-label":"With textarea",onChange:function(e){return te(e.target.value)}})]}),Object(h.jsxs)(N.a.Group,{children:[Object(h.jsx)(N.a.Label,{children:"\u062a\u0635\u0648\u06cc\u0631"}),Object(h.jsx)(N.a.Control,{type:"file",id:"banImg",placeholder:"\u062a\u0635\u0648\u06cc\u0631 \u06a9\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0631\u06cc\u06ba"})]}),Object(h.jsx)(x.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})}),Object(h.jsx)("div",{children:Object(h.jsx)("form",{onClick:function(e){e.preventDefault(),re(n)},children:Object(h.jsx)(x.a,{className:"deletetopic",children:"Delete"})})})]}),Object(h.jsx)("td",{class:"colum",children:u?Object(h.jsx)("div",{children:D?Object(h.jsx)("audio",{controls:!0,children:Object(h.jsx)("source",{src:"https://wtitsolution.com/Quran365/AdminPanel/images/"+u,type:"audio/mpeg"})}):B?Object(h.jsx)(x.a,{children:Object(h.jsx)("a",{className:"pdfbutton",href:"https://wtitsolution.com/Quran365/AdminPanel/images/"+u,children:"Open PDF"})}):Object(h.jsx)("img",{className:"images",alt:"No Image Found",src:"https://wtitsolution.com/Quran365/AdminPanel/images/"+u})}):Object(h.jsx)("h6",{})}),Object(h.jsx)("td",{class:"colum",children:b[t].detail}),Object(h.jsx)("td",{class:"colum",children:b[t].head2}),Object(h.jsx)("td",{class:"colum",children:b[t].head1}),Object(h.jsx)("td",{children:t+1})]})}))})]})})};function P(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=(n[0],n[1],Object(a.useState)()),o=Object(l.a)(c,2),r=(o[0],o[1],Object(a.useState)()),s=Object(l.a)(r,2),i=s[0],u=s[1],j=Object(a.useState)(),p=Object(l.a)(j,2),b=p[0],O=p[1];return Object(h.jsx)("div",{className:"Adddepart3login",children:Object(h.jsx)("div",{children:Object(h.jsx)(S.a,{style:{borderColor:"rgb(238, 91, 46)"},children:Object(h.jsx)(S.a.Body,{children:Object(h.jsxs)(N.a,{onSubmit:function(e){return function(e){e.preventDefault(),console.log(i),console.log(b);var t=new FormData;t.append("email",i),t.append("password",b);var n=I.a.post("https://wtitsolution.com/Quran365/AdminPanel/ViewData/Login.php",t).then((function(e){console.log(e.data),"Login successfully"==e.data?(d.a.set("userInfo",e.data),window.location.href="https://quirky-goldwasser-be4cf9.netlify.app/"):alert(e.data)})).catch((function(e){console.log(e)}));console.log(n)}(e)},children:[Object(h.jsx)(N.a.Row,{children:Object(h.jsx)(N.a.Group,{as:m.a,controlId:"formGridEmail"})}),Object(h.jsx)(N.a.Row,{children:Object(h.jsxs)(N.a.Group,{as:m.a,controlId:"formGridEmail",children:[Object(h.jsx)(N.a.Label,{children:"Admin Name"}),Object(h.jsx)(N.a.Control,{type:"text",placeholder:"Enter Admin Name",required:!0,onChange:function(e){return u(e.target.value)}})]})}),Object(h.jsx)(N.a.Row,{children:Object(h.jsxs)(N.a.Group,{as:m.a,controlId:"formGridPassword",children:[Object(h.jsx)(N.a.Label,{children:"Password"}),Object(h.jsx)(N.a.Control,{type:"password",placeholder:"Enter Password",required:!0,onChange:function(e){return O(e.target.value)}})]})}),Object(h.jsx)(x.a,{variant:"primary",type:"submit",children:"Login"})]})})})})})}var G=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)(s.a,{children:[Object(h.jsx)(O,{}),Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/",component:f}),Object(h.jsx)(i.a,{exact:!0,path:"/login",component:P}),Object(h.jsx)(i.a,{exact:!0,path:"/addtopic",component:C}),Object(h.jsx)(i.a,{exact:!0,path:"/addsubtopic",component:D}),Object(h.jsx)(i.a,{exact:!0,path:"/viewsubtopic/:id",component:k}),Object(h.jsx)(i.a,{exact:!0,path:"/viewdetail/:id/:name",component:B}),Object(h.jsx)(i.a,{exact:!0,path:"/adddetail",component:L}),Object(h.jsx)(i.a,{exact:!0,path:"/viewtopic",component:T})]})]})})};var Q=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(G,{})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,105)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(Q,{})}),document.getElementById("root")),V()}},[[94,1,2]]]);
//# sourceMappingURL=main.02fe5810.chunk.js.map