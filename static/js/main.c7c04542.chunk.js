(this["webpackJsonpresume-builder"]=this["webpackJsonpresume-builder"]||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(36),a=n.n(i),s=(n(61),n(4)),l=n(0);var o=function(e){var t=e.tabNumber,n=e.btnContent,c=e.handleClick;return Object(l.jsx)("button",{className:"tab",onClick:function(){return c(t)},children:n})};var j=function(e){var t=e.handleClick;return Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{handleClick:t,btnContent:"Profile",tabNumber:0}),Object(l.jsx)(o,{handleClick:t,btnContent:"Education",tabNumber:1}),Object(l.jsx)(o,{handleClick:t,btnContent:"Skills",tabNumber:2}),Object(l.jsx)(o,{handleClick:t,btnContent:"Projects",tabNumber:3}),Object(l.jsx)(o,{handleClick:t,btnContent:"Social Media",tabNumber:4})]})},u=n(5),d=n(2),b=n(38),O=["label","id"];function h(e){var t=e.label,n=e.id,c=Object(b.a)(e,O);return Object(l.jsxs)("div",{className:"form-group",children:[t?Object(l.jsx)("label",{htmlFor:n,children:t}):null,Object(l.jsx)("input",Object(d.a)({id:n},c))]})}var f=["label","id"];function p(e){var t=e.label,n=e.id,c=Object(b.a)(e,f);return Object(l.jsxs)("div",{className:"form-group",children:[t?Object(l.jsx)("label",{htmlFor:n,children:t}):null,Object(l.jsx)("textarea",Object(d.a)({id:n},c))]})}var x=n(7);var m=Object(x.b)(null,(function(e){return{setProfileSection:function(t){e({type:"SET_PROFILE_SECTION",payload:t})}}}))((function(e){var t=e.setProfileSection,n=e.style,r=Object(c.useState)({firstname:"",lastname:"",phonenumber:"",address:"",profilePicture:""}),i=Object(s.a)(r,2),a=i[0],o=i[1],j=function(e){var t=e.target,n=t.name,c=t.value;o(Object(d.a)(Object(d.a)({},a),{},Object(u.a)({},n,c)))};return Object(l.jsx)("div",{style:n,children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a)},children:[Object(l.jsx)(h,{label:"First Name: ",id:"firstname",name:"firstname",value:a.firstname,onChange:j,type:"text",placeholder:"Enter Your first name",required:!0}),Object(l.jsx)(h,{label:"Last Name: ",id:"lastname",name:"lastname",value:a.lastname,onChange:j,type:"text",placeholder:"Enter your last name",required:!0}),Object(l.jsx)(h,{label:"Phone Number: ",id:"phonenumber",name:"phonenumber",value:a.phonenumber,onChange:j,pattern:"\\d*",type:"tel",maxLength:"10",placeholder:"Enter your phone number",title:"only numbers allowed",required:!0}),Object(l.jsx)(h,{label:"Profile Picture: ",id:"profilepicture",name:"profilepicture",type:"file",onChange:function(e){if(e.target.files[0]){var t=new FileReader;t.onload=function(e){o(Object(d.a)(Object(d.a)({},a),{},{profilePicture:e.target.result}))},t.readAsDataURL(e.target.files[0])}},accept:"image/*",required:!0}),Object(l.jsx)(p,{label:"Address: ",id:"address",name:"address",value:a.address,onChange:j,placeholder:"Enter your address",required:!0}),Object(l.jsx)("button",{type:"submit",children:"save"})]})})})),v=n(23),y=n(109),g=Object(c.forwardRef)((function(e,t){var n=Object(c.useState)({nameofcourse:"",coursecompletionyear:"",collegeschoolname:"",percentage:""}),r=Object(s.a)(n,2),i=r[0],a=r[1],o=function(e){var t=e.target,n=t.name,c=t.value;a(Object(d.a)(Object(d.a)({},i),{},Object(u.a)({},n,c)))};return Object(l.jsx)("div",{className:"course-from-div",children:Object(l.jsxs)("form",{id:"course-form",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},onSubmit:function(t){t.preventDefault(),e.addData({id:e.id,state:i})},"data-id":e.id,children:[Object(l.jsx)(h,{label:"Name of Course: ",id:"nameofcourse",name:"nameofcourse",value:i.nameofcourse,onChange:o,type:"text",required:!0}),Object(l.jsx)(h,{label:"Course Completion Year: ",id:"coursecompletionyear",name:"coursecompletionyear",value:i.coursecompletionyear,onChange:o,type:"text",required:!0}),Object(l.jsx)(h,{label:"College/School Name : ",id:"collegeschoolname",name:"collegeschoolname",value:i.collegeschoolname,onChange:o,type:"text",required:!0}),Object(l.jsx)(h,{label:"Percentage: ",id:"percentage",name:"percentage",value:i.percentage,onChange:o,type:"text",required:!0}),Object(l.jsx)("button",{type:"button",onClick:function(){return e.deleteCourse(e.id)},children:"\u2715"}),Object(l.jsx)("button",{style:{display:"none"},ref:t,type:"submit",children:"submit"})]})})}));var S=Object(x.b)(null,(function(e){return{setEducationSection:function(t){e(function(e){return{type:"SET_EDUCATION_SECTION",payload:e}}(t))}}}))((function(e){var t=e.setEducationSection,n=e.style,r=Object(c.useRef)([]),i=Object(c.useRef)([]),a=Object(c.useRef)([]);Object(c.useEffect)((function(){a.current=h}));var o=function(e){if(e){var t=e.parentElement.dataset.id,n=Object(u.a)({},t,e);r.current.push(n)}},j=function(e){var t=e.id,n=e.state,c=i.current.findIndex((function(e){return e.hasOwnProperty(t)}));if(-1===c){var r=Object(u.a)({},t,n);i.current.push(r)}else i.current[c][t]=n},d=function(e){if(a.current.length>1){var t=i.current.findIndex((function(t){return t.hasOwnProperty(e)}));t>-1&&i.current.splice(t,1),r.current.find((function(t,n){return t.hasOwnProperty(e)&&r.current.splice(n,1),t.hasOwnProperty(e)})),f(a.current.filter((function(t){return t.props.id!==e})))}},b=Object(c.useState)([Object(l.jsx)(g,{id:Object(y.a)(),ref:o,addData:j,deleteCourse:d},Object(y.a)())]),O=Object(s.a)(b,2),h=O[0],f=O[1];return Object(l.jsxs)("div",{style:n,children:[h,Object(l.jsx)("button",{onClick:function(){r.current.forEach((function(e){for(var t in e)e[t].click()})),i.current.length&&t(Object(v.a)(i.current))},children:"save"}),Object(l.jsx)("button",{onClick:function(){f(h.concat(Object(l.jsx)(g,{id:Object(y.a)(),ref:o,addData:j,deleteCourse:d},Object(y.a)())))},children:"Add Course"})]})})),k=Object(c.forwardRef)((function(e,t){var n=Object(c.useState)({skill:""}),r=Object(s.a)(n,2),i=r[0],a=r[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{id:"skill-form",onSubmit:function(t){t.preventDefault(),e.addData({id:e.id,state:i})},onKeyPress:function(e){return"Enter"===e.key&&e.preventDefault()},"data-id":e.id,children:[Object(l.jsx)(h,{label:"Skill: ",id:"skill",name:"skill",value:i.skill,onChange:function(e){var t=e.target,n=t.name,c=t.value;a(Object(d.a)(Object(d.a)({},i),{},Object(u.a)({},n,c)))},type:"text",required:!0}),Object(l.jsx)("button",{type:"button",onClick:function(){return e.deleteCourse(e.id)},children:"\u2715"}),Object(l.jsx)("button",{style:{display:"none"},ref:t,children:"submit"})]})})}));var C=Object(x.b)(null,(function(e){return{setSkillsSection:function(t){return e({type:"SET_SKILLS_SECTION",payload:t})}}}))((function(e){var t=e.setSkillsSection,n=e.style,r=Object(c.useRef)([]),i=Object(c.useRef)([]),a=Object(c.useRef)([]);Object(c.useEffect)((function(){a.current=h}));var o=function(e){if(e){var t=e.parentElement.dataset.id,n=Object(u.a)({},t,e);r.current.push(n)}},j=function(e){var t=e.id,n=e.state,c=i.current.findIndex((function(e){return e.hasOwnProperty(t)}));if(-1===c){var r=Object(u.a)({},t,n);i.current.push(r)}else i.current[c][t]=n},d=function(e){if(a.current.length>1){var t=i.current.findIndex((function(t){return t.hasOwnProperty(e)}));t>-1&&i.current.splice(t,1),r.current.find((function(t,n){return t.hasOwnProperty(e)&&r.current.splice(n,1),t.hasOwnProperty(e)})),f(a.current.filter((function(t){return t.props.id!==e})))}},b=Object(c.useState)([Object(l.jsx)(k,{id:Object(y.a)(),ref:o,addData:j,deleteCourse:d},Object(y.a)())]),O=Object(s.a)(b,2),h=O[0],f=O[1];return Object(l.jsxs)("div",{style:n,children:[h,Object(l.jsx)("button",{onClick:function(){r.current.forEach((function(e){for(var t in e)e[t].click()})),i.current.length&&t(Object(v.a)(i.current))},children:"save"}),Object(l.jsx)("button",{onClick:function(){f(h.concat(Object(l.jsx)(k,{id:Object(y.a)(),ref:o,addData:j,deleteCourse:d},Object(y.a)())))},children:"Add Skill"})]})})),P=Object(c.forwardRef)((function(e,t){var n=e.addData,r=e.id,i=e.deleteMiniProject,a=Object(c.useState)({projectname:"",techstackused:"",projectdescription:""}),o=Object(s.a)(a,2),j=o[0],b=o[1],O=function(e){var t=e.target,n=t.name,c=t.value;b(Object(d.a)(Object(d.a)({},j),{},Object(u.a)({},n,c)))};return Object(l.jsx)("div",{className:"mini-project-form",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("submitted"),n({id:r,state:j})},onKeyPress:function(e){return"Enter"===e.key&&e.preventDefault()},"data-id":r,children:[Object(l.jsx)(h,{label:"Project Name: ",id:"projectname",name:"projectname",value:j.projectname,onChange:O,type:"text"}),Object(l.jsx)(p,{label:"Tech Stack Used: ",id:"techstackused",name:"techstackused",value:j.techstackused,onChange:O,type:"text"}),Object(l.jsx)(p,{label:"Project Description: ",id:"projectdescription",name:"projectdescription",value:j.projectdescription,onChange:O,type:"text"}),Object(l.jsx)("button",{type:"button",onClick:function(){return i(r)},children:"\u2715"}),Object(l.jsx)("button",{style:{display:"none"},ref:t,children:"submit"})]})})}));var D=Object(x.b)(null,(function(e){return{setMiniProjectSection:function(t){return e({type:"SET_MINI_PROJECT_SECTION",payload:t})}}}))((function(e){var t=e.setMiniProjectSection,n=e.style,r=Object(c.useRef)([]),i=Object(c.useRef)([]),a=Object(c.useRef)([]);Object(c.useEffect)((function(){a.current=h}));var o=function(e){if(e){var t=e.parentElement.dataset.id,n=Object(u.a)({},t,e);r.current.push(n)}},j=function(e){var t=e.id,n=e.state,c=i.current.findIndex((function(e){return e.hasOwnProperty(t)}));if(-1===c){var r=Object(u.a)({},t,n);i.current.push(r)}else i.current[c][t]=n},d=function(e){if(a.current.length>1){var t=i.current.findIndex((function(t){return t.hasOwnProperty(e)}));t>-1&&i.current.splice(t,1),r.current.find((function(t,n){return t.hasOwnProperty(e)&&r.current.splice(n,1),t.hasOwnProperty(e)})),f(a.current.filter((function(t){return t.props.id!==e})))}},b=Object(c.useState)([Object(l.jsx)(P,{addData:j,id:Object(y.a)(),ref:o,deleteMiniProject:d},Object(y.a)())]),O=Object(s.a)(b,2),h=O[0],f=O[1];return Object(l.jsxs)("div",{style:n,children:[h,Object(l.jsx)("button",{onClick:function(){r.current.forEach((function(e){for(var t in e)e[t].click()})),t(Object(v.a)(i.current))},children:"save"}),Object(l.jsx)("button",{onClick:function(){f(h.concat(Object(l.jsx)(P,{addData:j,id:Object(y.a)(),ref:o,deleteMiniProject:d},Object(y.a)())))},children:"Add Project"})]})})),N=Object(c.forwardRef)((function(e,t){var n=e.addData,r=e.id,i=e.deleteSocialMention,a=Object(c.useState)({nameofsocialmedia:"",links:""}),o=Object(s.a)(a,2),j=o[0],b=o[1],O=function(e){var t=e.target,n=t.name,c=t.value;b(Object(d.a)(Object(d.a)({},j),{},Object(u.a)({},n,c)))};return Object(l.jsx)("div",{className:"social-mention-form",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n({id:r,state:j})},onKeyPress:function(e){return"Enter"===e.key&&e.preventDefault()},"data-id":r,children:[Object(l.jsx)(h,{label:"Name of Social Media: ",id:"nameofsocialmedia",name:"nameofsocialmedia",value:j.nameofsocialmedia,onChange:O,type:"text"}),Object(l.jsx)(p,{label:"Links: ",id:"links",name:"links",value:j.links,onChange:O,type:"text"}),Object(l.jsx)("button",{type:"button",onClick:function(){return i(r)},children:"\u2715"}),Object(l.jsx)("button",{style:{display:"none"},ref:t,children:"submit"})]})})}));var w=Object(x.b)(null,(function(e){return{setSocialMentionSection:function(t){return e({type:"SET_SOCIAL_MENTION_SECTION",payload:t})}}}))((function(e){var t=e.setSocialMentionSection,n=e.style,r=Object(c.useRef)([]),i=Object(c.useRef)([]),a=Object(c.useRef)([]);Object(c.useEffect)((function(){a.current=h}));var o=function(e){var t=e.id,n=e.state,c=i.current.findIndex((function(e){return e.hasOwnProperty(t)}));if(-1===c){var r=Object(u.a)({},t,n);i.current.push(r)}else i.current[c][t]=n},j=function(e){if(e){var t=e.parentElement.dataset.id,n=Object(u.a)({},t,e);r.current.push(n)}},d=function(e){if(a.current.length>1){var t=i.current.findIndex((function(t){return t.hasOwnProperty(e)}));t>-1&&i.current.splice(t,1),r.current.find((function(t,n){return t.hasOwnProperty(e)&&r.current.splice(n,1),t.hasOwnProperty(e)})),f(a.current.filter((function(t){return t.props.id!==e})))}},b=Object(c.useState)([Object(l.jsx)(N,{addData:o,id:Object(y.a)(),ref:j,deleteSocialMention:d},Object(y.a)())]),O=Object(s.a)(b,2),h=O[0],f=O[1];return Object(l.jsxs)("div",{style:n,children:[h,Object(l.jsx)("button",{onClick:function(){r.current.forEach((function(e){for(var t in e)e[t].click()})),t(Object(v.a)(i.current))},children:"save"}),Object(l.jsx)("button",{onClick:function(){f(h.concat(Object(l.jsx)(N,{addData:o,id:Object(y.a)(),ref:j,deleteSocialMention:d},Object(y.a)())))},children:"Add Social Mention"})]})}));var E=function(e){var t=e.activeTab;return Object(l.jsxs)("div",{className:"tab-content",children:[Object(l.jsx)(m,{style:0===t?{}:{display:"none"}}),Object(l.jsx)(S,{style:1===t?{}:{display:"none"}}),Object(l.jsx)(C,{style:2===t?{}:{display:"none"}}),Object(l.jsx)(D,{style:3===t?{}:{display:"none"}}),Object(l.jsx)(w,{style:4===t?{}:{display:"none"}})]})};var I=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{handleClick:function(e){r(e)}}),Object(l.jsx)(E,{activeTab:n})]})},T=(n(45),n.p,n(25));var M=function(e){return e.profileData,e.educationData,e.skillsData,e.miniProjectData,e.socialMentionData,Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"resume",id:"resume-div",children:[Object(l.jsxs)("section",{className:"profile-section",children:[Object(l.jsxs)("h1",{children:["Juggu"," ","Jones"]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Phone no: "}),"5555555555"]}),Object(l.jsx)("p",{className:"address",children:"pulathota, hafizpet, Hyderabad, Telangana."})]}),Object(l.jsxs)("section",{className:"education-section",children:[Object(l.jsx)("h1",{children:"Educational Qualifications"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"10th"})," \u2014 completed ","10th"," from ",Object(l.jsxs)("b",{children:["Narayana em high school"," "]}),"in ",2010," with the percentage of ",70,"."]})},Object(y.a)()),Object(l.jsx)("li",{children:Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Inter"})," \u2014 completed ","Inter"," from ",Object(l.jsxs)("b",{children:["Narayana junior college"," "]}),"in ",2012," with the percentage of ",76,"."]})},Object(y.a)()),Object(l.jsx)("li",{children:Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Degree"})," \u2014 completed ","Degree"," from ",Object(l.jsxs)("b",{children:["Narayana engineering college"," "]}),"in ",2045," with the percentage of ",80,"."]})},Object(y.a)())]})]}),Object(l.jsxs)("section",{className:"skills-section",children:[Object(l.jsx)("h1",{children:"Skills"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"html"},Object(y.a)()),Object(l.jsx)("li",{children:"css"},Object(y.a)()),Object(l.jsx)("li",{children:"javscript"},Object(y.a)()),Object(l.jsx)("li",{children:"react js"},Object(y.a)())]})]}),Object(l.jsxs)("section",{className:"projects-section",children:[Object(l.jsx)("h1",{children:"Projects"}),Object(l.jsx)("ul",{children:Object(l.jsx)("li",{children:Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("h2",{children:"IOT"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Tech Stack: "}),"iot board"]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Description: "}),": The Iot project is done by using iot board and using backend software to control the board."]})]})},Object(y.a)())})]}),Object(l.jsxs)("section",{className:"social-links",children:[Object(l.jsx)("h1",{children:"My online presence"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsxs)("div",{className:"social",children:[Object(l.jsx)("h3",{children:"Github"}),Object(l.jsx)("p",{children:"https://www.github.com/repositories/group/ddhdhd/ddhd"})]})},Object(y.a)()),Object(l.jsx)("li",{children:Object(l.jsxs)("div",{className:"social",children:[Object(l.jsx)("h3",{children:"Linkedin"}),Object(l.jsx)("p",{children:"https://www.github.com/repositories/group/ddhdhd/ddhd"})]})},Object(y.a)()),Object(l.jsx)("li",{children:Object(l.jsxs)("div",{className:"social",children:[Object(l.jsx)("h3",{children:"Hackerrank"}),Object(l.jsx)("p",{children:"https://www.github.com/repositories/group/ddhdhd/ddhd"})]})},Object(y.a)())]})]})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"button",onClick:function(){new T.a({orientation:"p",unit:"px",format:"a4",hotfixes:["px_scaling"],putOnlyUsedFonts:!0}).html(document.querySelector("#resume-div"),{callback:function(e){e.save("generated")},margin:[50,50,50,50]})},children:"Download"})})]})};var _=Object(x.b)((function(e){return{profileData:e.profileSection.profileData,educationData:e.educationSection.educationData,skillsData:e.skillsSection.skillsData,miniProjectData:e.miniProjectSection.miniProjectData,socialMentionData:e.socialMentionSection.socialMentionData}}))((function(e){var t=e.profileData,n=e.educationData,c=e.skillsData,r=e.miniProjectData,i=e.socialMentionData;return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"button",onClick:function(){new T.a({orientation:"p",unit:"px",format:"a4",hotfixes:["px_scaling"]}).html(document.querySelector("#resume-div"),{callback:function(e){t.firstname?e.save(t.firstname):e.save("generated")},margin:[70,70,80,80]})},children:"Download"})}),Object(l.jsxs)("div",{className:"resume",id:"resume-div",children:[Object(l.jsxs)("section",{className:"profile-section",children:[Object(l.jsx)("img",{src:t.profilePicture,alt:"profile"}),Object(l.jsxs)("h1",{children:[t.firstname," ",t.lastname]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Phone no: "}),t.phonenumber]}),Object(l.jsx)("p",{className:"address",children:t.address})]}),Object(l.jsxs)("section",{className:"education-section",children:[Object(l.jsx)("h1",{children:"Educational Qualifications"}),Object(l.jsx)("ul",{children:n.map((function(e){var t=Object.values(e)[0],n=t.nameofcourse,c=t.coursecompletionyear,r=t.collegeschoolname,i=t.percentage;return Object(l.jsx)("li",{children:Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:n})," \u2014 completed ",n," from ",Object(l.jsxs)("b",{children:[r," "]}),"in ",c," with the percentage of ",i,"."]})},Object(y.a)())}))})]}),Object(l.jsxs)("section",{className:"skills-section",children:[Object(l.jsx)("h1",{children:"Skills"}),Object(l.jsx)("ul",{children:c.map((function(e){var t=Object.values(e)[0].skill;return Object(l.jsx)("li",{children:t},Object(y.a)())}))})]}),Object(l.jsxs)("section",{className:"projects-section",children:[Object(l.jsx)("h1",{children:"Projects"}),Object(l.jsx)("ul",{children:r.map((function(e){var t=Object.values(e)[0],n=t.projectname,c=t.techstackused,r=t.projectdescription;return Object(l.jsx)("li",{children:Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("h2",{children:n}),Object(l.jsxs)("p",{children:[c?Object(l.jsx)("b",{children:"Tech Stack: "}):null,c]}),Object(l.jsxs)("p",{children:[r?Object(l.jsx)("b",{children:"Description: "}):null,r]})]})},Object(y.a)())}))})]}),Object(l.jsxs)("section",{className:"social-links",children:[Object(l.jsx)("h1",{children:"My online presence"}),Object(l.jsx)("ul",{children:i.map((function(e){var t=Object.values(e)[0],n=t.nameofsocialmedia,c=t.links;return Object(l.jsx)("li",{children:Object(l.jsxs)("div",{className:"social",children:[Object(l.jsx)("h3",{children:n?Object(l.jsx)("b",{children:n+": "}):null}),Object(l.jsx)("p",{style:{width:"150px"},children:c})]})},Object(y.a)())}))})]})]})]})})),R=n(44);n(103);var L=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(1),a=Object(s.a)(i,2),o=a[0],j=(a[1],Object(c.useState)({displayResumePreviewModal:!1,generatedPdf:""})),u=Object(s.a)(j,2),b=u[0],O=u[1];return Object(l.jsxs)("div",{className:"preview-download-buttons",children:[Object(l.jsx)("button",{onClick:function(){new T.a({orientation:"p",unit:"px",format:"a4",hotfixes:["px_scaling"]}).html(document.querySelector("#resume-div"),{callback:function(e){var t=e.output("dataurlstring");O(Object(d.a)(Object(d.a)({},b),{},{generatedPdf:t,displayResumePreviewModal:!0}))},margin:[70,70,80,80]})},children:"Resume preview"}),Object(l.jsx)("button",{children:"Resume Download"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(R.Document,{file:b.generatedPdf,onLoadSuccess:function(e){var t=e.numPages;r(t)},children:Object(l.jsx)(R.Page,{pageNumber:o})}),Object(l.jsxs)("p",{children:["Page ",o," of ",n]})]})]})};n(104);var q=function(){return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(I,{}),Object(l.jsx)(L,{}),Object(l.jsx)(M,{}),Object(l.jsx)(_,{})]})},F=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,251)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))},A=n(30),J=n(55),K=n.n(J),U={profileData:{firstname:"",lastname:"",phonenumber:"",address:"",profilePicture:""}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PROFILE_SECTION":return Object(d.a)(Object(d.a)({},e),{},{profileData:t.payload});default:return e}},H={educationData:[]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EDUCATION_SECTION":return Object(d.a)(Object(d.a)({},e),{},{educationData:t.payload});default:return e}},Y={skillsData:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SKILLS_SECTION":return Object(d.a)(Object(d.a)({},e),{},{skillsData:t.payload});default:return e}},G={miniProjectData:[]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MINI_PROJECT_SECTION":return Object(d.a)(Object(d.a)({},e),{},{miniProjectData:t.payload});default:return e}},W={socialMentionData:[]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SOCIAL_MENTION_SECTION":return Object(d.a)(Object(d.a)({},e),{},{socialMentionData:t.payload});default:return e}},Z=Object(A.b)({profileSection:B,educationSection:Q,skillsSection:z,miniProjectSection:V,socialMentionSection:X}),$=[K.a],ee=Object(A.c)(Z,A.a.apply(void 0,$));a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x.a,{store:ee,children:Object(l.jsx)(q,{})})}),document.getElementById("root")),F()},45:function(e,t,n){},48:function(e,t){},61:function(e,t,n){},85:function(e,t){},86:function(e,t){},87:function(e,t){},88:function(e,t){},89:function(e,t){}},[[105,1,3]]]);
//# sourceMappingURL=main.c7c04542.chunk.js.map