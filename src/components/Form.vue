<template>
  <div>
     <form autoComplete="off"  @submit.prevent="submitForm">
        <label >
          Login
          <input
            v-model.trim="login"
            type="text"
           
             name="text"
         
          />
        </label>

        <label>
          Password
          <input
            v-model.trim="password"
            type="password"
        
            name="password"
            
          />
        </label>

        <button type="submit">Sign In</button>
      </form>
  </div>
</template>
<script>


export default {
  name: 'Form',
  emits: ['check-login'],
  data() {
    return {
      password: '',
      login: ''
    }
  },
  methods: {
    submitForm() {
  
  
      const newTodoObj = {
        password: this.password,
        login: this.login,
        completed: false
       
      }
      this.$emit('check-login', newTodoObj);
      this.login = '';
       this.password = '';

 
    }
  }
}
</script>
<style scoped>
</style>