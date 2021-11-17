import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import todos from './modules/Todos/todos';
import contacts from './modules/contacts';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  modules: { todos, contacts },
  plugins: [vuexLocal.plugin],
});
