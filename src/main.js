import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

console.log(store.state)

createApp(App).use(router).mount('#app');
