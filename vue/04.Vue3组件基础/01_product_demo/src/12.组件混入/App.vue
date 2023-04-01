<template>
  <button @click="change">change conponent</button>
  <component :is="name[nameid]" :name="name[nameid]"></component>
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
 