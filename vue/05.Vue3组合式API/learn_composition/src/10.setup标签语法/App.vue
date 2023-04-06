<template>
  <div class="app">
    <h2>{{ titles[pageIndex] }}</h2>
    <component :is="pages[pageIndex]"></component>
    <button @click="change">change</button>
  </div>
</template>

<script setup>
import Show from './utils/Show.vue'
import Counter from './utils/Counter.vue';
import { reactive, ref } from 'vue';


const pages = reactive([
  Show, Counter,
])
const titles = reactive([
  'show', 'counter',
])
const pageIndex = ref(0);


function change() {
  pageIndex.value = (pageIndex.value + 1) % pages.length;
}
</script>

<style scoped></style>
