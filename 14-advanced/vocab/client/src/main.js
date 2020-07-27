import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import App from './App.vue';
import router from './router';

import 'semantic-ui-css/semantic.css';

Vue.config.productionTip = false;

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
