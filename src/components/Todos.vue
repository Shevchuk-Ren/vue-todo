<template>
  <div>
    <h2>Thank you {name}!</h2>
     <ul>
      <li v-for="todo in todos" :key="todo.id" >
        <Todo :todo="todo" @delete-todo="$emit('delete-todo', todo.id)"/>
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
        
      default: () => {
        const obj = {id: 1231, title: "no todo"}
        return obj;
      }
  
    }
   },
   emits: ['delete-todo']
  
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
</style>