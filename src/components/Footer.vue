<template>
  <footer></footer>

  <footer class="footer">
    <div class="container">
      <div class="footer-nav">
        <img
          class="logo"
          alt="company logo"
          src="../assets/logo.png"
          width="55.99"
        />

        <ul class="footer-list">
          <li class="footer-item">
            <a class="footer-link" href="">Terms &amp; Conditions</a>
          </li>

          <li class="footer-item">
            <a class="footer-link" href="">Privacy</a>
          </li>

          <li class="footer-item">
            <a class="footer-link" href="">Notice at Collection</a>
          </li>

          <li class="footer-item">
            <a class="footer-link" href="">CA Privacy Hub</a>
          </li>

          <li class="footer-item">
            <a class="footer-link" href="">Contact Us</a>
          </li>

          <li class="footer-item">
            <a class="footer-link" href="">Sitemap</a>
          </li>
        </ul>
      </div>
      <div class="footer-line"></div>
      <div class="footer-info">
        <p class="footer-copyright">
          Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal
          Opportunity Lender.
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
};
</script>
<style scoped>
.footer {
  background: #333333;
}
.footer-nav {
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
}
.footer-info {
  padding: 30px 0;
}
.footer-line {
  width: 100%;
  border-bottom: 1px solid #ffffff;
}
.footer-list {
  padding: 5px 0;
  display: flex;
}
.footer-item {
  margin-left: 20px;
}
.footer-link {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 156.69%;
  color: #ffffff;
}
.footer-copyright {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 156.69%;
  color: #ffffff;
}
</style>
