<template>
 <div class="Inof">
  <div class="title">{{ title }} </div>
  <div class="content">{{ content }} <slot>默认插槽内容</slot> </div>
 </div>
</template>

<script>
export default {
  props: {
    title:{
      type: String,
      default: '默认标题'
    },
    content:{
      type: String,
      default: '默认内容',
    }
  }
  
}
</script>

<style scoped>

</style>
