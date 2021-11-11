<template>
  <div>
    <h2>Thank you {name}!</h2>
     <ul class="todos-list">
      <li  v-for="todo in todos" :key="todo.id" class="todos-item" >
        <Todo :todo="todo" @edit="toggleHeader($event)"  @delete-todo="$emit('delete-todo', todo.id)"/>
      </li>

    
    </ul>
  </div>
</template>
<script>
import Todo from './Todo.vue';

export default {
  name: 'Todos',
  components: {
    Todo
  },
   props: {
      todos: {
      type: Array,
        
  
        default: () => [],
  
    }
   },
   emits: ['delete-todo', 'new-obj'],
   methods: {
     toggleHeader(newTodoObj) {

this.$emit('new-obj', newTodoObj)
     }
   }
  
}

// export default {
//   name: 'Todos',
//   components: {
//     Todo
//   },
//     model: {
//     prop: 'todos',
  
//   },
//   //  props: [
//   //   "todos"
//   // ],
//     props: {
//     // это позволит использовать входной параметр `value` в других целях
//     value: Object,
//     // теперь используем входной параметр `title` вместо `value`
//     todos: {
//       type: Object,
  
//     }
//   }
// }

</script>
<style scoped>
.todos-list {
  display: flex;
  flex-wrap: wrap;

   
}
.todos-item {
  flex-basis: calc(100% / 2);

    font-size: 18px;
line-height: 21px;
outline:none;

color: #333333;
  width: 100%;
  min-height: 53px;
  padding: 10px 15px;


  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
}

</style>