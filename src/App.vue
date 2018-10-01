<template>
  <main id="app">
    <!-- header -->
    <Header />
    <!-- app content -->
    <router-view/>
    <!-- footer -->
    <Footer />
    <BackToTop />
  </main>
</template>

<script>
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
</script>

<style lang="scss">
  // geral css
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

  @import "./assets/loading";
</style>
