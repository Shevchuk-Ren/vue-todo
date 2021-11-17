<template>
  <div class="wrapper-form">

    <form class="form" autoComplete="off" @submit.prevent="submitForm">

      <label for="name" class="form-label">Name</label>
      <input
        id="name"
        v-model.trim="login"
        type="text"
        name="text"
        class="form-input"
        :class="isName && 'border'"
        placeholder="Company name"
      />

      <label for="password" class="form-label">Password</label>
      <input
        id="password"
        v-model.trim="password"
        type="password"
        name="password"
        class="form-input"
        :class="isPassword && 'border'"
        placeholder="Password"
      />

      <button class="form-btn" type="submit">LOGIN</button>
      <a class="form-repeat" href="">Forgot Password</a>

    </form>
    <div class="form-register">
      <a class="form-text" href="">Register now</a>
    </div>
  </div>
</template>
<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Form',
  emits: ['check-login'],
  data() {
    return {
      password: '',
      login: '',
      width: '40px',
      isPassword: false,
      isName: false,
    };
  },
 computed: {
    ...mapGetters(['checkAuth']),
  },
  methods: {
     ...mapMutations(['checkUser']),

    submitForm() {

      this.checkUser({name: this.login, password: this.password});
      console.log(this.$store.getters.checkAuth, `active`)
      if(this.checkAuth) {
       alert(`Hello, ${this.login}`);
        this.$router.push('/todo');
     
      } else {
          alert(`Try again`);
      }
         
      this.login = '';
      this.password = '';
    },
  },
};
</script>
<style scoped>
.wrapper-form {
  position: absolute;
  bottom: 30%;
  right: 0;
  max-width: 481px;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
}
.form {
  color: #333333;

  padding: 40px 30px 23px 30px;
  background: #ffffff;
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
  outline: none;

  color: #333333;
  width: 100%;
  height: 53px;
  padding: 16px 15px;
  margin-bottom: 40px;
  margin-top: 4px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
 
}
.form-input:hover {
  border: 1px solid #0076c0;
}

.form-input:focus {
  border: 1px solid #101010;
}
.form-btn {
  width: 100%;

  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 29px;
  padding: 10px 0;
  margin-bottom: 20px;
  color: #ffffff;
  background: #0076c0;
  border: 1px solid #0076c0;
}
.form-btn:hover {
  color: #0076c0;
  border: 1px solid #0076c0;
  background-color: #ffffff;
}
.form-register {
  color: #333333;
  max-width: 100%;
  padding: 17px 0;
  background: #f6f6f6;
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

  color: #056dae;
}
.border {
  position: relative;
  border: 1px solid #d60000;
}
/* .invisible {
  display: none;
}
.todo-error {
 display: block;
 position: absolute;
 top: 0;
 
} */
</style>
