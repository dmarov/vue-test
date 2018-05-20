<script>

export default {
    name: 'popup',
    methods: {
        close() {
            this.$modal.hide('extra-products-popup');
        }
    }

};

</script>

<template>
    <div class='popup'>
        <button @click="close()">Close</button>
    </div>
</template>

<style lang='scss' scoped>

    .popup {
        width: 100%;
        height: 100%;
    }

</style>
