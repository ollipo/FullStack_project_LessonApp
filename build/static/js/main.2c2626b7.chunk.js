(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{124:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(14),s=n.n(a),l=(n(124),n(52)),i=n(13),r=n(200),o=n(210),j=n(204),d=n(186),b=n(92),u=n.n(b),x=n(59),h=n(157),O=n(192),f=n(193),p=n(194),m=n(195),g=n(196),v=n(197),y=n(8),C=n(19),w=n(189),S=n(209),D=n(191),N=n(202),T=[{content:"computer games",tag:"maths"},{content:"reading in pairs",tag:"religion"},{content:"drawing letters to the white board",tag:"finnish"},{content:"rehearsing for a test",tag:"science"},{content:"multiplication exercises from a book",tag:"maths"},{content:"handouts with text and questions",tag:"finnish"}],I=n(97),k=n(15),V=n(198),E=n(4);var W=function(){var e=Object(c.useState)(new Date),t=Object(i.a)(e,2),n=t[0],a=t[1];return console.log("selectedDateAndTime: ",n),Object(E.jsx)(k.a,{utils:I.a,children:Object(E.jsx)(V.a,{disableToolbar:!0,variant:"inline",margin:"normal",autoOk:!0,ampm:!1,disableFuture:!0,value:n,onChange:a,label:"24h clock",format:"dd/MM/yyyy HH:mm",minutesStep:"5"})})},q=n(201),z=n(207),F=function(e){var t=e.formValues,n=e.handleChange;return Object(E.jsx)(w.a,{children:Object(E.jsxs)(q.a,{MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},getContentAnchorEl:null},value:t.contents.subject,onChange:n,name:"subject",children:[Object(E.jsx)(z.a,{value:"finnish",children:"Finnish"},"finnish"),Object(E.jsx)(z.a,{value:"maths",children:"maths"},"maths"),Object(E.jsx)(z.a,{value:"science",children:"science"},"science"),Object(E.jsx)(z.a,{value:"religion",children:"religion"},"religion")]})})},L=function(e){var t=e.handleTextInputChange;return Object(E.jsx)(j.a,{id:"topic-input",label:" ",autoFocus:!0,required:!0,fullWidth:!0,className:"topic",name:"topic",onChange:t})},M=n(208),A=function(e){var t=e.handleChange,n=e.formValues,c=e.filteredContents;return Object(E.jsx)(w.a,{sx:{m:1,width:300},children:Object(E.jsx)(q.a,{MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},getContentAnchorEl:null},labelId:"demo-multiple-chip-label",id:"demo-multiple-chip",multiple:!0,name:"content",value:n.contents.content?n.contents.content:[],onChange:t,renderValue:function(e){return Object(E.jsx)(r.a,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((function(e){return Object(E.jsx)(M.a,{label:e},e)}))})},children:c.map((function(e){return Object(E.jsx)(z.a,{value:e.content,children:e.content},e.content)}))})})},H={topic:"",contents:{subject:"",content:""},students:{name:"",class:0},date:"",duration:""};console.log("defaultValues: ",H);var J=function(){var e=Object(c.useState)(H),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(T),l=Object(i.a)(s,2),o=l[0],b=l[1];console.log("formValues: ",n),console.log("filteredContents: ",o);var u=function(e){var t=e.target,c=t.name,s=t.value;console.log("name & value: ",c,s),function(e,t){"subject"===e&&("maths"===t?(b(T.filter((function(e){return"maths"===e.tag}))),console.log("contents after if: ",T)):"finnish"===t?(b(T.filter((function(e){return"finnish"===e.tag}))),console.log("contents after if: ",T)):"religion"===t?(b(T.filter((function(e){return"religion"===e.tag}))),console.log("contents after if: ",T)):"science"===t?(b(T.filter((function(e){return"science"===e.tag}))),console.log("contents after if: ",T)):(b(T),console.log("went to else")))}(c,s),a(Object(C.a)(Object(C.a)({},n),{},{contents:Object(C.a)(Object(C.a)({},n.contents),{},Object(y.a)({},c,"string"===typeof s?s.split(","):s))}))},x=function(e){var t=e.target,c=t.name,s=t.value;console.log("name & value: ",c,s),a(Object(C.a)(Object(C.a)({},n),{},{students:Object(C.a)(Object(C.a)({},n.students),{},Object(y.a)({},c,s))}))};return Object(E.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(n)},children:[Object(E.jsx)(r.a,{display:"flex",flexDirection:"column",children:Object(E.jsxs)(r.a,{display:"flex",flexDirection:"column",justifyContent:"flex-start",padding:"20px",children:[Object(E.jsxs)(r.a,{padding:"20px",children:["Topic",Object(E.jsx)(L,{handleTextInputChange:function(e){var t=e.target,c=t.name,s=t.value;console.log("name & value: ",c,s),a(Object(C.a)(Object(C.a)({},n),{},Object(y.a)({},c,s)))}}),Object(E.jsx)(W,{})]}),Object(E.jsxs)(r.a,{padding:"20px",display:"flex",flexDirection:"column",children:["Subject",Object(E.jsx)(F,{formValues:n,handleChange:u})]}),Object(E.jsxs)(r.a,{padding:"20px",display:"flex",flexDirection:"column",children:["Content",Object(E.jsx)(A,{handleChange:u,formValues:n,filteredContents:o})]}),Object(E.jsx)(r.a,{padding:"20px",display:"flex",flexDirection:"column",children:Object(E.jsxs)(w.a,{children:["Class",Object(E.jsxs)(S.a,{defaultValue:"1",name:"class",row:!0,onChange:x,children:[Object(E.jsx)(D.a,{value:"1",control:Object(E.jsx)(N.a,{style:{color:"#8bc34a"}}),label:"1"}),Object(E.jsx)(D.a,{value:"2",control:Object(E.jsx)(N.a,{style:{color:"#8bc34a"}}),label:"2"}),Object(E.jsx)(D.a,{value:"3",control:Object(E.jsx)(N.a,{style:{color:"#8bc34a"}}),label:"3"}),Object(E.jsx)(D.a,{value:"4",control:Object(E.jsx)(N.a,{style:{color:"#8bc34a"}}),label:"4"}),Object(E.jsx)(D.a,{value:"5",control:Object(E.jsx)(N.a,{style:{color:"#8bc34a"}}),label:"5"})]})]})}),Object(E.jsxs)(r.a,{padding:"20px",children:["Student",Object(E.jsx)(j.a,{id:"name-input",label:" ",required:!0,fullWidth:!0,className:"name",name:"name",onChange:x})]}),Object(E.jsx)(r.a,{padding:"20px",display:"flex",flexDirection:"column"})]})}),Object(E.jsx)(r.a,{display:"flex",justifyContent:"center",paddingTop:"20%",children:Object(E.jsx)(d.a,{variant:"contained",type:"submit",children:"Submit"})})]})},P=function(){var e=Object(l.c)((function(e){return e.lessons}));return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(J,{}),Object(E.jsxs)(r.a,{display:"flex",flexDirection:"column",padding:"20px",children:[Object(E.jsx)(r.a,{display:"flex",justifyContent:"end",padding:"20px",children:Object(E.jsx)(h.a,{children:Object(E.jsx)("i",{children:"User logged in"})})}),Object(E.jsxs)(r.a,{display:"flex",justifyContent:"space-around",padding:"20px",children:[Object(E.jsx)(x.b,{to:"/lessons",style:{textDecoration:"none",color:"#8bc34a"},children:Object(E.jsx)(h.a,{variant:"h5",children:Object(E.jsx)("i",{children:"Lessons"})})}),Object(E.jsx)(x.b,{to:"/newlesson",style:{textDecoration:"none",color:"#8bc34a"},children:Object(E.jsx)(h.a,{variant:"h5",children:"Create new lesson"})})]}),Object(E.jsx)(r.a,{display:"flex",justifyContent:"flex-start",padding:"20px",children:Object(E.jsx)(O.a,{children:Object(E.jsxs)(f.a,{children:[Object(E.jsx)(p.a,{children:Object(E.jsxs)(m.a,{children:[Object(E.jsx)(g.a,{children:"Topic"}),Object(E.jsx)(g.a,{children:"Subject"}),Object(E.jsx)(g.a,{children:"Content"}),Object(E.jsx)(g.a,{children:"Name"}),Object(E.jsx)(g.a,{children:"Class"}),Object(E.jsx)(g.a,{children:"Date"}),Object(E.jsx)(g.a,{children:"Duration"})]})}),Object(E.jsx)(v.a,{children:e.map((function(e){return Object(E.jsxs)(m.a,{children:[Object(E.jsx)(g.a,{children:Object(E.jsx)(h.a,{children:e.topic})}),Object(E.jsx)(g.a,{children:Object(E.jsx)(h.a,{children:e.contents.map((function(e){return e.subject}))})}),Object(E.jsx)(g.a,{children:Object(E.jsx)(h.a,{children:e.contents.map((function(e){return e.content}))})}),Object(E.jsx)(g.a,{children:Object(E.jsx)(h.a,{children:e.students.map((function(e){return e.name}))})}),Object(E.jsx)(g.a,{children:Object(E.jsx)(h.a,{children:e.students.map((function(e){return e.class}))})}),Object(E.jsx)(g.a,{children:Object(E.jsx)(h.a,{children:e.date})}),Object(E.jsx)(g.a,{children:Object(E.jsx)(h.a,{children:e.duration})})]},e.id)}))})]})})})]})]})},_=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return n?Object(E.jsx)(P,{}):Object(E.jsx)("div",{children:Object(E.jsx)(r.a,{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",flexDirection:"column",children:Object(E.jsxs)(r.a,{flexDirection:"column",display:"flex",alignItems:"center",children:[Object(E.jsxs)(r.a,{fontSize:"500%",letterSpacing:"10px",fontStyle:"italic",display:"flex",flexDirection:"row",className:"lessons",children:[Object(E.jsx)(o.a,{variant:"rounded",style:{backgroundColor:"#8bc34a",height:"20%",width:"6%"},children:Object(E.jsx)(u.a,{})}),"Lessons"]}),Object(E.jsxs)(r.a,{padding:2,height:"25%",width:"85%",children:[Object(E.jsx)(r.a,{children:Object(E.jsx)(j.a,{label:"username",autoFocus:!0,required:!0,fullWidth:!0,className:"username"})}),Object(E.jsx)(r.a,{children:Object(E.jsx)(j.a,{label:"password",type:"password",required:!0,fullWidth:!0,className:"password"})}),Object(E.jsx)(d.a,{className:"submit-btn",variant:"contained",onClick:function(){return a(!0)},children:"Log in"}),Object(E.jsx)(r.a,{display:"flex",justifyContent:"center",paddingTop:"20%",children:Object(E.jsx)(d.a,{variant:"contained",style:{backgroundColor:"#8bc34a"},children:"create new user"})})]})]})})})},B=n(11),R=n(75),U=n.n(R),G=n(93),K=n(94),Q=n.n(K),X=function(){return Q.a.get("/api/lessons").then((function(e){return e.data}))},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"INIT_LESSONS"===t.type?t.data:e},Z=function(){var e=Object(l.b)();return Object(c.useEffect)((function(){e(function(){var e=Object(G.a)(U.a.mark((function e(t){var n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:n=e.sent,t({type:"INIT_LESSONS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(E.jsx)(x.a,{children:Object(E.jsxs)(B.c,{children:[Object(E.jsx)(B.a,{path:"/",element:Object(E.jsx)(_,{})}),Object(E.jsx)(B.a,{path:"/lessons",element:Object(E.jsx)(P,{})}),Object(E.jsx)(B.a,{path:"/newlesson",element:Object(E.jsx)(J,{})})]})})},$=n(58),ee=n(96),te=n(95),ne=Object($.combineReducers)({lessons:Y}),ce=Object($.createStore)(ne,Object(te.composeWithDevTools)(Object($.applyMiddleware)(ee.a)));s.a.render(Object(E.jsx)(l.a,{store:ce,children:Object(E.jsx)(Z,{})}),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.2c2626b7.chunk.js.map