<template>
  <div class="Money">
    <hr>
    <h2>{{ name }} </h2>
  </div>
</template>

<script>
import messageMixin from '../mixins/message-mixin';
export default {
  // 如果混入对象有冲突，保留原组件的。没有冲突，合并
  mixins:[ messageMixin,],
  name:'money',
  props: {
    name: {
      type: String,
      default: "Money",
    }
  },

  unmounted(){
    console.log(this.name,'unmounted');
  }
}
</script>

<style scoped></style>
