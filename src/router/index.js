import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Index from '@/components/index'
import Download from '@/components/download'
import Product from '@/components/inside/product'
import About from '@/components/inside/about'
import Research from '@/components/inside/research'
import NewsN from '@/components/inside/components/research/newsN'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/download',
        name: 'Download',
        component: Download,
    }, {
        path: '/product/:type',
        name: 'Product',
        component: Product,
    }, {
        path: '/product/introduce',
        name: 'Inside',
        component: Product,
        alias: '/product'
    }, {
        path: '/about/:type',
        name: 'About',
        component: About,
    }, {
        path: '/about/introduce',
        name: 'Inside',
        component: About,
        alias: '/about'
    }, {
        path: '/research/:type',
        name: 'Research',
        component: Research,
    }, {
        path: '/research/news',
        name: 'Inside',
        component: Research,
        alias: '/research'
    }, {
        path: '/research/newsN',
        name: 'NewsN',
        component: NewsN,
        alias: '/news/:id'
    }, ]
})