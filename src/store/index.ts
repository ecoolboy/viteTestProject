import {createStore} from 'vuex'

export const store= createStore({
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
    }
})
