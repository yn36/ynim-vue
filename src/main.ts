import { createApp } from 'vue';
import App from './App';
import store from './store';
import '/@/style/index.less';

createApp(App)
  .use(store)
  .mount('#app');