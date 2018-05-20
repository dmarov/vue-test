import Vue from 'vue';
import Layout from './layout.vue';
import store from './store.js';
import VModal from 'vue-js-modal'
 
Vue.use(VModal, { dynamic: true });
Vue.config.productionTip = false

new Vue({
    el: '#app',
    store,
    components: {
        'layout': Layout,
    },
    template: `<layout/>`,
});


