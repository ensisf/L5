<template>
  <div id="app">
    <Navigation />
    <router-view class="container"></router-view>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>
<style>
#app {
  margin-bottom: 30px;
}
</style>
