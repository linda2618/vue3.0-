<template>
  <button @click="isShowSum = !isShowSum">切换显示/隐藏</button>
  <h3 v-if="isShowSum">当前求和为：{{ sum }}</h3>
  <button @click="sum++">点我+1</button>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default {
  name: "App",
  setup() {
    //数据
    let sum = ref(0);
    let isShowSum = ref(true);

    //通过组合式API 的形式去使用生命周期钩子
    onBeforeMount(() => {
      console.log("---onBeforeMount---");
    });
    onMounted(() => {
      console.log("---onMounted---");
    });
    onBeforeUpdate(() => {
      console.log("---onBeforeUpdate---");
    });
    onUpdated(() => {
      console.log("---onUpdated---");
    });
    onBeforeUnmount(() => {
      console.log("---onBeforeUnmount---");
    });
    onUnmounted(() => {
      console.log("---onUnmounted---");
    });

    //返回一个对象
    return {
      sum,
      isShowSum,
    };
  },
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
<style lang="less" scoped></style>
