import {createStore} from 'vuex'
// @ts-ignore
import moduleA from 'store/modules/moduleA'
// @ts-ignore
import moduleB from 'store/modules/moduleB'
export const store= createStore({
    modules:{
      moduleA,moduleB
    },
    state(){
        return {
            isCollapse:true
        }
    },
    mutations:{
        toggleShow(state){
            // @ts-ignore
            state.isCollapse=!state.isCollapse
        }
    },
    actions:{
        actionA({commit,dispatch,state}){
            console.log('actionA')
            return new Promise((resolve, reject) => {
                setTimeout(()=>{
                    resolve('success')
                },1000)
            })
        },
        actionB({commit,dispatch,state}){
            console.log('actionB')
            return dispatch('actionA').then(res=>{
                console.log(res)
            })
        }
    }
})
