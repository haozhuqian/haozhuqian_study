<template>
 <div class="home">
  Home{{ $route.query }}
  <hr>
  <router-link to="/home/recommend">Home Recommend</router-link>
  <router-link to="/home/ranking">Home Recommend</router-link>
  <router-view></router-view>
 </div>
</template>

<script setup>
  
</script>

<style scoped>

</style>
