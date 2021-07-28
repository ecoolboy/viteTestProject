import {createApp,h,onMounted} from 'vue'
import App from './App.vue';
//elementPlus相关
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/packages/theme-chalk/src/base.scss'
import locale from 'element-plus/lib/locale/lang/zh-cn'

//引入ant-design
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import router from './router/index'
import {store} from './store'

//echarts相关
import * as echarts from 'echarts'
import 'echarts-gl'
import {secondWalk} from "echarts/types/src/chart/tree/layoutHelper";

import '@/permission'

//引入viser
// import Viser from 'viser-vue'

// @ts-ignore
// @ts-ignore
const app = createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus, {locale})
    .use(Antd)
    // .use(Viser)
// @ts-ignore
app.echarts = echarts
//定义一个全局指令
// @ts-ignore
// app.directive('highlight',{
//     mounted(el, binding){
//         console.log(binding)
//         el.style.backgroundColor=binding.value
//     }
// })
app.component('blog-post', {
    render(){
        return h('div',{onClick(){
            console.log('renderTest 1')
            }},'i am renderTest')
    }
})
app.mount('#app')

