<template>
  <div class="m-info">
    <div class="left">
      <slot name="left">left</slot>
    </div>
    <div class="center">
      <slot name='center'>center</slot>
    </div>
    <div class="right">
      <slot name ='right'>right</slot>
    </div>
  </div>
  <!-- 默认的插槽name为default -->
  <slot>无名插槽默认值</slot>
</template>

<script>
export default {

}
</script>

<style scoped>
.m-info {
  display: flex;
  background-color: #aaaaaa;
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.left {
  flex: 1;
  background-color: blue;
}

.center {
  flex: 1;
  background-color: yellow;
}

.right {
  flex: 1;
  background-color: red;
}</style>
