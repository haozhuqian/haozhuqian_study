<template>
  <div class="App">
    <h2>{{ name }}</h2>
    <h2>{{ obj.age }}</h2>
    <h2>{{ counter }}</h2>
    <button @click="change">change</button>
    <button @click="counter++">+1</button>
  </div>
</template>

<script>
import { ref, watch, reactive, watchEffect } from 'vue';

export default {
  setup() {
    const name = ref('Good');
    const counter = ref(0);
    const obj = reactive({
      age: 20,
    });
    const change = function () {
      this.obj.age++;
      this.name = 'Money';
    }


    // 默认深度侦听，获取proxy对象
    watch(name, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
    // 此处返回proxy对象
    watch(obj, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
    // 此处返回对象本体
    watch(() => ({ ...obj }), (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
    // 会刚开始默认自动执行一次,自动收集依赖
    const stop =  watchEffect(() => {
      console.log('watchEffect',counter.value);
      if(counter.value>=10){
        stop();
      }
    })

    return {
      name,
      obj,
      counter,
      change,
    }
  }
}
</script>

<style scoped></style>
