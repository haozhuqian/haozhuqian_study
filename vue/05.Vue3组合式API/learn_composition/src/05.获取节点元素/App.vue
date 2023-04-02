<template>
 <div class="App">
  <h2 ref='title'>标题</h2>
  <button @click="getElement">获取元素</button>
  <show-info ref = 'showInfoRef'></show-info>
 </div>
</template>

<script>
  import { ref } from  "vue";
  import ShowInfo from "./ShowInfo.vue";
export default {
  components:{
    ShowInfo,
  },
  setup(){
    const title = ref();
    const showInfoRef = ref();
    function getElement(){
      console.log('title',title.value);
      console.log('showInfo',showInfoRef.value);
    }
    return {
      getElement,
      title,
      showInfoRef,
    }
  }
}
</script>

<style scoped>

</style>
