<template  >
<div class="container">
  <img class="logo" alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="general">
 
  </div>
    <TodoList msg="Thank you {name}!"/>   
 <div class="footer"></div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    TodoList,
    
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  
}
body {
      margin: 0;
            padding: 0;
   background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);
}
.container {

  margin: 0 auto;
 
}
/* #app {


  
  
} */
.logo {
  display: block;
  margin: 20px auto;
 width: 186px;
height: 119px;
}
.general {
  /* height: 80%; */
  /* height: 797px; */
  position: absolute;
}
.footer {
    background: #E5E5E5;
    height: 283px;
    /* height: 20%; */
}
</style>