<template>
  <div class="Good">
    <hr>
    <h2>{{ name }} </h2>
    <h2>{{ counter }} </h2>
    <button @click="increament">+1</button>
    <button @click="decreament">-1</button>
  </div>
</template>

<script>
export default {
  name:'good',
  props: {
    name: {
      type: String,
      default: "Good",
    }
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increament() {
      this.counter++;
    },
    decreament() {
      this.counter--;
    },
  },
  unmounted(){
    console.log(this.name,'unmounted');
  }


}
</script>

<style scoped></style>
