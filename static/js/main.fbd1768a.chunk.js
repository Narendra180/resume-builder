(this["webpackJsonpresume-builder"]=this["webpackJsonpresume-builder"]||[]).push([[0],{37:function(e,t){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},87:function(e,t){},88:function(e,t){},89:function(e,t){},90:function(e,t){},91:function(e,t){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(28),i=n.n(a),s=(n(45),n(6)),o=(n(46),n(0));var l=function(e){var t=e.tabNumber,n=e.btnContent,c=e.handleTabButtonClick;return Object(o.jsx)("button",{className:"tab-btn",onClick:function(){return c(t)},children:n})};n(48);var u=function(e){var t=e.handleTabButtonClick;return Object(o.jsxs)("div",{className:"tabs-bar",children:[Object(o.jsx)(l,{handleTabButtonClick:t,btnContent:"Profile",tabNumber:0}),Object(o.jsx)(l,{handleTabButtonClick:t,btnContent:"Education",tabNumber:1}),Object(o.jsx)(l,{handleTabButtonClick:t,btnContent:"Skills",tabNumber:2}),Object(o.jsx)(l,{handleTabButtonClick:t,btnContent:"Projects",tabNumber:3}),Object(o.jsx)(l,{handleTabButtonClick:t,btnContent:"Social Media",tabNumber:4})]})},j=n(3),d=n(5),b=n(15),f=n(17),O=-1;n(54);var p=["label","component","warning"];var m=function(e){var t=e.label,n=e.component,r=e.warning,a=Object(f.a)(e,p),i=Object(c.useState)(null),l=Object(s.a)(i,2),u=l[0],j=l[1],b=Object(c.useRef)(null);Object(c.useEffect)((function(){j(O+=1)}),[]);var m=function(){b.current.classList.add("focused")},h=function(){b.current.classList.remove("focused"),document.querySelector("#ci"+u).value.length>0?b.current.classList.add("value-present"):b.current.classList.remove("value-present")},v=function(){b.current.classList.add("hovered")},x=function(){b.current.classList.remove("hovered")};return Object(o.jsxs)("div",{className:"custom-input-con-parent-div",children:[Object(o.jsxs)("div",{className:"custom-input-con ".concat(n),ref:b,children:[Object(o.jsx)("label",{className:"ci-label",htmlFor:"ci"+u,children:t||"label"}),"TA"!==n?Object(o.jsx)("input",Object(d.a)(Object(d.a)({className:"ci-input",id:"ci"+u},a),{},{onFocus:m,onBlur:h,onMouseOver:v,onMouseOutCapture:x})):Object(o.jsx)("textarea",Object(d.a)(Object(d.a)({className:"ci-input",id:"ci"+u},a),{},{onFocus:m,onBlur:h,onMouseOver:v,onMouseOutCapture:x})),Object(o.jsx)("fieldset",{className:"ci-fieldset",children:Object(o.jsx)("legend",{className:"ci-legend",children:t||"label"})})]}),r?Object(o.jsx)("div",{className:"warning-msg",children:r}):""]})},h=(n(55),["id","btnText","warning"]);var v=function(e){var t=e.id,n=e.btnText,c=e.warning,r=Object(f.a)(e,h);return Object(o.jsxs)("div",{className:"custom-file-upload-btn-con-prent-div",children:[Object(o.jsx)("div",{className:"custom-file-upload-btn-con",id:t||"cfubc",children:Object(o.jsxs)("label",{className:"upload-btn-label",children:[n||"Choose File",Object(o.jsx)("input",Object(d.a)({className:"input-file",type:"file"},r))]})}),c?Object(o.jsx)("div",{className:"warning-msg",children:c}):""]})},x=(n(56),["className","btnContent"]);var y=function(e){var t=e.className,n=e.btnContent,c=Object(f.a)(e,x);return Object(o.jsx)("button",Object(d.a)(Object(d.a)({className:t+" ----btn"},c),{},{children:n}))};n(57);var g=Object(b.b)(null,(function(e){return{setProfileSection:function(t){e({type:"SET_PROFILE_SECTION",payload:t})}}}))((function(e){var t=e.setProfileSection,n=e.style,r=Object(c.useState)({firstname:"",lastname:"",phonenumber:"",address:"",profilePicture:""}),a=Object(s.a)(r,2),i=a[0],l=a[1],u=Object(c.useState)({firstnameWM:"",lastnameWM:"",phonenumberWM:"",addressWM:"",profilePictureWM:""}),b=Object(s.a)(u,2),f=b[0],O=b[1],p=Object(c.useRef)(""),h=Object(c.useRef)("");Object(c.useEffect)((function(){var e=function(e,t){O(Object(d.a)(Object(d.a)({},f),{},Object(j.a)({},e,t))),h.current=!1};switch(p.current){case"":break;case"phonenumber":console.log("phonenumber case"),/^[0-9]{10}$/.test(i.phonenumber)&&h.current?e("phonenumberWM",""):h.current&&e("phonenumberWM","Mobile number is in incorrect format");break;default:i[p.current]&&h.current?e(p.current+"WM",""):!i[p.current]&&h.current&&e(p.current+"WM","Please fill this required field")}}),[i,f]);var x=function(e){var t=e.target,n=t.name,c=t.value,r=e.target;c.length>0?r.parentNode.classList.add("value-present"):r.parentNode.classList.remove("value-present"),p.current=n,l(Object(d.a)(Object(d.a)({},i),{},Object(j.a)({},n,c))),h.current=!0};return Object(o.jsx)("div",{style:n,className:"profile-section-con",children:Object(o.jsxs)("form",{id:"profile-section-form",onSubmit:function(e){e.preventDefault();var n=Object(d.a)({},f);for(var c in i)i[c]?i[c]||"phonenumber"===c||(n[c+"WM"]=""):n[c+"WM"]="Please fill this required field";var r=!1;for(var a in n){if(n[a]){r=!1;break}r=!0}r?t(i):(O(n),h=!1)},noValidate:!0,children:[Object(o.jsx)(m,{label:"First Name",name:"firstname",value:i.firstname,onChange:x,type:"text",required:!0,warning:f.firstnameWM}),Object(o.jsx)(m,{label:"Last Name",name:"lastname",value:i.lastname,onChange:x,type:"text",required:!0,warning:f.lastnameWM}),Object(o.jsx)(m,{label:"Phone Number",name:"phonenumber",value:i.phonenumber,onChange:x,pattern:"\\d*",type:"tel",maxLength:"10",title:"only numbers allowed",required:!0,warning:f.phonenumberWM}),Object(o.jsx)(v,{onChange:function(e){var t=e.nativeEvent.target.parentNode.parentNode,n=e.target.files[0];if(n){var c=URL.createObjectURL(n),r=new Image;if(r.src=c,r.onload=function(e){URL.revokeObjectURL(c);var t=document.createElement("canvas");t.width=100,t.height=120,t.getContext("2d").drawImage(r,0,0,100,120);var n=t.toDataURL("image/jpeg",1);l(Object(d.a)(Object(d.a)({},i),{},{profilePicture:n})),h.current=!0,p.current="profilePicture"},t.childElementCount>1){t.querySelector(".selected-file-name-text").textContent=n.name}else{var a=document.createElement("div");a.classList.add("selected-file-name-text"),a.textContent=n.name,t.appendChild(a)}}},name:"profilepicture",accept:"image/*",btnText:"Choose Profile Picture",required:!0,warning:f.profilePictureWM}),Object(o.jsx)(m,{label:"Address",name:"address",value:i.address,onChange:x,required:!0,component:"TA",warning:f.addressWM}),Object(o.jsx)(y,{className:"profile-section-save-btn",btnContent:"Save Profile Section",type:"submit"})]})})})),S=n(16),C=n(99),N=(n(58),Object(c.forwardRef)((function(e,t){var n=Object(c.useState)({nameofcourse:"",coursecompletionyear:"",collegeschoolname:"",percentage:""}),r=Object(s.a)(n,2),a=r[0],i=r[1],l=function(e){var t=e.target,n=t.name,c=t.value;i(Object(d.a)(Object(d.a)({},a),{},Object(j.a)({},n,c)))};return Object(o.jsx)("div",{className:"course-from-div",children:Object(o.jsxs)("form",{id:"course-form",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},onSubmit:function(t){t.preventDefault(),e.addData({id:e.id,state:a})},"data-id":e.id,children:[Object(o.jsx)(m,{label:"Name of Course",name:"nameofcourse",value:a.nameofcourse,onChange:l,type:"text",required:!0}),Object(o.jsx)(m,{label:"Course Completion Year",name:"coursecompletionyear",value:a.coursecompletionyear,onChange:l,type:"text",required:!0}),Object(o.jsx)(m,{label:"College/School Name ",name:"collegeschoolname",value:a.collegeschoolname,onChange:l,type:"text",required:!0}),Object(o.jsx)(m,{label:"Percentage",name:"percentage",value:a.percentage,onChange:l,type:"text",required:!0}),Object(o.jsx)("button",{type:"button",onClick:function(){return e.deleteCourse(e.id)},children:"\u2715"}),Object(o.jsx)("button",{style:{display:"none"},ref:t,type:"submit",children:"submit"})]})})})));var k=Object(b.b)(null,(function(e){return{setEducationSection:function(t){e(function(e){return{type:"SET_EDUCATION_SECTION",payload:e}}(t))}}}))((function(e){var t=e.setEducationSection,n=e.style,r=Object(c.useRef)([]),a=Object(c.useRef)([]),i=Object(c.useRef)([]);Object(c.useEffect)((function(){i.current=O}));var l=function(e){if(e){var t=e.parentElement.dataset.id,n=Object(j.a)({},t,e);r.current.push(n)}},u=function(e){var t=e.id,n=e.state,c=a.current.findIndex((function(e){return e.hasOwnProperty(t)}));if(-1===c){var r=Object(j.a)({},t,n);a.current.push(r)}else a.current[c][t]=n},d=function(e){if(i.current.length>1){var t=a.current.findIndex((function(t){return t.hasOwnProperty(e)}));t>-1&&a.current.splice(t,1),r.current.find((function(t,n){return t.hasOwnProperty(e)&&r.current.splice(n,1),t.hasOwnProperty(e)})),p(i.current.filter((function(t){return t.props.id!==e})))}},b=Object(c.useState)([Object(o.jsx)(N,{id:Object(C.a)(),ref:l,addData:u,deleteCourse:d},Object(C.a)())]),f=Object(s.a)(b,2),O=f[0],p=f[1];return Object(o.jsxs)("div",{style:n,children:[O,Object(o.jsx)("button",{onClick:function(){r.current.forEach((function(e){for(var t in e)e[t].click()})),a.current.length&&t(Object(S.a)(a.current))},children:"save"}),Object(o.jsx)("button",{onClick:function(){p(O.concat(Object(o.jsx)(N,{id:Object(C.a)(),ref:l,addData:u,deleteCourse:d},Object(C.a)())))},children:"Add Course"})]})})),P=Object(c.forwardRef)((function(e,t){var n=Object(c.useState)({skill:""}),r=Object(s.a)(n,2),a=r[0],i=r[1];return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{id:"skill-form",onSubmit:function(t){t.preventDefault(),e.addData({id:e.id,state:a})},onKeyPress:function(e){return"Enter"===e.key&&e.preventDefault()},"data-id":e.id,children:[Object(o.jsx)(m,{label:"Skill",name:"skill",value:a.skill,onChange:function(e){var t=e.target,n=t.name,c=t.value;i(Object(d.a)(Object(d.a)({},a),{},Object(j.a)({},n,c)))},type:"text",required:!0}),Object(o.jsx)("button",{type:"button",onClick:function(){return e.deleteCourse(e.id)},children:"\u2715"}),Object(o.jsx)("button",{style:{display:"none"},ref:t,children:"submit"})]})})}));var w=Object(b.b)(null,(function(e){return{setSkillsSection:function(t){return e({type:"SET_SKILLS_SECTION",payload:t})}}}))((function(e){var t=e.setSkillsSection,n=e.style,r=Object(c.useRef)([]),a=Object(c.useRef)([]),i=Object(c.useRef)([]);Object(c.useEffect)((function(){i.current=O}));var l=function(e){if(e){var t=e.parentElement.dataset.id,n=Object(j.a)({},t,e);r.current.push(n)}},u=function(e){var t=e.id,n=e.state,c=a.current.findIndex((function(e){return e.hasOwnProperty(t)}));if(-1===c){var r=Object(j.a)({},t,n);a.current.push(r)}else a.current[c][t]=n},d=function(e){if(i.current.length>1){var t=a.current.findIndex((function(t){return t.hasOwnProperty(e)}));t>-1&&a.current.splice(t,1),r.current.find((function(t,n){return t.hasOwnProperty(e)&&r.current.splice(n,1),t.hasOwnProperty(e)})),p(i.current.filter((function(t){return t.props.id!==e})))}},b=Object(c.useState)([Object(o.jsx)(P,{id:Object(C.a)(),ref:l,addData:u,deleteCourse:d},Object(C.a)())]),f=Object(s.a)(b,2),O=f[0],p=f[1];return Object(o.jsxs)("div",{style:n,children:[O,Object(o.jsx)("button",{onClick:function(){r.current.forEach((function(e){for(var t in e)e[t].click()})),a.current.length&&t(Object(S.a)(a.current))},children:"save"}),Object(o.jsx)("button",{onClick:function(){p(O.concat(Object(o.jsx)(P,{id:Object(C.a)(),ref:l,addData:u,deleteCourse:d},Object(C.a)())))},children:"Add Skill"})]})})),D=Object(c.forwardRef)((function(e,t){var n=e.addData,r=e.id,a=e.deleteMiniProject,i=Object(c.useState)({projectname:"",techstackused:"",projectdescription:""}),l=Object(s.a)(i,2),u=l[0],b=l[1],f=function(e){var t=e.target,n=t.name,c=t.value;b(Object(d.a)(Object(d.a)({},u),{},Object(j.a)({},n,c)))};return Object(o.jsx)("div",{className:"mini-project-form",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("submitted"),n({id:r,state:u})},onKeyPress:function(e){return"Enter"===e.key&&e.preventDefault()},"data-id":r,children:[Object(o.jsx)(m,{label:"Project Name",name:"projectname",value:u.projectname,onChange:f,type:"text"}),Object(o.jsx)(m,{label:"Tech Stack Used",name:"techstackused",value:u.techstackused,onChange:f,type:"text",component:"TA"}),Object(o.jsx)(m,{label:"Project Description",name:"projectdescription",value:u.projectdescription,onChange:f,type:"text",component:"TA"}),Object(o.jsx)("button",{type:"button",onClick:function(){return a(r)},children:"\u2715"}),Object(o.jsx)("button",{style:{display:"none"},ref:t,children:"submit"})]})})}));var E=Object(b.b)(null,(function(e){return{setMiniProjectSection:function(t){return e({type:"SET_MINI_PROJECT_SECTION",payload:t})}}}))((function(e){var t=e.setMiniProjectSection,n=e.style,r=Object(c.useRef)([]),a=Object(c.useRef)([]),i=Object(c.useRef)([]);Object(c.useEffect)((function(){i.current=O}));var l=function(e){if(e){var t=e.parentElement.dataset.id,n=Object(j.a)({},t,e);r.current.push(n)}},u=function(e){var t=e.id,n=e.state,c=a.current.findIndex((function(e){return e.hasOwnProperty(t)}));if(-1===c){var r=Object(j.a)({},t,n);a.current.push(r)}else a.current[c][t]=n},d=function(e){if(i.current.length>1){var t=a.current.findIndex((function(t){return t.hasOwnProperty(e)}));t>-1&&a.current.splice(t,1),r.current.find((function(t,n){return t.hasOwnProperty(e)&&r.current.splice(n,1),t.hasOwnProperty(e)})),p(i.current.filter((function(t){return t.props.id!==e})))}},b=Object(c.useState)([Object(o.jsx)(D,{addData:u,id:Object(C.a)(),ref:l,deleteMiniProject:d},Object(C.a)())]),f=Object(s.a)(b,2),O=f[0],p=f[1];return Object(o.jsxs)("div",{style:n,children:[O,Object(o.jsx)("button",{onClick:function(){r.current.forEach((function(e){for(var t in e)e[t].click()})),t(Object(S.a)(a.current))},children:"save"}),Object(o.jsx)("button",{onClick:function(){p(O.concat(Object(o.jsx)(D,{addData:u,id:Object(C.a)(),ref:l,deleteMiniProject:d},Object(C.a)())))},children:"Add Project"})]})})),M=Object(c.forwardRef)((function(e,t){var n=e.addData,r=e.id,a=e.deleteSocialMention,i=Object(c.useState)({nameofsocialmedia:"",links:""}),l=Object(s.a)(i,2),u=l[0],b=l[1],f=function(e){var t=e.target,n=t.name,c=t.value;b(Object(d.a)(Object(d.a)({},u),{},Object(j.a)({},n,c)))};return Object(o.jsx)("div",{className:"social-mention-form",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n({id:r,state:u})},onKeyPress:function(e){return"Enter"===e.key&&e.preventDefault()},"data-id":r,children:[Object(o.jsx)(m,{label:"Name of Social Media",name:"nameofsocialmedia",value:u.nameofsocialmedia,onChange:f,type:"text"}),Object(o.jsx)(m,{label:"Links",name:"links",value:u.links,onChange:f,type:"text"}),Object(o.jsx)("button",{type:"button",onClick:function(){return a(r)},children:"\u2715"}),Object(o.jsx)("button",{style:{display:"none"},ref:t,children:"submit"})]})})}));var T=Object(b.b)(null,(function(e){return{setSocialMentionSection:function(t){return e({type:"SET_SOCIAL_MENTION_SECTION",payload:t})}}}))((function(e){var t=e.setSocialMentionSection,n=e.style,r=Object(c.useRef)([]),a=Object(c.useRef)([]),i=Object(c.useRef)([]);Object(c.useEffect)((function(){i.current=O}));var l=function(e){var t=e.id,n=e.state,c=a.current.findIndex((function(e){return e.hasOwnProperty(t)}));if(-1===c){var r=Object(j.a)({},t,n);a.current.push(r)}else a.current[c][t]=n},u=function(e){if(e){var t=e.parentElement.dataset.id,n=Object(j.a)({},t,e);r.current.push(n)}},d=function(e){if(i.current.length>1){var t=a.current.findIndex((function(t){return t.hasOwnProperty(e)}));t>-1&&a.current.splice(t,1),r.current.find((function(t,n){return t.hasOwnProperty(e)&&r.current.splice(n,1),t.hasOwnProperty(e)})),p(i.current.filter((function(t){return t.props.id!==e})))}},b=Object(c.useState)([Object(o.jsx)(M,{addData:l,id:Object(C.a)(),ref:u,deleteSocialMention:d},Object(C.a)())]),f=Object(s.a)(b,2),O=f[0],p=f[1];return Object(o.jsxs)("div",{style:n,children:[O,Object(o.jsx)("button",{onClick:function(){r.current.forEach((function(e){for(var t in e)e[t].click()})),t(Object(S.a)(a.current))},children:"save"}),Object(o.jsx)("button",{onClick:function(){p(O.concat(Object(o.jsx)(M,{addData:l,id:Object(C.a)(),ref:u,deleteSocialMention:d},Object(C.a)())))},children:"Add Social Mention"})]})}));n(59);var R=function(e){var t=e.activeTab;return Object(o.jsxs)("div",{className:"tab-content",children:[Object(o.jsx)(g,{style:0===t?{}:{display:"none"}}),Object(o.jsx)(k,{style:1===t?{}:{display:"none"}}),Object(o.jsx)(w,{style:2===t?{}:{display:"none"}}),Object(o.jsx)(E,{style:3===t?{}:{display:"none"}}),Object(o.jsx)(T,{style:4===t?{}:{display:"none"}})]})};n(60);var I=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(o.jsxs)("div",{className:"tabcomponent-container",children:[Object(o.jsx)(u,{handleTabButtonClick:function(e){r(e)}}),Object(o.jsx)(R,{activeTab:n})]})},L=(n(61),n(24));var _=Object(b.b)((function(e){return{profileData:e.profileSection.profileData,educationData:e.educationSection.educationData,skillsData:e.skillsSection.skillsData,miniProjectData:e.miniProjectSection.miniProjectData,socialMentionData:e.socialMentionSection.socialMentionData}}))((function(e){var t=e.profileData,n=e.educationData,c=e.skillsData,r=e.miniProjectData,a=e.socialMentionData;return Object(o.jsxs)("div",{style:{display:"none"},children:[Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"button",onClick:function(){new L.a({orientation:"p",unit:"px",format:"a4",hotfixes:["px_scaling"]}).html(document.querySelector("#resume-div"),{callback:function(e){console.log(e.internal),t.firstname?e.save(t.firstname):e.save("generated")},margin:[60,60,65,65]})},children:"Download"})}),Object(o.jsxs)("div",{className:"resume",id:"resume-div",children:[Object(o.jsxs)("section",{className:"profile-section",children:[Object(o.jsx)("img",{src:t.profilePicture,alt:"profile"}),Object(o.jsxs)("h1",{children:[t.firstname," ",t.lastname]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Phone no: "}),t.phonenumber]}),Object(o.jsx)("p",{className:"address",children:t.address})]}),Object(o.jsxs)("section",{className:"education-section",children:[Object(o.jsx)("h1",{children:"Educational Qualifications"}),Object(o.jsx)("ul",{children:n.map((function(e){var t=Object.values(e)[0],n=t.nameofcourse,c=t.coursecompletionyear,r=t.collegeschoolname,a=t.percentage;return Object(o.jsx)("li",{children:Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:n})," \u2014 completed ",n," from ",Object(o.jsxs)("b",{children:[r," "]}),"in ",c," with the percentage of ",a,"."]})},Object(C.a)())}))})]}),Object(o.jsxs)("section",{className:"skills-section",children:[Object(o.jsx)("h1",{children:"Skills"}),Object(o.jsx)("ul",{children:c.map((function(e){var t=Object.values(e)[0].skill;return Object(o.jsx)("li",{children:t},Object(C.a)())}))})]}),Object(o.jsxs)("section",{className:"projects-section",children:[Object(o.jsx)("h1",{children:"Projects"}),Object(o.jsx)("ul",{children:r.map((function(e){var t=Object.values(e)[0],n=t.projectname,c=t.techstackused,r=t.projectdescription;return Object(o.jsx)("li",{children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)("h2",{children:n}),Object(o.jsxs)("p",{children:[c?Object(o.jsx)("b",{children:"Tech Stack: "}):null,c]}),Object(o.jsxs)("p",{children:[r?Object(o.jsx)("b",{children:"Description: "}):null,r]})]})},Object(C.a)())}))})]}),Object(o.jsxs)("section",{className:"social-links",children:[Object(o.jsx)("h1",{children:"My online presence"}),Object(o.jsx)("ul",{children:a.map((function(e){var t=Object.values(e)[0],n=t.nameofsocialmedia,c=t.links;return Object(o.jsx)("li",{children:Object(o.jsxs)("div",{className:"social",children:[Object(o.jsx)("h3",{children:n?Object(o.jsx)("b",{children:n+": "}):null}),Object(o.jsx)("p",{style:{width:"150px"},children:c})]})},Object(C.a)())}))})]})]})]})})),q=n(22);n(92);q.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/\n".concat(q.c.version,"/pdf.worker.min.js");var W=function(e){var t=e.generatedPdf,n=e.setDisplayResumePreviewModal,r=Object(c.useState)(null),a=Object(s.a)(r,2),i=a[0],l=a[1],u=Object(c.useState)(1),j=Object(s.a)(u,1)[0];return Object(o.jsxs)("div",{className:"resume-preview",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h1",{children:"Resume Preview"}),Object(o.jsx)("button",{onClick:n,children:"\u2715"})]}),Object(o.jsxs)("div",{className:"resume-preview-content",children:[Object(o.jsx)(q.a,{file:t,onLoadSuccess:function(e){var t=e.numPages;l(t)},children:Array.from(new Array(i),(function(e,t){return Object(o.jsx)(q.b,{pageNumber:t+1},"page_".concat(t+1))}))}),Object(o.jsxs)("p",{children:["Page ",j," of ",i]})]})]})};n(93);var A=function(){var e=Object(c.useState)({displayResumePreviewModal:!1,generatedPdf:""}),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(o.jsxs)("div",{className:"preview-download",children:[Object(o.jsxs)("div",{className:"preview-download-btns",children:[Object(o.jsx)("button",{onClick:function(){new L.a({orientation:"p",unit:"px",format:"a4",hotfixes:["px_scaling"]}).html(document.querySelector("#resume-div"),{callback:function(e){var t=e.output("dataurlstring");r(Object(d.a)(Object(d.a)({},n),{},{displayResumePreviewModal:!0,generatedPdf:t}))},margin:[70,70,70,70]})},className:"preview-btn btn",children:"Resume preview"}),Object(o.jsx)("button",{onClick:function(){new L.a({orientation:"p",unit:"px",format:"a4",hotfixes:["px_scaling"],putOnlyUsedFonts:!0}).html(document.querySelector("#resume-div"),{callback:function(e){e.save("generated")},margin:[70,70,70,70]})},className:"download-btn btn",children:"Download"})]}),n.displayResumePreviewModal?Object(o.jsx)(W,{generatedPdf:n.generatedPdf,setDisplayResumePreviewModal:function(){r(Object(d.a)(Object(d.a)({},n),{},{displayResumePreviewModal:!1}))}}):null]})};n(94);var B=function(){return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("h1",{className:"app-title",children:"Resume Builder"}),Object(o.jsx)(I,{}),Object(o.jsx)(A,{}),Object(o.jsx)(_,{})]})},F=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,235)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},U=n(25),K=n(39),J=n.n(K),G={profileData:{firstname:"",lastname:"",phonenumber:"",address:"",profilePicture:""}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PROFILE_SECTION":return Object(d.a)(Object(d.a)({},e),{},{profileData:t.payload});default:return e}},V={educationData:[]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EDUCATION_SECTION":return Object(d.a)(Object(d.a)({},e),{},{educationData:t.payload});default:return e}},$={skillsData:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SKILLS_SECTION":return Object(d.a)(Object(d.a)({},e),{},{skillsData:t.payload});default:return e}},H={miniProjectData:[]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MINI_PROJECT_SECTION":return Object(d.a)(Object(d.a)({},e),{},{miniProjectData:t.payload});default:return e}},Z={socialMentionData:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SOCIAL_MENTION_SECTION":return Object(d.a)(Object(d.a)({},e),{},{socialMentionData:t.payload});default:return e}},te=Object(U.b)({profileSection:Q,educationSection:Y,skillsSection:z,miniProjectSection:X,socialMentionSection:ee}),ne=[J.a],ce=Object(U.c)(te,U.a.apply(void 0,ne));i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(b.a,{store:ce,children:Object(o.jsx)(B,{})})}),document.getElementById("root")),F()}},[[95,1,3]]]);
//# sourceMappingURL=main.fbd1768a.chunk.js.map