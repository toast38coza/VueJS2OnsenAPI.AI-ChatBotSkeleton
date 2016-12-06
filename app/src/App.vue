<template>
<ons-splitter>
  <ons-splitter-side
    id="menu"
    :open="open"
    @preopen="open = true"
    @postclose="open = false"
    side="left"
    width="85%"
    collapse swipeable>
      <menu-page
        v-on:click='pageSelected'></menu-page>
  </ons-splitter-side>
  <ons-splitter-content id="content" >
    <transition name="fade" mode="out-in" >
      <router-view></router-view>
    </transition>
  </ons-splitter-content>
</ons-splitter>
</template>
<script>
  import {OnsSplitterSide} from 'vue-onsenui'
  import MenuPage from './components/pages/MenuPage'

  export default {
    name: 'App',
    components: {
      OnsSplitterSide,
      MenuPage
    },
    data () {
      return {
        currentPage: 'main-page',
        open: true
      }
    },
    methods: {
      pageSelected () {
        this.open = false
      }
    }
  }

</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
