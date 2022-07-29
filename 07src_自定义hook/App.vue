<template>
  <button @click="isShowSum = !isShowSum">切换显示/隐藏</button>
  <Demo v-if="isShowSum"></Demo>
</template>

<script>
import Demo from './components/Demo.vue';
import { ref } from 'vue'

export default {
  components: { Demo },
  name: "App",
  setup() {
    let isShowSum = ref(true);

    return {
      isShowSum
    }
  }

  //#region
  /*
  //通过配置项的形式使用生命周期钩子
  beforeCreate() {
    console.log("---beforeCreate---");
  },
  created() {
    console.log("---created---");
  },
  beforeMount() {
    console.log("---beforeMount---");
  },
  mounted() {
    console.log("---mounted---");
  },
  beforeUpdate() {
    console.log("---beforeUpdate---");
  },
  updated() {
    console.log("---updated---");
  },
  beforeUnmount() {
    console.log("---beforeUnmount---");
  },
  unmounted() {
    console.log("---unmounted---");
  },
  */
  //#endregion
};
</script>
<style lang="less" scoped>
</style>
