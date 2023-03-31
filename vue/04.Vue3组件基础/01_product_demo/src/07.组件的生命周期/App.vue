<template>
  <input type="text" v-model="message">
  <button @click="this.ifHomeShow=!this.ifHomeShow">if home show</button>
<home v-if='ifHomeShow'></home>
</template>
<script>
import Home from './Home.vue';

export default {
  components: {
    Home,
  },
  data() {
    return {
      ifHomeShow:true,
      message: "Good Money",
    }
  },
  // 组件创建之前
  beforeCreate() {
    console.log('1.beforeCreate');
  },
  // 创建完成
  created() {
    console.log('2.created');
    console.log('发送请求，获取数据');
    console.log('监听事件总线事件');
    console.log('监听watch数据');
  },
  // 准备挂载template
  beforeMount() {
    console.log('3.beforeMount');
  },
  // 虚拟dom成为真实dom
  mounted() {
    console.log('4.mounted');
    console.log('可以获取与使用Dom');
  },
  // 数据发生改变
  // 准备更新Dom
  beforeUpdate() {
    console.log('5.beforeUpdate');
  },
  // 已经更新Dom
  updated() {
    console.log('6.updated');
  },
  // 准备卸载Dom,卸载之前
  beforeUnmount() {
    console.log('7.beforeUnmount');
  },
  // 已经卸载Dom完成
  unmounted() {
    console.log('8.unmounted');
  }
}
</script>

<style scoped></style>
