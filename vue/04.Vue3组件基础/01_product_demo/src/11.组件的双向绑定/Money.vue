<template>
  <div class="home" @click = 'changeCounter'>{{ counter }}</div>
 </template>
 
 <script>
 export default {
   props:{
     counter:{
       type: Number,
       default:0,
     }
   },
   methods:{
    changeCounter(){
      this.$emit('update:modelValue',this.counter-1)
    }
   }
 
 }
 </script>
 
 <style scoped>
 
 </style>
 