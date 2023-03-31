<template>
  <div class="app">
    <home v-model="counter"></home>
    <money :modelValue='counter' @update:modelValue="counter = $event"></money>
    <button @click="decreament">-1</button>
    <button @click="increament">+1</button>
  </div>
</template>

<script>
import Home from './Home.vue';
import Money from './Money.vue';

export default {
  components: {
    Home,
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
