<template>
  <div class="infos">
    <!-- 可以通过以下方式获取父组件传递的非prop属性 -->
    <h2 :adress = '$attrs.address'>姓名：{{ name }} </h2>
    <h2>年龄：{{ age }} </h2>
    <h2>身高：{{ height }} </h2>
    <h2>朋友：{{ friends.name }} </h2>
    <hr>
  </div>
</template>

<script>
export default {
  // 设置这个之后非prop属性不会添加到根组件
  inheritAttrs: false,
  props: {
    'name': {
      // 类型错误会警告
      type: String,
      required: true,
      default: '默认姓名',
    },
    'age': {
      type: Number,
      // 默认值
      default: 18,
      // 验证函数，验证错误会警告
      validator(value) {
        return value > 0;
      }
    },
    'height': {
      type: Number,
      default: 1.7,
    },
    // 对象类型需要用函数返回
    friends: {
      type: Object,
      default() {
        return {
          name: 'good',
          age: 20,
          height: 1.65
        }
      }
    },
  }

}
</script>

<style scoped></style>
