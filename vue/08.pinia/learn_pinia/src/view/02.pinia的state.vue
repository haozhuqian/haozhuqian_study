<template>
  <div class="home">
    <h2>name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <h2>level:{{ level }}</h2>
    <button @click="change">修改state</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script setup>
import useUser from "../stores/user.js";
import { storeToRefs } from 'pinia';

const userStore = useUser();
const { name, age, level } = storeToRefs(userStore);

function incrementCounter() {
  userStore.count++;
}
function change() {
  // userStore.age++;
  // userStore.level = 60;
  // userStore.name = 'Good';

  userStore.$patch({
    age:100,
    name:'Hao',
  })
}
function reset() {
  userStore.$reset();
}



</script>

<style scoped></style>