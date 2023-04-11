import { defineStore } from "pinia";
import useUser from "./user";

const useCounter = defineStore('counter',{
  state:()=>({
    count:1,
    friends:[
      {id:110,name:'Good',},
      {id:111,name:'Money',},
      {id:112,name:'Hao',},
      {id:113,name:'ZhuQian',},
    ]
  }),
  getters:{
    dCount(state){
      return this.count * 2;
    },
    dACount(state){
      return this.dCount + 1;
    },
    // 返回一个函数
    getFriendById(state){
      return function(id){
        return state.friends.find((item)=>{return item.id==id}).name
      }
    },
    // 使用其他stored的信息
    showMessage(state){
      const userStore = useUser();
      return `   name:${userStore.name}-age:${userStore.age} `;
    }
  },
  actions:{
    increment(){
      this.count++;
    }
  }
})

export default useCounter;