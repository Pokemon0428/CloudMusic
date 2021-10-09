<template>
  <div class="header">
    <div class="header-left"></div>
    <p class="header-title">网易云音乐</p>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/variable.scss";
  @import "../assets/css/mixin.scss";
  .header {
    width: 100%;
    height: 100px;
    @include bg_color();
    display: flex;
    justify-content: space-between;
    .header-left, .header-right {
      width: 84px;
      height: 84px;
      margin-top: 8px;
    }
    .header-title {
      text-align: center;
      line-height: 100px;
    }
  }
</style>