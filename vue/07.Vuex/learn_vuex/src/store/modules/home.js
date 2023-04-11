export default {
  namespace:true,
  // 隔离模块命名空间
  // 调用模块内与父模块重名的mutations、getters、actions时要使用 模块名/方法 名的格式
  state:()=>({
    message:'last'
  }),
  mutations:{
    changeBanners(state,banner){
      state.message = banner;
    }
  },
  getters:{
    dMessage(state,getters,rootState){
      return 'one '+state.message+' '+rootState.message;;
    }
  }//actions跟getters差不多
  // 在actions中修改root中的state,在调用commit时第三个参数为{root：true}
}