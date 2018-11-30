(function(e){function t(t){for(var n,a,i=t[0],A=t[1],l=t[2],c=0,d=[];c<i.length;c++)a=i[c],s[a]&&d.push(s[a][0]),s[a]=0;for(n in A)Object.prototype.hasOwnProperty.call(A,n)&&(e[n]=A[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var A=r[i];0!==s[A]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],A=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=A;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"primary",fixed:"top"}},[r("b-navbar-brand",{attrs:{href:"/"}},[e._v("This Mother's Journey")]),r("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),r("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"/blog"}},[e._v("Blog")]),r("b-nav-item",{attrs:{href:"/faq"}},[e._v("FAQ")]),r("b-nav-item",{attrs:{href:"/resources"}},[e._v("Resources")]),r("b-nav-item",{attrs:{href:"/about"}},[e._v("About")]),r("b-nav-item",{attrs:{href:"/contact"}},[e._v("Contact")]),e.isLoggedIn?r("b-nav-item",{attrs:{href:"/create"}},[e._v("Create")]):e._e(),e.isLoggedIn?e._e():r("b-nav-item",{attrs:{to:"/login"}},[e._v("Login")]),e.isLoggedIn?r("b-nav-item",{on:{click:e.logout}},[e._v("Logout")]):e._e()],1)],1)],1),r("div",{staticClass:"jumbotron"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6 offset-sm-3"},[r("router-view")],1)])])])],1)},o=[],a=(r("6762"),r("2fdb"),r("8c4f")),i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("About")])])}],l={},u=l,c=r("2877"),d=Object(c["a"])(u,i,A,!1,null,null,null);d.options.__file="About.vue";var v=d.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Blog")]),e.blogs.loading?r("em",[e._v("Loading blogs...")]):e._e(),e.blogs.length?r("ul",e._l(e.blogs,function(t){return r("div",{key:t.id},[r("h3",[e._v(e._s(t.title))]),r("p",[e._v(e._s(t.body))])])})):e._e()])},p=[],f={login:h,logout:g};function h(e,t){var r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})};return fetch("http://localhost:8081/api/auth/",r).then(b).then(function(e){return e&&sessionStorage.setItem("user",JSON.stringify(e)),e})}function g(){sessionStorage.removeItem("user")}function b(e){return e.text().then(function(t){var r=t&&JSON.parse(t);if(!e.ok){401===e.status&&(g(),location.redirect("/"));var n=r&&r.message||e.statusText;return Promise.reject(n)}return r})}var w={create:_,getAll:C};function _(e,t){var r={method:"POST",headers:{"Content-Type":"application/json",Authorization:y()},body:JSON.stringify({title:e,body:t})};return fetch("http://localhost:8081/api/content/",r).then(E).then(function(e){return e})}function C(){var e={method:"GET",headers:{Authorization:y()}};return fetch("http://localhost:8081/api/content/",e).then(E)}function E(e){return e.text().then(function(t){var r=t&&JSON.parse(t);if(!e.ok){401===e.status&&(logout(),location.redirect("/"));var n=r&&r.message||e.statusText;return Promise.reject(n)}return r})}function y(){var e=JSON.parse(sessionStorage.getItem("user"));return e&&e.token?"Bearer "+e.token:{}}var I={data:function(){return{blogs:[]}},created:function(){var e=this;this.blogs.loading=!0,w.getAll().then(function(t){return e.blogs=t.reverse()})}},Q=I,x=Object(c["a"])(Q,m,p,!1,null,null,null);x.options.__file="Blog.vue";var M=x.exports,O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},B=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Contact")])])}],G={},j=G,k=Object(c["a"])(j,O,B,!1,null,null,null);k.options.__file="Contact.vue";var D=k.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Create")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{htmlFor:"title"}},[e._v("Title")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&!e.title},attrs:{type:"text",name:"title"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.submitted&&!e.title,expression:"submitted && !title"}],staticClass:"invalid-feedback"},[e._v("Title is required")])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{htmlFor:"body"}},[e._v("Body")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.body,expression:"body"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&!e.body},attrs:{type:"text",name:"body"},domProps:{value:e.body},on:{input:function(t){t.target.composing||(e.body=t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.submitted&&!e.body,expression:"submitted && !body"}],staticClass:"invalid-feedback"},[e._v("Body is required")])]),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary",attrs:{disabled:e.loading}},[e._v("Create")]),r("img",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="}})]),e.error?r("div",{staticClass:"alert alert-danger"},[e._v(e._s(e.error))]):e._e()])])},S=[],K={data:function(){return{title:"",body:"",submitted:!1,loading:!1,error:""}},methods:{handleSubmit:function(e){this.submitted=!0;var t=this.title,r=this.body;t&&r&&(this.loading=!0,w.create(t,r).then(function(e){de.push("/blog")}))}}},Y=K,H=Object(c["a"])(Y,J,S,!1,null,null,null);H.options.__file="Create.vue";var P=H.exports,U=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},R=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("FAQ")])])}],N={},L=N,F=Object(c["a"])(L,U,R,!1,null,null,null);F.options.__file="FAQ.vue";var T=F.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Home")]),e.user?r("h3",[e._v("Hi "+e._s(e.user.username)+"!")]):e._e()])},W=[],V={data:function(){return{user:null}},created:function(){try{this.user=JSON.parse(sessionStorage.getItem("user"))}catch(e){console.error(e)}}},q=V,Z=Object(c["a"])(q,z,W,!1,null,null,null);Z.options.__file="Home.vue";var $=Z.exports,X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Login")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&!e.username},attrs:{type:"text",name:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.submitted&&!e.username,expression:"submitted && !username"}],staticClass:"invalid-feedback"},[e._v("Username is required")])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{htmlFor:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&!e.password},attrs:{type:"password",name:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.submitted&&!e.password,expression:"submitted && !password"}],staticClass:"invalid-feedback"},[e._v("Password is required")])]),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary",attrs:{disabled:e.loading}},[e._v("Login")]),r("img",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="}})]),e.error?r("div",{staticClass:"alert alert-danger"},[e._v(e._s(e.error))]):e._e()])])},ee=[],te={data:function(){return{username:"",password:"",submitted:!1,loading:!1,returnUrl:"",error:""}},created:function(){f.logout(),this.returnUrl=this.$route.query.returnUrl||"/"},methods:{handleSubmit:function(e){var t=this;this.submitted=!0;var r=this.username,n=this.password;r&&n&&(this.loading=!0,f.login(r,n).then(function(e){de.push(t.returnUrl),document.dispatchEvent(new Event("loggedIn",e))}))}}},re=te,ne=Object(c["a"])(re,X,ee,!1,null,null,null);ne.options.__file="Login.vue";var se=ne.exports,oe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ae=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Resources")])])}],ie={},Ae=ie,le=Object(c["a"])(Ae,oe,ae,!1,null,null,null);le.options.__file="Resources.vue";var ue=le.exports;n["a"].use(a["a"]);var ce=new a["a"]({mode:"history",routes:[{path:"/about",component:v},{path:"/blog",component:M},{path:"/contact",component:D},{path:"/create",component:P},{path:"/faq",component:T},{path:"/",component:$},{path:"/login",component:se},{path:"/resources",component:ue},{path:"*",redirect:"/"}]});ce.beforeEach(function(e,t,r){var n=e.path.includes("/create"),s=sessionStorage.getItem("user");if(n&&!s)return r({path:"/login",query:{returnUrl:e.path}});r()});var de=ce,ve={name:"app",data:function(){return{user:null}},created:function(){var e=this;try{this.user=JSON.parse(sessionStorage.getItem("user"))}catch(t){console.error(t)}document.addEventListener("loggedIn",function(t){e.user=t})},methods:{logout:function(e){this.user=null,sessionStorage.removeItem("user"),e.stopPropagation(),de.push("/")}},computed:{isLoggedIn:function(){return!!this.user}}},me=ve,pe=Object(c["a"])(me,s,o,!1,null,null,null);pe.options.__file="App.vue";var fe=pe.exports,he=r("9f7b");r("f9e3"),r("2dd8");n["a"].use(he["a"]),new n["a"]({router:de,render:function(e){return e(fe)}}).$mount("#app")}});
//# sourceMappingURL=app.14eb0444.js.map