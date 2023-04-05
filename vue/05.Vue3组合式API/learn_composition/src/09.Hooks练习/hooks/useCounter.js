import { ref,onMounted } from "vue";

export default function useCounter() {
  const counter = ref(0);
  function increment() {
    counter.value++;
  }
  function decrement() {
    counter.value--;
  }
  onMounted(()=>{
    console.log('useCounter');
  })
  return {
    counter,
    increment,
    decrement,
  }
}