<template>
  <div class="todo-wrapper" :class="{ completed: todo.completed }">
    <label>
      <input class="todo-check" type="checkbox" @click="markComplete(todo)" />
    </label>

    <label
      v-show="!todo.editable"
      :class="todo.completed ? 'taskitem' : 'text'"
    >
      {{ todo.title }} </label>
      <input
        v-show="todo.editable"
        :value="todo.title"
        type="text"
        class="editor"
        @change="showTodoTitle($event)"
      />
   
    <div class="todo-btnset">
      <button type="edit" class="todo-edit" @click="editTodo(todo)">
        {{ todo.editable ? 'Edited' : 'Edit' }}
      </button>
      <button class="todo-delete" @click="$emit('delete-todo', todo.id)">
        Delete
      </button>
    </div>
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
    todotitle: {
      type: String,
      default: 'Заголовок по умолчанию',
    },
  },
  emits: ['delete-todo', 'edit'],

  methods: {
    markComplete(todo) {
      console.log(this.todo, `this`);
      todo.completed = !todo.completed;
    },
    editTodo(todo) {
      if (todo.editable) {
        todo.editable = false;

        return;
      }

      todo.editable = true;
    },
    editTodoed(todo) {
      todo.editable = false;
    },
    showTodoTitle(event) {
      const newTodoObj = {
        id: this.todo.id,
        title: event.target.value,
        completed: false,
        editable: true,
      };

      this.$emit('edit', newTodoObj);
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
  /* 
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 29px;
padding: 10px; */

  color: #ffffff;
  background: #0076c0;
  border: 1px solid #0076c0;
  width: 65px;
}
.todo-edit {
  margin-right: 5px;
}

.todo-wrapper {
  display: flex;
  justify-content: space-between;
}
/* .todo-check {
  width: 60px;
} */
</style>
