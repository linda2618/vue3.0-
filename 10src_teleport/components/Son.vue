<template>
    <div class="son">
        <h2>Son组件</h2>
        <Dialog></Dialog>
    </div>

</template>

<script>
import Dialog from './Dialog.vue'
export default {
    name: 'Son',
    components: { Dialog }
}
</script>

<style lang="less" scoped>
.son {
    background-color: orange;
    margin: 10px;
}
</style>