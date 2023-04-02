<template>
 <div class="App">
  <h2>info : {{ name }} - {{ age }}-{{ is }}</h2>
  <button @click = 'age++'>change age</button>
  <button @click = 'is = "Hao"'>change is</button>
 </div>
</template>

<script>
import { reactive,toRefs,toRef,unref,isRef,shallowRef,triggerRef } from 'vue';

export default {
  setup(){
    const info= reactive({
      name:'Money',
      age: 10,
      is:'Good',
    })
    // 结构后失去响应式
    // const { name,age } = info;
    const { name,age } = toRefs(info) ;
    const is = toRef(info,'is')

    return {
      name,
      age,
      is,
    }
  }
  
}
</script>

<style scoped>

</style>
