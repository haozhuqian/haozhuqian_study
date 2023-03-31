<template>
  <div class="app">
    <home></home>
  </div>
  <h2>{{ name }}-{{ age }} </h2>
  <button @click='change()'>Change</button>
  <button @click="isShowCate=!isShowCate">if show Category</button>
  <Category v-if = 'isShowCate'></Category>
</template>

<script>
import { computed } from 'vue';
import Home from './Home.vue';
import eventBus from './utils/event-bus';
import Category from './Category.vue';
export default {
  components: { Home,Category },
  data() {
    return {
      name: 'Money',
      age: '20',
      isShowCate:true,
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
    });
  },
}
</script>

<style scoped></style>
