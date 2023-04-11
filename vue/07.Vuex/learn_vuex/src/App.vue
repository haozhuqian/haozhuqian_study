<template>
 <div class="app">
  <h2>当前计数：{{ $store.state.counter }}</h2>
  <h2>message：{{ $store.state.home.message }}</h2>
  <h2>dMessage：{{ $store.getters.dMessage }}</h2>
  <h2>doubleCounter:：{{ $store.getters.doubleCounter($store.state.counter) }}</h2>
  <h2>doubleCounter:：{{ doubleCounter }}</h2>
  <h2>名字：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="increment">++</button>
  <button @click="acIncrement">action++</button>
 </div>
</template>

<script setup>
import { useStore,mapState,mapGetters,mapMutations,mapActions } from "vuex";
import { computed, toRefs } from "vue";

const store = useStore();

function increment(){
  // console.log(store.state.counter);
  // store.state.counter++;
  store.commit('increment');
}
function acIncrement(){
  store.dispatch('incrementAction');
}

const name = computed(mapState(['name']).name.bind({$store:store}))
const doubleCounter = computed(()=>store.getters.doubleCounter(store.state.counter));
const {age} = toRefs(store.state);

</script>

<style scoped>

</style>
