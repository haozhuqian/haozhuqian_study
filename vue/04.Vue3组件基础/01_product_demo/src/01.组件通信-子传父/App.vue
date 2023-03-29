<template>
  <info v-for='info in infos' :="info" />
  <info name='qian' />
</template>

<script>
import info from './info.vue'
export default {
  components: {
    info,
  },
  data() {
    return {
      infos: [
        {
          name: 'good',
          age: 20,
          height: 1.65,
          friends: {
            name: 'good',
            age: 20,
            height: 1.65
          },
          // 非prop 会添加到根节点标签上，如果没有禁用且有多个根节点标签时需要指定绑定节点，否则警告
          address:'春田市',
        },
        {
          name: 'money',
          age: 21,
          height: 1.70,
          friends: {
            name: 'good',
            age: 20,
            height: 1.65
          },
          address:'圆蛤市',
        },
        {
          name: 'hao',
          age: 22,
          height: 1.75,
          friends: {
            name: 'good',
            age: 20,
            height: 1.65
          },
        },

      ],
    }
  }
}
</script>

<style scoped></style>