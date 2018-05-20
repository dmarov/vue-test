<script>
import ComponentLeft from './components/component-left.vue';
import ComponentRight from './components/component-right.vue';
import Popup from './components/popup.vue'

export default {
    components: {
        'component-left': ComponentLeft,
        'component-right': ComponentRight,
        'popup': Popup,
    },
    methods: {

        show() {

            this.$modal.show('extra-products-popup', {}, {
                width: '90%',
                height: '90%',
                classes: 'rounded',
                //resizable: true,
                //draggable: true,
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
        <!-- <modals-container/> -->
        <modal name='extra-products-popup' width='90%' height='90%' classes='rounded'>
            <popup/>
        </modal>
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

    .rounded {

        border-radius: 30px;
        background-color: #FFFFFF;

    }

</style>
