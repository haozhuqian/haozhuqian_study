<template>
 <div class="App">
    <show-info 
    :info="info" 
    :roInfo="roInfo" 
    @changeInfoName="changeInfoName"
    @changeRoInfoNam="changeRoInfoName"></show-info>
  </div>
</template>
  
<script>
import { reactive ,readonly } from 'vue';
import ShowInfo from './ShowInfo.vue';

export default {
  components:{
    ShowInfo,
  },
  setup(){
    // 本地定义多个组件 都要传递给子数组。
    const info = reactive({
      name:'Money',
      age:18,
      height:1.8,
    })
    const roInfo = readonly(info);
    function changeInfoName(newName){
      info.name = newName;
      console.log(newName);
    }
    function changeRoInfoName(newName){
      roInfo.name = newName;
      console.log(newName);
    }
    return {
      info,
      roInfo,
      changeInfoName,
      changeRoInfoName,
    }
  }
}
</script>

<style scoped>

</style>
