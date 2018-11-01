<template>
  <section class="section">
    <div class="container">
      <h2>Page Modal {{ $route.params.slug }} </h2>
    </div>
  </section>
</template>

<script>
  export default {
    name: "PageModal",
    data() {
      return {

      }
    },

    watch: {
      '$route'(to, from) {
        this.getRoute(to.params.slug);
      }
    },

    methods: {
      getRoute(slug) {
        alert(`O slug é ${slug}`);
      }
    },

    created() {
      this.getRoute(this.$route.params.slug);
    }
  }
</script>

<style scoped>

</style>