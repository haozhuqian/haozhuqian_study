<template>
 <div class="app">
  <tab :titles = 'titles' @tab-click="TabChouse"/>
  {{ tabIndex }}
 </div>
</template>

<script>
import Tab from './Tab.vue'
export default {
  components:{
    Tab,
  },
  data(){
    return {
      titles:['good','money','hao','zhu','qian'],
      tabIndex:-1,
    }
  },
  methods:{
    TabChouse(index){
      this.tabIndex = index;
    }
  }
  
}
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
}
</style>
