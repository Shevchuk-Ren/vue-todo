<template>
  <div>
     <form  autoComplete="off">
        <label >
          Email
          <input
            type="email"
            name="email"
             value=""
         
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value=""
            
          />
        </label>

        <button type="submit">Sign In</button>
      </form>
  </div>
</template>
<script>


export default {
  name: 'Form',
//   emits: ['add-todo'],
  data() {
    return {
      title: ''
    }
  },
//   methods: {
//     addTodo() {
  
  
//       const newTodoObj = {
//         id: uuidv4(),
//         title: this.title,
//         completed: false,
//         editable: false
//       }
//       this.$emit('add-todo', newTodoObj);
//       this.title = '';
//     }
//   }
}
</script>
<style scoped>
</style>