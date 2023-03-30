<template>
 <div class="home-banner">
  name: {{ name.value }}
  age:{{ age }}
 </div>
</template>

<script>
export default {
  inject:['name','age'],
}
</script>

<style scoped>

</style>
