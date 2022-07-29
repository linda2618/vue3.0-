<template>
    <div class="son">
        <h2>Son组件</h2>
        <h3>--从App接收到的车名:{{ car.name }}--价格:{{ car.price }}</h3>
    </div>

</template>

<script>
import { inject } from 'vue'

export default {
    name: 'Son',
    setup() {
        let car = inject('car')
        return {
            car,
        }

    }

}
</script>

<style lang="less" scoped>
.son {
    background-color: orange;
    height: 100px;
    margin: 10px;
}
</style>