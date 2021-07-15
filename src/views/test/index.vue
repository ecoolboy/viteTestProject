<template>
    <div>
        <h1 v-highlight="'pink'">我是test页面</h1>
        <div style="width:200px;height: 200px;background-color: #42b983" ref="testDiv">你好菜</div>
        <h3>{{count}}</h3>
        <button @click="add">add</button>
        <child :titleInfo="{value:'test',color:'blue'}" >
            <template v-slot:chacao>
                <h1>我是插槽child1</h1>
            </template>
        </child>
        <renderTest>
            <template v-slot:chacao2>
                <h1>我是插槽child2</h1>
            </template>
        </renderTest>
        <h2>
        </h2>
    </div>
</template >

<script lang="ts">
    import {defineComponent,h,ref} from 'vue'
    import child from "./child.vue";
    import {consoleLog} from "echarts/types/src/util/log";
    const myMixin={
        created:function () {
            console.log(1)
        }

    }
    export default defineComponent({
        name: "index",
        mixins:[myMixin],
        components:{
            child,
            renderTest:{
              props:{
                  level:{
                      type:Number,
                      default:2
                  }
              },
              render(){
                  let level=this.level
                  return h(`div`,{},['我是一个render渲染',this.$slots.chacao2()])
              }
            }
        },
        //自定义一个局部指令
        directives:{
            highlight:{
                mounted(el, binding){
                    el.style.backgroundColor=binding.value
                }
            }
        },
        data(){
            return {
                count:1
            }
        },
        methods:{
            add(){
                this.count++
            }
        }
    })
</script>

<style scoped>

</style>
