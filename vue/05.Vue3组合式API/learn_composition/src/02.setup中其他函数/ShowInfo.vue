<template>
 <div class="show-info">
  <h2>{{ info }}</h2>
  <button @click="info.name='Good'">ShowInfo1</button>
  <button @click="Sclick">ShowInfo2</button>
  <hr>
  <h2>{{ roInfo }}</h2>
  <!-- 不可修改 -->
  <button @click="roInfo.name='Good'">ShowInfo2</button>
  <button @click="Rclick">ShowInfo2</button>

 </div>
</template>

<script>
export default {
  props:{
    info: {
      type:Object,
      default: ()=>({})
    },
    roInfo: {
      type:Object,
      default: ()=>({})
    },
  },
  emits:['changeInfoName','changeRoInfoName'],
  setup(props,context){
    const Sclick = ()=>{
      console.log('changeInfoName');
      context.emit('changeInfoName','Good');
    }
    const Rclick = ()=>{
      console.log('changeRoInfoName');
      context.emit('changeRoInfoName','Good');
    }
    return {
      Sclick,
      Rclick,
    }
  }
}
</script>

<style scoped>

</style>
