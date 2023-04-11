<template>
  <div class="home">
<h2>count:{{ counterStore.count}}</h2>
<button @click="change">++</button>
  </div>
</template>

<script setup>
import useCounter from "../stores/counter";

const counterStore =  useCounter();

function change(){
  counterStore.increment();
}

</script>

<style scoped></style>