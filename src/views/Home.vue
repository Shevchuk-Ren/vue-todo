<template>
  <div class="home">

    <AppBar/>
<main>
  <section class="hero">
   <Hero/>
  </section>
  <section>
  

      <div class="container">
<div class="wrapper">
          <div class="about">
            <h2>
              Заголовок, который скроем
            </h2>
<p>Business Analytics — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's</p>
    <ul>
      <li>
        <h3>
    Interactive Reporting
        </h3>
        <p>
In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.
        </p>
      </li>
          <li>
        <h3>
    Automated data updates
        </h3>
        <p>
          The application automatically updates and structures the data in just 60 seconds, saving you time and money.
        </p>
      </li>
          <li>
        <h3>
    Data Security
        </h3>
        <p>
          The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.
        </p>
      </li>
    </ul>
    </div>
    <Form @check-login="checkLogin"></Form>
</div>
    </div>
  </section>

</main>
  </div>
</template>

<script>
// @ is an alias to /src
import AppBar from '../components/AppBar.vue'
import Hero from '../components/Hero.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'Home',
  components: {
    AppBar,
    Hero,
    Form,
    
  }
,
 data() {
    return {
      contacts: [
       { 
        login: 'Admin',
        password: '12345',
       }
      ],
    }
  },
   methods: {
    checkLogin(newTodoObj) {
          const checkContact = this.contacts.filter(contact => contact.login === newTodoObj.login && contact.password === newTodoObj.password)
   
       if(checkContact.length !== 0){
   alert(`Hello, ${newTodoObj.login}`);
       return;
       }
     alert(`Try again`);
  
    }
  }
}
</script>
<style>

.container {
   width: 100%;
    max-width: 1164px;
    /* padding-left: 10px;
    padding-right: 10px; */
    margin-left: auto;
    margin-right: auto;
}
.hero {
  background-image: url(../assets/hero.jpg);
  max-width: 100%;
  height: 456px;
}
.wrapper {
  display: flex;
}
.about {
  max-width: 664px;
}
</style>