import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home'
import Login from './views/Login'
import Create from './views/Create'
import Blog from './views/Blog'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/create', component: Create },
    { path: '/blog', component: Blog},

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login', '/blog', '/'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = sessionStorage.getItem('user');
//
//   if (authRequired && !loggedIn) {
//     return next({
//       path: '/login',
//       query: { returnUrl: to.path }
//     });
//   }
//
//   next();
// });

export default router;
