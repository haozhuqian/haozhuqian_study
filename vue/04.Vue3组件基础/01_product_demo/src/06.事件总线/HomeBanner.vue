<template>
 <div class="home-banner">
  name: {{ name.value }}
  age:{{ age }}
  <button @click="bannerClick">banner</button>
 </div>
</template>

<script>
import eventBus from './utils/event-bus';
export default {
  inject:['name','age'],
  methods:{
    bannerClick(){
      eventBus.emit('Banner','Money',20)
    }
  }
}
</script>

<style scoped>

</style>
