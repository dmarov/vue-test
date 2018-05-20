<script>
import Draggable from 'vuedraggable';
import {mapGetters} from 'vuex';

export default {

    components: {
        'draggable': Draggable,
    },
    computed: {
        myList: {
            get() {
                return this.$store.state.arrayLeft;
            },
            set(value) {
                this.$store.commit('updateArrayLeft', value);
            },
        },
        dragOptions() {
            return {
                group: 'description',
            };
        },
    },
    methods: {
        log() {
            console.log(this.myList);
        },
    }

}

</script>
<template>
    <div class='component-left'>
        <draggable element='div' v-model='myList' :list='myList' :options='dragOptions' :end='log()'>
            <div v-for='elem in myList' :key='elem.id'>
                {{ elem.msg }}
            </div>
        </draggable>
    </div>
</template>

<style>
    .component-right {
        width: 50%;
    }

    .component-left > div {

        min-height: 20px;

    }
</style>
