<template>
 
</template>

<script>
import { onBeforeMount,onMounted,onUpdated,onBeforeUpdate,onBeforeUnmount,onUnmounted } from "vue";
export default {
  setup(){
    onBeforeMount(()=>{
      console.log('onBeforeMount');
    })
    onMounted(()=>{
      console.log('onMounted');
    });
  
  },
}
</script>

<style scoped>

</style>
