<template>
  <div class="title">
    <slot name="title" :title="title">默认标题</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '子组件标题'
    }

  }
}
</script>

<style scoped></style>
