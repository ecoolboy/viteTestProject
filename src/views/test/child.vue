<template>
    <div>
        <h1>我是child页面</h1>
        <h2 :style="{backgroundColor:info.color}">{{info.value}}</h2>
        <slot name="chacao"></slot>
    </div>
</template>

<script lang="ts">
    import {defineComponent, PropType,reactive,toRefs} from 'vue'

    type TitleInfo={
        value:string,
        color:string
    }

    export default defineComponent({
        name: "child",
        props:{
            titleInfo:{
                type: Object as PropType<TitleInfo>,
                required:true
            }
        },
        setup(props){
            let state=reactive({
                info:props.titleInfo
            })

            setTimeout(()=>{
                state.info.value='我变了'
                state.info.color='pink'
            },2000)
            return {
                ...toRefs(state)
            }
        }
    })
</script>

<style scoped>

</style>
