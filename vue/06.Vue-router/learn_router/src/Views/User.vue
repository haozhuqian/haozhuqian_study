<template>
 <div class="user">
  <!-- 在模板中获取ID -->
  <h2>User{{ $route.params.id }} </h2>
 </div>
</template>

<script setup>
  import { useRoute ,onBeforeRouteUpdate} from "vue-router";
  const route = useRoute();
  // 在对象语法中，会使用this.$route.pramas.id获取
  console.log('在脚本中获取ID',route.params.id);
  onBeforeRouteUpdate((to,from)=>{
    console.log(route.params.id);
    console.log('to:',to.params.id);
    console.log('from',from.params.id);
  });
</script>

<style scoped>

</style>
