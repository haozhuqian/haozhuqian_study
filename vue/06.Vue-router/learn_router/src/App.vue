<template>
  <div class="app">
    <h2>App Counter</h2>
    <button @click="back()">返回</button>
    <nav><router-link :to='{ path: "/home" }'>首页</router-link>
      <!-- 添加replace属性后会替换当前的历史记录 -->
      <router-link to="/about" replace>关于</router-link>
      <router-link to="/user/Money">用户Money</router-link>
      <router-link to="/user/Good">用户Good</router-link>
      <span @click="homeClick">非couter-link触发跳转</span>
    </nav>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function homeClick() {
  // router.push('/home')
  router.push({
    name: 'home',
    query: {
      name: 'Good',
      like: 'Money',
    }
  })
  // router.replace()效果类似，但会替换历史记录而非添加

}
function back() {
  router.back();
  // router.forward();向前
  // router.go();一个整数，表示向前向后
}

</script>

<style scoped>
/* 激活后的router-link标签默认会添加router-link-active这个class */
/* 精准匹配的router-link标签默认会添加router-link-exact-active这个class */
/* 也可以在标签上设置属性active-class来重命名选中后添加的类名 */
</style>
