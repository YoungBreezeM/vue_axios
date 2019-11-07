import Vue from 'vue';
import VueRouter from "vue-router";
import Login from "./components/Login"
import Admin from "./components/Admin";
import Index from "./components/Index";
import store from "./store/store";
import * as types from "./store/types"
Vue.use(VueRouter);//全局注册路由

let routes = [
        {
            path:'/',
            name: '/',
            component:Index,
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path: '/admin',
            name:'admin',
            component: Admin,
            meta: {
                requireAuth: true,  // 该路由项需要权限校验
            }
        }
    ];

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
    store.commit(types.LOGIN, window.localStorage.getItem('token'))
}


let router =  new VueRouter({
    routes: routes
});


router.beforeEach((to, from, next) => {
    if (to.matched.some((r) => r.meta.requireAuth)) {
        // eslint-disable-next-line no-undef
        if (localStorage.token) {   //判断是否已经登录
            next();
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
        }
    } else {
        next();
    }
});
export default router;