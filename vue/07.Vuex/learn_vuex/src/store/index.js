import { createStore } from "vuex";

const store = createStore({
  state: ()=>({
    counter:100,
  })
})

export default store