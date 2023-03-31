<template>
  <div class="home" @click = 'changeCounter'>{{ modelValue }}</div>
 </template>
 
 <script>
 export default {
   props:{
    modelValue:{
       type: Number,
       default:0,
     }
   },
   methods:{
    changeCounter(){
      this.$emit('update:modelValue',this.modelValue-1)
    }
   }
 
 }
 </script>
 
 <style scoped>
 
 </style>
 