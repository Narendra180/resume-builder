(this["webpackJsonpresume-builder"]=this["webpackJsonpresume-builder"]||[]).push([[0],{37:function(e,t){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},85:function(e,t){},86:function(e,t){},87:function(e,t){},88:function(e,t){},89:function(e,t){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(28),i=n.n(r),s=(n(45),n(6)),o=(n(46),n(0));var l=function(e){var t=e.tabNumber,n=e.btnContent,c=e.handleTabButtonClick;return Object(o.jsx)("button",{className:"tab-btn",onClick:function(){return c(t)},children:n})};n(48);var u=function(e){var t=e.handleTabButtonClick;return Object(o.jsxs)("div",{className:"tabs-bar",children:[Object(o.jsx)(l,{handleTabButtonClick:t,btnContent:"Profile",tabNumber:0}),Object(o.jsx)(l,{handleTabButtonClick:t,btnContent:"Education",tabNumber:1}),Object(o.jsx)(l,{handleTabButtonClick:t,btnContent:"Skills",tabNumber:2}),Object(o.jsx)(l,{handleTabButtonClick:t,btnContent:"Projects",tabNumber:3}),Object(o.jsx)(l,{handleTabButtonClick:t,btnContent:"Social Media",tabNumber:4})]})},j=n(3),d=n(5),b=n(15),O=n(16),f=-1;n(54);var p=["label","component","warning"];var m=function(e){var t=e.label,n=e.component,a=e.warning,r=Object(O.a)(e,p),i=Object(c.useState)(null),l=Object(s.a)(i,2),u=l[0],j=l[1],b=Object(c.useRef)(null);Object(c.useEffect)((function(){j((console.log(f),f+=1)),console.log(b)}),[]);var m=function(){b.current.classList.add("focused")},h=function(){b.current.classList.remove("focused");var e=document.querySelector("#ci"+u);e.value.length>0?b.current.classList.add("value-present"):b.current.classList.remove("value-present"),console.log(e.value.length)},v=function(){b.current.classList.add("hovered")},x=function(){b.current.classList.remove("hovered")};return Object(o.jsxs)("div",{className:"custom-input-con-parent-div",children:[Object(o.jsxs)("div",{className:"custom-input-con ".concat(n),ref:b,children:[Object(o.jsx)("label",{className:"ci-label",htmlFor:"ci"+u,children:t||"label"}),"TA"!==n?Object(o.jsx)("input",Object(d.a)(Object(d.a)({className:"ci-input",id:"ci"+u},r),{},{onFocus:m,onBlur:h,onMouseOver:v,onMouseOutCapture:x})):Object(o.jsx)("textarea",Object(d.a)(Object(d.a)({className:"ci-input",id:"ci"+u},r),{},{onFocus:m,onBlur:h,onMouseOver:v,onMouseOutCapture:x})),Object(o.jsx)("fieldset",{className:"ci-fieldset",children:Object(o.jsx)("legend",{className:"ci-legend",children:t||"label"})})]}),a?Object(o.jsx)("div",{className:"warning-msg",children:a}):""]})},h=(n(55),["id","btnText","warning"]);var v=function(e){var t=e.id,n=e.btnText,c=e.warning,a=Object(O.a)(e,h);return Object(o.jsxs)("div",{className:"custom-file-upload-btn-con-prent-div",children:[Object(o.jsx)("div",{className:"custom-file-upload-btn-con",id:t||"cfubc",children:Object(o.jsxs)("label",{className:"upload-btn-label",children:[n||"Choose File",Object(o.jsx)("input",Object(d.a)({className:"input-file",type:"file"},a))]})}),c?Object(o.jsx)("div",{className:"warning-msg",children:c}):""]})};n(56);var x=Object(b.b)(null,(function(e){return{setProfileSection:function(t){e({type:"SET_PROFILE_SECTION",payload:t})}}}))((function(e){var t=e.setProfileSection,n=e.style,a=Object(c.useState)({firstname:"",lastname:"",phonenumber:"",address:"",profilePicture:""}),r=Object(s.a)(a,2),i=r[0],l=r[1],u=Object(c.useState)({firstnameWM:"",lastnameWM:"",phonenumberWM:"",addressWM:"",profilePictureWM:""}),b=Object(s.a)(u,2),O=b[0],f=b[1],p=Object(c.useRef)("");Object(c.useEffect)((function(){console.log(i),console.log(p),console.log("warnings state",O),i[p.current]&&(p.current,1)&&f(Object(d.a)(Object(d.a)({},O),{},Object(j.a)({},p.current+"WM",""))),"phonenumber"===p.current&&(/^[0-9]{10}$/.test(i.phonenumber)?f(Object(d.a)(Object(d.a)({},O),{},{phonenumberWM:""})):f(Object(d.a)(Object(d.a)({},O),{},{phonenumberWM:"Mobile number is in incorrect format"})))}),[i]);var h=function(e){var t=e.target,n=t.name,c=t.value,a=e.target;c.length>0?a.parentNode.classList.add("value-present"):a.parentNode.classList.remove("value-present"),p.current=n,l(Object(d.a)(Object(d.a)({},i),{},Object(j.a)({},n,c))),console.log(c,"valueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")};return Object(o.jsx)("div",{style:n,children:Object(o.jsxs)("form",{id:"profile-section-form",onSubmit:function(e){e.preventDefault(),console.log(i,O);var n=Object(d.a)({},O);for(var c in i)i[c]?i[c]||"phonenumber"===c||(n[c+"WM"]=""):(console.log(c),n[c+"WM"]="Please fill this required field");var a=!1;for(var r in n){if(n[r]){a=!1;break}a=!0}console.log(a),a?t(i):f(n)},style:{backgroundColor:"#deffde"},noValidate:!0,children:[Object(o.jsx)(m,{label:"First Name",name:"firstname",value:i.firstname,onChange:h,type:"text",required:!0,warning:O.firstnameWM}),Object(o.jsx)(m,{label:"Last Name",name:"lastname",value:i.lastname,onChange:h,type:"text",required:!0,warning:O.lastnameWM}),Object(o.jsx)(m,{label:"Phone Number",name:"phonenumber",value:i.phonenumber,onChange:h,pattern:"\\d*",type:"tel",maxLength:"10",title:"only numbers allowed",required:!0,warning:O.phonenumberWM}),Object(o.jsx)(v,{onChange:function(e){var t=e.nativeEvent.target.parentNode.parentNode,n=e.target.files[0];if(n){var c=URL.createObjectURL(n),a=new Image;if(a.src=c,a.onload=function(e){URL.revokeObjectURL(c);var t=document.createElement("canvas");t.width=100,t.height=120,t.getContext("2d").drawImage(a,0,0,100,120);var n=t.toDataURL("image/jpeg",1);l(Object(d.a)(Object(d.a)({},i),{},{profilePicture:n})),p.current="profilePicture"},t.childElementCount>1){t.querySelector(".selected-file-name-text").textContent=n.name}else{var r=document.createElement("div");r.classList.add("selected-file-name-text"),r.textContent=n.name,t.appendChild(r)}}},name:"profilepicture",accept:"image/*",btnText:"Choose Profile Picture",required:!0,warning:O.profilePictureWM}),Object(o.jsx)(m,{label:"Address",name:"address",value:i.address,onChange:h,required:!0,component:"TA",warning:O.addressWM}),Object(o.jsx)("button",{type:"submit",children:"save"})]})})})),y=n(17),g=n(97),S=["label","id"];function C(e){var t=e.label,n=e.id,c=Object(O.a)(e,S);return Object(o.jsxs)("div",{className:"form-group",children:[t?Object(o.jsx)("label",{htmlFor:n,children:t}):null,Object(o.jsx)("input",Object(d.a)({id:n},c))]})}var k=Object(c.forwardRef)((function(e,t){var n=Object(c.useState)({nameofcourse:"",coursecompletionyear:"",collegeschoolname:"",percentage:""}),a=Object(s.a)(n,2),r=a[0],i=a[1],l=function(e){var t=e.target,n=t.name,c=t.value;i(Object(d.a)(Object(d.a)({},r),{},Object(j.a)({},n,c)))};return Object(o.jsx)("div",{className:"course-from-div",children:Object(o.jsxs)("form",{id:"course-form",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},onSubmit:function(t){t.preventDefault(),e.addData({id:e.id,state:r})},"data-id":e.id,children:[Object(o.jsx)(C,{label:"Name of Course: ",id:"nameofcourse",name:"nameofcourse",value:r.nameofcourse,onChange:l,type:"text",required:!0}),Object(o.jsx)(C,{label:"Course Completion Year: ",id:"coursecompletionyear",name:"coursecompletionyear",value:r.coursecompletionyear,onChange:l,type:"text",required:!0}),Object(o.jsx)(C,{label:"College/School Name : ",id:"collegeschoolname",name:"collegeschoolname",value:r.collegeschoolname,onChange:l,type:"text",required:!0}),Object(o.jsx)(C,{label:"Percentage: ",id:"percentage",name:"percentage",value:r.percentage,onChange:l,type:"text",required:!0}),Object(o.jsx)("button",{type:"button",onClick:function(){return e.deleteCourse(e.id)},children:"\u2715"}),Object(o.jsx)("button",{style:{display:"none"},ref:t,type:"submit",children:"submit"})]})})}));var N=Object(b.b)(null,(function(e){return{setEducationSection:function(t){e(function(e){return{type:"SET_EDUCATION_SECTION",payload:e}}(t))}}}))((function(e){var t=e.setEducationSection,n=e.style,a=Object(c.useRef)([]),r=Object(c.useRef)([]),i=Object(c.useRef)([]);Object(c.useEffect)((function(){i.current=f}));var l=function(e){if(e){var t=e.parentElement.dataset.id,n=Object(j.a)({},t,e);a.current.push(n)}},u=function(e){var t=e.id,n=e.state,c=r.current.findIndex((function(e){return e.hasOwnProperty(t)}));if(-1===c){var a=Object(j.a)({},t,n);r.current.push(a)}else r.current[c][t]=n},d=function(e){if(i.current.length>1){var t=r.current.findIndex((function(t){return t.hasOwnProperty(e)}));t>-1&&r.current.splice(t,1),a.current.find((function(t,n){return t.hasOwnProperty(e)&&a.current.splice(n,1),t.hasOwnProperty(e)})),p(i.current.filter((function(t){return t.props.id!==e})))}},b=Object(c.useState)([Object(o.jsx)(k,{id:Object(g.a)(),ref:l,addData:u,deleteCourse:d},Object(g.a)())]),O=Object(s.a)(b,2),f=O[0],p=O[1];return Object(o.jsxs)("div",{style:n,children:[f,Object(o.jsx)("button",{onClick:function(){a.current.forEach((function(e){for(var t in e)e[t].click()})),r.current.length&&t(Object(y.a)(r.current))},children:"save"}),Object(o.jsx)("button",{onClick:function(){p(f.concat(Object(o.jsx)(k,{id:Object(g.a)(),ref:l,addData:u,deleteCourse:d},Object(g.a)())))},children:"Add Course"})]})})),P=Object(c.forwardRef)((function(e,t){var n=Object(c.useState)({skill:""}),a=Object(s.a)(n,2),r=a[0],i=a[1];return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{id:"skill-form",onSubmit:function(t){t.preventDefault(),e.addData({id:e.id,state:r})},onKeyPress:function(e){return"Enter"===e.key&&e.preventDefault()},"data-id":e.id,children:[Object(o.jsx)(C,{label:"Skill: ",id:"skill",name:"skill",value:r.skill,onChange:function(e){var t=e.target,n=t.name,c=t.value;i(Object(d.a)(Object(d.a)({},r),{},Object(j.a)({},n,c)))},type:"text",required:!0}),Object(o.jsx)("button",{type:"button",onClick:function(){return e.deleteCourse(e.id)},children:"\u2715"}),Object(o.jsx)("button",{style:{display:"none"},ref:t,children:"submit"})]})})}));var w=Object(b.b)(null,(function(e){return{setSkillsSection:function(t){return e({type:"SET_SKILLS_SECTION",payload:t})}}}))((function(e){var t=e.setSkillsSection,n=e.style,a=Object(c.useRef)([]),r=Object(c.useRef)([]),i=Object(c.useRef)([]);Object(c.useEffect)((function(){i.current=f}));var l=function(e){if(e){var t=e.parentElement.dataset.id,n=Object(j.a)({},t,e);a.current.push(n)}},u=function(e){var t=e.id,n=e.state,c=r.current.findIndex((function(e){return e.hasOwnProperty(t)}));if(-1===c){var a=Object(j.a)({},t,n);r.current.push(a)}else r.current[c][t]=n},d=function(e){if(i.current.length>1){var t=r.current.findIndex((function(t){return t.hasOwnProperty(e)}));t>-1&&r.current.splice(t,1),a.current.find((function(t,n){return t.hasOwnProperty(e)&&a.current.splice(n,1),t.hasOwnProperty(e)})),p(i.current.filter((function(t){return t.props.id!==e})))}},b=Object(c.useState)([Object(o.jsx)(P,{id:Object(g.a)(),ref:l,addData:u,deleteCourse:d},Object(g.a)())]),O=Object(s.a)(b,2),f=O[0],p=O[1];return Object(o.jsxs)("div",{style:n,children:[f,Object(o.jsx)("button",{onClick:function(){a.current.forEach((function(e){for(var t in e)e[t].click()})),r.current.length&&t(Object(y.a)(r.current))},children:"save"}),Object(o.jsx)("button",{onClick:function(){p(f.concat(Object(o.jsx)(P,{id:Object(g.a)(),ref:l,addData:u,deleteCourse:d},Object(g.a)())))},children:"Add Skill"})]})})),D=["label","id"];function E(e){var t=e.label,n=e.id,c=Object(O.a)(e,D);return Object(o.jsxs)("div",{className:"form-group",children:[t?Object(o.jsx)("label",{htmlFor:n,children:t}):null,Object(o.jsx)("textarea",Object(d.a)({id:n},c))]})}var M=Object(c.forwardRef)((function(e,t){var n=e.addData,a=e.id,r=e.deleteMiniProject,i=Object(c.useState)({projectname:"",techstackused:"",projectdescription:""}),l=Object(s.a)(i,2),u=l[0],b=l[1],O=function(e){var t=e.target,n=t.name,c=t.value;b(Object(d.a)(Object(d.a)({},u),{},Object(j.a)({},n,c)))};return Object(o.jsx)("div",{className:"mini-project-form",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("submitted"),n({id:a,state:u})},onKeyPress:function(e){return"Enter"===e.key&&e.preventDefault()},"data-id":a,children:[Object(o.jsx)(C,{label:"Project Name: ",id:"projectname",name:"projectname",value:u.projectname,onChange:O,type:"text"}),Object(o.jsx)(E,{label:"Tech Stack Used: ",id:"techstackused",name:"techstackused",value:u.techstackused,onChange:O,type:"text"}),Object(o.jsx)(E,{label:"Project Description: ",id:"projectdescription",name:"projectdescription",value:u.projectdescription,onChange:O,type:"text"}),Object(o.jsx)("button",{type:"button",onClick:function(){return r(a)},children:"\u2715"}),Object(o.jsx)("button",{style:{display:"none"},ref:t,children:"submit"})]})})}));var T=Object(b.b)(null,(function(e){return{setMiniProjectSection:function(t){return e({type:"SET_MINI_PROJECT_SECTION",payload:t})}}}))((function(e){var t=e.setMiniProjectSection,n=e.style,a=Object(c.useRef)([]),r=Object(c.useRef)([]),i=Object(c.useRef)([]);Object(c.useEffect)((function(){i.current=f}));var l=function(e){if(e){var t=e.parentElement.dataset.id,n=Object(j.a)({},t,e);a.current.push(n)}},u=function(e){var t=e.id,n=e.state,c=r.current.findIndex((function(e){return e.hasOwnProperty(t)}));if(-1===c){var a=Object(j.a)({},t,n);r.current.push(a)}else r.current[c][t]=n},d=function(e){if(i.current.length>1){var t=r.current.findIndex((function(t){return t.hasOwnProperty(e)}));t>-1&&r.current.splice(t,1),a.current.find((function(t,n){return t.hasOwnProperty(e)&&a.current.splice(n,1),t.hasOwnProperty(e)})),p(i.current.filter((function(t){return t.props.id!==e})))}},b=Object(c.useState)([Object(o.jsx)(M,{addData:u,id:Object(g.a)(),ref:l,deleteMiniProject:d},Object(g.a)())]),O=Object(s.a)(b,2),f=O[0],p=O[1];return Object(o.jsxs)("div",{style:n,children:[f,Object(o.jsx)("button",{onClick:function(){a.current.forEach((function(e){for(var t in e)e[t].click()})),t(Object(y.a)(r.current))},children:"save"}),Object(o.jsx)("button",{onClick:function(){p(f.concat(Object(o.jsx)(M,{addData:u,id:Object(g.a)(),ref:l,deleteMiniProject:d},Object(g.a)())))},children:"Add Project"})]})})),I=Object(c.forwardRef)((function(e,t){var n=e.addData,a=e.id,r=e.deleteSocialMention,i=Object(c.useState)({nameofsocialmedia:"",links:""}),l=Object(s.a)(i,2),u=l[0],b=l[1],O=function(e){var t=e.target,n=t.name,c=t.value;b(Object(d.a)(Object(d.a)({},u),{},Object(j.a)({},n,c)))};return Object(o.jsx)("div",{className:"social-mention-form",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n({id:a,state:u})},onKeyPress:function(e){return"Enter"===e.key&&e.preventDefault()},"data-id":a,children:[Object(o.jsx)(C,{label:"Name of Social Media: ",id:"nameofsocialmedia",name:"nameofsocialmedia",value:u.nameofsocialmedia,onChange:O,type:"text"}),Object(o.jsx)(E,{label:"Links: ",id:"links",name:"links",value:u.links,onChange:O,type:"text"}),Object(o.jsx)("button",{type:"button",onClick:function(){return r(a)},children:"\u2715"}),Object(o.jsx)("button",{style:{display:"none"},ref:t,children:"submit"})]})})}));var R=Object(b.b)(null,(function(e){return{setSocialMentionSection:function(t){return e({type:"SET_SOCIAL_MENTION_SECTION",payload:t})}}}))((function(e){var t=e.setSocialMentionSection,n=e.style,a=Object(c.useRef)([]),r=Object(c.useRef)([]),i=Object(c.useRef)([]);Object(c.useEffect)((function(){i.current=f}));var l=function(e){var t=e.id,n=e.state,c=r.current.findIndex((function(e){return e.hasOwnProperty(t)}));if(-1===c){var a=Object(j.a)({},t,n);r.current.push(a)}else r.current[c][t]=n},u=function(e){if(e){var t=e.parentElement.dataset.id,n=Object(j.a)({},t,e);a.current.push(n)}},d=function(e){if(i.current.length>1){var t=r.current.findIndex((function(t){return t.hasOwnProperty(e)}));t>-1&&r.current.splice(t,1),a.current.find((function(t,n){return t.hasOwnProperty(e)&&a.current.splice(n,1),t.hasOwnProperty(e)})),p(i.current.filter((function(t){return t.props.id!==e})))}},b=Object(c.useState)([Object(o.jsx)(I,{addData:l,id:Object(g.a)(),ref:u,deleteSocialMention:d},Object(g.a)())]),O=Object(s.a)(b,2),f=O[0],p=O[1];return Object(o.jsxs)("div",{style:n,children:[f,Object(o.jsx)("button",{onClick:function(){a.current.forEach((function(e){for(var t in e)e[t].click()})),t(Object(y.a)(r.current))},children:"save"}),Object(o.jsx)("button",{onClick:function(){p(f.concat(Object(o.jsx)(I,{addData:l,id:Object(g.a)(),ref:u,deleteSocialMention:d},Object(g.a)())))},children:"Add Social Mention"})]})}));n(57);var L=function(e){var t=e.activeTab;return Object(o.jsxs)("div",{className:"tab-content",children:[Object(o.jsx)(x,{style:0===t?{}:{display:"none"}}),Object(o.jsx)(N,{style:1===t?{}:{display:"none"}}),Object(o.jsx)(w,{style:2===t?{}:{display:"none"}}),Object(o.jsx)(T,{style:3===t?{}:{display:"none"}}),Object(o.jsx)(R,{style:4===t?{}:{display:"none"}})]})};n(58);var _=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)("div",{className:"tabcomponent-container",children:[Object(o.jsx)(u,{handleTabButtonClick:function(e){a(e)}}),Object(o.jsx)(L,{activeTab:n})]})},q=(n(59),n(24));var W=Object(b.b)((function(e){return{profileData:e.profileSection.profileData,educationData:e.educationSection.educationData,skillsData:e.skillsSection.skillsData,miniProjectData:e.miniProjectSection.miniProjectData,socialMentionData:e.socialMentionSection.socialMentionData}}))((function(e){var t=e.profileData,n=e.educationData,c=e.skillsData,a=e.miniProjectData,r=e.socialMentionData;return Object(o.jsxs)("div",{style:{display:"none"},children:[Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"button",onClick:function(){new q.a({orientation:"p",unit:"px",format:"a4",hotfixes:["px_scaling"]}).html(document.querySelector("#resume-div"),{callback:function(e){console.log(e.internal),t.firstname?e.save(t.firstname):e.save("generated")},margin:[60,60,65,65]})},children:"Download"})}),Object(o.jsxs)("div",{className:"resume",id:"resume-div",children:[Object(o.jsxs)("section",{className:"profile-section",children:[Object(o.jsx)("img",{src:t.profilePicture,alt:"profile"}),Object(o.jsxs)("h1",{children:[t.firstname," ",t.lastname]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Phone no: "}),t.phonenumber]}),Object(o.jsx)("p",{className:"address",children:t.address})]}),Object(o.jsxs)("section",{className:"education-section",children:[Object(o.jsx)("h1",{children:"Educational Qualifications"}),Object(o.jsx)("ul",{children:n.map((function(e){var t=Object.values(e)[0],n=t.nameofcourse,c=t.coursecompletionyear,a=t.collegeschoolname,r=t.percentage;return Object(o.jsx)("li",{children:Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:n})," \u2014 completed ",n," from ",Object(o.jsxs)("b",{children:[a," "]}),"in ",c," with the percentage of ",r,"."]})},Object(g.a)())}))})]}),Object(o.jsxs)("section",{className:"skills-section",children:[Object(o.jsx)("h1",{children:"Skills"}),Object(o.jsx)("ul",{children:c.map((function(e){var t=Object.values(e)[0].skill;return Object(o.jsx)("li",{children:t},Object(g.a)())}))})]}),Object(o.jsxs)("section",{className:"projects-section",children:[Object(o.jsx)("h1",{children:"Projects"}),Object(o.jsx)("ul",{children:a.map((function(e){var t=Object.values(e)[0],n=t.projectname,c=t.techstackused,a=t.projectdescription;return Object(o.jsx)("li",{children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)("h2",{children:n}),Object(o.jsxs)("p",{children:[c?Object(o.jsx)("b",{children:"Tech Stack: "}):null,c]}),Object(o.jsxs)("p",{children:[a?Object(o.jsx)("b",{children:"Description: "}):null,a]})]})},Object(g.a)())}))})]}),Object(o.jsxs)("section",{className:"social-links",children:[Object(o.jsx)("h1",{children:"My online presence"}),Object(o.jsx)("ul",{children:r.map((function(e){var t=Object.values(e)[0],n=t.nameofsocialmedia,c=t.links;return Object(o.jsx)("li",{children:Object(o.jsxs)("div",{className:"social",children:[Object(o.jsx)("h3",{children:n?Object(o.jsx)("b",{children:n+": "}):null}),Object(o.jsx)("p",{style:{width:"150px"},children:c})]})},Object(g.a)())}))})]})]})]})})),F=n(22);n(90);F.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/\n".concat(F.c.version,"/pdf.worker.min.js");var A=function(e){var t=e.generatedPdf,n=e.setDisplayResumePreviewModal,a=Object(c.useState)(null),r=Object(s.a)(a,2),i=r[0],l=r[1],u=Object(c.useState)(1),j=Object(s.a)(u,1)[0];return Object(o.jsxs)("div",{className:"resume-preview",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h1",{children:"Resume Preview"}),Object(o.jsx)("button",{onClick:n,children:"\u2715"})]}),Object(o.jsxs)("div",{className:"resume-preview-content",children:[Object(o.jsx)(F.a,{file:t,onLoadSuccess:function(e){var t=e.numPages;l(t)},children:Array.from(new Array(i),(function(e,t){return Object(o.jsx)(F.b,{pageNumber:t+1},"page_".concat(t+1))}))}),Object(o.jsxs)("p",{children:["Page ",j," of ",i]})]})]})};n(91);var B=function(){var e=Object(c.useState)({displayResumePreviewModal:!1,generatedPdf:""}),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)("div",{className:"preview-download",children:[Object(o.jsxs)("div",{className:"preview-download-btns",children:[Object(o.jsx)("button",{onClick:function(){new q.a({orientation:"p",unit:"px",format:"a4",hotfixes:["px_scaling"]}).html(document.querySelector("#resume-div"),{callback:function(e){var t=e.output("dataurlstring");a(Object(d.a)(Object(d.a)({},n),{},{displayResumePreviewModal:!0,generatedPdf:t}))},margin:[70,70,70,70]})},className:"preview-btn btn",children:"Resume preview"}),Object(o.jsx)("button",{onClick:function(){new q.a({orientation:"p",unit:"px",format:"a4",hotfixes:["px_scaling"],putOnlyUsedFonts:!0}).html(document.querySelector("#resume-div"),{callback:function(e){e.save("generated")},margin:[70,70,70,70]})},className:"download-btn btn",children:"Download"})]}),n.displayResumePreviewModal?Object(o.jsx)(A,{generatedPdf:n.generatedPdf,setDisplayResumePreviewModal:function(){a(Object(d.a)(Object(d.a)({},n),{},{displayResumePreviewModal:!1}))}}):null]})};n(92);var U=function(){return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("h1",{className:"app-title",children:"Resume Builder"}),Object(o.jsx)(_,{}),Object(o.jsx)(B,{}),Object(o.jsx)(W,{})]})},K=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,233)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},J=n(25),G=n(39),Q=n.n(G),V={profileData:{firstname:"",lastname:"",phonenumber:"",address:"",profilePicture:""}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PROFILE_SECTION":return Object(d.a)(Object(d.a)({},e),{},{profileData:t.payload});default:return e}},$={educationData:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EDUCATION_SECTION":return Object(d.a)(Object(d.a)({},e),{},{educationData:t.payload});default:return e}},H={skillsData:[]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SKILLS_SECTION":return Object(d.a)(Object(d.a)({},e),{},{skillsData:t.payload});default:return e}},Z={miniProjectData:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MINI_PROJECT_SECTION":return Object(d.a)(Object(d.a)({},e),{},{miniProjectData:t.payload});default:return e}},te={socialMentionData:[]},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SOCIAL_MENTION_SECTION":return Object(d.a)(Object(d.a)({},e),{},{socialMentionData:t.payload});default:return e}},ce=Object(J.b)({profileSection:Y,educationSection:z,skillsSection:X,miniProjectSection:ee,socialMentionSection:ne}),ae=[Q.a],re=Object(J.c)(ce,J.a.apply(void 0,ae));i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(b.a,{store:re,children:Object(o.jsx)(U,{})})}),document.getElementById("root")),K()}},[[93,1,3]]]);
//# sourceMappingURL=main.169e05f4.chunk.js.map