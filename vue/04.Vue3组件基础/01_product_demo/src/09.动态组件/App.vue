<template>
 <button @click="change">change conponent</button>
 <!-- 只能访问全局与本组件局部注册的组件 -->
 <component :is="name[nameid]" :name="name[nameid]"></component>
 <!-- 可以有include exclude 属性，表示缓存或不缓存哪些组件，这个名字与组件的name属性相关， -->
 <!-- 同时可以使用正则匹配，或者,隔开的字符串，或者数组 -->
 <!-- 还可以有max属性，表示最多缓存多少组件实例，一旦达到这个数字，缓存组件中最近没有被访问的实例将会销毁 -->
 <keep-alive include="good,hao">
  <component :is="name[nameid]"></component>
  </keep-alive>
</template>

<script>
import Good from './utils/Good.vue'
import Money from './utils/Money.vue'
import Hao from './utils/Hao.vue'
import Zhu from './utils/Zhu.vue'
import Qian from './utils/Qian.vue'

export default {
  components:{
    Good,
    Money,
    Hao,
    Zhu,
    Qian,
  },
  data(){
    return {
      name:['good','money','hao','zhu','qian'],
      nameid:0,
    }
  },
  methods:{
    change(){
      this.nameid=(this.nameid+1)%this.name.length;
    }
  }
}
</script>

<style scoped>

</style>
