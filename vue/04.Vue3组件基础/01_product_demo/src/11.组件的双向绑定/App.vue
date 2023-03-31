<template>
  <div class="app">
    <home v-model="counter"></home>
    <good :modelValue='counter' @update:modelValue="counter = $event"></good>
    <money v-model:counter="counter"></money>
    <button @click="decreament">-1</button>
    <button @click="increament">+1</button>
  </div>
</template>

<script>
import Home from './Home.vue';
import Good from './Good.vue';
import Money from './Money.vue';

export default {
  components: {
    Home,
    Good,
    Money,
  },
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increament() {
      this.counter += 1;
    },
    decreament() {
      this.counter -= 1;
    },
  }
}
</script>

<style scoped></style>
