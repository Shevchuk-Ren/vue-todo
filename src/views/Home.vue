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
            <Form/>
          </div>
        </div>
      </section>

    </main>

    <Footer />
  </div>
</template>

<script>
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
};
</script>
<style>
.container {
  width: 100%;
  max-width: 1164px;

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
