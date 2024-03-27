<template>
  <div class="top">
    <div>总价：{{ total }}</div>
    <Transition>
      <div v-show="selectedName">你选中的图书是：{{ selectedName }}</div>
    </Transition>
    <Transition>
      <div v-show="deletedName">刚刚移除了：{{ deletedName }}</div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  total: number,
  selectedName: string,
  deletedName: string,
}>()
</script>

<style scoped>
.top {
  background-color: rgb(0, 255, 255);
  color: var(--dark);
  font-weight: 900;
  box-shadow: 0 0 10px rgb(44, 223, 255);
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
