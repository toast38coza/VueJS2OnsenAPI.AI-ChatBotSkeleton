import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HelloPage from './components/pages/HelloPage'
import ExamplePage from './components/pages/ExamplePage'
import ChatPage from './components/pages/ChatPage'

export default [
  { path: '/', component: ChatPage, name: 'default' },
  { path: '/hello', component: HelloPage, name: 'hello' },
  { path: '/example', component: ExamplePage, name: 'example' }
]
