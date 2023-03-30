<template>
  <div class="app">
    <home></home>
  </div>
  <h2>{{ name }}</h2>
  <button @click='change()'>Change</button>
</template>

<script>
import { computed } from 'vue';
import Home from './Home.vue';
export default {
  components: { Home, },
  data() {
    return {
      name: 'Money',
      age: '20',
    }
  },
  methods:{
    change(){
      this.name='Good';
      this.age=18;
    }
  },
  provide() {
    return {
      name: computed(()=>{
        return this.name;
      }),
      age: this.age,
    }
  },
}
</script>

<style scoped></style>
