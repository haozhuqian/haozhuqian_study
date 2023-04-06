<template>
 <h2>Good</h2>
</template>

<script setup>

  const props = defineProps({
    counter:{
      type: Number,
      default: 0,
    }
  })
  const emits = defineEmits(['counterClick'])
  function counterBtnClick() {
    emits('counterClick','counter组件被点击了')
  }
  
</script>

<style scoped>

</style>
