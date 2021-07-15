import {createRouter,createWebHashHistory} from "vue-router";
let router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            name:'home',
            path:'/',
            component:()=>import('../views/layout/index.vue'),
            children:[
                {
                    name:'test',
                    path:'test',
                    component:()=>import('../views/test/index.vue'),
                    meta:{
                        title:'test界面',
                        icon:'el-icon-tickets'
                    }
                },
                {
                    name:'eChart',
                    path:'eChart',
                    component:()=>import('../views/echarts/eChart.vue'),
                    meta:{
                        title:'eChart界面',
                        icon:'el-icon-s-data'
                    }
                },
                {
                    name:'map',
                    path:'map',
                    component:()=>import('../views/map/map.vue'),
                    meta:{
                        title:'map地图',
                        icon:'el-icon-map-location'
                    },
                    children:[
                        {
                            name:'baidu-map',
                            path:'baidu-map',
                            component:()=>import('../views/map/baidu-map.vue'),
                            meta:{
                                title:'百度地图',
                                icon:'el-icon-place'
                            },
                        },
                        {
                            name:'gaode-map',
                            path:'gaode-map',
                            component:()=>import('../views/map/gaode-map.vue'),
                            meta:{
                                title:'高德地图',
                                icon:'el-icon-location'
                            },
                        },
                        {
                            name:'google-map',
                            path:'google-map',
                            component:()=>import('../views/map/google-map.vue'),
                            meta:{
                                title:'chrome地图',
                                icon:'el-icon-location-outline'
                            },
                        },
                        {
                            name:'tengxun-map',
                            path:'tengxun-map',
                            component:()=>import('../views/map/tengxun-map.vue'),
                            meta:{
                                title:'腾讯地图',
                                icon:'el-icon-location-information'
                            },
                        }
                    ]
                }
            ]
        }
    ]
})
export default router