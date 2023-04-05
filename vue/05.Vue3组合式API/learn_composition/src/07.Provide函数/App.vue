<template>
  <div class="app">
    <Show></Show>
    <button @click="change">change</button>
  </div>
</template>

<script>
import { provide, ref } from "vue";
import Show from "./Show.vue";

export default {
  components: {
    Show,
  },
  setup() {
    const change = function () {
      this.name = 'Good';
    }
    const name = ref('Money');
    const age = ref(20);
    provide('name', name);
    provide('age', age);
    return {
      name,
      change,
      age,
    }
  }
}
</script>

<style scoped></style>
