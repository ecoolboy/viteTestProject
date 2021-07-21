<template>
  <el-result title="404" subTitle="抱歉，请求错误">
    <template #icon>
      <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-image>
    </template>
    <template #extra>
      <el-button type="primary" size="medium" @click="toHome">返回</el-button>
    </template>
  </el-result>
</template>

<script>
import {defineComponent} from 'vue'
import {useRouter,useRoute} from 'vue-router'
export default defineComponent({
  name: "NotFound",
  setup(){
    let router=useRouter()
    return {
      toHome(){
        router.replace({name:'home'})
      }
    }
  }

})
</script>

<style scoped>

</style>