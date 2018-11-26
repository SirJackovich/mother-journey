import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './views/Home'
import LoginPage from './views/Login'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login'];
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
