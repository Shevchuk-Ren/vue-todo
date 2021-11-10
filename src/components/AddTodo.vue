<template>
  <div>
    <form @submit.prevent="addTodo">
      <input v-model.trim="title" type="text"  name="title" placeholder = "Enter todo">
      <button type="submit">Add</button>
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
</style>