<template>
  <div class="base">
    <Top :total :selectedName :deletedName></Top>
    <table class="shop">
      <thead>
        <tr>
          <th v-for="name in headNames">{{ name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="books.length === 0 && !adding">
          <td colspan="5"> 啥也没 </td>
        </tr>
        <Item v-for="item in books" :selected='selectedId === item.id' :item
          @decrement="(id) => --books.find(item => item.id = id)!.count"
          @increment="(id) => ++books.find(item => item.id = id)!.count" @remove="remove" @selected="selected">
        </Item>
        <NewItem v-if="adding" ref="newItemInstance" :new-id="nextId" @close="close">
        </NewItem>
      </tbody>
    </table>
    <AddItem :adding @add="adding = true" @close='close'></AddItem>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { BookItem } from '@/types';
import Top from './components/top.vue';
import Item from './components/item.vue';
import NewItem from './components/newItem.vue';
import AddItem from './components/addItem.vue'

const headNames = ['序号', '书籍名称', '价格', '购买数量', '操作']

const selectedId = ref(-1);
const books = ref<BookItem[]>([]);
const deletedName = ref('');
const selectedName = ref('');
const total = computed(() => books.value.reduce((sum, item) => sum + (item.count * item.price), 0))
const names = new Map<string, number>();
const nextId = ref(books.value.length + 1);
const adding = ref(false);

const newItemInstance = ref<typeof NewItem>();

const selected = (id: number, name: string) => {
  selectedName.value = name;
  selectedId.value = id;
}
const remove = (id: number, name: string) => {
  deletedName.value = name;
  if (selectedId.value === id) {
    selectedId.value = -1;
    selectedName.value = '';
  }
  names.delete(name);
  books.value = books.value.filter(item => item.id != id);
}
const close = (ifAdd: boolean) => {
  if (ifAdd) {
    const newBook = newItemInstance.value!.getBook();
    if (!newBook.name) {
      alert('世上没有无名书，你得给书取个名字');
      return;
    }
    if (names.has(newBook.name)) {
      if (confirm('这本书已经添加过啦，你是准备再添加一本吗？')) ++books.value.find(item => item.id === names.get(newBook.name))!.count;
    } else {
      nextId.value++;
      books.value.push(newBook);
      names.set(newBook.name, newBook.id)
    }
  };
  adding.value = false;
}

</script>

<style scoped>
.base {
  width: 800px;
  padding: 16px;
  margin: 100px auto;
  border-radius: 16px;
  background-color: #0effdb11;
  box-shadow: 0 0 10px rgb(44, 223, 255);
}

.shop {
  width: 100%;
}

table {
  border-collapse: collapse;
}

thead {
  background-color: #00ffff;
}
</style>

<style>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

html {
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #00213a, #2c7c8b, #004545, #001d3b);
  background-size: 800% 800%;
  animation: gradient 35s ease infinite;
}

th,
td {
  height: 40px;
  text-align: center;
  overflow: hidden;
}


th {
  color: var(--dark);
}

tr th:first-child {
  border: none;
  border-top-left-radius: 16px;
}

tr th:last-child {
  border-top-right-radius: 16px;
}


tr th {
  border-left: 2px solid var(--dark);
}


tr td:first-child {
  border: none;
}

tbody>tr {
  border-bottom: 2px solid #00ffff;
}

tr td {
  border-left: 2px solid #00ffff;
}

tbody {
  color: #00ffff;
}
</style>
