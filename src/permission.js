import router from './router/index'
//白名单
const whiteList = ['/eChart']
router.beforeEach((to, from, next) => {
    if(whiteList.includes(to.path)){
        next()
    }else{
        console.log('需要验证')
        next()
    }

})
router.afterEach((to, from) => {
    document.title=to.meta.title
})