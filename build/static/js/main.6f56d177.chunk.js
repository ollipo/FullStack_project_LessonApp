(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{124:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(14),s=n.n(a),l=(n(124),n(52)),i=n(13),r=n(200),o=n(210),j=n(204),d=n(186),b=n(92),u=n.n(b),x=n(58),h=n(157),O=n(192),f=n(193),p=n(194),m=n(195),g=n(196),v=n(197),y=n(8),w=n(19),C=n(189),S=n(201),D=n(207),N=n(208),T=n(209),k=n(191),I=n(202),E=[{content:"computer games",tag:"maths"},{content:"reading in pairs",tag:"religion"},{content:"drawing letters to the white board",tag:"finnish"},{content:"rehearsing for a test",tag:"science"},{content:"multiplication exercises from a book",tag:"maths"},{content:"handouts with text and questions",tag:"finnish"}],W=n(97),q=n(15),z=n(198),F=n(4);var L=function(){var e=Object(c.useState)(new Date),t=Object(i.a)(e,2),n=t[0],a=t[1];return console.log("selectedDateAndTime: ",n),Object(F.jsx)(q.a,{utils:W.a,children:Object(F.jsx)(z.a,{disableToolbar:!0,variant:"inline",margin:"normal",autoOk:!0,ampm:!1,disableFuture:!0,value:n,onChange:a,label:"24h clock",showTodayButton:!0,format:"MM/dd/yyyy HH:mm",minutesStep:"5"})})},M={topic:"",contents:{subject:"",content:""},students:{name:"",class:0},date:"",duration:""};console.log("defaultValues: ",M);var V=function(){var e=Object(c.useState)(M),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(E),l=Object(i.a)(s,2),o=l[0],b=l[1];console.log("formValues: ",n),console.log("filteredContents: ",o);var u=function(e){var t=e.target,c=t.name,s=t.value;console.log("name & value: ",c,s),"subject"===c&&("maths"===s?(b(E.filter((function(e){return"maths"===e.tag}))),console.log("contents after if: ",E)):"finnish"===s?(b(E.filter((function(e){return"finnish"===e.tag}))),console.log("contents after if: ",E)):"religion"===s?(b(E.filter((function(e){return"religion"===e.tag}))),console.log("contents after if: ",E)):"science"===s?(b(E.filter((function(e){return"science"===e.tag}))),console.log("contents after if: ",E)):(b(E),console.log("went to else"))),a(Object(w.a)(Object(w.a)({},n),{},{contents:Object(w.a)(Object(w.a)({},n.contents),{},Object(y.a)({},c,"string"===typeof s?s.split(","):s))}))},x=function(e){var t=e.target,c=t.name,s=t.value;console.log("name & value: ",c,s),a(Object(w.a)(Object(w.a)({},n),{},{students:Object(w.a)(Object(w.a)({},n.students),{},Object(y.a)({},c,s))}))};return Object(F.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(n)},children:[Object(F.jsx)(r.a,{display:"flex",flexDirection:"column",children:Object(F.jsxs)(r.a,{display:"flex",flexDirection:"column",justifyContent:"flex-start",padding:"20px",children:[Object(F.jsxs)(r.a,{padding:"20px",children:["Topic",Object(F.jsx)(j.a,{id:"topic-input",label:" ",autoFocus:!0,required:!0,fullWidth:!0,className:"topic",name:"topic",onChange:function(e){var t=e.target,c=t.name,s=t.value;console.log("name & value: ",c,s),a(Object(w.a)(Object(w.a)({},n),{},Object(y.a)({},c,s)))}}),Object(F.jsx)(L,{})]}),Object(F.jsxs)(r.a,{padding:"20px",display:"flex",flexDirection:"column",children:["Subject",Object(F.jsx)(C.a,{children:Object(F.jsxs)(S.a,{MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},getContentAnchorEl:null},value:n.contents.subject,onChange:u,name:"subject",children:[Object(F.jsx)(D.a,{value:"finnish",children:"Finnish"},"finnish"),Object(F.jsx)(D.a,{value:"maths",children:"maths"},"maths"),Object(F.jsx)(D.a,{value:"science",children:"science"},"science"),Object(F.jsx)(D.a,{value:"religion",children:"religion"},"religion")]})})]}),Object(F.jsxs)(r.a,{padding:"20px",display:"flex",flexDirection:"column",children:["Content",Object(F.jsx)(C.a,{sx:{m:1,width:300},children:Object(F.jsx)(S.a,{MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},getContentAnchorEl:null},labelId:"demo-multiple-chip-label",id:"demo-multiple-chip",multiple:!0,name:"content",value:n.contents.content?n.contents.content:[],onChange:u,renderValue:function(e){return Object(F.jsx)(r.a,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((function(e){return Object(F.jsx)(N.a,{label:e},e)}))})},children:o.map((function(e){return Object(F.jsx)(D.a,{value:e.content,children:e.content},e.content)}))})})]}),Object(F.jsx)(r.a,{padding:"20px",display:"flex",flexDirection:"column",children:Object(F.jsxs)(C.a,{children:["Class",Object(F.jsxs)(T.a,{defaultValue:"1",name:"class",row:!0,onChange:x,children:[Object(F.jsx)(k.a,{value:"1",control:Object(F.jsx)(I.a,{style:{color:"#8bc34a"}}),label:"1"}),Object(F.jsx)(k.a,{value:"2",control:Object(F.jsx)(I.a,{style:{color:"#8bc34a"}}),label:"2"}),Object(F.jsx)(k.a,{value:"3",control:Object(F.jsx)(I.a,{style:{color:"#8bc34a"}}),label:"3"}),Object(F.jsx)(k.a,{value:"4",control:Object(F.jsx)(I.a,{style:{color:"#8bc34a"}}),label:"4"}),Object(F.jsx)(k.a,{value:"5",control:Object(F.jsx)(I.a,{style:{color:"#8bc34a"}}),label:"5"})]})]})}),Object(F.jsxs)(r.a,{padding:"20px",children:["Student",Object(F.jsx)(j.a,{id:"student-input",label:" ",required:!0,fullWidth:!0,className:"student",name:"student",onChange:x})]}),Object(F.jsx)(r.a,{padding:"20px",display:"flex",flexDirection:"column"})]})}),Object(F.jsx)(r.a,{display:"flex",justifyContent:"center",paddingTop:"20%",children:Object(F.jsx)(d.a,{variant:"contained",type:"submit",children:"Submit"})})]})},A=function(){var e=Object(l.c)((function(e){return e.lessons}));return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(V,{}),Object(F.jsxs)(r.a,{display:"flex",flexDirection:"column",padding:"20px",children:[Object(F.jsx)(r.a,{display:"flex",justifyContent:"end",padding:"20px",children:Object(F.jsx)(h.a,{children:Object(F.jsx)("i",{children:"User logged in"})})}),Object(F.jsxs)(r.a,{display:"flex",justifyContent:"space-around",padding:"20px",children:[Object(F.jsx)(x.b,{to:"/lessons",style:{textDecoration:"none",color:"#8bc34a"},children:Object(F.jsx)(h.a,{variant:"h5",children:Object(F.jsx)("i",{children:"Lessons"})})}),Object(F.jsx)(x.b,{to:"/newlesson",style:{textDecoration:"none",color:"#8bc34a"},children:Object(F.jsx)(h.a,{variant:"h5",children:"Create new lesson"})})]}),Object(F.jsx)(r.a,{display:"flex",justifyContent:"flex-start",padding:"20px",children:Object(F.jsx)(O.a,{children:Object(F.jsxs)(f.a,{children:[Object(F.jsx)(p.a,{children:Object(F.jsxs)(m.a,{children:[Object(F.jsx)(g.a,{children:"Topic"}),Object(F.jsx)(g.a,{children:"Subject"}),Object(F.jsx)(g.a,{children:"Content"}),Object(F.jsx)(g.a,{children:"Name"}),Object(F.jsx)(g.a,{children:"Class"}),Object(F.jsx)(g.a,{children:"Date"}),Object(F.jsx)(g.a,{children:"Duration"})]})}),Object(F.jsx)(v.a,{children:e.map((function(e){return Object(F.jsxs)(m.a,{children:[Object(F.jsx)(g.a,{children:Object(F.jsx)(h.a,{children:e.topic})}),Object(F.jsx)(g.a,{children:Object(F.jsx)(h.a,{children:e.contents.map((function(e){return e.subject}))})}),Object(F.jsx)(g.a,{children:Object(F.jsx)(h.a,{children:e.contents.map((function(e){return e.content}))})}),Object(F.jsx)(g.a,{children:Object(F.jsx)(h.a,{children:e.students.map((function(e){return e.name}))})}),Object(F.jsx)(g.a,{children:Object(F.jsx)(h.a,{children:e.students.map((function(e){return e.class}))})}),Object(F.jsx)(g.a,{children:Object(F.jsx)(h.a,{children:e.date})}),Object(F.jsx)(g.a,{children:Object(F.jsx)(h.a,{children:e.duration})})]},e.id)}))})]})})})]})]})},B=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return n?Object(F.jsx)(A,{}):Object(F.jsx)("div",{children:Object(F.jsx)(r.a,{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",flexDirection:"column",children:Object(F.jsxs)(r.a,{flexDirection:"column",display:"flex",alignItems:"center",children:[Object(F.jsxs)(r.a,{fontSize:"500%",letterSpacing:"10px",fontStyle:"italic",display:"flex",flexDirection:"row",className:"lessons",children:[Object(F.jsx)(o.a,{variant:"rounded",style:{backgroundColor:"#8bc34a",height:"20%",width:"6%"},children:Object(F.jsx)(u.a,{})}),"Lessons"]}),Object(F.jsxs)(r.a,{padding:2,height:"25%",width:"85%",children:[Object(F.jsx)(r.a,{children:Object(F.jsx)(j.a,{label:"username",autoFocus:!0,required:!0,fullWidth:!0,className:"username"})}),Object(F.jsx)(r.a,{children:Object(F.jsx)(j.a,{label:"password",type:"password",required:!0,fullWidth:!0,className:"password"})}),Object(F.jsx)(d.a,{className:"submit-btn",variant:"contained",onClick:function(){return a(!0)},children:"Log in"}),Object(F.jsx)(r.a,{display:"flex",justifyContent:"center",paddingTop:"20%",children:Object(F.jsx)(d.a,{variant:"contained",style:{backgroundColor:"#8bc34a"},children:"create new user"})})]})]})})})},H=n(11),J=n(74),P=n.n(J),_=n(93),R=n(94),U=n.n(R),G=function(){return U.a.get("/api/lessons").then((function(e){return e.data}))},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"INIT_LESSONS"===t.type?t.data:e},Q=function(){var e=Object(l.b)();return Object(c.useEffect)((function(){e(function(){var e=Object(_.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:n=e.sent,t({type:"INIT_LESSONS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(F.jsx)(x.a,{children:Object(F.jsxs)(H.c,{children:[Object(F.jsx)(H.a,{path:"/",element:Object(F.jsx)(B,{})}),Object(F.jsx)(H.a,{path:"/lessons",element:Object(F.jsx)(A,{})}),Object(F.jsx)(H.a,{path:"/newlesson",element:Object(F.jsx)(V,{})})]})})},X=n(57),Y=n(96),Z=n(95),$=Object(X.combineReducers)({lessons:K}),ee=Object(X.createStore)($,Object(Z.composeWithDevTools)(Object(X.applyMiddleware)(Y.a)));s.a.render(Object(F.jsx)(l.a,{store:ee,children:Object(F.jsx)(Q,{})}),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.6f56d177.chunk.js.map