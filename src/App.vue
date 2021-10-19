<template>
  <div id="app">
    <Header></Header>
    <Tabbar></Tabbar>
    <router-view></router-view>
    <Player></Player>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Tabbar from './components/Tabbar.vue'
import Player from './views/Player.vue'
export default {
  name: "App",
  components: {
    Header,
    Tabbar,
    Player
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  
</style>
