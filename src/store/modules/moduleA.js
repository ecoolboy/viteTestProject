const moduleA = {
    namespaced:true,
    state:()=>{
      return{
          module:'A'
      }
    },
    mutations: {
        testA(state){
            console.log('testA')
        }
    },
    actions: {
        testModuleA({state,rootState}){
            return new Promise((resolve, reject) => {
                resolve(rootState.isCollapse)
            })
        }
    },
    getters: {}
}
export default moduleA