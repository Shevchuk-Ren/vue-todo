<template>
  <div class="wrapper-form">
     <form class="form" autoComplete="off"  @submit.prevent="submitForm">
       <!-- <div class="form-field"> -->
         <label for="name" class="form-label">Name</label>
<input   id="name"  v-model.trim="login"
            type="text"
             name="text"
         class="form-input"  placeholder="Company name"/>
        <!-- <label class="form-label">
          Name
          <input
            v-model.trim="login"
            type="text"
           
             name="text"
         class="form-input"
          />

        </label> -->
       <!-- </div> -->
<!-- <div class="form-field"> -->
           <label for="password" class="form-label">Password</label>
<input   id="password"  v-model.trim="password"
            type="password"
            name="password"
             class="form-input"  placeholder="Password"/>
        <!-- <label class="form-label">
          Password -->
          <!-- <input
            v-model.trim="password"
            type="password"
        
            name="password"
             class="form-input"
          />
        </label> -->
<!-- </div> -->
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
  position: absolute;
  bottom: 35%;
  right: 0;
  max-width: 481px;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
}
.form {
 color: #333333;
background-color: coral;
  padding: 40px 30px 23px 30px;
  background: #FFFFFF;

}
.form-field {
  width: 100%;
margin-bottom: 40px;
}
.form-label {

  font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #333333;

}
.form-input {
font-size: 18px;
line-height: 21px;
outline:none;

color: #333333;
  width: 100%;
  height: 53px;
  padding: 16px 15px;
  margin-bottom: 40px;
  margin-top: 4px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  /* transition: border $timing-fm; */
}
 .form-input:hover {
border: 1px solid #0076C0;
}

.form-input:focus {
    border: 1px solid #101010;
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
/* margin-top: 40px; */
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

color: #056DAE;
}
</style>