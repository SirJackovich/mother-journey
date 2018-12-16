(function(t){function e(e){for(var o,r,i=e[0],l=e[1],u=e[2],d=0,h=[];d<i.length;d++)r=i[d],a[r]&&h.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);c&&c(e);while(h.length)h.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],o=!0,i=1;i<s.length;i++){var l=s[i];0!==a[l]&&(o=!1)}o&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var o={},a={app:0},n=[];function r(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=o,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(s,o,function(e){return t[e]}.bind(null,o));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"01bc":function(t,e,s){},"1cc5":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var o=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("header",[t.isLoggedIn?t._e():s("router-link",{staticClass:"login blue-hover",attrs:{to:"/login"}},[t._v("Login")]),t.isLoggedIn?s("b-dropdown",{staticClass:"login",attrs:{variant:"link",text:t.user.username}},[s("b-dropdown-item",{staticClass:"blue-hover",attrs:{to:"/create"}},[t._v("\n        Create\n      ")]),s("b-dropdown-item",{staticClass:"blue-hover",on:{click:t.logout}},[t._v("\n        Logout\n      ")])],1):t._e(),s("h1",[s("router-link",{staticClass:"blue-hover",attrs:{to:"/"}},[t._v("This Mother's Journey")])],1),s("nav",[s("router-link",{staticClass:"blue-hover",attrs:{to:"/"}},[t._v("Home")]),s("router-link",{staticClass:"purple-hover",attrs:{to:"/about"}},[t._v("About")]),s("router-link",{staticClass:"pink-hover",attrs:{to:"/blog"}},[t._v("Blog")]),s("router-link",{staticClass:"blue-hover",attrs:{to:"/resources"}},[t._v("Resources")]),s("router-link",{staticClass:"purple-hover",attrs:{to:"/faq"}},[t._v("FAQ")]),s("router-link",{staticClass:"pink-hover",attrs:{to:"/contact"}},[t._v("Contact")])],1)],1),s("router-view",{on:{loggedIn:t.login}}),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("p",[t._v("Heading Photo by "),s("a",{attrs:{href:"https://unsplash.com/photos/-3Dc-I-65ug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[t._v("Aaron Burden")]),t._v(" on "),s("a",{attrs:{href:"https://unsplash.com/search/photos/hot-air-balloon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[t._v("Unsplash")])]),s("p",[t._v("©2018 by This Mother's Journey")])])}],r=s("8c4f"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"about"}},[s("h2",[t._v("This Mother's Journey")]),t._m(0),s("div",{staticClass:"banner"},[s("h3",[t._v("Have a question or comment?")]),s("router-link",{staticClass:"button",attrs:{to:"/contact",tag:"button"}},[t._v("Contact Me")])],1)])},l=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[o("p",{staticClass:"purpose"},[t._v("\n      The purpose of this website is to provide resources and information, emotional support and comic relief for parents,\n      educators, or caregivers of people with special needs as well as individuals with special needs.\n      My hope is that through the resources and information provided on this website, people will be better\n      able to navigate the joys, frustrations, and challenges of life in relation to special needs.\n    ")]),o("div",{staticClass:"about-me"},[o("img",{attrs:{src:s("a499"),alt:"My family posing on a stair case for a family photo"}}),o("div",[o("h2",{staticClass:"about-me-header"},[t._v("About Me")]),o("p",[t._v("\n          I married a wonderful man over 30 years ago.\n          We have nine wonderful children five of which have married wonderful people.\n          That doesn't mean that everything is wonderful all the time.\n          There are always difficult times.\n          I love helping people and try to make people's burden a little bit lighter.\n          If I can do this with knowledge that I have, then that is a bonus.\n          I love my family and my life revolves around them.\n        ")])])])])}],u={},c=u,d=(s("d3e6"),s("2877")),h=Object(d["a"])(c,i,l,!1,null,null,null);h.options.__file="About.vue";var m=h.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Blog")]),t.blogs.loading?s("em",[t._v("Loading blogs...")]):t._e(),t.blogs.length?s("ul",t._l(t.blogs,function(e){return s("div",{key:e.id},[s("h3",[t._v(t._s(e.title))]),s("p",[t._v(t._s(e.body))])])})):t._e()])},v=[];function f(){let t=JSON.parse(sessionStorage.getItem("user"));return t&&t.token?"Bearer "+t.token:{}}function g(){sessionStorage.removeItem("user")}function b(t){return t.text().then(e=>{const s=e&&JSON.parse(e);if(!t.ok){401===t.status&&(g(),Ct.push("/"));const e=s&&s.message||t.statusText;return Promise.reject(e)}return s})}const _={login:w,logout:g};function w(t,e){const s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})};return fetch("/api/auth/",s).then(b).then(t=>{return t&&sessionStorage.setItem("user",JSON.stringify(t)),t})}const y={create:C,getAll:x,getByPath:k};function C(t,e,s,o,a,n){const r={method:"POST",headers:{"Content-Type":"application/json",Authorization:f()},body:JSON.stringify({title:t,quote:e,photo:s,content:o,credit:a,path:n})};return fetch("/api/blog/",r).then(b).then(t=>{return t})}function x(){const t={method:"GET"};return fetch("/api/blog/",t).then(b)}function k(t){const e={method:"GET"};return fetch(`/api/blog/${t}`,e).then(b)}const j={email:q};function q(t,e,s,o){const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:e,subject:s,message:o})};return fetch("/api/email/",a).then(b)}var P={data(){return{blogs:[]}},created(){this.blogs.loading=!0,y.getAll().then(t=>this.blogs=t.reverse())}},O=P,S=Object(d["a"])(O,p,v,!1,null,null,null);S.options.__file="Blog.vue";var I=S.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"post"}},[s("h2",[t._v(t._s(t.post.title))]),s("img",{attrs:{src:t.post.photo}})])},E=[],T={data(){return{post:{author:"",categories:[],body:"",published:"",title:"",quote:"",credit:"",photo:""},image:null}},created(){y.getByPath(this.$route.params.path).then(t=>{this.post=t,this.post.photo=`/api/image/${this.post.photo}`})}},N=T,F=(s("98de"),Object(d["a"])(N,$,E,!1,null,null,null));F.options.__file="Post.vue";var M=F.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"contact"}},[s("h2",[t._v("Contact Me")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("div",{staticClass:"sender"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"name"}},[t._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.name},attrs:{type:"text",name:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"email",attrs:{htmlFor:"email"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.email},attrs:{type:"text",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"subject"}},[t._v("Subject")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.subject},attrs:{type:"text",name:"subject"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"message"}},[t._v("Message")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.message},attrs:{type:"text",name:"message"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("button",{staticClass:"button",attrs:{disabled:t.loading}},[t._v("Send")])]),t.error?s("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e()])])},J=[],L={data(){return{name:"",email:"",subject:"",message:"",submitted:!1,loading:!1,error:""}},methods:{handleSubmit(t){this.submitted=!0;const{name:e,email:s,subject:o,message:a}=this;e&&s&&o&&a?(this.loading=!0,j.email(e,s,o,a),this.submitted=!1,this.loading=!1,this.name="",this.email="",this.subject="",this.message="",this.error=""):alert("Invalid entry")}}},z=L,H=(s("6d71"),Object(d["a"])(z,A,J,!1,null,null,null));H.options.__file="Contact.vue";var D=H.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"create"}},[s("h2",[t._v("Create")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"title"}},[t._v("Title")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.title},attrs:{type:"text",name:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"quote"}},[t._v("Quote")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quote,expression:"quote"}],staticClass:"form-control quote",class:{"is-invalid":t.submitted&&!t.quote},attrs:{type:"text",name:"quote"},domProps:{value:t.quote},on:{input:function(e){e.target.composing||(t.quote=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"content"}},[t._v("Content")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.content},attrs:{type:"text",name:"content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"photo"}},[t._v("Photo")]),s("vue-dropzone",{ref:"myVueDropzone",staticClass:"form-control",attrs:{id:"dropzone",name:"photo",options:t.dropzoneOptions},on:{"vdropzone-complete":t.afterComplete}})],1),s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"credit"}},[t._v("Credit")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.credit,expression:"credit"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.credit},attrs:{type:"text",name:"credit"},domProps:{value:t.credit},on:{input:function(e){e.target.composing||(t.credit=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("button",{staticClass:"cancel button",attrs:{disabled:t.loading,type:"button"}},[t._v("Cancel")]),s("button",{staticClass:"button",attrs:{disabled:t.loading}},[t._v("Publish")])]),t.error?s("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e()])])},U=[],B=s("92c3"),R=s.n(B),W=(s("1e3f"),{components:{vueDropzone:R.a},data(){return{dropzoneOptions:{headers:{Authorization:f()},url:"api/image/",addRemoveLinks:!0,autoProcessQueue:!1,maxFiles:1,acceptedFiles:"image/*",dictDefaultMessage:"<button class='button upload' type='button'>Upload Photo</button><p>Or drag photo here</p>"},title:"",quote:"",content:"",credit:"",path:"",submitted:!1,loading:!1,error:""}},methods:{handleSubmit(t){this.submitted=!0,this.title&&this.quote&&this.content&&(this.loading=!0,this.$refs.myVueDropzone.processQueue())},afterComplete(t){let e=t.xhr.response;this.path=this.title.toLowerCase().replace(/\s+/g,"-"),y.create(this.title,this.quote,e,this.content,this.credit,this.path).then(Ct.push(`/blog/${this.path}`))}}}),G=W,V=(s("af4f"),Object(d["a"])(G,Q,U,!1,null,null,null));V.options.__file="Create.vue";var K=V.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"faq"}},[s("h2",[t._v("Frequently Asked Questions")]),s("p",{staticClass:"sub-heading"},[t._v("I love to answer readers' questions! Here are a few of the most popular FAQs:")]),t._l(t.questions,function(e){return s("div",{staticClass:"category"},[s("h3",[t._v(t._s(e.title)+" Questions")]),t._l(e.questions,function(e){return s("span",{staticClass:"qna"},[s("p",{staticClass:"question",class:{expanded:e.showing},on:{click:function(t){e.showing=!e.showing}}},[t._v(t._s(e.question))]),s("p",{directives:[{name:"show",rawName:"v-show",value:e.showing,expression:"question.showing"}],staticClass:"answer"},[t._v(t._s(e.answer))])])})],2)}),s("div",{staticClass:"banner"},[s("h3",[t._v("Have a question that is not listed?")]),s("router-link",{staticClass:"button",attrs:{to:"/contact",tag:"button"}},[t._v("Contact Me")])],1)],2)},X=[],Z={data(){return{questions:[{title:"Special Needs",questions:[{question:"What is the most important thing that you wish you had known sooner as a parent of a child with special needs?",answer:"I wish I would have know more of my options with the school system. I had no idea what my options were, and it seemed almost like it was a secret.",showing:!1}]},{title:"School System",questions:[{question:"How often should you communicate with your student’s teacher and others involved in your child’s educational plan?",answer:"IEPs and 504 Plans are renewed yearly. If changes are needed, the plans can be visited at any point one of the adults involved deems necessary. If you start at the beginning with open communication, the child will have a more successful year.",showing:!1}]},{title:"Personal",questions:[{question:"How do you survive with 9 kids and some of them with special needs?",answer:"One day at a time. Sometimes it seems like one hour at a time. I try to love everyone where they are.",showing:!1},{question:"How did you feel when your son was diagnosed with autism?",answer:"Even though we knew that something was different about him, it was still a shock when he was diagnosed. I think it was hard hearing it, even though we lived it every day. Once we got over the initial shock, we went into the grieving process, trying to process how his life would be different and how the things you hope for your children may not happen with him. Then we tried to learn anything and everything we could about autism. We wanted to help him as best as we could. Knowledge is power.",showing:!1},{question:"Where did you find information?",answer:"I started at the library. We checked out a bunch of books and started reading them. Some were way too advanced for me, so I would try something different. I wanted to help him the best that I could. I would also talk to people. You can learn some amazing things by listening to other people’s stories.",showing:!1}]}]}}},tt=Z,et=(s("e6a4"),Object(d["a"])(tt,Y,X,!1,null,null,null));et.options.__file="FAQ.vue";var st=et.exports,ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[t._m(0),s("router-link",{staticClass:"learn-more button",attrs:{to:"/about",tag:"button"}},[t._v("Learn More")]),s("div",[t.blogs.length?s("h2",[t._v("Recent Posts:")]):t._e(),t._l(t.blogs,function(e){return s("div",{key:e.id,staticClass:"blog-box"},[s("p",[t._v(t._s(e.title))])])})],2)],1)},at=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"boxes"},[s("div",{staticClass:"box clients"},[s("h2",[t._v("Clients:")]),s("p",[t._v("Parents, Educators, or Caregivers of people with special needs, and people with special needs.")])]),s("div",{staticClass:"box mission"},[s("h2",[t._v("Our Mission:")]),s("p",[t._v("Help people navigate the joys, frustrations, and challenges of life in relation to special needs.")])]),s("div",{staticClass:"box services"},[s("h2",[t._v("Services:")]),s("p",[t._v("Provide resources and information, emotional support and comic relief.")])])])}],nt={data(){return{blogs:[]}},created(){y.getAll().then(t=>this.blogs=t.reverse().slice(0,2))}},rt=nt,it=(s("c219"),Object(d["a"])(rt,ot,at,!1,null,null,null));it.options.__file="Home.vue";var lt=it.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("h2",[t._v("Login")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"username"}},[t._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.username},attrs:{type:"text",name:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"password"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.password},attrs:{type:"password",name:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("button",{staticClass:"button",attrs:{disabled:t.loading}},[t._v("Login")])]),t.error?s("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e()])])},ct=[],dt={data(){return{username:"",password:"",submitted:!1,loading:!1,returnUrl:"",error:""}},created(){_.logout(),this.returnUrl=this.$route.query.returnUrl||"/"},methods:{handleSubmit(t){this.submitted=!0;const{username:e,password:s}=this;e&&s?(this.loading=!0,_.login(e,s).then(t=>{Ct.push(this.returnUrl),this.$emit("loggedIn",t)})):alert("Invalid entry")}}},ht=dt,mt=(s("7fa3"),Object(d["a"])(ht,ut,ct,!1,null,null,null));mt.options.__file="Login.vue";var pt=mt.exports,vt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ft=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Resources")])])}],gt={},bt=gt,_t=Object(d["a"])(bt,vt,ft,!1,null,null,null);_t.options.__file="Resources.vue";var wt=_t.exports;o["a"].use(r["a"]);const yt=new r["a"]({mode:"history",routes:[{path:"/about",component:m},{path:"/blog",component:I},{path:"/blog/:path",component:M},{path:"/contact",component:D},{path:"/create",component:K},{path:"/faq",component:st},{path:"/",component:lt},{path:"/login",component:pt},{path:"/resources",component:wt},{path:"*",redirect:"/"}]});yt.beforeEach((t,e,s)=>{const o=t.path.includes("/create"),a=sessionStorage.getItem("user");if(o&&!a)return s({path:"/login",query:{returnUrl:t.path}});s()});var Ct=yt,xt={name:"app",data(){return{user:null}},created(){try{this.user=JSON.parse(sessionStorage.getItem("user"))}catch(t){console.error(t)}},methods:{logout:function(t){this.user=null,sessionStorage.removeItem("user"),t.stopPropagation(),Ct.push("/")},login(t){this.user=t}},computed:{isLoggedIn:function(){return!!this.user}}},kt=xt,jt=(s("7faf"),Object(d["a"])(kt,a,n,!1,null,null,null));jt.options.__file="App.vue";var qt=jt.exports,Pt=s("9f7b");s("f9e3"),s("2dd8");o["a"].use(Pt["a"]),new o["a"]({router:Ct,render:t=>t(qt)}).$mount("#app")},"586c":function(t,e,s){},"62de":function(t,e,s){},"664c":function(t,e,s){},"6d71":function(t,e,s){"use strict";var o=s("a3ba"),a=s.n(o);a.a},"7d40":function(t,e,s){},"7fa3":function(t,e,s){"use strict";var o=s("7d40"),a=s.n(o);a.a},"7faf":function(t,e,s){"use strict";var o=s("586c"),a=s.n(o);a.a},"98de":function(t,e,s){"use strict";var o=s("62de"),a=s.n(o);a.a},a3ba:function(t,e,s){},a499:function(t,e,s){t.exports=s.p+"img/family.618caec2.jpg"},aa5e:function(t,e,s){},af4f:function(t,e,s){"use strict";var o=s("aa5e"),a=s.n(o);a.a},c219:function(t,e,s){"use strict";var o=s("1cc5"),a=s.n(o);a.a},d3e6:function(t,e,s){"use strict";var o=s("01bc"),a=s.n(o);a.a},e6a4:function(t,e,s){"use strict";var o=s("664c"),a=s.n(o);a.a}});
//# sourceMappingURL=app.cd420845.js.map