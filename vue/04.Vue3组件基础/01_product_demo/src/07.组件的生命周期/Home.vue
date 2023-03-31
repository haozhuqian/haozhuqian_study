<template>
 <div class="home">Home</div>
</template>

<script>
export default {
  beforeUnmount(){
    console.log('7.before home Unmount');
  },
  unmounted(){
    console.log('8.home is unmounted');
  },
}
</script>

<style scoped>

</style>
