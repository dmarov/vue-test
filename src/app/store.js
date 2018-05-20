import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    getters: {

    },
    state: {
        arrayLeft: [
            {id: 0, order: 1, msg: 'Msg 0'},
            {id: 1, order: 2, msg: 'Msg 1'},
            {id: 2, order: 3, msg: 'Msg 2'},
            {id: 3, order: 4, msg: 'Msg 3'},
        ],
        arrayRight: [
        ],
    },
    mutations: {

        updateArrayLeft(state, value) {

            state.arrayLeft = value;

        }

    },
    actions: {

    },
});
