<template>
  <div class='app'>
    <h2>当前计数：{{ counter }} </h2>
    <add-counter @add='addBtnClick'></add-counter>
    <sub-counter @sub="subBtnClick"></sub-counter>
  </div>
</template>

<script>
import AddCounter from "./AddCounter";
import SubCounter from "./SubCounter";
export default {
  components: {
    AddCounter,
    SubCounter,
  },
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    addBtnClick(count) {
      this.counter += count;
    },
    subBtnClick(count) {
      this.counter -= count;
    },
  }

}
</script>

<style scoped></style>
