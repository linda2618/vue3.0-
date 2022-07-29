<template>
    <h3>当前求和为：{{ sum }}</h3>
    <button @click="sum++">点我+1</button>
    <hr />
    <h2>当前点击鼠标的坐标为: X:{{ point.x }},Y:{{ point.y }}</h2>
</template>

<script>
import { ref, reactive, onMounted, onBeforeMount } from "vue";

export default {
    name: 'Demo',
    setup() {
        //数据
        let sum = ref(0);



        //返回一个对象
        return {
            sum,
        };
    },
}
</script>

<style>
</style>