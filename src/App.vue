<template>
  <div id="app">
    <Header></Header>
    <div class="theme">
      <button @click="myFn('theme')"></button>
      <button @click="myFn('theme1')"></button>
      <button @click="myFn('theme2')"></button>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: "App",
  components: {
    Header
  },
  methods: {
    myFn(data) {
      document.documentElement.setAttribute('data-theme', data)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/css/variable.scss";
  @import "assets/css/mixin.scss";
  .theme {
    position: fixed;
    left: 0;
    bottom: 0;
    button {
      width: 100px;
      height: 100px;
      &:nth-of-type(1) {
        background: $background-color-theme;
      }
      &:nth-of-type(2) {
        background: $background-color-theme1;
      }
      &:nth-of-type(3) {
        background: $background-color-theme2;
      }
    }
  }
</style>
