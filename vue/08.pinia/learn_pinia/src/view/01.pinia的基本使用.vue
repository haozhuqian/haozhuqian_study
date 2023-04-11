<template>
 <div class="home">
  <h2>Home</h2>
  <h2>counter:{{ counterStore.count }}</h2>
  <h2>count:{{ count }}</h2>
  <h2>count:{{ vueCount }}</h2>
  <button @click="incrementCounter">++</button>
 </div>
</template>

<script setup>
  import useCounter from "../stores/counter";
  import {storeToRefs} from 'pinia';
  import { toRefs } from "vue";

  const counterStore = useCounter();
  const {count} = storeToRefs(counterStore);
  const {vueCount} = toRefs(counterStore);

  function incrementCounter() {
    counterStore.count++;
  }


</script>

<style scoped>

</style>
