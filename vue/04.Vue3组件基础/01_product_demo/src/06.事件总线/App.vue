<template>
  <div class="app">
    <home></home>
  </div>
  <h2>{{ name }}-{{ age }} </h2>
  <button @click='change()'>Change</button>
</template>

<script>
import { computed } from 'vue';
import Home from './Home.vue';
import eventBus from './utils/event-bus';
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
  created() {
    eventBus.on('Banner',(name,age) => {
      console.log('Banner事件监听');
      this.name=name;
      this.age=age;
    })
  },
}
</script>

<style scoped></style>
