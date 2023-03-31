<template>
 <div class="Category">
  <h2>Category</h2>
 </div>
</template>

<script>
import eventBus from './utils/event-bus';
export default {
  methods:{
    Good(){
      console.log('Banner被监听到了');
    }
  },
  created(){
    eventBus.on('Banner',this.Good)
  },
  unmounted(){
    eventBus.off('Banner',this.Good)
  }
}
</script>

<style scoped>

</style>
