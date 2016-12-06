<template>
  <ons-toolbar>
    <div class="navigation-bar__left" >
      <ons-toolbar-button @click="showMenu" >
        <ons-icon icon="md-menu"></ons-icon>
      </ons-toolbar-button>
    </div>
    <div class="center">{{title}}</div>
  </ons-toolbar>
</template>
<script>
export default {
  props: {
    title: { type: String, default: 'My Awesome Chat App' }
  },
  methods: {
    showMenu () {
      document.getElementById('menu').open()
    }
  }
}
</script>