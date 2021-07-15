<template>
    <div class="container">
        <input type="text" autofocus v-model="inputContent" @keydown.enter="addTodo(inputContent)" placeholder="请输入内容">
        <ul>
            <li v-for="(todo,index) in filterData" :key="index" :class="{isComplete:todo.complete}">
                <div v-if="todo.visible" @dblclick="editTodo(todo)" class="liStyle">
                    <input type="checkbox" v-model="todo.complete" />
                    <p style="width: 200px">{{todo.content}}</p>
                    <button @click="removeTodo(todo)">X</button>
                </div>
                <div v-else  class="liStyle">
                    <input type="text" v-autoFocus v-model="todo.content" @keydown.enter="update(todo)" @keydown.esc="cancel(todo)">
                </div>
            </li>
        </ul>
        <ul style="display: flex;flex-direction: row;list-style: none">
            <li @click="visible='all'" :class="{selected:visible==='all'}">all</li>
            <li @click="visible='completed'" :class="{selected:visible==='completed'}">completed</li>
            <li @click="visible='unCompleted'" :class="{selected:visible==='unCompleted'}">unCompleted</li>
        </ul>
    </div>
</template>

<script>
    import {defineComponent,reactive,toRefs,computed,watchEffect} from 'vue'
    const local={
        fetch(){
            let todos=JSON.parse(localStorage.getItem('todos')||'[]')
            todos.forEach((todo,index)=>{
                todo.id=index+1
            })
            return todos
        },
        save(todos){
            localStorage.setItem('todos',JSON.stringify(todos))
        }
    }
    const filters={
        all(todos){
            return todos
        },
        completed(todos){
            return todos.filter(todo=>todo.complete)
        },
        unCompleted(todos){
            return todos.filter(todo=>!todo.complete)
        }
    }
    export default defineComponent({
        name: "todo",
        directives:{
          autoFocus:{
              mounted(el){
                  el.focus()
              }
          }
        },
        setup(){
            let state=reactive({
                inputContent:'',
                todos:local.fetch(),
                todoCache:'',
                visible:'all',
                filterData:computed(()=>{
                    return filters[state.visible](state.todos)
                })

            })
            function addTodo(inputContent){
                state.todos.push({
                    id:state.todos.length+1,
                    content:inputContent,
                    complete:false,
                    visible:true
                })
                state.inputContent=''
            }
            function removeTodo(todo) {
                state.todos.splice(state.todos.indexOf(todo),1)
            }
            function editTodo(todo) {
                todo.visible=false
                state.todoCache=todo.content
            }
            function update(todo) {
                // todo.content=state.todoCache
                state.todoCache=''
                todo.visible=true
            }
            function cancel(todo) {
                todo.content=state.todoCache
                todo.visible=true
            }
            watchEffect(()=>{
                local.save(state.todos)
            })
            return {
                ...toRefs(state),addTodo,removeTodo,editTodo,update,cancel
            }
        }
    })
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .liStyle{
        display: flex;
        flex-direction: row;
        height: 70px;
        background-color: #42b983;
        border: 1px solid black;
        margin-top: 10px;
        justify-content: center;
        align-items: center;
    }
    .isComplete{
     text-decoration: line-through;
    }
    ul:nth-child(3)>li{
        padding: 20px;
        border: 1px solid palevioletred;
    }
    .selected{
        background-color: palevioletred;
    }
</style>
