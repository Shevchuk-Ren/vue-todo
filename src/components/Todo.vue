<template>
   <div :class="{ 'completed': todo.completed }">
    <p @click="markComplete(todo)">{{ todo.title }}</p>
    <button @click="$emit('delete-todo', todo.id)">Delete</button>
  </div>
</template>
<script>
export default {
  name: 'Todo',
  //    props: [
  //   "todo"
  // ],
  props: {
      todo: {
      type: Object,
        
      default: () => {
        const obj = {id: 1231, title: "no todo"}
        return obj;
      }
  
    }
  },
    methods: {
    markComplete(todo) {
      console.log(this.todo, `this`)
      todo.completed = !todo.completed

    }

  },
}
</script>
<style scoped>
    .completed {
    text-decoration: line-through;
  }
</style>