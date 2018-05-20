<script>

export default {
    name: 'popup',
    methods: {
        close() {
            this.$emit('close');
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
//        background-color: #000000;
        border-radius: 30px;
    }

</style>
