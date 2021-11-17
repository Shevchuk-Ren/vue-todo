<template>

  <div>
    <h2>Thank you, {{ msg }}!</h2>

    <ul class="todos-list">
      <li v-for="todo in GET" :key="todo.id" class="todos-item">
        <Todo :todo="todo" />
      </li>
    </ul>

  </div>

</template>
<script>

import { mapGetters } from 'vuex';
import Todo from './Todo.vue';

export default {
  name: 'Todos',
  components: {
    Todo,
  },
  props: {
    msg: {
      type: String,
      default: 'name',
    },
  },

  computed: {
    ...mapGetters(['GET']),
  },
};
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
  outline: none;

  color: #333333;
  width: 100%;
  min-height: 53px;
  padding: 10px 15px;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
}
</style>
