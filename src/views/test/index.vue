<template>
  <div class="container">
    <a href="https://www.baidu.com">Baidu</a>
    <h1 v-highlight="'pink'">$route.param:{{ $route.params.id }}</h1>
    <h1>$route.query.username:{{$route.query.username}}</h1>
    <button @click="testModule">module</button><br>
    <span>module:  {{$store.state.moduleB.module}}</span>
    <ul>
      <li v-for="item in Object.values(test)">{{item}}</li>
    </ul>
    <div style="width:200px;height: 200px;background-color: #42b983" ref="testDiv">你好菜</div>
    <h3>{{ count }}</h3>
    <button @click="add">add</button>
    <child :titleInfo="{value:'test',color:'blue'}">
      <template v-slot:chacao>
        <h1>我是插槽child1</h1>
      </template>
    </child>
    <renderTest>
      <template v-slot:chacao2>
        <h1>我是插槽child2</h1>
      </template>
    </renderTest>
    <div id="testExtend"></div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import {defineComponent, h, ref,createApp} from 'vue'
import {mapActions} from 'vuex'
import child from "./child.vue";
//混入，extends在mixin之前
const myMixin = {
  created: function () {
    // console.log('myMixin的created钩子')
  },
  mounted(){
    // console.log('myMixin的mounted钩子')
  }
}

//extends扩展
const comp1 = {
  data() {
    return {
      msg: 'hello world'
    }
  },
  created() {
    // console.log('comp的created钩子')
  },
  mounted() {
    // console.log('comp的mounted钩子')
  }
}
export default defineComponent({
  name: "index",
  mixins: [myMixin],
  extends:comp1,
  components: {
    child,
    renderTest: {
      props: {
        level: {
          type: Number,
          default: 2
        }
      },
      render() {
        let level = this.level
        return h(`div`, {}, ['我是一个render渲染', this.$slots.chacao2()])
      }
    }
  },
  //自定义一个局部指令
  directives: {
    highlight: {
      mounted(el, binding) {
        el.style.backgroundColor = binding.value
      }
    }
  },
  data() {
    return {
      count: 1,
      test:{},
    }
  },
  mounted() {
    this.getTest1()
    this.actionA().then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
    this.B()
  },
  methods: {
    ...mapActions([
        'actionA',//this.action
    ]),
    ...mapActions({
      B:'actionB'//this.B
    }),
     testModule(){
      this.$store.dispatch('moduleA/testModuleA').then((res)=>{
        console.log(res)
      })

    },
    add() {
      this.count++
    },
    async getTest1(){
      let url1='http://localhost:3000/src/assets/json/test1.json'
      let {data}=await axios.get(url1)
      this.test=data
    },
    async getTest2(){
      let url2='http://localhost:3000/src/assets/json/test2.json'
      let {data}=await axios.get(url2)
      this.test=data
    }
  },
  watch:{
    $route(to,from){
      if(to.fullPath!==from.fullPath){
        this.getTest2()
      }
    }
  }
})
</script>

<style scoped>
.container{
  overflow-y: scroll;
}
ul{
  list-style: none;
}
  .container{
    padding: 20px;
  }
</style>
