<template>
    <div id="container" style="width: 1000px;height: 500px"></div>
</template>

<script>
    import {defineComponent,onMounted} from 'vue'
    import {getLocation} from "getLocation/gaode-getLocation"

    export default defineComponent({
        name: "gaode-map",
        setup(){
            onMounted(()=>{
                getLocation()
                    .then(res=>{
                        console.log(res)
                    }).catch(err=>{
                        console.log(err)
                })
            })
        }
    })
</script>

<style scoped>
    #container{

    }
</style>
