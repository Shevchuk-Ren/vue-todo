
<template>
  <div id="app">
      <img class="logo" alt="Vue logo" src="./assets/logo.png">
    <div class="container">
      
          <AddTodo v-on:add-todo="addTodo"/>
       <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo"/>

    </div>

    
  </div>
</template>

<script>
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

export default {
  name: 'app',
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Go workout',
          completed: false
        },
        {
          id: 2,
          title: 'Do laundry',
          completed: false
        },
        {
          id: 3,
          title: 'Cook food',
          completed: false
        },
        {
          id: 4,
          title: 'Clean up room',
          completed: false
        },
        {
          id: 5,
          title: 'Finish work',
          completed: false
        }
      ],
    }
  },
  methods: {
    addTodo(newTodoObj) {
    
      const checkTodo = this.todos.filter(todo => todo.title === newTodoObj.title)
   
       if(checkTodo.length !== 0){
         alert('This todo has been declareted');
       return;
       }
       

      this.todos = [...this.todos, newTodoObj];
    },
     deleteTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    },
       editTodo(todoId) {
         console.log(todoId, `feoioihuih`)
     
    }
  }
}
</script>
<style>
body {
   margin: 0;
   padding: 0;
   background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);
}
.container {

  margin: 0 auto;
  position: relative;
width: 1191px;
/* height: 660px; */

/* top: 250px; */
margin: 0 auto;
background-color: white;

border: 1px solid black;
 
}

</style>