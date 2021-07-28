<template>
    <div id="baidu-container" style="width: 1000px;height: 700px"></div>
</template>

<script>
    import {defineComponent,onMounted} from 'vue'
    import {getLocation} from "getLocation/baidu-getLocation";
    export default defineComponent({
        name:'baidu-map',
        setup(){
            onMounted(()=>{
               getLocation()
            })
        }
    })
</script>

<style scoped>
</style>
