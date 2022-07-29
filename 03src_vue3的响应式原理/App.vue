<template>
  <h1>个人信息</h1>
  <h3>姓名：{{ person.name }}</h3>
  <h3 v-show="person.age">年龄：{{ person.age }}</h3>
  <h3 v-show="person.sex">性别：{{ person.sex }}</h3>
  <hr />
  <h3>工作职位：{{ person.obj.type }}</h3>
  <h3>工作薪水：{{ person.obj.salary }}</h3>
  <h3>工作薪水：{{ person.obj.a.b.c }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <hr />
  <button @click="changeInfo">修改信息</button>
  <br />
  <button @click="addSex">添加性别</button>
  <button @click="deleteAge">删除年龄</button>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "App",
  setup() {
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
    function deleteAge() {
      delete person.age;
    }
    function addSex() {
      person.sex = "女";
    }

    // 返回对象;
    return {
      changeInfo,
      person,
      deleteAge,
      addSex,
    };
  },
};
</script>

<style lang="less" scoped>
</style>
