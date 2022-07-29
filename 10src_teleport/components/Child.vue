<template>
    <div class="child">
        <h2>Child组件</h2>
        <Son></Son>
    </div>
</template>

<script>
import Son from './Son.vue';
export default {
    name: 'Child',
    components: { Son, }

}
</script>

<style lang="less" scoped>
.child {
    background-color: skyblue;
    margin: 10px;
}
</style>