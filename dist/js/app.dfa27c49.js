(function(t){function e(e){for(var o,r,i=e[0],l=e[1],c=e[2],h=0,d=[];h<i.length;h++)r=i[h],a[r]&&d.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],o=!0,i=1;i<s.length;i++){var l=s[i];0!==a[l]&&(o=!1)}o&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var o={},a={app:0},n=[];function r(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=o,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(s,o,function(e){return t[e]}.bind(null,o));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"01bc":function(t,e,s){},"1cc5":function(t,e,s){},"215d":function(t,e,s){t.exports=s.p+"img/right-arrow.ee54d9c0.svg"},"304c":function(t,e,s){"use strict";var o=s("de3b"),a=s.n(o);a.a},"35d7":function(t,e,s){t.exports=s.p+"img/edit-icon.a750e405.svg"},"3e7d":function(t,e,s){t.exports=s.p+"img/search-icon.f6170d32.svg"},"56d7":function(t,e,s){"use strict";s.r(e);var o=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("header",[t.isLoggedIn?t._e():s("div",{staticClass:"login-wrapper"},[s("a",{staticClass:"hide login blue-hover",on:{click:t.goToLogin}},[t._v("Login")])]),t.isLoggedIn?s("b-dropdown",{staticClass:"login",attrs:{variant:"link",text:t.user.username}},[s("b-dropdown-item",{staticClass:"blue-hover",attrs:{to:"/blog/create"}},[t._v("\n        Create\n      ")]),s("b-dropdown-item",{staticClass:"blue-hover",on:{click:t.logout}},[t._v("\n        Logout\n      ")])],1):t._e(),s("h1",[s("router-link",{staticClass:"blue-hover",attrs:{to:"/"}},[t._v("This Mother's Journey")])],1),s("nav",[s("router-link",{staticClass:"blue-hover",attrs:{to:"/"}},[t._v("Home")]),s("router-link",{staticClass:"purple-hover",attrs:{to:"/about"}},[t._v("About")]),s("router-link",{staticClass:"pink-hover",attrs:{to:"/blog"}},[t._v("Blog")]),s("router-link",{staticClass:"blue-hover",attrs:{to:"/resources"}},[t._v("Resources")]),s("router-link",{staticClass:"purple-hover",attrs:{to:"/faq"}},[t._v("FAQ")]),s("router-link",{staticClass:"pink-hover",attrs:{to:"/contact"}},[t._v("Contact")])],1)],1),s("router-view",{on:{loggedIn:t.login}}),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("p",[t._v("Heading Photo by "),s("a",{attrs:{href:"https://unsplash.com/photos/-3Dc-I-65ug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[t._v("Aaron Burden")]),t._v(" on "),s("a",{attrs:{href:"https://unsplash.com/search/photos/hot-air-balloon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[t._v("Unsplash")])]),s("p",[t._v("©2018 by This Mother's Journey")])])}],r=s("8c4f"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"about"}},[s("h2",[t._v("This Mother's Journey")]),t._m(0),s("div",{staticClass:"banner"},[s("h3",[t._v("Questions or Comments?")]),s("router-link",{staticClass:"button",attrs:{to:"/contact",tag:"button"}},[t._v("Contact Me")])],1)])},l=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[o("p",{staticClass:"purpose"},[t._v("\n      The purpose of this website is to provide resources and information, emotional support and comic relief for parents,\n      educators, or caregivers of people with special needs as well as individuals with special needs.\n      My hope is that through the resources and information provided on this website, people will be better\n      able to navigate the joys, frustrations, and challenges of life in relation to special needs.\n    ")]),o("div",{staticClass:"about-me"},[o("img",{attrs:{src:s("a499"),alt:"My family posing on a stair case for a family photo"}}),o("div",[o("h2",{staticClass:"about-me-header"},[t._v("About Me")]),o("p",[t._v("\n          I married a wonderful man over 30 years ago.\n          We have nine wonderful children five of which have married wonderful people.\n          That doesn't mean that everything is wonderful all the time.\n          There are always difficult times.\n          I love helping people and try to make people's burden a little bit lighter.\n          If I can do this with knowledge that I have, then that is a bonus.\n          I love my family and my life revolves around them.\n        ")])])])])}],c={},u=c,h=(s("d3e6"),s("2877")),d=Object(h["a"])(u,i,l,!1,null,null,null);d.options.__file="About.vue";var p=d.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"blog"}},[s("section",[s("h2",[t._v("Blog")]),t.query?s("p",{staticClass:"subheading"},[t._v("Blogs containing: "+t._s(t.query))]):t._e(),t.month?s("p",{staticClass:"subheading"},[t._v(t._s(t.month)+" Blogs")]):t._e(),t.category?s("p",{staticClass:"subheading"},[t._v("Blogs about "+t._s(t.category))]):t._e(),t._l(t.blogs,function(e){return s("div",{key:e.id,staticClass:"box",on:{click:function(s){t.goToBlog(e.path)}}},[s("img",{attrs:{src:"/api/image/"+e.photo,alt:e.alt}}),s("p",[t._v(t._s(e.title))]),s("p",[t._v(t._s(e.createdAt))]),s("p",[t._v(t._s(e.quote))])])})],2),s("aside",[s("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"search"}},[t._v("Search")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",name:"search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._m(0)])]),s("mj-list-card",{staticClass:"categories",attrs:{title:"Categories:",list:t.categories}}),s("mj-archive-list-card",{staticClass:"archive",attrs:{title:"Archive:",list:t.archive}}),s("mj-button-card",{staticClass:"contact",attrs:{title:"Questions or Comments?",label:"Contact Me",link:"/contact"}})],1)])},g=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{attrs:{type:"submit"}},[o("img",{attrs:{src:s("3e7d")}})])}];function v(){let t=JSON.parse(sessionStorage.getItem("user"));return t&&t.token?"Bearer "+t.token:{}}function f(){sessionStorage.removeItem("user")}function b(t){return 404===t.status?t.text():t.text().then(e=>{const s=e&&JSON.parse(e);if(!t.ok){401===t.status&&(f(),zt.push("/"));const e=s&&s.message||t.statusText;return Promise.reject(e)}return s})}const _={login:y,logout:f};function y(t,e){const s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})};return fetch("/api/auth/",s).then(b).then(t=>{return t&&sessionStorage.setItem("user",JSON.stringify(t)),t})}const C={create:w,getAll:x,getByCategory:q,find:k,getByPath:S,update:$,remove:j,getNewest:P,getArchive:O,getByMonth:T};function w(t,e,s,o,a,n,r,i,l){const c={method:"POST",headers:{"Content-Type":"application/json",Authorization:v()},body:JSON.stringify({title:t,quote:e,photo:s,alt:o,content:a,credit:n,categories:r,path:i,older:l})};return fetch("/api/blog/",c).then(b).then(t=>{return t})}function x(){const t={method:"GET"};return fetch("/api/blog/",t).then(b)}function q(t){const e={method:"GET"};return fetch(`/api/blog?category=${t}`,e).then(b)}function k(t){const e={method:"GET"};return fetch(`/api/blog?query=${t}`,e).then(b)}function S(t){const e={method:"GET"};return fetch(`/api/blog/${t}`,e).then(b)}function $(t,e,s,o,a,n,r,i,l,c){const u={method:"PUT",headers:{"Content-Type":"application/json",Authorization:v()},body:JSON.stringify({title:t,quote:e,photo:s,alt:o,content:a,credit:n,categories:r,path:i,older:l,newer:c})};return fetch(`/api/blog/${i}`,u).then(b)}function j(t){const e={method:"DELETE",headers:{Authorization:v()}};return fetch(`/api/blog/${t}`,e).then(b)}function P(){const t={method:"GET"};return fetch("/api/blog/newest",t).then(b)}function O(){const t={method:"GET"};return fetch(`/api/blog/archive?timezone=${I()}`,t).then(b)}function T(t){const e={method:"GET"};return fetch(`/api/blog?month=${t}&timezone=${I()}`,e).then(b)}function I(){var t=(new Date).getTimezoneOffset(),e="+";t>0?e="-":t*=-1;var s=t/60,o=Math.floor(s),a=60*(s-o),n=Math.round(a);return encodeURIComponent(e+o.toString().padStart(2,"0")+n.toString().padStart(2,"0"))}const A={email:E};function E(t,e,s,o){const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:e,subject:s,message:o})};return fetch("/api/email/",a).then(b)}const M={info:N};function N(t){const e={method:"GET"};return fetch(`/api/image/info/${t}`,e).then(b)}const B={create:L,getAll:F,remove:D};function L(t){const e={method:"POST",headers:{"Content-Type":"application/json",Authorization:v()},body:JSON.stringify({name:t})};return fetch("/api/category/",e).then(b).then(t=>{return t})}function F(){const t={method:"GET"};return fetch("/api/category/",t).then(b)}function D(t){const e={method:"DELETE",headers:{Authorization:v()}};return fetch(`/api/category/${t}`,e).then(b)}var z={data(){return{blogs:[],categories:[],archive:[],query:"",category:"",month:"",search:"",displayCount:10}},created(){this.getBlogs(this.$route.query),B.getAll().then(t=>this.categories=t),C.getArchive().then(t=>{this.archive=this.processArchive(t)})},methods:{handleSubmit(t){this.search&&zt.push({path:"/blog",query:{query:this.search}})},goToBlog(t){zt.push(`/blog/${t}`)},getBlogs(t){if(this.query="",this.category="",this.month="",t&&(t.category||t.query||t.month)){if(t.category)this.category=t.category,C.getByCategory(t.category).then(t=>this.processBlogs(t));else if(t.query)this.query=t.query,C.find(t.query).then(t=>this.processBlogs(t));else if(t.month){let e=t.month.match(/[a-zA-Z]+|[0-9]+/g);this.month=`${e[0]} ${e[1]}`,C.getByMonth(t.month).then(t=>this.processBlogs(t))}}else C.getAll().then(t=>this.processBlogs(t))},processBlogs(t){let e={year:"numeric",month:"long",day:"numeric"};for(let s=0;s<t.length;s++)t[s].createdAt=new Date(t[s].createdAt).toLocaleDateString("en-US",e);this.blogs=t.reverse()},processArchive(t){const e=["January","February","March","April","May","June","July","August","September","October","November","December"];for(let s=0;s<t.length;s++)t[s]={count:t[s].count,month:e[t[s]._id.month-1],year:t[s]._id.year};return t}},watch:{$route(t,e){this.getBlogs(t.query)}}},J=z,U=(s("304c"),Object(h["a"])(J,m,g,!1,null,null,null));U.options.__file="Blog.vue";var G=U.exports,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"post"}},[o("section",[o("h2",[t._v("\n      "+t._s(t.post.title)+"\n      "),t.isLoggedIn?o("button",{on:{click:t.edit}},[o("img",{attrs:{src:s("35d7")}})]):t._e()]),o("p",[t._v(t._s(t.post.quote))]),o("p",{staticClass:"date"},[o("span",[t._v("Published on: "+t._s(t.post.createdAt))]),o("span",[o("vue-goodshare-facebook",{attrs:{has_icon:""}}),o("vue-goodshare-twitter",{attrs:{has_icon:""}}),o("vue-goodshare-pinterest",{attrs:{has_icon:""}})],1)]),o("p",{staticClass:"content"},[o("span",{staticClass:"post-image"},[o("img",{attrs:{src:t.post.photo,alt:t.post.alt}}),o("small",[t._v(t._s(t.post.credit))])]),o("span",{domProps:{innerHTML:t._s(t.post.content)}})]),t.post.categories.length?o("p",{staticClass:"categories"},[t._v("\n      Categories: "),t._l(t.post.categories,function(e){return o("a",{key:e.id,staticClass:"category",on:{click:function(s){t.goToCategory(e.name)}}},[t._v(t._s(e.name)+" ")])})],2):t._e(),o("div",{staticClass:"paging",class:{older:!t.post.newer}},[t.post.newer?o("router-link",{staticClass:"button",attrs:{to:t.post.newer,tag:"button"}},[o("img",{staticClass:"arrow left",attrs:{src:s("215d")}}),t._v("Newer Post")]):t._e(),t.post.older?o("router-link",{staticClass:"button",attrs:{to:t.post.older,tag:"button"}},[t._v("Older Post"),o("img",{staticClass:"arrow",attrs:{src:s("215d")}})]):t._e()],1)]),o("aside",[o("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[o("div",{staticClass:"form-group"},[o("label",{attrs:{htmlFor:"search"}},[t._v("Search")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control",attrs:{type:"text",name:"search"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._m(0)])]),o("div",{staticClass:"card resources"},[o("h3",[t._v("Want a list of additional resources?")]),o("div",{staticClass:"footer"},[o("router-link",{staticClass:"button",attrs:{to:"/resources",tag:"button"}},[t._v("Resources")])],1)]),o("div",{staticClass:"card about"},[o("h3",[t._v("To learn more about the author")]),o("div",{staticClass:"footer"},[o("router-link",{staticClass:"button",attrs:{to:"/about",tag:"button"}},[t._v("Click Here")])],1)]),o("div",{staticClass:"card contact"},[o("h3",[t._v("Questions or Comments?")]),o("div",{staticClass:"footer"},[o("router-link",{staticClass:"button",attrs:{to:"/contact",tag:"button"}},[t._v("Contact Me")])],1)])])])},Q=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{attrs:{type:"submit"}},[o("img",{attrs:{src:s("3e7d")}})])}],V=s("7aff"),R=s("79b6"),W=s("35dd"),K={data(){return{post:{author:"",categories:[],content:"",createdAt:"",title:"",quote:"",credit:"",photo:"",older:"",newer:"",alt:""},query:"",image:null,user:null}},created(){this.getPost(this.$route.params.path);try{this.user=JSON.parse(sessionStorage.getItem("user"))}catch(t){console.error(t)}},methods:{handleSubmit(t){this.query&&zt.push({path:"/blog",query:{query:this.query}})},edit(){zt.push({path:"/blog/create",query:{path:this.post.path}})},getPost(t){C.getByPath(t).then(t=>{if("Not Found"===t)zt.push("/blog");else{this.post=t,this.post.photo=`/api/image/${this.post.photo}`;let e={year:"numeric",month:"long",day:"numeric"};this.post.createdAt=new Date(this.post.createdAt).toLocaleDateString("en-US",e),this.post.content=this.post.content.replace(/(?:\r\n|\r|\n)/g,"<br>")}})},goToCategory(t){zt.push({path:"/blog",query:{category:t}})}},computed:{isLoggedIn:function(){return!!this.user}},components:{VueGoodshareFacebook:V["a"],VueGoodshareTwitter:R["a"],VueGoodsharePinterest:W["a"]},watch:{$route(t,e){this.getPost(t.params.path)}}},Y=K,Z=(s("98de"),Object(h["a"])(Y,H,Q,!1,null,null,null));Z.options.__file="Post.vue";var X=Z.exports,tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"contact"}},[s("h2",[t._v("Contact Me")]),t.sent?s("p",[t._v("Message sent")]):t._e(),t.error?s("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),s("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("div",{staticClass:"sender"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"name"}},[t._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.name},attrs:{type:"text",name:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"email",attrs:{htmlFor:"email"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.email},attrs:{type:"text",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"subject"}},[t._v("Subject")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.subject},attrs:{type:"text",name:"subject"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"message"}},[t._v("Message")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.message},attrs:{type:"text",name:"message"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("button",{staticClass:"button",attrs:{disabled:t.loading}},[t._v("Send")])])])])},et=[],st={data(){return{name:"",email:"",subject:"",message:"",submitted:!1,loading:!1,error:"",sent:!1}},methods:{handleSubmit(t){this.submitted=!0,this.sent=!1;const{name:e,email:s,subject:o,message:a}=this;e&&s&&o&&a?(this.loading=!0,A.email(e,s,o,a).then(()=>{this.sent=!0,this.name="",this.email="",this.subject="",this.message="",this.error=""}).catch(t=>this.error=t),this.submitted=!1,this.loading=!1):alert("Invalid entry")}}},ot=st,at=(s("6d71"),Object(h["a"])(ot,tt,et,!1,null,null,null));at.options.__file="Contact.vue";var nt=at.exports,rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"create"}},[t.edit?s("h2",[t._v("Edit")]):s("h2",[t._v("Create")]),t.error?s("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),s("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"title"}},[t._v("Title")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.title},attrs:{type:"text",name:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"quote"}},[t._v("Quote")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quote,expression:"quote"}],staticClass:"form-control quote",class:{"is-invalid":t.submitted&&!t.quote},attrs:{type:"text",name:"quote"},domProps:{value:t.quote},on:{input:function(e){e.target.composing||(t.quote=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"content"}},[t._v("Content")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.content},attrs:{type:"text",name:"content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"photo"}},[t._v("Photo")]),s("vue-dropzone",{ref:"myVueDropzone",staticClass:"form-control",attrs:{id:"dropzone",name:"photo",options:t.dropzoneOptions},on:{"vdropzone-complete":t.afterComplete}})],1),s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"alt"}},[t._v("Photo description")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.alt,expression:"alt"}],staticClass:"form-control",attrs:{type:"text",name:"alt"},domProps:{value:t.alt},on:{input:function(e){e.target.composing||(t.alt=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"credit"}},[t._v("Credit")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.credit,expression:"credit"}],staticClass:"form-control",attrs:{type:"text",name:"credit"},domProps:{value:t.credit},on:{input:function(e){e.target.composing||(t.credit=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"categories"}},[t._v("Categories")]),s("multiselect",{attrs:{name:"categories",label:"name","track-by":"name","tag-placeholder":"",placeholder:"Search or add a category",taggable:!0,"show-labels":!1,options:t.categoryOptions,multiple:!0},on:{tag:t.addCategory},model:{value:t.categories,callback:function(e){t.categories=e},expression:"categories"}})],1),s("div",{staticClass:"form-group"},[t.edit?s("button",{staticClass:"cancel button",attrs:{disabled:t.loading,type:"button"},on:{click:t.remove}},[t._v("Delete")]):s("router-link",{staticClass:"cancel button",attrs:{disabled:t.loading,type:"button",to:"/blog",tag:"button"}},[t._v("Cancel")]),t.edit?s("button",{staticClass:"button",attrs:{disabled:t.loading}},[t._v("Save")]):s("button",{staticClass:"button",attrs:{disabled:t.loading}},[t._v("Publish")])],1)])])},it=[],lt=s("92c3"),ct=s.n(lt),ut=(s("1e3f"),s("8e5f")),ht=s.n(ut),dt=(s("e607"),{components:{vueDropzone:ct.a,Multiselect:ht.a},data(){return{dropzoneOptions:{headers:{Authorization:v()},url:"/api/image/",addRemoveLinks:!0,autoProcessQueue:!1,maxFiles:1,acceptedFiles:"image/*",dictDefaultMessage:"<button class='button upload' type='button'>Upload Photo</button><p>Or drag photo here</p>"},title:"",quote:"",content:"",credit:"",categories:[],categoryOptions:[],path:"",submitted:!1,loading:!1,edit:!1,error:"",post:null,older:"",newer:"",alt:""}},created(){B.getAll().then(t=>this.categoryOptions=t),this.$route.query.path&&(this.edit=!0,C.getByPath(this.$route.query.path).then(t=>{this.post=t,this.title=t.title,this.quote=t.quote,this.content=t.content,this.credit=t.credit,this.categories=t.categories,this.path=t.path,this.older=t.older,this.newer=t.newer,this.alt=t.alt,M.info(t.photo).then(e=>{let s={};s.size=e.length,s.type=e.contentType,this.$refs.myVueDropzone.manuallyAddFile(s,`/api/image/${t.photo}`)})}))},methods:{handleSubmit(t){if(this.submitted=!0,this.error="",this.title)if(this.quote)if(this.content)if(this.loading=!0,this.path=this.title.toLowerCase().replace(/\s+/g,"-"),this.$refs.myVueDropzone.getQueuedFiles().length>0)this.$refs.myVueDropzone.processQueue();else{if(!this.edit)return void(this.error="No photo selected");this.updateOrCreate()}else this.error="Missing content";else this.error="Missing quote";else this.error="Missing title"},afterComplete(t){t&&!t.manuallyAdded&&this.updateOrCreate(t)},updateOrCreate(t){this.edit?t?C.update(this.title,this.quote,t.xhr.response,this.alt,this.content,this.credit,this.categories,this.path,this.older,this.newer).then(zt.push(`/blog/${this.path}`)).catch(t=>this.error=t):C.update(this.title,this.quote,this.post.photo,this.alt,this.content,this.credit,this.categories,this.path,this.older,this.newer).then(zt.push(`/blog/${this.path}`)).catch(t=>this.error=t):C.getNewest().then(e=>{e?C.update(e.title,e.quote,e.photo,e.alt,e.content,e.credit,e.categories,e.path,e.older,this.path).then(C.create(this.title,this.quote,t.xhr.response,this.alt,this.content,this.credit,this.categories,this.path,e.path).then(zt.push(`/blog/${this.path}`)).catch(t=>this.error=t)).catch(t=>this.error=t):C.create(this.title,this.quote,t.xhr.response,this.alt,this.content,this.credit,this.categories,this.path,"").then(zt.push(`/blog/${this.path}`)).catch(t=>this.error=t)})},remove(){confirm("Are you sure you want to delete this blog post? (This action cannot be undone)")&&C.remove(this.path).then(zt.push("/blog"))},addCategory(t){B.create(t);const e={name:t};this.categoryOptions.push(e),this.categories.push(e)}}}),pt=dt,mt=(s("af4f"),Object(h["a"])(pt,rt,it,!1,null,null,null));mt.options.__file="Create.vue";var gt=mt.exports,vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"faq"}},[s("h2",[t._v("Frequently Asked Questions")]),s("p",{staticClass:"sub-heading"},[t._v("I love to answer readers' questions! Here are a few of the most popular FAQs:")]),t._l(t.questions,function(e){return s("div",{staticClass:"category"},[s("h3",[t._v(t._s(e.title))]),t._l(e.questions,function(e){return s("span",{staticClass:"qna"},[s("p",{staticClass:"question",class:{expanded:e.showing},on:{click:function(t){e.showing=!e.showing}}},[t._v(t._s(e.question))]),s("p",{directives:[{name:"show",rawName:"v-show",value:e.showing,expression:"question.showing"}],staticClass:"answer"},[t._v(t._s(e.answer))])])})],2)}),s("div",{staticClass:"banner"},[s("h3",[t._v("Have a question that is not listed?")]),s("router-link",{staticClass:"button",attrs:{to:"/contact",tag:"button"}},[t._v("Contact Me")])],1)],2)},ft=[],bt={data(){return{questions:[{title:"Special Needs",questions:[{question:"What is the most important thing that you wish you had known sooner as a parent of a child with special needs?",answer:"I wish I would have know more of my options with the school system. I had no idea what my options were, and it seemed almost like it was a secret.",showing:!1}]},{title:"School System",questions:[{question:"How often should you communicate with your student’s teacher and others involved in your child’s educational plan?",answer:"IEPs and 504 Plans are renewed yearly. If changes are needed, the plans can be visited at any point one of the adults involved deems necessary. If you start at the beginning with open communication, the child will have a more successful year.",showing:!1}]},{title:"Personal",questions:[{question:"How do you survive with 9 kids and some of them with special needs?",answer:"One day at a time. Sometimes it seems like one hour at a time. I try to love everyone where they are.",showing:!1},{question:"How did you feel when your son was diagnosed with autism?",answer:"Even though we knew that something was different about him, it was still a shock when he was diagnosed. I think it was hard hearing it, even though we lived it every day. Once we got over the initial shock, we went into the grieving process, trying to process how his life would be different and how the things you hope for your children may not happen with him. Then we tried to learn anything and everything we could about autism. We wanted to help him as best as we could. Knowledge is power.",showing:!1},{question:"Where did you find information?",answer:"I started at the library. We checked out a bunch of books and started reading them. Some were way too advanced for me, so I would try something different. I wanted to help him the best that I could. I would also talk to people. You can learn some amazing things by listening to other people’s stories.",showing:!1}]}]}}},_t=bt,yt=(s("e6a4"),Object(h["a"])(_t,vt,ft,!1,null,null,null));yt.options.__file="FAQ.vue";var Ct=yt.exports,wt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[t._m(0),s("router-link",{staticClass:"learn-more button",attrs:{to:"/about",tag:"button"}},[t._v("Learn More")]),t.blogs.length?s("div",{staticClass:"recent"},[s("h2",[t._v("Recent Posts:")]),s("div",{staticClass:"blog-boxes"},t._l(t.blogs,function(e){return s("div",{key:e.id,staticClass:"blog-box",on:{click:function(s){t.goToBlog(e.path)}}},[s("p",[t._v(t._s(e.title))]),s("img",{attrs:{src:"/api/image/"+e.photo,alt:e.alt}})])}),0)]):t._e()],1)},xt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"boxes"},[s("div",{staticClass:"box clients"},[s("h2",[t._v("Clients:")]),s("p",[t._v("Parents, Educators, or Caregivers of people with special needs, and people with special needs.")])]),s("div",{staticClass:"box mission"},[s("h2",[t._v("Our Mission:")]),s("p",[t._v("Help people navigate the joys, frustrations, and challenges of life in relation to special needs.")])]),s("div",{staticClass:"box services"},[s("h2",[t._v("Services:")]),s("p",[t._v("Provide resources and information, emotional support, and comic relief.")])])])}],qt={data(){return{blogs:[]}},created(){C.getAll().then(t=>this.blogs=t.reverse().slice(0,2))},methods:{goToBlog(t){zt.push(`/blog/${t}`)}}},kt=qt,St=(s("c219"),Object(h["a"])(kt,wt,xt,!1,null,null,null));St.options.__file="Home.vue";var $t=St.exports,jt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("h2",[t._v("Login")]),t.error?s("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),s("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"username"}},[t._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.username},attrs:{type:"text",name:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"password"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.password},attrs:{type:"password",name:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("button",{staticClass:"button",attrs:{disabled:t.loading}},[t._v("Login")])])])])},Pt=[],Ot={data(){return{username:"",password:"",submitted:!1,loading:!1,returnUrl:"",error:""}},created(){_.logout(),this.returnUrl=this.$route.query.returnUrl||"/"},methods:{handleSubmit(t){this.submitted=!0;const{username:e,password:s}=this;e&&s?(this.loading=!0,_.login(e,s).then(t=>{zt.push(this.returnUrl),this.$emit("loggedIn",t)}).catch(t=>this.error=t),this.submitted=!1,this.loading=!1):alert("Invalid entry")}}},Tt=Ot,It=(s("7fa3"),Object(h["a"])(Tt,jt,Pt,!1,null,null,null));It.options.__file="Login.vue";var At=It.exports,Et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"resources"}},[s("h2",[t._v("Resources")]),t._l(t.resources,function(e){return s("div",{key:e.id,staticClass:"resource"},[s("a",{staticClass:"box",attrs:{href:e.link,target:"_blank"}},[s("div",{staticClass:"image"},[s("img",{attrs:{src:e.image}})]),s("p",[t._v(t._s(e.title))])]),s("p",{staticClass:"description"},[t._v(t._s(e.description))])])})],2)},Mt=[],Nt={data(){return{resources:[{title:"Utah Valley Pediatrics",image:s("80ae"),link:"https://www.uvpediatrics.com",description:"We have been going to this clinic for over 30 years. Lots of useful information on this website."},{title:"Provo School District",image:s("dafa"),link:"https://provo.edu/special-education",description:"Basic useful information from Provo School District."},{title:"Carson Smith Scholarship",image:s("ba6f"),link:"https://www.schools.utah.gov/specialeducation/resources/scholarships",description:"A Utah based scholarship for children with special needs. Look for a scholarship near you."},{title:"Understanding Special Education",image:s("8987"),link:"https://www.understood.org/en/school-learning/special-services/special-education-basics/understanding-special-education",description:"A very informative site that gives the basics of special education."}]}}},Bt=Nt,Lt=(s("59d8"),Object(h["a"])(Bt,Et,Mt,!1,null,null,null));Lt.options.__file="Resources.vue";var Ft=Lt.exports;o["a"].use(r["a"]);const Dt=new r["a"]({mode:"history",routes:[{path:"/about",component:p},{path:"/blog",component:G},{path:"/blog/create",component:gt},{path:"/blog/:path",component:X},{path:"/contact",component:nt},{path:"/faq",component:Ct},{path:"/",component:$t},{path:"/login",component:At},{path:"/resources",component:Ft},{path:"*",redirect:"/"}],scrollBehavior(t,e,s){return{x:0,y:0}}});Dt.beforeEach((t,e,s)=>{const o=t.path.includes("/create"),a=sessionStorage.getItem("user");if(o&&!a)return s({path:"/login",query:{returnUrl:t.path}});s()});var zt=Dt,Jt={name:"app",data(){return{user:null}},created(){try{this.user=JSON.parse(sessionStorage.getItem("user"))}catch(t){console.error(t)}},methods:{logout:function(t){this.user=null,sessionStorage.removeItem("user"),t.stopPropagation(),zt.push("/")},login(t){this.user=t},goToLogin(){zt.push({path:"/login",query:{returnUrl:this.$route.path}})}},computed:{isLoggedIn:function(){return!!this.user}}},Ut=Jt,Gt=(s("7faf"),Object(h["a"])(Ut,a,n,!1,null,null,null));Gt.options.__file="App.vue";var Ht=Gt.exports,Qt=s("9f7b"),Vt=(s("f9e3"),s("2dd8"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card",attrs:{id:"mj-card"}},[s("h3",[t._v(t._s(t.title))])])}),Rt=[],Wt={props:{title:""}},Kt=Wt,Yt=(s("d040"),Object(h["a"])(Kt,Vt,Rt,!1,null,null,null));Yt.options.__file="MJCard.vue";var Zt=Yt.exports,Xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card",attrs:{id:"mj-card"}},[s("h3",[t._v(t._s(t.title))]),s("div",{staticClass:"footer"},[s("router-link",{staticClass:"button",attrs:{to:t.link,tag:"button"}},[t._v(t._s(t.label))])],1)])},te=[],ee={extends:Zt,props:{label:"",link:""}},se=ee,oe=(s("ce2b"),Object(h["a"])(se,Xt,te,!1,null,null,null));oe.options.__file="MJButtonCard.vue";var ae=oe.exports,ne=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card",attrs:{id:"mj-card"}},[s("h3",[t._v(t._s(t.title))]),s("div",{staticClass:"list"},[t._l(t.list.slice(0,t.displayCount),function(e){return s("a",{key:e.id,staticClass:"item",on:{click:function(s){t.goToItem(e)}}},[t._v(t._s(t.getItemLabel(e)))])}),t.displayCount<t.list.length?s("a",{staticClass:"item",on:{click:function(e){t.moreItems()}}},[t._v("More...")]):t._e()],2)])},re=[],ie={extends:Zt,props:{list:null},methods:{moreItems(){this.displayCount+=10},goToItem(t){zt.push({path:"/blog",query:{category:t.name}})},getItemLabel(t){return t.name}},data(){return{displayCount:10}}},le=ie,ce=(s("615b"),Object(h["a"])(le,ne,re,!1,null,null,null));ce.options.__file="MJListCard.vue";var ue=ce.exports,he=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card",attrs:{id:"mj-card"}},[s("h3",[t._v(t._s(t.title))]),s("div",{staticClass:"list"},[t._l(t.list.slice(0,t.displayCount),function(e){return s("a",{key:e.id,staticClass:"item",on:{click:function(s){t.goToItem(e)}}},[t._v(t._s(t.getItemLabel(e)))])}),t.displayCount<t.list.length?s("a",{staticClass:"item",on:{click:function(e){t.moreItems()}}},[t._v("More...")]):t._e()],2)])},de=[],pe={extends:ue,props:{list:null},methods:{moreItems(){this.displayCount+=10},goToItem(t){zt.push({path:"/blog",query:{month:t.month+t.year}})},getItemLabel(t){return`${t.month} ${t.year} (${t.count})`}},data(){return{displayCount:10}}},me=pe,ge=(s("8c41"),Object(h["a"])(me,he,de,!1,null,null,null));ge.options.__file="MJArchiveListCard.vue";var ve=ge.exports;o["a"].use(Qt["a"]),o["a"].component("mj-card",Zt),o["a"].component("mj-button-card",ae),o["a"].component("mj-list-card",ue),o["a"].component("mj-archive-list-card",ve),new o["a"]({router:zt,render:t=>t(Ht)}).$mount("#app")},"586c":function(t,e,s){},"59d8":function(t,e,s){"use strict";var o=s("bb6a"),a=s.n(o);a.a},"615b":function(t,e,s){"use strict";var o=s("c4ec"),a=s.n(o);a.a},"62de":function(t,e,s){},"664c":function(t,e,s){},"6d71":function(t,e,s){"use strict";var o=s("a3ba"),a=s.n(o);a.a},"7d40":function(t,e,s){},"7fa3":function(t,e,s){"use strict";var o=s("7d40"),a=s.n(o);a.a},"7faf":function(t,e,s){"use strict";var o=s("586c"),a=s.n(o);a.a},"80ae":function(t,e,s){t.exports=s.p+"img/uvpediatrics-logo.360cc65e.png"},8987:function(t,e,s){t.exports=s.p+"img/Understood-logo.deb9de7d.png"},"8c41":function(t,e,s){"use strict";var o=s("fb1a"),a=s.n(o);a.a},"98de":function(t,e,s){"use strict";var o=s("62de"),a=s.n(o);a.a},a3ba:function(t,e,s){},a499:function(t,e,s){t.exports=s.p+"img/family.618caec2.jpg"},aa5e:function(t,e,s){},af4f:function(t,e,s){"use strict";var o=s("aa5e"),a=s.n(o);a.a},ba6f:function(t,e,s){t.exports=s.p+"img/usbe-logo.f5d49ee0.png"},bb6a:function(t,e,s){},c219:function(t,e,s){"use strict";var o=s("1cc5"),a=s.n(o);a.a},c4ec:function(t,e,s){},ce2b:function(t,e,s){"use strict";var o=s("ef52"),a=s.n(o);a.a},d040:function(t,e,s){"use strict";var o=s("deb2"),a=s.n(o);a.a},d3e6:function(t,e,s){"use strict";var o=s("01bc"),a=s.n(o);a.a},dafa:function(t,e,s){t.exports=s.p+"img/pcsd.03be41e7.png"},de3b:function(t,e,s){},deb2:function(t,e,s){},e6a4:function(t,e,s){"use strict";var o=s("664c"),a=s.n(o);a.a},ef52:function(t,e,s){},fb1a:function(t,e,s){}});
//# sourceMappingURL=app.dfa27c49.js.map