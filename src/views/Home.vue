<template>
  <div class="home">
    <AppBar />
    <main>
      <section class="hero">
        <Hero />
      </section>

      <section>
        <div class="container">
          <div class="wrapper">
            <Features />
            <Form @check-login="checkLogin"></Form>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import AppBar from '../components/AppBar.vue';
import Hero from '../components/Hero.vue';
import Form from '@/components/Form.vue';
import Features from '../components/Features.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    AppBar,
    Hero,
    Features,
    Form,
    Footer,
  },
  data() {
    return {
      contacts: [
        {
          login: 'Admin',
          password: '12345',
          isActive: false,
        },
      ],
    };
  },
  methods: {
    checkLogin(newLoginObj) {
      // const checkContact = this.contacts.filter(contact => contact.login === newLoginObj.login && contact.password === newLoginObj.password)
      const checkContact = this.contacts.filter(contact => {
        if (
          contact.login === newLoginObj.login &&
          contact.password === newLoginObj.password
        ) {
          contact.isActive = true;

          localStorage.setItem('isActive', contact.isActive);

          return contact;
        }
      });

      if (checkContact.length !== 0) {
        alert(`Hello, ${newLoginObj.login}`);
        this.$router.push('/todo');
        console.log(this.contacts, `Контакты`);
        return;
      }
      alert(`Try again`);
    },
  },
};
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
  position: relative;
}
.wrapper {
  position: relative;
  display: flex;
  /* padding-top: 40px; */
  padding: 40px 0;
}
</style>
