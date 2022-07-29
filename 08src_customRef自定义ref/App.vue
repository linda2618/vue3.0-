<template>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { customRef, ref } from 'vue'

export default {
  name: "App",
  setup() {
    //自定义一个ref ，名为 myRef
    function myRef(value, delay) {
      /*let x = customRef()
      return x  */
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人从myRef这个容器中读取数据了,我把${value}给他了！`);
            track()  //通知Vue 追踪value的变化(提前和get 商量一下。让他认为这个value是有用的)
            return value
          },
          set(newValue) {
            console.log(`有人把myRef这个容器中的数据改为了: ${newValue}`);
            //(防抖):每次进来时，将定时器清空
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger() //通知 Vue 去重新解析模板
            }, delay)
          }
        }
      })
    }

    // let keyWord = ref('hello')  //使用Vue 提供的 ref
    let keyWord = myRef('hello', 500)  //自定义 myRef

    return {
      keyWord,
      myRef
    }
  }
};
</script>
<style lang="less" scoped>
</style>
