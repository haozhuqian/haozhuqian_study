<template>
 <div class="add">
      <button @click = 'btnClick(1)'>+1</button>
      <button @click = 'btnClick(5)'>+5</button>
      <button @click = 'btnClick(10)'>+10</button>
    </div>
</template>

<script>
export default {
  emits: {
    add(count){
      if (count >= 10) {
        return false;
      }
      return true;
    }
  },
  methods:{
    btnClick(count){
      this.$emit('add',count);
    }
  }
}
</script>

<style scoped>

</style>
