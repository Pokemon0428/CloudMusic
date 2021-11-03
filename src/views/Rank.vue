<template>
  <div class="rank">
    <span>rank</span>
  </div>
</template>

<script>
import { getTopListDetail } from '../api/index'
import ScrollView from '../components/ScrollView'
export default {
  name: 'Rank',
  created () {
    getTopListDetail ()
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
};
</script>

<style lang="scss" scoped>
  .rank {
    
  }
</style>