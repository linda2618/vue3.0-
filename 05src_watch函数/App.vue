<template>
  <h1>个人信息</h1>
  <span>现在的数值为：{{ sun }}</span>
  <br />
  打招呼：<span>{{ msg }}</span>
  <br />
  <button @click="sun += 5">改变现在的数值</button>
  <button @click="msg += '!'">打招呼！</button>
  <hr />

  <ul>
    <li>姓名：{{ person.name }}</li>
    <li>年龄：{{ person.age }}</li>
    <li>薪水：{{ person.job.j1.salary }}</li>
  </ul>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age += 1">修改年龄</button>
  <button @click="person.job.j1.salary += 5">涨薪水</button>
</template>

<script>
import { reactive, ref, watch } from "vue";

export default {
  name: "App",
  setup() {
    //数据
    let sun = ref(0);
    let msg = ref("你好啊！");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    //情况一：监听ref 所定义的一个响应式的数据
    // watch(
    //   sun,
    //   (newValue, oldValue) => {
    //     console.log("sun变了", newValue, oldValue);
    //   },
    //   { immediate: true }
    // );

    // 情况二： 监听 ref 定义的多个响应式数据
    // watch(
    //   [sun, msg],
    //   (newValue, oldValue) => {
    //     console.log("sun或msg变了", newValue, oldValue);
    //   },
    //   { immediate: true }
    // );

    /*情况三： 监听reactive 所定义的一个响应式数据的全部属性
            1.注意：此处无法正确的获取 oldValue
            2.注意：强制开启了 深度监视(deep配置无效)
    */
    watch(
      person,
      (newValue, oldValue) => {
        console.log("person变化了", newValue, oldValue);
      },
      { deep: false } //此处的deep 配置无效
    );

    //情况四: 监听reactive 所定义的一个响应式数据的某个属性
    // watch(
    //   () => person.name,
    //   (newValue, oldValue) => {
    //     console.log("person的name变化了", newValue, oldValue);
    //   }
    // );

    //情况五: 监听reactive 所定义的一个响应式数据的某些属性
    // watch([() => person.name, () => person.age], (newValue, oldValue) => {
    //   console.log("person的name或age变化了", newValue, oldValue);
    // });

    //特殊情况
    // watch(
    //   person.job,
    //   (newValue, oldValue) => {
    //     console.log("person的job变化了", newValue, oldValue);
    //   },
    //   { deep: true } //此处由于坚实的是reactive 所定义的对象中的摸个属性，所以deep配置有效
    // );

    //返回一个对象
    return {
      sun,
      msg,
      person,
    };
  },
};
</script>
<style lang="less" scoped>
ul li {
  list-style: none;
  font-size: 25px;
}
</style>
