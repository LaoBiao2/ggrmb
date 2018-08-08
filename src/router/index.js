import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Product from '@/components/product/product'

Vue.use(Router)
Vue.component('header-item', {
  props: ['message', 'backUrl'],
  template: `<header class="evaluate-header"><router-link :to="backUrl"><span><i class="iconfont">&#xe697;</i></span></router-link> <div><span>{{message}}</span></div> </header>`
})
// props用来传递数据

//template 一个html结构的模板
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/product/:type',
      name: 'Product',
      component: Product,
    }
  ]
})
