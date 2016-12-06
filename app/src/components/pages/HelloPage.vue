<template>
<ons-page>
  <tool-bar></tool-bar>

  <p style="text-align: center;">
    <hello></hello>
  </p>
</ons-page>
</template>
<script>
import ToolBar from '../ToolBar'
import Hello from '../Hello'
export default {
  name: 'MainPage',
  components: {
    ToolBar,
    Hello
  },
  methods: {
    showMenu () {
      document.getElementById('menu').open()
    }
  }
}
</script>