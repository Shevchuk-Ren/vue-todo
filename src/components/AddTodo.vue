<template>
  <div>
    <form class="addtodo-form" @submit.prevent="addTodo">
      <input
        v-model.trim="title"
        class="addtodo-input"
        type="text"
        name="title"
        placeholder="Enter todo"
      />
      <button class="addtodo-button" type="submit">Add</button>
    </form>
  </div>
</template>
<script>
import { v4 as uuidv4 } from 'uuid';
import { mapActions } from 'vuex'

export default {
  name: 'AddTodo',
  emits: ['add-todo'],
  data() {
    return {
      title: '',
    };
  },
  methods: {
           ...mapActions(['createTodo']),
    addTodo() {
   if(this.title === '') {
     return;
   };
   
  this.createTodo({
        id: uuidv4(),
        title: this.title,
        completed: false,
        editable: false,
      });
      
      this.title = '';
    },
  },
};
</script>
<style scoped>
.addtodo-form {
  display: flex;
  max-width: 600px;

  margin: 0 auto;
}
.addtodo-input {
  font-size: 18px;
  line-height: 21px;
  outline: none;

  color: #333333;
  width: 100%;
  height: 53px;
  padding: 16px 15px;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
}

.addtodo-button {
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 29px;
  padding: 10px;
  margin-bottom: 20px;
  margin-left: 15px;
  color: #ffffff;
  background: #0076c0;
  border: 1px solid #0076c0;
}
.addtodo-button:hover {
  color: #0076c0;
  border: 1px solid #0076c0;
  background-color: #ffffff;
}
</style>
