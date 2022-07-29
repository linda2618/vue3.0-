<template>
  <div class="app">
    <h1>App组件</h1>
    <Child></Child>
  </div>
</template>

<script>
import Child from './components/Child.vue';
export default {
  name: 'App',
  components: { Child },
  setup() {

  }
}
</script>

<style lang="less" scoped>
.app {
  background-color: pink;
}
</style>