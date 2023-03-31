<template>
  <div class="Money">
    <hr>
    <h2>{{ name }} </h2>
  </div>
</template>

<script>
export default {
  name:'money',
  props: {
    name: {
      type: String,
      default: "Money",
    }
  },

  unmounted(){
    console.log(this.name,'unmounted');
  }
}
</script>

<style scoped></style>
