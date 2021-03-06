import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Info from './views/Info.vue';
import ForgetPwd from './views/ForgetPwd.vue';
import AmendPwd from './views/AmendPwd.vue';
import ProductDetail from './views/ProductDetail.vue';
import MyCenter from './views/MyCenter.vue';
import Cart from './views/Cart.vue';
import Category from './views/Category.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
    },
    {
      path: '/forgetPwd',
      name: 'forgetPwd',
      component: ForgetPwd,
    },
    {
      path: '/amendPwd',
      name: 'amendPwd',
      component: AmendPwd,
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: ProductDetail,
    },
    {
      path: '/myCenter',
      name: 'myCenter',
      component: MyCenter,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
