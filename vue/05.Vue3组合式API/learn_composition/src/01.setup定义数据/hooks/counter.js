import { ref,reactive } from "vue";

export default function () {
  // 定义简单类型的响应式(也可以定义复杂类型)
  let counter = ref(0);
  const account = reactive([
    {
      username: "Money",
      password: 801219,
    },
    {
      username: "Good",
      password: 114514,
    },
    {
      username: "Hao",
      password: 100861,
    },
  ]);
  // 定义复杂类型响应式
  // 多应用于本地数据
  // 有关系的数据
  const user = reactive(
    {
      username: "Money",
      password: 801219,
    });
  const index = ref(0);
  const increment = () => counter.value++;
  const decrement = () => counter.value--;
  return {
    counter,
    account,
    index,
    user,
    increment,
    decrement,
  };
}
