<template>
  <div id="app">
    <MainHeader></MainHeader>
    <Tabbar></Tabbar>
    <router-view></router-view>
    <Player></Player>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import Tabbar from './components/Tabbar.vue'
import Player from './views/Player.vue'
export default {
  name: "App",
  components: {
    MainHeader,
    Tabbar,
    Player
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  
</style>
