import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state () {
    return {
        contacts: [],
        todoList: []
    }
  },
  mutations: {
    // increment (state) {
    //   state.count++
    // }
  }
})

