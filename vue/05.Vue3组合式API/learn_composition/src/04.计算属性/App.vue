<template>
 <div class="App">
  <h2>{{ fullName }}</h2>
  <button @click="changeFullName">change name</button>
 </div>
</template>

<script>
import { computed,reactive } from 'vue';

export default {
  setup(){
    const names = reactive({
      firstName : 'Good',
      lastName : 'Money',
    }) 
    const fullName = computed({
      set(newname){
        const tempName = newname.split(' ');
        names.firstName = tempName[0];
        names.lastName = tempName[1];
      },
      get(){
        return names.firstName+' '+names.lastName;
      }
    })
    const changeFullName = ()=>{
      fullName.value='Hao ZhuQian';
    }

    return {
      fullName,
      changeFullName
    }
  }
  
}
</script>

<style scoped>

</style>