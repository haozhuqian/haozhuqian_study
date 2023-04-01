<template>
  <div class="Hao">
    <hr>
    <h2>{{ name }} </h2>
  </div>
</template>

<script>
export default {
  name:'hao',
  props: {
    name: {
      type: String,
      default: "Hao",
    }
  },

  unmounted(){
    console.log(this.name,'unmounted');
  }
}
</script>

<style scoped></style>
