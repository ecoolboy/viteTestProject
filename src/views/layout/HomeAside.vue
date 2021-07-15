<template>
    <div class="aside">
        <el-menu
                collapse-transition
                class="el-menu-vertical-demo"
                :collapse="$store.state.isCollapse"
                background-color="rosybrown"
                active-text-color="white"
                text-color="black"
                router>
            <el-submenu v-for="(route,index) in routesHaveChildren" :key="index" :index="'/'+route.path">
                <template #title>
                    <i :class="route.meta.icon"></i>
                    <span>{{route.name}}</span>
                </template>
                <el-menu-item-group v-for="child in route.children">
                    <el-menu-item :index="'/'+route.path+'/'+child.path"><i :class="child.meta.icon"></i>{{child.name}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item  v-for="(route,index) in routesNoChildren" :key="index" :index="'/'+route.path">
                <i :class="route.meta.icon"></i>
                <template #title>
                    <span>{{route.name}}</span>
                </template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import {defineComponent,onMounted} from 'vue'
    import {useRouter} from 'vue-router'
    export default defineComponent({
        name: "HomeAside",
        setup() {
            let router=useRouter()
            let routesHaveChildren=router.options.routes[0].children.filter(route=>route.children)
            let routesNoChildren=router.options.routes[0].children.filter(route=>!route.children)
            return {
                routesHaveChildren,routesNoChildren
            }
        }
    })
</script>

<style scoped>
    .aside{
        display: flex;
        background-color: rosybrown;
    }
    i {
        color: #2c3e50;
    }
    .el-menu{
        padding: 20px 10px;
    }
    .menu{
        display: flex;
    }
</style>
