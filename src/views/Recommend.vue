<template>
  <div class="recommend">
    <Banner :banners="banners"></Banner>
  </div>
</template>

<script>
import {getBanner} from "../api/index"
import Banner from '../components/Banner.vue'
export default {
  name: 'Recommend',
  components: {
    Banner
  },
  data() {
    return {
      banners: []
    };
  },
  created() {
    getBanner().then((data) => {
      this.banners = data.banners
    }).catch(function (err) {
      console.log(err)
    })
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
  .recommend{
    position: fixed;
    top: 184px;
    left: 0;
    right: 0;
    bottom: 0;
    /*overflow: hidden;*/
    .recommend-warpper{
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
</style>