<template>
  <div class="app">
    <h1>App组件---车名：{{ name }}--价格{{ price }}</h1>
    <Child></Child>
  </div>
</template>

<script>
import { reactive, toRefs, provide } from 'vue';
import Child from './components/Child.vue';
export default {
  name: 'App',
  components: { Child },
  setup() {
    let car = reactive({
      name: '宝马',
      price: 50
    })

    provide('car', car) //给自己的后代组件传递数据
    return {
      ...toRefs(car)
    }
  }
}
</script>

<style lang="less" scoped>
.app {
  background-color: pink;
}
</style>