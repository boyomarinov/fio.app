import 'vuetify/dist/vuetify.min.css'
import '@/app.css';

import Vue from 'vue'
import VueResource from 'vue-resource';
import Vuetify from 'vuetify';

import App from './app.vue';
import { router } from './router';
import { store } from './store';
import { sync } from 'vuex-router-sync';

// Todo: Create central place for prototype extensions
Array.prototype.first = function (n = 1) { 
    return this && this.length ? this.slice(0, n) : null 
};

// Returns a clone of the array, to not mutate the initial one
Array.prototype.sortBy = function (field) {
    return [...this].sort((a, b) => b[field] - a[field]);
};

Vue.use(VueResource);
Vue.use(Vuetify, {
    theme: {
        primary: '#5479a2'
    }
});

Vue.config.productionTip = false;
Vue.http.options.root = '../api';
// Vue.http.interceptors.push((req) => {
//     req.headers.set('Authorization', store.getters.token);
// });

sync(store, router);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');