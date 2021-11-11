<template>

 <header class="header-home" role="banner">
     <div class="container">
 <img class="logo" alt="company logo" src="../assets/logo.png" width="103" height="66">
     </div>

  </header>

</template>
<script>


export default {
  name: 'AppBar',
  
}
</script>
<style scoped>
.header-home {
    background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);
    padding: 15px 0;
}

.logo{
    display: block;
    margin: 0;
}
</style>