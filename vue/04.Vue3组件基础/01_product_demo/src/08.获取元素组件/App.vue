<template>
 <div class="app">
  <h2 ref="title">title</h2>
  <banner ref='banner'></banner>
  <button ref="button" @click="butClick">button</button>
 </div>
</template>

<script>
import Banner from './Banner.vue';

export default {
components:{
  Banner,
},
methods:{
  butClick(){
  console.log( 'title',this.$refs.title );
  console.log( 'banner');
  // 获取组件实例
  console.log( this.$refs.banner );
  this.$refs.banner.bannerClick();
  console.log( 'button',this.$refs.button );
  // 获取组件根元素，多个根元素则会返回其中第一个节点
  console.log(this.$refs.banner.$el);
  // 获取父组件实例
  console.log(this.$parent);
  // 获取自己的根组件
  console.log(this.$root);

  },
},


}
</script>

<style scoped>

</style>
