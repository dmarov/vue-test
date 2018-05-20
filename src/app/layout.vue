<script>
import ComponentLeft from './components/component-left.vue';
import ComponentRight from './components/component-right.vue';
import Popup from './components/popup.vue'


export default {
    components: {
        'component-left': ComponentLeft,
        'component-right': ComponentRight,
    },
    methods: {

        show() {

            this.$modal.show(Popup, {}, {
                width: '90%',
                height: '90%',
                resizable: true,
                draggable: true,
            });

        }

    }
};
</script>

<template>
    <div>
        <div class='layout'>
            <component-left/>
            <component-right/>
        </div>
        <button @click='show()'>Open</button>
        <modals-container/>
    </div>
</template>

<style lang='scss' scoped>

    .layout {
        display: flex;
    }

</style>

<style lang='scss'>

    * {
        border: 1px solid black;
    }

</style>
