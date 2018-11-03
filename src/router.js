import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Single from './views/Single.vue'
import Page from './views/Page.vue'
import AllPost from './views/AllPost.vue'
import PageNews from './views/PageNews.vue'
import PageModal from './views/PageModal.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/post/:slug',
      name: 'Single',
      component: Single
    },
    {
      path: '/page/:slug',
      name: 'Page',
      component: Page,
    },
    {
      path: '/page/controles-ambientais/plantas',
      name: 'PageModal',
      component: PageModal,
    },
    {
      path: '/page/imprensa/posts',
      name: 'AllPost',
      component: AllPost
    },
    {
      path: '/page/imprensa/:slug',
      name: 'PageNews',
      component: PageNews
    },
  ],

  // scroll to top when change routes
  scrollBehavior(to, from, scrollPosition) {
    return { x: 0, y: 0 };
  }
})
