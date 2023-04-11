<template>
  <div class="home">
<h2>dCount:{{ counterStore.dCount }}</h2>
<h2>dACount:{{ counterStore.dACount }}</h2>
<h2>count:{{ counterStore.count}}</h2>
<h2>friend:{{ counterStore.getFriendById(111)}}</h2>
<h2>userMessage:{{ counterStore.showMessage}}</h2>
  </div>
</template>

<script setup>
import useCounter from "../stores/counter";

const counterStore =  useCounter();


</script>

<style scoped></style>