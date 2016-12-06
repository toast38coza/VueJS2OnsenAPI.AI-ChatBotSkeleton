<template>
  <ons-page>
    <ons-toolbar>
      <div class="left">
        <ons-toolbar-button @click="back" >
          <ons-icon icon="md-arrow-left"></ons-icon>
        </ons-toolbar-button>
      </div>
      <div class="center">Some other page ..</div>
      <div class="right">
        <ons-toolbar-button @click="showMenu" >
          <ons-icon icon="md-menu"></ons-icon>
        </ons-toolbar-button>
      </div>
    </ons-toolbar>

    <p>
      .. stuff goes here ..
    </p>
  </ons-page>
</template>

<script>
  export default {
    methods: {
      showMenu () {
        document.getElementById('menu').open()
      },
      back () {
        this.$router.back()
      }
    }
  }
</script>

<style>
</style>
