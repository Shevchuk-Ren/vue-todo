<template>
  <div>
    <form class="addtodo-form" @submit.prevent="addTodo" >
      <input class="addtodo-input" v-model.trim="title" type="text"  name="title" placeholder = "Enter todo">
      <button class="addtodo-button" type="submit">Add</button>
    </form>
  </div>
</template>
<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'AddTodo',
  emits: ['add-todo'],
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTodo() {
  
  
      const newTodoObj = {
        id: uuidv4(),
        title: this.title,
        completed: false,
        editable: false
      }
      this.$emit('add-todo', newTodoObj);
      this.title = '';
    }
  }
}
</script>
<style scoped>
.addtodo-form {
  display: flex;
  max-width: 600px;
 
  margin: 0 auto; 
}
.addtodo-input {
 
  font-size: 18px;
line-height: 21px;
outline:none;

color: #333333;
  width: 100%;
  height: 53px;
  padding: 16px 15px;


  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
}

.addtodo-button {


font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 29px;
padding: 10px;
margin-bottom: 20px;
margin-left: 15px;
color: #FFFFFF;
background: #0076C0;
border: 1px solid #0076C0;

}
.addtodo-button:hover {
 
   color: #0076C0;
    border: 1px solid #0076C0;
  background-color: #FFFFFF;

}
</style>