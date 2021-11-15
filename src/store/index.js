import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist'
import todos from './modules/Todos/todos';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({

  modules: { todos },
   plugins: [vuexLocal.plugin]
});
