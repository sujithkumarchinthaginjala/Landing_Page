import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@/assets/styles/main.scss';

// Import full icon packs
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add entire icon packs to the library
library.add(fas);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router)

app.mount('#app')
