(function(t){function e(e){for(var s,n,i=e[0],l=e[1],c=e[2],h=0,d=[];h<i.length;h++)n=i[h],a[n]&&d.push(a[n][0]),a[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],s=!0,i=1;i<o.length;i++){var l=o[i];0!==a[l]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=o[0]))}return t}var s={},a={app:0},r=[];function n(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=s,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"01bc":function(t,e,o){},"1cc5":function(t,e,o){},"215d":function(t,e,o){t.exports=o.p+"img/right-arrow.ee54d9c0.svg"},"304c":function(t,e,o){"use strict";var s=o("de3b"),a=o.n(s);a.a},"35d7":function(t,e,o){t.exports=o.p+"img/edit-icon.a750e405.svg"},"3e7d":function(t,e,o){t.exports=o.p+"img/search-icon.f6170d32.svg"},"56d7":function(t,e,o){"use strict";o.r(e);var s=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("header",[t.isLoggedIn?t._e():o("div",{staticClass:"login-wrapper"},[o("a",{staticClass:"hide login blue-hover",on:{click:t.goToLogin}},[t._v("Login")])]),t.isLoggedIn?o("b-dropdown",{staticClass:"login",attrs:{variant:"link",text:t.user.username}},[o("b-dropdown-item",{staticClass:"blue-hover",attrs:{to:"/blog/create"}},[t._v("\n        Create\n      ")]),o("b-dropdown-item",{staticClass:"blue-hover",on:{click:t.logout}},[t._v("\n        Logout\n      ")])],1):t._e(),o("h1",[o("router-link",{staticClass:"blue-hover",attrs:{to:"/"}},[t._v("This Mother's Journey")])],1),o("nav",[o("router-link",{staticClass:"blue-hover",attrs:{to:"/"}},[t._v("Home")]),o("router-link",{staticClass:"purple-hover",attrs:{to:"/about"}},[t._v("About")]),o("router-link",{staticClass:"pink-hover",attrs:{to:"/blog"}},[t._v("Blog")]),o("router-link",{staticClass:"blue-hover",attrs:{to:"/resources"}},[t._v("Resources")]),o("router-link",{staticClass:"purple-hover",attrs:{to:"/faq"}},[t._v("FAQ")]),o("router-link",{staticClass:"pink-hover",attrs:{to:"/contact"}},[t._v("Contact")])],1)],1),o("router-view",{on:{loggedIn:t.login}}),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("p",[t._v("Heading Photo by "),o("a",{attrs:{href:"https://unsplash.com/photos/-3Dc-I-65ug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[t._v("Aaron Burden")]),t._v(" on "),o("a",{attrs:{href:"https://unsplash.com/search/photos/hot-air-balloon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[t._v("Unsplash")])]),o("p",[t._v("©2018 by This Mother's Journey")])])}],n=o("8c4f"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"about"}},[o("h2",[t._v("This Mother's Journey")]),t._m(0),o("div",{staticClass:"banner"},[o("h3",[t._v("Questions or Comments?")]),o("router-link",{staticClass:"button",attrs:{to:"/contact",tag:"button"}},[t._v("Contact Me")])],1)])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("p",{staticClass:"purpose"},[t._v("\n      The purpose of this website is to provide resources and information, emotional support and comic relief for parents,\n      educators, or caregivers of people with special needs as well as individuals with special needs.\n      My hope is that through the resources and information provided on this website, people will be better\n      able to navigate the joys, frustrations, and challenges of life in relation to special needs.\n    ")]),s("div",{staticClass:"about-me"},[s("img",{attrs:{src:o("a499"),alt:"My family posing on a stair case for a family photo"}}),s("div",[s("h2",{staticClass:"about-me-header"},[t._v("About Me")]),s("p",[t._v("\n          I married a wonderful man over 30 years ago.\n          We have nine wonderful children five of which have married wonderful people.\n          That doesn't mean that everything is wonderful all the time.\n          There are always difficult times.\n          I love helping people and try to make people's burden a little bit lighter.\n          If I can do this with knowledge that I have, then that is a bonus.\n          I love my family and my life revolves around them.\n        ")])])])])}],c={},u=c,h=(o("d3e6"),o("2877")),d=Object(h["a"])(u,i,l,!1,null,null,null);d.options.__file="About.vue";var p=d.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"blog"}},[o("section",[o("h2",[t._v("Blog")]),t._l(t.blogs,function(e){return o("div",{key:e.id,staticClass:"box",on:{click:function(o){t.goToBlog(e.path)}}},[o("img",{attrs:{src:"/api/image/"+e.photo,alt:e.alt}}),o("p",[t._v(t._s(e.title))]),o("p",[t._v(t._s(e.createdAt))]),o("p",[t._v(t._s(e.quote))])])})],2),o("aside",[o("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[o("div",{staticClass:"form-group"},[o("label",{attrs:{htmlFor:"search"}},[t._v("Search")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control",attrs:{type:"text",name:"search"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._m(0)])]),o("div",{staticClass:"banner resources"},[o("h3",{staticClass:"categories"},[t._v("Categories:")]),o("div",{staticClass:"categories-list"},t._l(t.categories.slice(0,14),function(e){return o("p",{key:e.id,staticClass:"category",on:{click:function(o){t.goToCategory(e.name)}}},[t._v(t._s(e.name))])}),0)]),o("div",{staticClass:"banner archive"},[o("h3",[t._v("Archive:")]),t._l(t.archive,function(e){return o("p",{key:e.id,on:{click:function(o){t.goToMonth(e)}}},[t._v(t._s(e.month)+" "+t._s(e.year)+" ("+t._s(e.count)+")")])})],2),o("div",{staticClass:"banner contact"},[o("h3",[t._v("Questions or Comments?")]),o("router-link",{staticClass:"button",attrs:{to:"/contact",tag:"button"}},[t._v("Contact Me")])],1)])])},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{attrs:{type:"submit"}},[s("img",{attrs:{src:o("3e7d")}})])}];function v(){let t=JSON.parse(sessionStorage.getItem("user"));return t&&t.token?"Bearer "+t.token:{}}function f(){sessionStorage.removeItem("user")}function b(t){return 404===t.status?t.text():t.text().then(e=>{const o=e&&JSON.parse(e);if(!t.ok){401===t.status&&(f(),Bt.push("/"));const e=o&&o.message||t.statusText;return Promise.reject(e)}return o})}const y={login:_,logout:f};function _(t,e){const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})};return fetch("/api/auth/",o).then(b).then(t=>{return t&&sessionStorage.setItem("user",JSON.stringify(t)),t})}const w={create:C,getAll:q,getByCategory:x,find:k,getByPath:S,update:P,remove:T,getNewest:O,getArchive:A,getByMonth:$};function C(t,e,o,s,a,r,n,i,l){const c={method:"POST",headers:{"Content-Type":"application/json",Authorization:v()},body:JSON.stringify({title:t,quote:e,photo:o,alt:s,content:a,credit:r,categories:n,path:i,older:l})};return fetch("/api/blog/",c).then(b).then(t=>{return t})}function q(){const t={method:"GET"};return fetch("/api/blog/",t).then(b)}function x(t){const e={method:"GET"};return fetch(`/api/blog?category=${t}`,e).then(b)}function k(t){const e={method:"GET"};return fetch(`/api/blog?query=${t}`,e).then(b)}function S(t){const e={method:"GET"};return fetch(`/api/blog/${t}`,e).then(b)}function P(t,e,o,s,a,r,n,i,l,c){const u={method:"PUT",headers:{"Content-Type":"application/json",Authorization:v()},body:JSON.stringify({title:t,quote:e,photo:o,alt:s,content:a,credit:r,categories:n,path:i,older:l,newer:c})};return fetch(`/api/blog/${i}`,u).then(b)}function T(t){const e={method:"DELETE",headers:{Authorization:v()}};return fetch(`/api/blog/${t}`,e).then(b)}function O(){const t={method:"GET"};return fetch("/api/blog/newest",t).then(b)}function A(){const t={method:"GET"};return fetch("/api/blog/archive",t).then(b)}function $(t){const e={method:"GET"};return fetch(`/api/blog?month=${t}`,e).then(b)}const j={email:E};function E(t,e,o,s){const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:e,subject:o,message:s})};return fetch("/api/email/",a).then(b)}const I={info:N};function N(t){const e={method:"GET"};return fetch(`/api/image/info/${t}`,e).then(b)}const M={create:D,getAll:F,remove:L};function D(t){const e={method:"POST",headers:{"Content-Type":"application/json",Authorization:v()},body:JSON.stringify({name:t})};return fetch("/api/category/",e).then(b).then(t=>{return t})}function F(){const t={method:"GET"};return fetch("/api/category/",t).then(b)}function L(t){const e={method:"DELETE",headers:{Authorization:v()}};return fetch(`/api/category/${t}`,e).then(b)}var B={data(){return{blogs:[],categories:[],archive:[],query:""}},created(){this.getBlogs(this.$route.query),M.getAll().then(t=>this.categories=t),w.getArchive().then(t=>{this.archive=this.processArchive(t)})},methods:{handleSubmit(t){this.query&&Bt.push({path:"/blog",query:{query:this.query}})},goToBlog(t){Bt.push(`/blog/${t}`)},goToCategory(t){Bt.push({path:"/blog",query:{category:t}})},goToMonth(t){Bt.push({path:"/blog",query:{month:t.month+t.year}})},getBlogs(t){t&&(t.category||t.query||t.month)?t.category?w.getByCategory(t.category).then(t=>{let e={year:"numeric",month:"long",day:"numeric"};for(let o=0;o<t.length;o++)t[o].createdAt=new Date(t[o].createdAt).toLocaleDateString("en-US",e);this.blogs=t.reverse()}):t.query?w.find(t.query).then(t=>{let e={year:"numeric",month:"long",day:"numeric"};for(let o=0;o<t.length;o++)t[o].createdAt=new Date(t[o].createdAt).toLocaleDateString("en-US",e);this.blogs=t.reverse()}):t.month&&w.getByMonth(t.month).then(t=>{let e={year:"numeric",month:"long",day:"numeric"};for(let o=0;o<t.length;o++)t[o].createdAt=new Date(t[o].createdAt).toLocaleDateString("en-US",e);this.blogs=t.reverse()}):w.getAll().then(t=>{let e={year:"numeric",month:"long",day:"numeric"};for(let o=0;o<t.length;o++)t[o].createdAt=new Date(t[o].createdAt).toLocaleDateString("en-US",e);this.blogs=t.reverse()})},processArchive(t){const e=["January","February","March","April","May","June","July","August","September","October","November","December"];for(let o=0;o<t.length;o++)t[o]={count:t[o].count,month:e[t[o]._id.month-1],year:t[o]._id.year};return t}},watch:{$route(t,e){this.getBlogs(t.query)}}},U=B,z=(o("304c"),Object(h["a"])(U,m,g,!1,null,null,null));z.options.__file="Blog.vue";var J=z.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"post"}},[s("section",[s("h2",[t._v("\n      "+t._s(t.post.title)+"\n      "),t.isLoggedIn?s("button",{on:{click:t.edit}},[s("img",{attrs:{src:o("35d7")}})]):t._e()]),s("p",[t._v(t._s(t.post.quote))]),s("p",{staticClass:"date"},[s("span",[t._v("Published on: "+t._s(t.post.createdAt))]),s("span",[s("vue-goodshare-facebook",{attrs:{has_icon:""}}),s("vue-goodshare-twitter",{attrs:{has_icon:""}}),s("vue-goodshare-pinterest",{attrs:{has_icon:""}})],1)]),s("p",{staticClass:"content"},[s("span",{staticClass:"post-image"},[s("img",{attrs:{src:t.post.photo,alt:t.post.alt}}),s("small",[t._v(t._s(t.post.credit))])]),s("span",{domProps:{innerHTML:t._s(t.post.content)}})]),t.post.categories.length?s("p",{staticClass:"categories"},[t._v("Categories: "+t._s(t.post.categories))]):t._e(),s("div",{staticClass:"paging",class:{older:!t.post.newer}},[t.post.newer?s("router-link",{staticClass:"button",attrs:{to:t.post.newer,tag:"button"}},[s("img",{staticClass:"arrow left",attrs:{src:o("215d")}}),t._v("Newer Post")]):t._e(),t.post.older?s("router-link",{staticClass:"button",attrs:{to:t.post.older,tag:"button"}},[t._v("Older Post"),s("img",{staticClass:"arrow",attrs:{src:o("215d")}})]):t._e()],1)]),s("aside",[s("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{htmlFor:"search"}},[t._v("Search")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control",attrs:{type:"text",name:"search"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._m(0)])]),s("div",{staticClass:"banner resources"},[s("h3",[t._v("Want a list of additional resources?")]),s("router-link",{staticClass:"button",attrs:{to:"/resources",tag:"button"}},[t._v("Resources")])],1),s("div",{staticClass:"banner about"},[s("h3",[t._v("To learn more about the author")]),s("router-link",{staticClass:"button",attrs:{to:"/about",tag:"button"}},[t._v("Click Here")])],1),s("div",{staticClass:"banner contact"},[s("h3",[t._v("Have questions or comments?")]),s("router-link",{staticClass:"button",attrs:{to:"/contact",tag:"button"}},[t._v("Contact Me")])],1)])])},H=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{attrs:{type:"submit"}},[s("img",{attrs:{src:o("3e7d")}})])}],Q=o("7aff"),V=o("79b6"),W=o("35dd"),R={data(){return{post:{author:"",categories:[],content:"",createdAt:"",title:"",quote:"",credit:"",photo:"",older:"",newer:"",alt:""},query:"",image:null,user:null}},created(){this.getPost(this.$route.params.path);try{this.user=JSON.parse(sessionStorage.getItem("user"))}catch(t){console.error(t)}},methods:{handleSubmit(t){this.query&&Bt.push({path:"/blog",query:{query:this.query}})},edit(){Bt.push({path:"/blog/create",query:{path:this.post.path}})},getPost(t){w.getByPath(t).then(t=>{if("Not Found"===t)Bt.push("/blog");else{this.post=t,this.post.photo=`/api/image/${this.post.photo}`;let e={year:"numeric",month:"long",day:"numeric"};this.post.createdAt=new Date(this.post.createdAt).toLocaleDateString("en-US",e),this.post.content=this.post.content.replace(/(?:\r\n|\r|\n)/g,"<br>"),this.post.categories=Array.prototype.map.call(t.categories,t=>t.name).toString()}})}},computed:{isLoggedIn:function(){return!!this.user}},components:{VueGoodshareFacebook:Q["a"],VueGoodshareTwitter:V["a"],VueGoodsharePinterest:W["a"]},watch:{$route(t,e){this.getPost(t.params.path)}}},K=R,Y=(o("98de"),Object(h["a"])(K,G,H,!1,null,null,null));Y.options.__file="Post.vue";var X=Y.exports,Z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"contact"}},[o("h2",[t._v("Contact Me")]),t.sent?o("p",[t._v("Message sent")]):t._e(),t.error?o("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),o("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[o("div",{staticClass:"sender"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{htmlFor:"name"}},[t._v("Name")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.name},attrs:{type:"text",name:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{staticClass:"email",attrs:{htmlFor:"email"}},[t._v("Email")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.email},attrs:{type:"text",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),o("div",{staticClass:"form-group"},[o("label",{attrs:{htmlFor:"subject"}},[t._v("Subject")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.subject},attrs:{type:"text",name:"subject"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{htmlFor:"message"}},[t._v("Message")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.message},attrs:{type:"text",name:"message"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{disabled:t.loading}},[t._v("Send")])])])])},tt=[],et={data(){return{name:"",email:"",subject:"",message:"",submitted:!1,loading:!1,error:"",sent:!1}},methods:{handleSubmit(t){this.submitted=!0,this.sent=!1;const{name:e,email:o,subject:s,message:a}=this;e&&o&&s&&a?(this.loading=!0,j.email(e,o,s,a).then(()=>{this.sent=!0,this.name="",this.email="",this.subject="",this.message="",this.error=""}).catch(t=>this.error=t),this.submitted=!1,this.loading=!1):alert("Invalid entry")}}},ot=et,st=(o("6d71"),Object(h["a"])(ot,Z,tt,!1,null,null,null));st.options.__file="Contact.vue";var at=st.exports,rt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"create"}},[t.edit?o("h2",[t._v("Edit")]):o("h2",[t._v("Create")]),t.error?o("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),o("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[o("div",{staticClass:"form-group"},[o("label",{attrs:{htmlFor:"title"}},[t._v("Title")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.title},attrs:{type:"text",name:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{htmlFor:"quote"}},[t._v("Quote")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quote,expression:"quote"}],staticClass:"form-control quote",class:{"is-invalid":t.submitted&&!t.quote},attrs:{type:"text",name:"quote"},domProps:{value:t.quote},on:{input:function(e){e.target.composing||(t.quote=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{htmlFor:"content"}},[t._v("Content")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.content},attrs:{type:"text",name:"content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{htmlFor:"photo"}},[t._v("Photo")]),o("vue-dropzone",{ref:"myVueDropzone",staticClass:"form-control",attrs:{id:"dropzone",name:"photo",options:t.dropzoneOptions},on:{"vdropzone-complete":t.afterComplete}})],1),o("div",{staticClass:"form-group"},[o("label",{attrs:{htmlFor:"alt"}},[t._v("Photo description")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.alt,expression:"alt"}],staticClass:"form-control",attrs:{type:"text",name:"alt"},domProps:{value:t.alt},on:{input:function(e){e.target.composing||(t.alt=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{htmlFor:"credit"}},[t._v("Credit")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.credit,expression:"credit"}],staticClass:"form-control",attrs:{type:"text",name:"credit"},domProps:{value:t.credit},on:{input:function(e){e.target.composing||(t.credit=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{htmlFor:"categories"}},[t._v("Categories")]),o("multiselect",{attrs:{name:"categories",label:"name","track-by":"name","tag-placeholder":"",placeholder:"Search or add a category",taggable:!0,"show-labels":!1,options:t.categoryOptions,multiple:!0},on:{tag:t.addCategory},model:{value:t.categories,callback:function(e){t.categories=e},expression:"categories"}})],1),o("div",{staticClass:"form-group"},[t.edit?o("button",{staticClass:"cancel button",attrs:{disabled:t.loading,type:"button"},on:{click:t.remove}},[t._v("Delete")]):o("router-link",{staticClass:"cancel button",attrs:{disabled:t.loading,type:"button",to:"/blog",tag:"button"}},[t._v("Cancel")]),t.edit?o("button",{staticClass:"button",attrs:{disabled:t.loading}},[t._v("Save")]):o("button",{staticClass:"button",attrs:{disabled:t.loading}},[t._v("Publish")])],1)])])},nt=[],it=o("92c3"),lt=o.n(it),ct=(o("1e3f"),o("8e5f")),ut=o.n(ct),ht=(o("e607"),{components:{vueDropzone:lt.a,Multiselect:ut.a},data(){return{dropzoneOptions:{headers:{Authorization:v()},url:"/api/image/",addRemoveLinks:!0,autoProcessQueue:!1,maxFiles:1,acceptedFiles:"image/*",dictDefaultMessage:"<button class='button upload' type='button'>Upload Photo</button><p>Or drag photo here</p>"},title:"",quote:"",content:"",credit:"",categories:[],categoryOptions:[],path:"",submitted:!1,loading:!1,edit:!1,error:"",post:null,older:"",newer:"",alt:""}},created(){M.getAll().then(t=>this.categoryOptions=t),this.$route.query.path&&(this.edit=!0,w.getByPath(this.$route.query.path).then(t=>{this.post=t,this.title=t.title,this.quote=t.quote,this.content=t.content,this.credit=t.credit,this.categories=t.categories,this.path=t.path,this.older=t.older,this.newer=t.newer,this.alt=t.alt,I.info(t.photo).then(e=>{let o={};o.size=e.length,o.type=e.contentType,this.$refs.myVueDropzone.manuallyAddFile(o,`/api/image/${t.photo}`)})}))},methods:{handleSubmit(t){if(this.submitted=!0,this.error="",this.title)if(this.quote)if(this.content)if(this.loading=!0,this.path=this.title.toLowerCase().replace(/\s+/g,"-"),this.$refs.myVueDropzone.getQueuedFiles().length>0)this.$refs.myVueDropzone.processQueue();else{if(!this.edit)return void(this.error="No photo selected");this.updateOrCreate()}else this.error="Missing content";else this.error="Missing quote";else this.error="Missing title"},afterComplete(t){t&&!t.manuallyAdded&&this.updateOrCreate(t)},updateOrCreate(t){this.edit?t?w.update(this.title,this.quote,t.xhr.response,this.alt,this.content,this.credit,this.categories,this.path,this.older,this.newer).then(Bt.push(`/blog/${this.path}`)).catch(t=>this.error=t):w.update(this.title,this.quote,this.post.photo,this.alt,this.content,this.credit,this.categories,this.path,this.older,this.newer).then(Bt.push(`/blog/${this.path}`)).catch(t=>this.error=t):w.getNewest().then(e=>{e?w.update(e.title,e.quote,e.photo,e.alt,e.content,e.credit,e.categories,e.path,e.older,this.path).then(w.create(this.title,this.quote,t.xhr.response,this.alt,this.content,this.credit,this.categories,this.path,e.path).then(Bt.push(`/blog/${this.path}`)).catch(t=>this.error=t)).catch(t=>this.error=t):w.create(this.title,this.quote,t.xhr.response,this.alt,this.content,this.credit,this.categories,this.path,"").then(Bt.push(`/blog/${this.path}`)).catch(t=>this.error=t)})},remove(){confirm("Are you sure you want to delete this blog post? (This action cannot be undone)")&&w.remove(this.path).then(Bt.push("/blog"))},addCategory(t){M.create(t);const e={name:t};this.categoryOptions.push(e),this.categories.push(e)}}}),dt=ht,pt=(o("af4f"),Object(h["a"])(dt,rt,nt,!1,null,null,null));pt.options.__file="Create.vue";var mt=pt.exports,gt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"faq"}},[o("h2",[t._v("Frequently Asked Questions")]),o("p",{staticClass:"sub-heading"},[t._v("I love to answer readers' questions! Here are a few of the most popular FAQs:")]),t._l(t.questions,function(e){return o("div",{staticClass:"category"},[o("h3",[t._v(t._s(e.title))]),t._l(e.questions,function(e){return o("span",{staticClass:"qna"},[o("p",{staticClass:"question",class:{expanded:e.showing},on:{click:function(t){e.showing=!e.showing}}},[t._v(t._s(e.question))]),o("p",{directives:[{name:"show",rawName:"v-show",value:e.showing,expression:"question.showing"}],staticClass:"answer"},[t._v(t._s(e.answer))])])})],2)}),o("div",{staticClass:"banner"},[o("h3",[t._v("Have a question that is not listed?")]),o("router-link",{staticClass:"button",attrs:{to:"/contact",tag:"button"}},[t._v("Contact Me")])],1)],2)},vt=[],ft={data(){return{questions:[{title:"Special Needs",questions:[{question:"What is the most important thing that you wish you had known sooner as a parent of a child with special needs?",answer:"I wish I would have know more of my options with the school system. I had no idea what my options were, and it seemed almost like it was a secret.",showing:!1}]},{title:"School System",questions:[{question:"How often should you communicate with your student’s teacher and others involved in your child’s educational plan?",answer:"IEPs and 504 Plans are renewed yearly. If changes are needed, the plans can be visited at any point one of the adults involved deems necessary. If you start at the beginning with open communication, the child will have a more successful year.",showing:!1}]},{title:"Personal",questions:[{question:"How do you survive with 9 kids and some of them with special needs?",answer:"One day at a time. Sometimes it seems like one hour at a time. I try to love everyone where they are.",showing:!1},{question:"How did you feel when your son was diagnosed with autism?",answer:"Even though we knew that something was different about him, it was still a shock when he was diagnosed. I think it was hard hearing it, even though we lived it every day. Once we got over the initial shock, we went into the grieving process, trying to process how his life would be different and how the things you hope for your children may not happen with him. Then we tried to learn anything and everything we could about autism. We wanted to help him as best as we could. Knowledge is power.",showing:!1},{question:"Where did you find information?",answer:"I started at the library. We checked out a bunch of books and started reading them. Some were way too advanced for me, so I would try something different. I wanted to help him the best that I could. I would also talk to people. You can learn some amazing things by listening to other people’s stories.",showing:!1}]}]}}},bt=ft,yt=(o("e6a4"),Object(h["a"])(bt,gt,vt,!1,null,null,null));yt.options.__file="FAQ.vue";var _t=yt.exports,wt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"home"}},[t._m(0),o("router-link",{staticClass:"learn-more button",attrs:{to:"/about",tag:"button"}},[t._v("Learn More")]),t.blogs.length?o("div",{staticClass:"recent"},[o("h2",[t._v("Recent Posts:")]),o("div",{staticClass:"blog-boxes"},t._l(t.blogs,function(e){return o("div",{key:e.id,staticClass:"blog-box",on:{click:function(o){t.goToBlog(e.path)}}},[o("p",[t._v(t._s(e.title))]),o("img",{attrs:{src:"/api/image/"+e.photo}})])}),0)]):t._e()],1)},Ct=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"boxes"},[o("div",{staticClass:"box clients"},[o("h2",[t._v("Clients:")]),o("p",[t._v("Parents, Educators, or Caregivers of people with special needs, and people with special needs.")])]),o("div",{staticClass:"box mission"},[o("h2",[t._v("Our Mission:")]),o("p",[t._v("Help people navigate the joys, frustrations, and challenges of life in relation to special needs.")])]),o("div",{staticClass:"box services"},[o("h2",[t._v("Services:")]),o("p",[t._v("Provide resources and information, emotional support, and comic relief.")])])])}],qt={data(){return{blogs:[]}},created(){w.getAll().then(t=>this.blogs=t.reverse().slice(0,2))},methods:{goToBlog(t){Bt.push(`/blog/${t}`)}}},xt=qt,kt=(o("c219"),Object(h["a"])(xt,wt,Ct,!1,null,null,null));kt.options.__file="Home.vue";var St=kt.exports,Pt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"login"}},[o("h2",[t._v("Login")]),t.error?o("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),o("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[o("div",{staticClass:"form-group"},[o("label",{attrs:{htmlFor:"username"}},[t._v("Username")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.username},attrs:{type:"text",name:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{htmlFor:"password"}},[t._v("Password")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.password},attrs:{type:"password",name:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",attrs:{disabled:t.loading}},[t._v("Login")])])])])},Tt=[],Ot={data(){return{username:"",password:"",submitted:!1,loading:!1,returnUrl:"",error:""}},created(){y.logout(),this.returnUrl=this.$route.query.returnUrl||"/"},methods:{handleSubmit(t){this.submitted=!0;const{username:e,password:o}=this;e&&o?(this.loading=!0,y.login(e,o).then(t=>{Bt.push(this.returnUrl),this.$emit("loggedIn",t)}).catch(t=>this.error=t),this.submitted=!1,this.loading=!1):alert("Invalid entry")}}},At=Ot,$t=(o("7fa3"),Object(h["a"])(At,Pt,Tt,!1,null,null,null));$t.options.__file="Login.vue";var jt=$t.exports,Et=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"resources"}},[o("h2",[t._v("Resources")]),t._l(t.resources,function(e){return o("div",{key:e.id,staticClass:"resource"},[o("a",{staticClass:"box",attrs:{href:e.link,target:"_blank"}},[o("div",{staticClass:"image"},[o("img",{attrs:{src:e.image}})]),o("p",[t._v(t._s(e.title))])]),o("p",{staticClass:"description"},[t._v(t._s(e.description))])])})],2)},It=[],Nt={data(){return{resources:[{title:"Utah Valley Pediatrics",image:o("80ae"),link:"https://www.uvpediatrics.com",description:"We have been going to this clinic for over 30 years. Lots of useful information on this website."},{title:"Provo School District",image:o("dafa"),link:"https://provo.edu/special-education",description:"Basic useful information from Provo School District."},{title:"Carson Smith Scholarship",image:o("ba6f"),link:"https://www.schools.utah.gov/specialeducation/resources/scholarships",description:"A Utah based scholarship for children with special needs. Look for a scholarship near you."},{title:"Understanding Special Education",image:o("8987"),link:"https://www.understood.org/en/school-learning/special-services/special-education-basics/understanding-special-education",description:"A very informative site that gives the basics of special education."}]}}},Mt=Nt,Dt=(o("59d8"),Object(h["a"])(Mt,Et,It,!1,null,null,null));Dt.options.__file="Resources.vue";var Ft=Dt.exports;s["a"].use(n["a"]);const Lt=new n["a"]({mode:"history",routes:[{path:"/about",component:p},{path:"/blog",component:J},{path:"/blog/create",component:mt},{path:"/blog/:path",component:X},{path:"/contact",component:at},{path:"/faq",component:_t},{path:"/",component:St},{path:"/login",component:jt},{path:"/resources",component:Ft},{path:"*",redirect:"/"}],scrollBehavior(t,e,o){return{x:0,y:0}}});Lt.beforeEach((t,e,o)=>{const s=t.path.includes("/create"),a=sessionStorage.getItem("user");if(s&&!a)return o({path:"/login",query:{returnUrl:t.path}});o()});var Bt=Lt,Ut={name:"app",data(){return{user:null}},created(){try{this.user=JSON.parse(sessionStorage.getItem("user"))}catch(t){console.error(t)}},methods:{logout:function(t){this.user=null,sessionStorage.removeItem("user"),t.stopPropagation(),Bt.push("/")},login(t){this.user=t},goToLogin(){Bt.push({path:"/login",query:{returnUrl:this.$route.path}})}},computed:{isLoggedIn:function(){return!!this.user}}},zt=Ut,Jt=(o("7faf"),Object(h["a"])(zt,a,r,!1,null,null,null));Jt.options.__file="App.vue";var Gt=Jt.exports,Ht=o("9f7b");o("f9e3"),o("2dd8");s["a"].use(Ht["a"]),new s["a"]({router:Bt,render:t=>t(Gt)}).$mount("#app")},"586c":function(t,e,o){},"59d8":function(t,e,o){"use strict";var s=o("bb6a"),a=o.n(s);a.a},"62de":function(t,e,o){},"664c":function(t,e,o){},"6d71":function(t,e,o){"use strict";var s=o("a3ba"),a=o.n(s);a.a},"7d40":function(t,e,o){},"7fa3":function(t,e,o){"use strict";var s=o("7d40"),a=o.n(s);a.a},"7faf":function(t,e,o){"use strict";var s=o("586c"),a=o.n(s);a.a},"80ae":function(t,e,o){t.exports=o.p+"img/uvpediatrics-logo.360cc65e.png"},8987:function(t,e,o){t.exports=o.p+"img/Understood-logo.deb9de7d.png"},"98de":function(t,e,o){"use strict";var s=o("62de"),a=o.n(s);a.a},a3ba:function(t,e,o){},a499:function(t,e,o){t.exports=o.p+"img/family.618caec2.jpg"},aa5e:function(t,e,o){},af4f:function(t,e,o){"use strict";var s=o("aa5e"),a=o.n(s);a.a},ba6f:function(t,e,o){t.exports=o.p+"img/usbe-logo.f5d49ee0.png"},bb6a:function(t,e,o){},c219:function(t,e,o){"use strict";var s=o("1cc5"),a=o.n(s);a.a},d3e6:function(t,e,o){"use strict";var s=o("01bc"),a=o.n(s);a.a},dafa:function(t,e,o){t.exports=o.p+"img/pcsd.03be41e7.png"},de3b:function(t,e,o){},e6a4:function(t,e,o){"use strict";var s=o("664c"),a=o.n(s);a.a}});
//# sourceMappingURL=app.29103b7b.js.map