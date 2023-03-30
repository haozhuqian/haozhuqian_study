<template>
 <slot :title="title">Good</slot>
</template>

<script>
export default {
  data(){
    return {
      title:'Money',
    }
  }
}
</script>

<style scoped>

</style>
