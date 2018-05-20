<script>
import ComponentLeft from './components/component-left.vue';
import ComponentRight from './components/component-right.vue';


export default {
    components: {
        'component-left': ComponentLeft,
        'component-right': ComponentRight,
    }
};
</script>

<template>
    <div class='layout'>
        <component-left/>
        <component-right/>
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
