<template>
  <div class="todo-wrapper" :class="{ completed: todo.completed }">
    <label class="todo-input">
      <input class="todo-check" type="checkbox" @click="markComplete(todo)" />
    </label>

    <label
      v-show="!todo.editable"
      :class="todo.completed ? 'taskitem' : 'text'"
    for="edit"
    >
      {{ todo.title }}
    </label>
    <input
      v-show="todo.editable"
      id="edit"
      :value="todo.title"
      type="text"
      class="editor"
      @change="showTodoTitle($event)"
    />

    <div class="todo-btnset">
      <button type="edit" class="todo-edit" @click="toggleTodo(todo)">
        {{ todo.editable ? 'Edited' : 'Edit' }}
      </button>
      <button class="todo-delete" @click="removeTodo(todo.id)">Delete</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'Todo',

  props: {
    todo: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    ...mapActions(['removeTodo']),
    ...mapMutations(['EDIT_TODO','toggleEditable']),

    markComplete(todo) {
      todo.completed = !todo.completed;
    },

    toggleTodo(todo) {
this.toggleEditable(todo)
    },

    showTodoTitle(event) {
      const newTodoObj = {
        id: this.todo.id,
        title: event.target.value,
      };

      this.EDIT_TODO(newTodoObj);
    },
  },
};
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
.todo-delete,
.todo-edit {

/* font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 29px; */
 padding: 4px; 

  color: #ffffff;
  background: #0076c0;
  border: 1px solid #0076c0;
  width: 65px;
 
}
.todo-edit {

  margin-right: 5px;
  outline: none;
  border: 1px solid #0076c0;
  border-radius: 4px;
  text-align: justify;
}

.todo-wrapper {
  display: flex;
  justify-content: space-between;
align-items: center;
}

.editor {
  width: 100%;
}
.todo-btnset {
  margin-left: 5px;
  min-width: 135px;
}

.todo-input {
  margin-right: 5px;
}
</style>
