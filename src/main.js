import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';
import '../node_modules/sweetalert2/dist/sweetalert2.min.css';
import VueLoading from 'vue-loading-overlay';
import '../node_modules/vue-loading-overlay/dist/vue-loading.css';
// 匯入 vee-validate 主套件
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
// 匯入 vee-validate 相關規則
import {
  required, email, min, max,
} from '@vee-validate/rules';
// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n';
// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// 自定義檔案放後面
import App from './App.vue';
import router from './router';

// 定義驗證規則
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');

const app = createApp(App);
app.use(VueAxios, axios);
app.use(VueSweetalert2);
app.use(router);

app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.component('VueLoading', VueLoading);

app.mount('#app');
