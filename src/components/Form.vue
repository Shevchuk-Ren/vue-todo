<template>
  <div class="wrapper-form">
     <form class="form" autoComplete="off"  @submit.prevent="submitForm">
        <label >
          Name
          <input
            v-model.trim="login"
            type="text"
           
             name="text"
         class="form-input"
          />
        </label>

        <label>
          Password
          <input
            v-model.trim="password"
            type="password"
        
            name="password"
             class="form-input"
          />
        </label>

        <button class="form-btn" type="submit">LOGIN</button>
     <a class="form-repeat" href="">Forgot Password</a>
    
      </form>
       <div class="form-register">
       <a class="form-text" href="">Register now</a>
     </div>
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
.wrapper-form {
  max-width: 481px;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
}
.form {
 color: #333333;
background-color: coral;
  padding: 0 30px;
  background: #FFFFFF;

}
.form-input {
   font-family: inherit;
  /* font-size: 14px;
  line-height: 1.714;
  letter-spacing: 0.03em;
  color: $primary-text-color; */
  width: 100%;
  height: 53px;
  /* padding: 12px 42px; */
  margin-top: 4px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  /* transition: border $timing-fm; */
}

.form-btn {
  width: 100%;
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 29px;
display: block;
align-items: center;
text-align: center;
color: #FFFFFF;
background: #0076C0;
margin-top: 40px;
margin-bottom: 20px;
}
.form-btn:hover {
 
   color: #0076C0;
    border: 2px solid #0076C0;
  background-color: #FFFFFF;

}
.form-register {


color: #333333;
  max-width: 100%;
  padding: 17px 0;
  background: #F6F6F6;
}
.form-text {
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 29px;
display: block;
align-items: center;
text-align: center;

color: #333333;


}
.form-repeat {
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 23px;
display: block;
align-items: center;
text-align: center;
margin-bottom: 23px;
color: #056DAE;
}
</style>