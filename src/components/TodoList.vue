<template>
  <div class="todo">
    <h1>{{ msg }}</h1>

 <form >
        <textarea  class="textarea"
      
          value=""
        
        
        ></textarea>
        <button type="submit" >
          Сохранить
        </button>
      </form>
</div>

</template>

<script>


export default {
  name: 'TodoList',
  props: {
    msg: String,
    todo: String,
    
  },
   data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Go workout',
          completed: false
        },
        {
          id: 2,
          title: 'Do laundry',
          completed: false
        },
        {
          id: 3,
          title: 'Cook food',
          completed: false
        },
        {
          id: 4,
          title: 'Clean up room',
          completed: false
        },
        {
          i: 5,
          title: 'Finish work',
          completed: false
        }
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.todo {
    
position: relative;
width: 1191px;
height: 660px;

/* top: 250px; */
margin: 0 auto;
background-color: white;

border: 1px solid black;
}
.textarea {
   width: 100%;
   padding: 10px 18px;
   font-size: 18px;
   margin-bottom: 16px; 
}
</style>