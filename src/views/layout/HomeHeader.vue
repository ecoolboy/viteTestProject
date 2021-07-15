<template>
    <div style="display:flex;width: 100%">
        <el-header>
            <div class="left">
                <span v-if="$store.state.isCollapse" @click="toggleNav">
                    <i style="font-size: 25px;color:white" class="el-icon-caret-right"></i>
                </span>
                <span v-else @click="toggleNav">
                    <i style="font-size: 30px;color:white" class="el-icon-caret-left"></i>
                </span>
                <el-breadcrumb separator="/" style="margin-left: 20px">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item v-for="(item,index) in list" :key="index">{{item}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div>
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <span>王小虎</span>
            </div>
        </el-header>
    </div>
</template>

<script>
    import {defineComponent,reactive,watch,onMounted,toRefs} from 'vue'
    import {useStore} from 'vuex'
    import {useRouter} from 'vue-router'
    export default defineComponent({
        name: 'HomeHeader',
        setup() {
            //处理侧边栏状态
            let store = useStore()
            function toggleNav() {
                store.commit('toggleShow')
            }
            //处理面包屑
            // let route=useRoute()
            let router=useRouter()
            let state=reactive({
                list:[]
            })
            onMounted(()=>{
                let cur=router.currentRoute.value.fullPath.split('/')
                cur.shift()
                state.list=cur
            })
            watch(()=>router.currentRoute.value,(newRouter)=>{
                let cur=newRouter.fullPath.split('/')
                cur.shift()
                state.list=cur
            })
            return {
                toggleNav,
                ...toRefs(state)
            }
        }
    })
</script>

<style scoped>
    .el-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background-color: rosybrown;
    }
    .left{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>
