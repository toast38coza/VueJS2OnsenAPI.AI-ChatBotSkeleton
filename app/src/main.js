import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import VueOnsen from 'vue-onsenui'
import ons from 'onsenui'

import routes from './routes'
import axios from 'axios'
// import 'onsenui/css/onsenui.css'
// import 'onsenui/css/onsen-css-components.css'

// pages:
import ChatPage from './components/pages/ChatPage'
import MenuPage from './components/pages/MenuPage'

Vue.use(VueRouter)
Vue.use(VueOnsen, {
  components: {
    ChatPage,
    MenuPage
  }
})

const router = new VueRouter({
  routes // short for routes: routes
})

console.log(process.env.API_AI_TOKEN)
// axios setup:
axios.defaults.baseURL = 'https://api.api.ai/api'
axios.defaults.headers.common['Authorization'] = 'Bearer 48369df319eb483dbc7da81af1046fd2'
axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.prototype.$http = axios

ons.ready(() => {
  /* eslint-disable no-new */
  new Vue({
    router,
    el: 'app',
    // components: { App }
    render: h => h(App)
  })
})
