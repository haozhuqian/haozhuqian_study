import { createApp } from 'vue'
// import App from './01.组件通信/App.vue'
// import App from './02.组件通信-父传子/App.vue'
// import App from './03.组件通信-练习/App.vue'
// import App from './04.插槽/App.vue'
// import App from './05.组件通信-非父子/App.vue'
// import App from './06.事件总线/App.vue'
// import App from './07.组件的生命周期/App.vue'
// import App from './08.获取元素组件/App.vue'
// import App from './09.动态组件/App.vue'
// import App from './10.异步组件/App.vue'
// import App from './11.组件的双向绑定/App.vue'
import App from './12.组件混入/App.vue'

const app = createApp(App)

// app.mixin({
//   created(){
//     console.log('全局混入');
//   }
// })

app.mount('#app')
