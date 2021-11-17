<template>
  <header class="todo-header">
    <img
      class="todo-logo"
      alt="Vue logo"
      src="../assets/logo.png"
      width="186"
      height="119"
    />
  </header>

  <main class="todos-main">
    <div class="container container-todo">
      <div class="wrapper-todo">
        <AddTodo />
        <Todos :msg="getUser" />
      </div>
    </div>
  </main>
  <footer class="footer"></footer>
</template>

<script>
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
  },

  computed: {
    ...mapGetters(['getUser']),
  },
};
</script>
<style>
#app {
  height: 100vh;
  /* background: #E5E5E5; */
}
/* body {
 background: #E5E5E5; 
} */
.todo-header {
  position: relative;
  padding: 65px 0 66px 0;
  background: linear-gradient(180deg, #00afed 0%, #00569a 100%);
  height: 797px;
  /* min-height: 70%; */
}
.todos-main {
}
.todo-logo {
  margin: 0 auto;
}
.container-todo {
  position: absolute;
  top: 300px;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 0);

  /* background: linear-gradient(180deg, #00AFED 0%, #00569A 100%); */
}
.wrapper-todo {
  min-height: 660px;
  padding: 30px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
  /* border: 1px solid black;  */
}

.footer {
  background: #e5e5e5;
  /* height: 100%; */
  height: 40vh;
  min-height: 283px;
  /* min-height: 30%;  */
}
</style>
