<template>
  <h1>个人信息</h1>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <hr />
  <h3>工作职位：{{ obj.type }}</h3>
  <h3>工作薪水：{{ obj.salary }}</h3>
  <hr />
  <button @click="sayHello">打招呼</button>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    //数据
    let name = ref("lin");
    let age = ref(18);
    let obj = ref({
      type: "前端工程师",
      salary: "30K",
    });

    //方法
    function sayHello() {
      alert(`你好哇！我叫${this.name}! 我今年${this.age}岁了！`);
    }
    function changeInfo() {
      name.value = "wen";
      age.value = 19;

      obj.value.type = "java设计师";
      obj.value.salary = "40k";
      // console.log(name, age);
    }

    // 返回对象;
    return {
      name,
      age,
      obj,
      sayHello,
      changeInfo,
    };

    //返回渲染函数（了解）
    // return () => {
    //   return h("h1", "尚硅谷");
    // };
  },
};
</script>

<style lang="less" scoped></style>
