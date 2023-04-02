<template>
 <div class="app">
  <h2>计数:{{ counter }} </h2>
  <button @click = 'increment'>+1</button>
  <button @click = 'decrement'>-1</button>
  <br>
  <button @click = 'counter++'>+1</button>
  <button @click = 'counter--'>-1</button>
  <hr>
  <div class="account">username:{{ account[index].username }}</div>
  <div class="account">password:{{ account[index].password }}</div>
  <button @click = 'index=(index+1)%account.length'>change index</button>
  <button @click="account[index].username = 'default'">change account</button>
  <hr>
  <div class="account">username:{{ user.username }}</div>
  <div class="account">password:{{ user.password }}</div>
  <button @click="user.username = 'default'">change account</button>
 </div>
</template>

<script>
// import { ref } from "vue";
import useCounter from './hooks/counter.js'

export default {
  setup() {
    // let counter = ref(0);
    // const increment=()=>counter.value++;
    // const decrement=()=>counter.value--;

    // const { counter,increment,decrement} = useCounter();
    // return {
    //   counter,
    //   increment,
    //   decrement,
    // }

    return { ...useCounter() };
  }
}
</script>

<style scoped>

</style>
