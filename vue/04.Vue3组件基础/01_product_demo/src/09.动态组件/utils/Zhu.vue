<template>
  <div class="Zhu">
    <hr>
    <h2>{{ name }} </h2>
  </div>
</template>

<script>
export default {
  name:'zhu',
  props: {
    name: {
      type: String,
      default: "Zhu",
    }
  },
  
  unmounted(){
    console.log(this.name,'unmounted');
  }
}
</script>

<style scoped></style>
