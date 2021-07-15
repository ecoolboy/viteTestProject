export default function myExample(){
    return {
        name:'myExample',
        resolveID(source){
            if(source==='virtual-module'){
                return source
            }
            return null
        },
        load(id){
            if(id==='virtual-module'){
                return 'export default "this is virtual"!'
            }
            return null
        }
    }
}
