<template>
 
</template>

<script>
import { defineAsyncComponent } from 'vue';
// 下面是异步组件的引入方式，打包时会单独打包文件，可以在一些情况下提高网页加载速度。
const AsyncHome = defineAsyncComponent(()=>import('./Home.vue'))
export default {
  
}
</script>

<style scoped>

</style>
