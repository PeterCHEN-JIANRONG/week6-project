import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';
import '../node_modules/sweetalert2/dist/sweetalert2.min.css';
import VueLoading from 'vue-loading-overlay';
import '../node_modules/vue-loading-overlay/dist/vue-loading.css';

// 自定義檔案放後面
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(VueAxios, axios);
app.use(VueSweetalert2);
app.use(router);

app.component('VueLoading', VueLoading);

app.mount('#app');
