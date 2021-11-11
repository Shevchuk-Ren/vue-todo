<template>

  <div class="container">

 <div class="wrapper-title">
      <h1 class="hero-title">Welcome to<br/> Business Analytics Online</h1>
      </div>

    </div>
   

</template>
<script>


export default {
  name: 'Hero',
  
}
</script>

<style scoped>

.wrapper-title {
 position: absolute;
 bottom: 0;
padding: 70px 0;
max-width: 629px;
}
.hero {

  background-image: url(../assets/hero.jpg);
background-size: contain;
  max-width: 100%;
  height: 456px;
}
.hero-title {
 
    font-style: normal;
font-weight: normal;
font-size: 55px;
line-height: 156.69%;
    color: #FFFFFF;
}
</style>