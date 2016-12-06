<template>
<ons-bottom-toolbar class='msg-toolbar' >
  <form v-on:submit.prevent='messageAdded' >
  <input type="text" v-model='currentMessage'
    class='msg' value="" placeholder="Type your message here" >
    <ons-toolbar-button class='msg-send' >
      <ons-icon icon="md-mail-send"></ons-icon>
    </ons-toolbar-button>
  </form>
</ons-bottom-toolbar>
</template>
<script>
/*
 * Events:
 * - message-sent
 * - message-received
 * - message-from-ai
 */
import store from './store'

export default {
  store,
  name: 'MessageBar',
  props: {
    initialMessage: { type: String, default: null }
  },
  data () {
    return {
      currentMessage: null
    }
  },
  mounted () {
    let vm = this
    if (this.initialMessage) {
      vm.addMessageFromBot(this.initialMessage)
    }
  },
  methods: {
    scrollToBottom () {
      setTimeout(() => {
        document.getElementById('messages-container-end')
          .scrollIntoView()
      }, 1000)
    },
    commitMessage (message, type) {
      store.commit('push', message)
      this.scrollToBottom()
      this.$emit(`message-${type}`, message)
    },
    addMessageFromBot (text, type) {
      let message = {
        text: text,
        type: 'received',
        avatar: 'https://website.smooch.io/static_assets/images/features/bot-avatar.png',
        fromName: 'GuruBot',
        date: new Date()
      }
      this.commitMessage(message)
    },
    addMessageFromUser (text) {
      let message = {
        text: text,
        type: 'sent',
        fromName: 'Joe Soap',
        date: new Date()
      }
      this.commitMessage(message)
    },
    messageAdded () {
      this.addMessageFromUser(this.currentMessage)
      this.sendMessage(this.currentMessage)
      this.currentMessage = null
    },
    // move this little handshake into action
    sendMessage (messageText) {
      let vm = this
      var data = {
        query: messageText,
        lang: 'en',
        v: '20150910',
        sessionId: store.state.sessionId
      }
      this.$http.get('/query', {params: data})
        .then(function (result) {
          vm.receiveMessage(result.data)
        })
    },
    receiveMessage (response) {
      let responseMessage = response.result.speech
      if (response.result.fulfillment &&
          response.result.fulfillment.speech) {
        responseMessage = response.result.fulfillment.speech
      }
      this.addMessageFromBot(responseMessage)
      this.$emit('message-from-ai', response)
    },
    respond () {

    }
  }
}
</script>
<style scoped>
form {
  display: flex;
  width: 100%;
  padding: 5px;
  justify-content: space-around;
  align-items: stretch;
}
.msg {
  width:95%;
  line-height: 38px;
  font-size: 17px;
  padding-left:10px;
}
.msg-send {
  width: 40px;
  line-height: 3;
  text-align: center;
}
</style>