<template>
 <div class="About">
  <h2>About计数： {{ counter }}</h2>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
 </div>
</template>

<script>
import useCounter from './hooks/useCounter';

export default {
  setup() {
    return {...useCounter()}
  }
}
</script>

<style scoped>

</style>
