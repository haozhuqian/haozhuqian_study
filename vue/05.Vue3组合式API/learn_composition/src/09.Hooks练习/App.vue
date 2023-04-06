<template>
  <home></home>
  <hr>
  <about></about>
  <hr>
  <button @click="change">change</button>
  <hr>
  <component :is="currentPage"></component>
</template>

<script>
import { ref,reactive } from "vue";
import Home from './utils/Home.vue';
import About from './utils/About.vue';
import useTitle from './hooks/useTitle.js';

export default {
  components: {
    Home,
    About,
  },
  setup() { 
    const pages = reactive([
      'home',
      'about',
    ])
    const index = ref(0);
    const currentPage = ref(pages[index.value])

    const title = useTitle(pages[index.value]);
    function change() {
      index.value = (index.value+1)%pages.length;
      title.value=pages[index.value];
      currentPage.value = pages[index.value];
    }
   
    return {
      change,
      pages,
      index,
      currentPage,
    }
  }
}
</script>

<style scoped></style>
