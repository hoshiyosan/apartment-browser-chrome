import Vue from 'vue';
import App from './App';
import store from '../store';
import router from './router';
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

global.browser = require('webextension-polyfill');
Vue.prototype.$browser = global.browser;
Vue.use(VueMaterial);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('popup received a message...', request);

  if (request.subject == 'popup:pageData') {
    console.log('... with dom content to parse!');

    store.dispatch('parse/parseAnounce', {
      url: request.url,
      title: request.title,
      body: request.body
    })
  } else {
    console.log('... that it wont process!');
  }

});

Vue.filter('price', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' €'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
