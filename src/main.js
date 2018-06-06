// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
// 公共组件
import headerIndex from './components/headerIndex'
import footer from './components/footer'
import positionIndex from './pages/position'

Vue.component('header-index',headerIndex)
Vue.component('footer-common',footer)
Vue.component(positionIndex.name, positionIndex);


// Vue.use(iView);
Vue.prototype.axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
