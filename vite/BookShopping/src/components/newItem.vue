<template>
  <tr class="new">
    <td>{{ newId }}</td>
    <td>
      <input type="text" v-model="newItem.name" class="input" @keyup.enter="emits('close',true)">
    </td>
    <td>
      <input type="number" v-model="newItem.price" @input="verify" class="input">
    </td>
    <td>
      <button @click="() => newItem.count--" :disabled="newItem.count <= 1">-</button>
      {{ newItem.count }}
      <button @click="() => newItem.count++">+</button>
    </td>
    <td>
      <button :disabled="true">移除</button>
    </td>
  </tr>
</template>

<script lang="ts" setup>
import { type Ref, ref } from 'vue';
import { BookItem } from '@/types';

const props = defineProps<{
  newId: number
}>()
const emits = defineEmits<{
  (e: 'close', ifAdd: boolean): void,
}>()

const newItem: Ref<BookItem> = ref({
  id: props.newId,
  name: '',
  price: 100,
  count: 1,
})
const verify = () => {
  if (newItem.value.price<=1) {
    alert("图书价格应该是正数")
    newItem.value.price = 1;
  }
}
defineExpose({
  getBook(){
    return newItem.value;
  }
})
</script>

<style scoped>

.input{
  padding: 0 4px;
  background-color: #0000;
  border: 2px solid #00ffff;
  color: #00ffff;
  height: 24px;
  border-radius: 8px;
}
.input:focus{
  border-color: #0000;
  outline: 2px solid #00ffff;
}

button {
  height: 24px;
  padding: 0px 16px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  background-color: #00ffff;
  color: var(--dark);
  cursor: pointer;
  overflow: hidden;
}
</style>
