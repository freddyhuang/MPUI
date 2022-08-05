import Vue from 'vue'
import App from './App.vue'

// import 'mp-fast-ui/dist/css/index.css'
// import MPUI from 'mp-fast-ui';
// Vue.use(MPUI)

// import Demo from '../components/lib/demo/index'
// import Card from '../components/lib/card/index'
// Vue.use(Demo);
// Vue.use(Card);

import '../components/css/index.scss';
import API from '../components/lib/index.js';
Vue.use(API)

import tips from '../components/lib/tips/index.js'
Vue.use(tips)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
