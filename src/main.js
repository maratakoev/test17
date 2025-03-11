import { createApp } from 'vue';
import App from './app/App.vue';
import router from './app/router.js';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount('#app');
