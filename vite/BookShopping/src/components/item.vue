<template>
  <tr :key="item.id" class="item" :class="{ active: selected }" @click="emits('selected',item.id,item.name)">
    <td>{{ item.id }}</td>
    <td> {{ `《${item.name}》` }}</td>
    <td>{{ `￥${item.price}` }}</td>
    <td>
      <button @click="emits('decrement',item.id)" :disabled="item.count <= 0">-</button>
      {{ item.count }}
      <button @click="emits('increment',item.id)">+</button>
    </td>
    <td>
      <button @click="emits('remove',item.id,item.name)">移除</button>
    </td>
  </tr>
</template>

<script lang="ts" setup>
import { BookItem } from '@/types'

defineProps<{
  selected: boolean,
  item: BookItem,
}>()

const emits = defineEmits<{
  (e: 'decrement', index: number): void,
  (e: 'increment', index: number): void,
  (e: 'remove', index: number,name:string): void,
  (e: 'selected', index: number,name:string): void,
}>()
</script>

<style scoped>
.item{
  transition: background-color 0.5s ease;
}
.active{
  background-color: #00ffff44;
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
