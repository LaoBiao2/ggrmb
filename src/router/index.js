import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Product from '@/components/product/product'

Vue.use(Router)

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
