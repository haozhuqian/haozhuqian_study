<template>
  <div class="add">
    <Transition>
      <div v-if="adding" class="btns">
        <button @click="emits('close', true)">确认</button>
        <button @click="emits('close', false)">取消</button>
      </div>
    </Transition>
    <Transition>
      <div v-if="!adding" class="btns">
        <button class="addbtn" @click="emits('add')">增加图书</button>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  adding: boolean
}>()
const emits = defineEmits<{
  (e: 'add'): void,
  (e: 'close', ifAdd: boolean): void,
}>()
</script>
<style scoped>
.add {
  margin-top: 16px;
  text-align: center;
}
button {
  width: 100px;
  font-size: 16px;
  font-weight: 900;
  border-radius: 8px;
  border: none;
  background-color: #00ffff;
  color: var(--dark);
  cursor: pointer;
  overflow: hidden;
}

.btns{
  height: 32px;
  display: flex;
  justify-content: space-around;
}

.v-enter-active,
.v-leave-active {
  transition: height 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  height: 0;
}
</style>