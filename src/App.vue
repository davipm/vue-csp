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
    },

    // meta tags SEO
    metaInfo: {
      title: 'CSP - Companhia Siderúgica do Pécem',
      meta: [
        // OpenGraph data (Most widely used)
        {property: 'og:title', content: 'Page Title ← CSP'},
        {property: 'og:site_name', content: 'CSP'},
        // The list of types is available here: http://ogp.me/#types
        {property: 'og:type', content: 'website'},
        // Should the the same as your canonical link, see below.
        {property: 'og:url', content: 'http://cspvue.surge.sh'},
        {property: 'og:image', content: 'http://cspvue.surge.sh/img/logo-default.54b9af6f.png'},
        // Often the same as your meta description, but not always.
        {property: 'og:description', content: 'Siderurgica do Pécem.'},

        // Twitter card
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: 'http://cspvue.surge.sh'},
        {name: 'twitter:title', content: 'CSP'},
        {name: 'twitter:description', content: 'Siderurgica do Pécem.'},
        // Your twitter handle, if you have one.
        {name: 'twitter:creator', content: '@davipmdev'},
        {name: 'twitter:image:src', content: 'https://cspvue.surge.sh/img/logo-default.54b9af6f.png'},

        // Google / Schema.org markup:
        {itemprop: 'name', content: 'CSP'},
        {itemprop: 'description', content: 'Companhia Siderúgica do Pécem.'},
        {itemprop: 'image', content: 'https://cspvue.surge.sh/img/logo-default.54b9af6f.png'}
      ]
    }
  }

  $(document).ready(function () {
    // if needs jquery
  });
</script>

<style lang="scss">
  // geral css
  @import "./assets/loading";
  @import "./assets/fonts/fonts.css";
  html,
  body {
    padding: 0;
    margin: auto;
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
    font-style: normal;
  }

  p {
    font-family: "Centuma", Roboto, sans-serif;
    font-weight: 300;
    font-style: normal;
  }

  ::selection {
    color: #fff;
    text-shadow: none;
    background: #00734A;
  }

  .section {
    position: relative;
    margin: 0;
    padding: 50px 0;
  }

  .section-content img {
    height: auto;
    max-width: 100%;
  }

  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    top: 50%;
    height: 45px;
    width: 45px;
    transform: translateY(-50%);
    color: #34343c;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.7);
    opacity: 1;
  }

  .carousel-control-prev { left: 15px; }
  .carousel-control-next { right: 15px; }
</style>
