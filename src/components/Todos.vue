<template>
  <div>
    <h2>My todolist</h2>
     <ul>
      <li v-bind:key="todo.id" v-for="todo in todos">
        <Todo v-bind:todo="todo" v-on:delete-todo="$emit('delete-todo', todo.id)"/>
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
   props: [
    "todos"
  ]
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