import Vue from 'vue';
import Layout from './layout.vue';
import store from './store.js';

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store,
    components: {
        'layout': Layout,
    },
    template: `<layout/>`,
});


