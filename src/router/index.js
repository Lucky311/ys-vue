import Vue from 'vue'
import Router from 'vue-router'
import Directives from '@/pages/Directives'
import Home from '@/pages/Home'
import Index from '@/pages/Index'
import Product from '@/pages/Product'
import Mine from '@/pages/Mine'
import Cart from '@/pages/Cart'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/directives',
      name: 'Directives',
      component: Directives
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
    
  ]
})
