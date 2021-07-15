<template>
   <div class="container">
       <h1 style="text-align: center">map地图</h1>
       <router-view/>
   </div>
</template>

<script>
    import {defineComponent,onMounted} from 'vue'
    export default defineComponent({
        name:'index',
        setup(){
            // onMounted(()=>{
            //     let map = new BMap.Map('container')
            //     let point = new BMap.Point(116.404, 39.915)
            //     map.centerAndZoom(point, 15)
            //     map.enableScrollWheelZoom(true)
            // })
        }
    })
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
