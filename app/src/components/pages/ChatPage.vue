<template>
<ons-page>
  <tool-bar></tool-bar>

  <p style="text-align: center;">
    <messages ></messages>
  </p>

  <message-bar
    initial-message='Hi there. How are you doing today?'
    v-on:message-sent='messageSent'
    v-on:message-received='messageReceived'
    v-on:message-from-ai='messageFromAI'></message-bar>
</ons-page>
</template>
<script>
import ToolBar from '../ToolBar'
import MessageBar from '../chat/MessageBar'
import Messages from '../chat/Messages'
import store from '../chat/store'
import moment from 'moment'

export default {
  store,
  moment,
  name: 'MainPage',
  components: {
    Messages,
    ToolBar,
    MessageBar
  },
  methods: {
    messageFromAI (message) {
      console.log(message)
    },
    messageReceived (message) {
      console.log(message)
    },
    messageSent (message) {
      console.log(message)
    }
  }
}
</script>