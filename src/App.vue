<template>
  <main id="app">
    <!-- header -->
    <Header />
    <!-- app content -->
    <router-view/>
    <!-- footer -->
    <Footer />
    <!-- back to top button -->
    <BackToTop />
  </main>
</template>

<script>
  import $ from 'jquery'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import BackToTop from './components/BackToTop.vue'
  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      BackToTop
    }
  }

  $(document).ready(function () {
    // if needs jquery
  });
</script>

<style lang="scss">
  // geral css
  @import "./assets/loading";
  html,
  body {
    margin: auto;
    padding: 0;
    max-width: 2000px;
    font-family: "Centuma", Roboto, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Centuma", Roboto, sans-serif;
  }

  p {
    font-family: "Centuma", Roboto, sans-serif;
    font-weight: 300;
  }

  ::selection {
    color: #fff;
    background: #00734A;
    text-shadow: none;
  }

  .section {
    position: relative;
    margin: 0;
    padding: 50px 0;
  }

  .section-content img {
    max-width: 100%;
    height: auto;
  }

  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    top: 50%;
    height: 45px;
    width: 45px;
    transform: translateY(-50%);
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.7);
    color: #34343c;
    opacity: 1;
  }

  .carousel-control-prev {
    left: 15px;
  }

  .carousel-control-next {
    right: 15px;
  }
</style>
