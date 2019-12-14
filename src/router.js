import Vue from 'vue' 
import VueRouter from 'vue-router';

// 导入一些页面级别的组件（这些组件需要自己创建）
import Index from './pages/Index.vue'
import User from './pages/User.vue'
import Search from './pages/Search.vue'

// 将vue-router注册到全局，这样每一个组件都可以使用router-link和router-view组件了
Vue.use(VueRouter);

// 定义路由规则（例如：当用户访问了/goods这个页面时，router-view标签渲染Goods组件）
var routes = [
    { path: '/', component: Index },
    { path: '/user', component: User},
    { path: '/search', component: Search},
]

// 创建路由实例
var router = new VueRouter({ routes, mode:'history' });

// 导出路由对象
export default router