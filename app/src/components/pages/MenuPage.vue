<template>
<ons-page>
  <!--
    todo: <profile :user= ></profile>
  -->
  <div class="profile-card">
    <img src="http://components.onsen.io/patterns/images/profile-image-01.png" class="profile-image" />
    <div class="profile-name">Joe Soap</div>
    <div class="profile-id">@joesoap</div>
    <div class="profile-desc">No-one really knows who Joe Soap is ..</div>
  </div>
  <ons-list v-on:click='hideMenu'>
    <router-link
      to='/'
      tag='ons-list-item' tappable>
      Chat
    </router-link>

    <router-link
      to='/hello'
      tag='ons-list-item' tappable>
      Hello
    </router-link>

    <router-link
      to='/example'
      tag='ons-list-item' tappable>
      Example page
    </router-link>

  </ons-list>
</ons-page>
</template>

<script>
export default {
  props: {
    open: { type: Boolean, default: false }
  },
  methods: {
    hideMenu () {
      document.getElementById('menu').close()
    }
  }
}
</script>

<style scoped>
.profile-card {
  width: 100%;
  text-align: center;
  color: white;
  padding: 30px 0;
  line-height: 1.4;
  background-color: #33393c;
  text-shadow: rgba(0, 0, 0, 0.4) 0px 1px 0px;
}

.profile-image {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  background-color: black;
  border: 1px solid white;
  box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 0px 0px;
  -webkit-box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 0px 0px;
}

.profile-name {
  margin: 20px 0 0 0;
  font-weight: 600;
  font-size: 17px;
}

.profile-id {
  margin: 0 0 5px 0;
  font-size: 14px;
  opacity: 0.6;
}

.profile-desc {
  font-size: 15px;
  opacity: 0.6;
  width: 90%;
  text-align: center;
  margin: 0 auto;
}

.info-col {
  height: 60px;
  line-height: 1;
  padding: 12px 0 12px 4px;
}

.info-num {
  font-size: 16px;
  font-weight: 500;
  opacity: 0.8;
}

.info-unit {
  margin-top: 6px;
  font-size: 14px;
  opacity: 0.4;
}

</style>