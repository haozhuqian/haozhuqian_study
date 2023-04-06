<template>
 <H2>Money</H2>
</template>

<script setup>
import { onMounted } from 'vue';


const props = defineProps({
  name: {
    type: String,
    default:'Money',
  },
  age: {
    type: Number,
    default:20,
  }
})
function foo(){
  console.log('foo');
}

onMounted(()=>{
  console.log('Show');
});
</script>

<style scoped>

</style>
