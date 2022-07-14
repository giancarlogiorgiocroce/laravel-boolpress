window.axios = require('axios');
window.Vue = require('vue');
import App from './App.vue';
import router from './routes';

const app = new Vue({
    el: '#app',
    // Aggiungo il router ad App per poterlo usare nelle Vue Comp
    router,
    render: h => h(App),
});
