<template>
  <div class="Qian">
    <hr>
    <h2>{{ name }} </h2>
  </div>
</template>

<script>
export default {
  name:'qian',
  props: {
    name: {
      type: String,
      default: "Qian",
    }
  },

  unmounted(){
    console.log(this.name,'unmounted');
  }
}
</script>

<style scoped></style>
