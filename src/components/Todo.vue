<template>
   <div v-bind:class="{ 'completed': todo.completed }">
    <p v-on:click="markComplete(todo)">{{ todo.title }}</p>
    <button @click="$emit('delete-todo', todo.id)">Delete</button>
  </div>
</template>
<script>
export default {
  name: 'Todo',
     props: [
    "todo"
  ],
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