(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{107:function(e,a,t){e.exports=t(119)},119:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(9),c=t.n(i),l=t(37),o=t(39),m=t(17),s=t(88),p=t(182),d=t(4),u=t(183),g=t(186),E=t(42),b=t(180),f=t(89),h=t(3),v=t(170),y=t(188),N=t(166),j=t(167),w=t(168),x=t(169),k=t(80),O=t.n(k),C=t(68),A=t.n(C),I=t(72),S=t.n(I),B=t(73),T=t.n(B),R=t(74),H=t.n(R),P=t(75),M=t.n(P),W=t(76),D=t.n(W),z=t(78),U=t.n(z),L=t(77),F=t.n(L),J=t(79),q=t.n(J),G=[{id:"Develop",children:[{id:"Authentication",icon:r.a.createElement(A.a,null),active:!0},{id:"Database",icon:r.a.createElement(S.a,null)},{id:"Storage",icon:r.a.createElement(T.a,null)},{id:"Hosting",icon:r.a.createElement(H.a,null)},{id:"Functions",icon:r.a.createElement(M.a,null)},{id:"ML Kit",icon:r.a.createElement(D.a,null)}]},{id:"Quality",children:[{id:"Analytics",icon:r.a.createElement(F.a,null)},{id:"Performance",icon:r.a.createElement(U.a,null)},{id:"Test Lab",icon:r.a.createElement(q.a,null)}]}];var K=Object(d.a)((function(e){return{categoryHeader:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},categoryHeaderPrimary:{color:e.palette.common.white},item:{paddingTop:1,paddingBottom:1,color:"rgba(255, 255, 255, 0.7)","&:hover,&:focus":{backgroundColor:"rgba(255, 255, 255, 0.08)"}},itemCategory:{backgroundColor:"#232f3e",boxShadow:"0 -1px 0 #404854 inset",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},firebase:{fontSize:24,color:e.palette.common.white},itemActiveItem:{color:"#4fc3f7"},itemPrimary:{fontSize:"inherit"},itemIcon:{minWidth:"auto",marginRight:e.spacing(2)},divider:{marginTop:e.spacing(2)}}}))((function(e){var a=e.classes,t=Object(f.a)(e,["classes"]);return r.a.createElement(y.a,Object.assign({variant:"permanent"},t),r.a.createElement(N.a,{disablePadding:!0},r.a.createElement(j.a,{className:Object(h.a)(a.firebase,a.item,a.itemCategory)},"The Random Recruiter"),r.a.createElement(j.a,{className:Object(h.a)(a.item,a.itemCategory)},r.a.createElement(w.a,{className:a.itemIcon},r.a.createElement(O.a,null)),r.a.createElement(x.a,{classes:{primary:a.itemPrimary}},"Project Overview")),G.map((function(e){var t=e.id,n=e.children;return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(j.a,{className:a.categoryHeader},r.a.createElement(x.a,{classes:{primary:a.categoryHeaderPrimary}},t)),n.map((function(e){var t=e.id,n=e.icon,i=e.active;return r.a.createElement(j.a,{key:t,button:!0,className:Object(h.a)(a.item,i&&a.itemActiveItem)},r.a.createElement(w.a,{className:a.itemIcon},n),r.a.createElement(x.a,{classes:{primary:a.itemPrimary}},t))})),r.a.createElement(v.a,{className:a.divider}))}))))})),Q=t(171),Y=t(172),V=t(92),X=t(173),Z=t(175),$=t(184),_=t(189),ee=t(176),ae=t(59),te=t.n(ae),ne=t(81),re=t.n(ne),ie=t(84),ce=t.n(ie),le=t(83),oe=t.n(le),me=t(58),se=t(177),pe=t(179),de=t(178),ue={id:"1",name:"An easy job",newApplicantName:"",applicants:[{id:"1",name:"Foo",isHired:!1},{id:"2",name:"Bar",isHired:!1}]},ge=r.a.createElement("span",null," (Hired!)");var Ee=Object(d.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},searchBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},searchBarColor:{background:"#ffffff",borderRadius:"8px"},searchInput:{fontSize:e.typography.fontSize},block:{display:"block"},addUser:{marginRight:e.spacing(1)},contentWrapper:{margin:"20px 16px"},jobCard:{margin:e.spacing(2),background:"#e5f5fc"}}}))((function(e){var a=e.classes,t=r.a.useState([ue]),n=Object(l.a)(t,2),i=n[0],c=n[1],o=r.a.useState(""),s=Object(l.a)(o,2),p=s[0],d=s[1],u=r.a.useState(-1),g=Object(l.a)(u,2),b=(g[0],g[1]);function f(e){var a,t=i.find((function(a){return a.id===e})).applicants.length;(a=t,fetch("https://www.random.org/integers/?num=1&min=0&max=".concat(a-1,"&col=1&base=10&format=plain&rnd=new")).then((function(e){return e.text()})).then((function(e){return console.log("For transparency reasons, the plain result was: "+e),parseInt(e)}),(function(e){return console.log(e),-2}))).then((function(a){b(a),function(e,a){console.log("job: "+a+" > "+e);var t=i.map((function(t){return t.id===a?Object(m.a)(Object(m.a)({},t),{},{applicants:t.applicants.map((function(a,t){return Object(m.a)(Object(m.a)({},a),{},{isHired:t===e})}))}):t}));c(t)}(a,e)}))}return r.a.createElement(V.a,{className:a.paper},r.a.createElement(Q.a,{className:a.searchBar,position:"static",color:"default",elevation:0},r.a.createElement(Y.a,null,r.a.createElement(X.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(X.a,{item:!0},r.a.createElement(re.a,{className:a.block,color:"inherit"})),r.a.createElement(X.a,{item:!0,xs:!0},r.a.createElement($.a,{fullWidth:!0,placeholder:"Job name",InputProps:{disableUnderline:!0,className:a.searchInput},value:p,onChange:function(e){d(e.target.value)}})),r.a.createElement(X.a,{item:!0},r.a.createElement(Z.a,{variant:"contained",className:a.addUser,onClick:function(){if(""!==p){var e=i.concat({name:p,id:Object(me.v4)(),newApplicantName:"",applicants:[]});c(e),d("")}}},"Add Job"),r.a.createElement(_.a,{title:"Reload"},r.a.createElement(ee.a,null,r.a.createElement(oe.a,{className:a.block,color:"inherit"}))))))),r.a.createElement("div",{className:a.contentWrapper},i.length?r.a.createElement(N.a,null,i.map((function(e){return r.a.createElement(se.a,{className:a.jobCard,key:e.id},r.a.createElement(de.a,null,r.a.createElement(E.a,{className:a.title,color:"textPrimary",gutterBottom:!0},e.name),r.a.createElement(Y.a,{className:a.searchBarColor},r.a.createElement(X.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(X.a,{item:!0},r.a.createElement(ce.a,{className:a.block,color:"inherit"})),r.a.createElement(X.a,{item:!0,xs:!0},r.a.createElement($.a,{fullWidth:!0,placeholder:"Applicant name",InputProps:{disableUnderline:!0,className:a.searchInput},value:e.newApplicantName,onChange:function(a){return function(e,a){var t=i.map((function(t){return t.id===a?Object(m.a)(Object(m.a)({},t),{},{newApplicantName:e.target.value}):t}));c(t)}(a,e.id)}})),r.a.createElement(X.a,{item:!0},r.a.createElement(Z.a,{variant:"contained",className:a.addUser,onClick:function(){return function(e){var a=i.map((function(a){return a.id===e&&""!==a.newApplicantName?Object(m.a)(Object(m.a)({},a),{},{applicants:a.applicants.concat({name:a.newApplicantName,id:Object(me.v4)(),isHired:!1}),newApplicantName:""}):a}));c(a)}(e.id)}},"Add Applicant")))),r.a.createElement(N.a,null,e.applicants.map((function(a){return r.a.createElement(j.a,{key:a.id},r.a.createElement(x.a,null,a.name,a.isHired?ge:null),r.a.createElement(ee.a,{"aria-label":"delete",onClick:function(){return function(e,a){var t=i.map((function(t){return t.id===a?Object(m.a)(Object(m.a)({},t),{},{applicants:t.applicants.filter((function(a){return a.id!==e}))}):t}));c(t)}(a.id,e.id)}},r.a.createElement(te.a,null)))})))),r.a.createElement(pe.a,null,r.a.createElement(ee.a,{"aria-label":"delete",onClick:function(){return function(e){var a=i.filter((function(a){return a.id!==e}));c(a)}(e.id)}},r.a.createElement(te.a,null)),r.a.createElement(Z.a,{size:"large","aria-label":"assign",onClick:function(){return f(e.id)}},"HIRE!")))}))):r.a.createElement(E.a,{color:"textSecondary",align:"center"},"No Jobs for this project yet")))})),be=t(190),fe=t(87),he=t.n(fe),ve=t(85),ye=t.n(ve),Ne=t(86),je=t.n(Ne),we=t(181),xe=t(185);var ke=Object(d.a)((function(e){return{secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:"rgba(255, 255, 255, 0.7)","&:hover":{color:e.palette.common.white}},button:{borderColor:"rgba(255, 255, 255, 0.7)"}}}))((function(e){var a=e.classes,t=e.onDrawerToggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,{color:"primary",position:"sticky",elevation:0},r.a.createElement(Y.a,null,r.a.createElement(X.a,{container:!0,spacing:1,alignItems:"center"},r.a.createElement(g.a,{smUp:!0},r.a.createElement(X.a,{item:!0},r.a.createElement(ee.a,{color:"inherit","aria-label":"open drawer",onClick:t,className:a.menuButton},r.a.createElement(ye.a,null)))),r.a.createElement(X.a,{item:!0,xs:!0}),r.a.createElement(X.a,{item:!0},r.a.createElement(b.a,{className:a.link,href:"#",variant:"body2"},"Go to docs")),r.a.createElement(X.a,{item:!0},r.a.createElement(_.a,{title:"Alerts \u2022 No alerts"},r.a.createElement(ee.a,{color:"inherit"},r.a.createElement(je.a,null)))),r.a.createElement(X.a,{item:!0},r.a.createElement(ee.a,{color:"inherit",className:a.iconButtonAvatar},r.a.createElement(be.a,{src:"/static/images/avatar/1.jpg",alt:"My Avatar"})))))),r.a.createElement(Q.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0},r.a.createElement(Y.a,null,r.a.createElement(X.a,{container:!0,alignItems:"center",spacing:1},r.a.createElement(X.a,{item:!0,xs:!0},r.a.createElement(E.a,{color:"inherit",variant:"h5",component:"h1"},"Authentication")),r.a.createElement(X.a,{item:!0},r.a.createElement(Z.a,{className:a.button,variant:"outlined",color:"inherit",size:"small"},"Web setup")),r.a.createElement(X.a,{item:!0},r.a.createElement(_.a,{title:"Help"},r.a.createElement(ee.a,{color:"inherit"},r.a.createElement(he.a,null))))))),r.a.createElement(Q.a,{component:"div",className:a.secondaryBar,position:"static",elevation:0},r.a.createElement(xe.a,{value:0,textColor:"inherit"},r.a.createElement(we.a,{label:"Users"}),r.a.createElement(we.a,{label:"Sign-in method"}),r.a.createElement(we.a,{label:"Templates"}),r.a.createElement(we.a,{label:"Usage"}))))}));function Oe(){return r.a.createElement(E.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(b.a,{color:"inherit",href:"https://material-ui.com/"},"Random Recruiter")," ",(new Date).getFullYear(),".")}var Ce=Object(s.a)({palette:{primary:{light:"#63ccff",main:"#009be5",dark:"#006db3"}},typography:{h5:{fontWeight:500,fontSize:26,letterSpacing:.5}},shape:{borderRadius:8},props:{MuiTab:{disableRipple:!0}},mixins:{toolbar:{minHeight:48}}});Ce=Object(m.a)(Object(m.a)({},Ce),{},{overrides:{MuiDrawer:{paper:{backgroundColor:"#18202c"}},MuiButton:{label:{textTransform:"none"},contained:{boxShadow:"none","&:active":{boxShadow:"none"}}},MuiTabs:{root:{marginLeft:Ce.spacing(1)},indicator:{height:3,borderTopLeftRadius:3,borderTopRightRadius:3,backgroundColor:Ce.palette.common.white}},MuiTab:{root:Object(o.a)({textTransform:"none",margin:"0 16px",minWidth:0,padding:0},Ce.breakpoints.up("md"),{padding:0,minWidth:0})},MuiIconButton:{root:{padding:Ce.spacing(1)}},MuiTooltip:{tooltip:{borderRadius:4}},MuiDivider:{root:{backgroundColor:"#404854"}},MuiListItemText:{primary:{fontWeight:Ce.typography.fontWeightMedium}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}},MuiAvatar:{root:{width:32,height:32}}}});var Ae={root:{display:"flex",minHeight:"100vh"},drawer:Object(o.a)({},Ce.breakpoints.up("sm"),{width:256,flexShrink:0}),app:{flex:1,display:"flex",flexDirection:"column"},main:{flex:1,padding:Ce.spacing(6,4),background:"#eaeff1"},footer:{padding:Ce.spacing(2),background:"#eaeff1"}};var Ie=Object(d.a)(Ae)((function(e){var a=e.classes,t=r.a.useState(!1),n=Object(l.a)(t,2),i=n[0],c=n[1],o=function(){c(!i)};return r.a.createElement(p.a,{theme:Ce},r.a.createElement("div",{className:a.root},r.a.createElement(u.a,null),r.a.createElement("nav",{className:a.drawer},r.a.createElement(g.a,{smUp:!0,implementation:"js"},r.a.createElement(K,{PaperProps:{style:{width:256}},variant:"temporary",open:i,onClose:o})),r.a.createElement(g.a,{xsDown:!0,implementation:"css"},r.a.createElement(K,{PaperProps:{style:{width:256}}}))),r.a.createElement("div",{className:a.app},r.a.createElement(ke,{onDrawerToggle:o}),r.a.createElement("main",{className:a.main},r.a.createElement(Ee,null)),r.a.createElement("footer",{className:a.footer},r.a.createElement(Oe,null)))))}));c.a.render(r.a.createElement(Ie,null),document.querySelector("#root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.a70f5fba.chunk.js.map