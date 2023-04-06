import { ref, watch } from "vue";

export default function useTitle(newTitle){
  const title = ref(newTitle);
  watch(title,(newValue)=>{
    document.title = newValue;
  },{
    immediate: true
  })
  return title;
}