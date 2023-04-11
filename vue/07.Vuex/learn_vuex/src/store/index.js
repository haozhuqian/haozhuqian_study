import { createStore } from "vuex";
import home from "./modules/home";

const store = createStore({
  state: () => ({
    counter: 100,
    age: 20,
    name: "Good",
    like: "Money",
    message: 'kiss'
  }),
  getters: {
    doubleCounter(state, getters) {
      return (counter) => {
        return counter * 2;
      };
    },
  },
  mutations: {
    increment(state, payload) {
      // payload是函数传入的参数
      state.counter++;
    },
  },
  actions: {
    incrementAction(context) {
      // console.log(context.commit);//用于提交commit
      // console.log(context.getters);
      // console.log(contest.state);
      context.commit("increment");
    },
  },
  modules:{
    home,
  }
});

export default store;
