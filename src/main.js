import Vue from 'vue'

import App from './App.vue'

import './assets/statics/site/css/style.css';


// 路由相关
import VueRouter from 'vue-router';
// 导入index组件
import index from './components/index.vue';

// use一下
Vue.use(VueRouter);


// 写规则
const routes = [
  // /根目录也对应到 index组件即可
  {
    path:'/',
    component:index
  },
  {
    path:'/index',
    component:index
  }
]


// 实例化路由对象
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂在到Vue实例
  router
}).$mount('#app')
