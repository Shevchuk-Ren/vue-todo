<template>
   <!-- <div :class="{ 'completed': todo.completed }">
    <p @click="markComplete(todo)">{{ todo.title }}</p>
    <button @click="$emit('delete-todo', todo.id)">Delete</button>
  </div> -->

   <div :class="{ 'completed': todo.completed }">
              <input type="checkbox" @click="markComplete(todo)" >
              <label v-show="!todo.editable" 
              :class="todo.completed ? 'taskitem' : 'text'">{{todo.title}}</label>
              <!-- <input v-show="todo.editable" v-model="todo.title"  type="text" class="editor" 
               
              /> -->
                <input v-show="todo.editable"  :value="todo.title" @change="showTodoTitle($event)"   type="text" class="editor" 
               
              />
          
             
              <button  type="edit" @click="editTodo(todo)">{{todo.editable? 'Edited': 'Edit'}}</button>
             <button @click="$emit('delete-todo', todo.id)">Delete</button>
            </div>

</template>
<script>
export default {
  name: 'Todo',

  props: {
      todo: {
      type: Object,
        default: () => {},
          
  
    },
    todotitle:  {
type: String,
   default: 'Заголовок по умолчанию'
    }

  },
   emits: ['delete-todo'],
data() {
    return {
      title: ''
    }
  },

    methods: {
    markComplete(todo) {
      console.log(this.todo, `this`)
      todo.completed = !todo.completed

    },
    editTodo(todo) {
      console.log(this.title, `djh` )
      if(todo.editable) {
        todo.editable = false
        
        return;
      }

      todo.editable = true

    },
         editTodoed(todo) {
         console.log(this.title, `done edit`)
         
      todo.editable = false
    },
      showTodoTitle(event) {

        const newTodoObj = {
        id: this.todo.id,
        title: event.target.value,
        completed: false,
        editable: true
      };
      console.log(newTodoObj, `obj`)
  
      this.$emit('edit', newTodoObj);
    },
  },
}
</script>
<style scoped>
    .completed {
    text-decoration: line-through;
  }
  
.text {
  font-size: 16px;
}
.taskitem {
  color: #8f8f8f;
  font-size: 16px;
  text-decoration: line-through;
}
</style>