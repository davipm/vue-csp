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

    metaInfo: {
      title: 'CSP Vue Version',
      meta: [
        // OpenGraph data (Most widely used)
        {property: 'og:title', content: 'My Page Title ← My Site'},
        {property: 'og:site_name', content: 'My Site'},
        // The list of types is available here: http://ogp.me/#types
        {property: 'og:type', content: 'website'},
        // Should the the same as your canonical link, see below.
        {property: 'og:url', content: 'https://www.my-site.com/my-special-page'},
        {property: 'og:image', content: 'http://localhost:8080/img/logo-default.54b9af6f.png'},
        // Often the same as your meta description, but not always.
        {property: 'og:description', content: 'I have things here on my site.'},

        // Twitter card
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: 'https://www.my-site.com/my-special-page'},
        {name: 'twitter:title', content: 'My Page Title ← My Site'},
        {name: 'twitter:description', content: 'I have things here on my site.'},
        // Your twitter handle, if you have one.
        {name: 'twitter:creator', content: '@alligatorio'},
        {name: 'twitter:image:src', content: 'http://localhost:8080/img/logo-default.54b9af6f.png'},

        // Google / Schema.org markup:
        {itemprop: 'name', content: 'My Page Title ← My Site'},
        {itemprop: 'description', content: 'I have things here on my site.'},
        {itemprop: 'image', content: 'http://localhost:8080/img/logo-default.54b9af6f.png'}
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
