<template>
  <h1>个人信息</h1>
  <h3>姓名：{{ person.name }}</h3>
  <h3>年龄：{{ person.age }}</h3>
  <hr />
  <h3>工作职位：{{ person.obj.type }}</h3>
  <h3>工作薪水：{{ person.obj.salary }}</h3>
  <h3>工作薪水：{{ person.obj.a.b.c }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <hr />
  <!-- <button @click="sayHello">打招呼</button> -->
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "App",
  setup() {
    //数据
    // let name = ref("lin");
    // let age = ref(18);
    // let obj = reactive({
    //   type: "前端工程师",
    //   salary: "30K",
    //   a: {
    //     b: {
    //       c: 666,
    //     },
    //   },
    // });
    // let hobby = reactive(["听歌", "画画", "看电视"]);

    let person = reactive({
      name: "lin",
      age: 18,
      obj: {
        type: "前端工程师",
        salary: "30K",
        a: {
          b: {
            c: 666,
          },
        },
      },

      hobby: ["听歌", "画画", "看电视"],
    });
    //方法
    function changeInfo() {
      person.name = "wen";
      person.age = 19;
      //不用再加 .value
      person.obj.type = "java设计师";
      person.obj.salary = "40k";
      person.obj.a.b.c = 999;
      person.hobby[1] = "逛街";
      // console.log(name, age);
    }

    // 返回对象;
    return {
      // name,
      // age,
      // obj,
      // sayHello,
      changeInfo,
      // hobby,

      person,
    };

    //返回渲染函数（了解）
    // return () => {
    //   return h("h1", "尚硅谷");
    // };
  },
};
</script>

<style lang="less" scoped>
</style>
