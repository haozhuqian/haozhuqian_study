<template>
  <h2>单插槽</h2>
  <info title='Good' content="Money"> <button>插槽插入的按钮</button> </info>
  <info title='Good' content="Money"></info>
  <hr>


  <h2>具名插槽</h2>
  <m-info>
    <template v-slot:left><button>返回</button></template>
    <template #center><input type="text"></template>
    <template v-slot:right><a href="#">登录</a></template>
    <template v-slot:default>
      <h2>v-slot:default</h2>
    </template>
    <!-- <h2>不指定v-slot</h2>会报错 -->
  </m-info>
  <hr>


  <h2>动态绑定插槽</h2>
  <m-info>
    <template #[position]>
      <button>动态绑定插槽</button>
    </template>
  </m-info><br>
  <button @click="position = 'left'">left</button>
  <button @click="position = 'center'">center</button>
  <button @click="position = 'right'">right</button>
  <hr>


  <h2>作用域插槽</h2>
  <z-info>
    <template #title="prop">{{ prop.title }}</template>
  </z-info>
  <z-info></z-info>
  <hr>


  <h2>独占默认插槽的简写</h2>
  <d-info #="prop">
    {{ prop.title }}
  </d-info>
</template>

<script>
import Info from "./Info.vue";
import MInfo from "./MInfo.vue";
import ZInfo from "./ZInfo.vue";
import DInfo from "./DInfo.vue";
export default {
  components: { Info, MInfo, ZInfo,DInfo },
  data() {
    return {
      position: 'left',
    }
  },
}
</script>

<style scoped></style>
