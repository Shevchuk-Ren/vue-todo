<template>
<header class="todo-header">
<img class="todo-logo" alt="Vue logo" src="../assets/logo.png" width="186" height="119">
</header>

<main class="todos-main">
    <div class="container container-todo">

<div class="wrapper-todo">
          <AddTodo @add-todo="addTodo"/>
       <Todos :todos="todos" @delete-todo="deleteTodo" @new-obj="editTodo($event)"/>
</div>

    </div>
</main>
<footer class="footer"></footer>

</template>

<script>
import AddTodo from '../components/AddTodo';

import Todos from '../components/Todos.vue';




export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,

   

  },
   
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Go workout',
          completed: false,
          editable: false
        },
        {
          id: 2,
          title: 'Do laundry',
          completed: false,
          editable: false
        },
        {
          id: 3,
          title: 'Cook food',
          completed: false,
          editable: false,
        },
        {
          id: 4,
          title: 'Clean up room',
          completed: false,
          editable: false
        },
        {
          id: 5,
          title: 'Finish work',
          completed: false,
          editable: false
        }
      ],
      contacts: [
       { 
        login: 'Admin',
        password: '12345',
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
       editTodo(newTodoObj) {
      
          this.todos.filter((todo) => {
           if(todo.id === newTodoObj.id) {
             todo.title = newTodoObj.title;
             return todo;
             
           }
         });
          this.todos = [...this.todos];
     
    },
    checkLogin(newTodoObj) {
          const checkContact = this.contacts.filter(contact => contact.login === newTodoObj.login && contact.password === newTodoObj.password)
   
       if(checkContact.length !== 0){
   alert(`Hello, ${newTodoObj.login}`);
       return;
       }
     alert(`Try again`);
  
    }
  }
}
</script>
<style>
#app {
  height: 100vh;
}
/* body {
   margin: 0;
   padding: 0;
   background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);
} */
.todo-header {
    position: relative;
  padding: 65px 0 66px 0;
  background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);
  height: 797px;
  /* min-height: 70%; */
 
}
.todos-main {

}
.todo-logo {
  margin: 0 auto; 
}
.container-todo {
  position: absolute;
  top: 300px;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 0) 
  /* background: linear-gradient(180deg, #00AFED 0%, #00569A 100%); */
}
 .wrapper-todo {


padding: 30px;
 margin: 0 auto; 
 background-color: white;
  border: 1px solid black; 
 
}
/* .logo {
  display: block;
  margin: 20px auto;
 width: 186px;
height: 119px;
} */
/* .general {
  /height: 80%; 
   height: 797px; 
  position: absolute;
} */
.footer {
    background: #E5E5E5;
    /* height: 100%; */
    min-height: 283px;
    /* min-height: 30%;  */
} 
</style>
