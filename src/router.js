import Vue from 'vue';
import Router from 'vue-router';

import About from './views/About';
import Blog from './views/Blog';
import Post from './views/Post';
import Contact from './views/Contact';
import Create from './views/Create';
import FAQ from './views/FAQ';
import Home from './views/Home';
import Login from './views/Login';
import Resources from "./views/Resources";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/about', component: About},
    { path: '/blog', component: Blog},
    { path: '/blog/:path', component: Post},
    { path: '/contact', component: Contact},
    { path: '/create', component: Create },
    { path: '/faq', component: FAQ},
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/resources', component: Resources},

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {
  const authRequired = to.path.includes('/create');
  const loggedIn = sessionStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next({
      path: '/login',
      query: { returnUrl: to.path }
    });
  }

  next();
});

export default router;
