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
        <div class='component-left'/>
        <div class='component-right'/>
    </div>
</template>
