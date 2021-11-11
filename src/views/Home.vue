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
            <h2 class="visually-hidden">
              Заголовок, который скроем
            </h2>
<p class="about-company"><span class="about-name">Business Analytics</span> — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's</p>
    <ul>
      <li class="about-item">
        <h3 class="about-title">
    Interactive Reporting
        </h3>
        <p class="about-description">
In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.
        </p>
      </li >
          <li class="about-item">
        <h3 class="about-title">
    Automated data updates
        </h3>
        <p class="about-description">
          The application automatically updates and structures the data in just 60 seconds, saving you time and money.
        </p>
      </li>
          <li class="about-item">
        <h3 class="about-title">
    Data Security
        </h3>
        <p class="about-description">
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
  position: relative;
  display: flex;
  padding-top: 40px;
}
.about {
  max-width: 664px;
  margin-right: 18px;
}
.about-item:not(:last-child) {
  margin-bottom: 15px;


}
.about-title {

font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 156.69%;
/* identical to box height, or 25px */

display: flex;
align-items: center;
margin-bottom: 10px;
color: #333333;
}
.about-description {
  font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 156.69%;




}
.about-company {
  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 156.69%;
margin-bottom: 15px;
}
.about-name {
  font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 156.69%;

}
.visually-hidden {
  
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  font-size: xx-small;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
</style>