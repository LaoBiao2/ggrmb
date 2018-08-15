import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Download from '@/components/download'
import Product from '@/components/product/product'
import About from '@/components/about/about'
import Research from '@/components/research/research'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/download',
      name: 'Download',
      component: Download,
    },{
      path: '/product/:type',
      name: 'Product',
      component: Product,
    },{
      path: '/about/:type',
      name: 'About',
      component: About,
    },{
      path: '/research/:type',
      name: 'Research',
      component: Research,
    }
  ]
})
