<template>
  <section class="section page">
    <div class="container">
      <!-- grid -->
      <div v-if="loading" class="row">
        <div class="col-md-9">
          <div class="mb-4">
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
          </div>
          <div class="mb-4">
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
          </div>
          <div class="mb-4">
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
          </div>
          <div class="mb-4">
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
          </div>
        </div>
      </div>
      <div v-else class="row">
        <div class="col-md-9">
          <!-- page title -->
          <h2 class="page-title">{{ page.title.rendered }}</h2>
          <!-- page content -->
          <div class="page-content" v-html="page.content.rendered"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Page",
    data() {
      return {
        loading: true,
        page: {}
      }
    },
    methods: {
      getPage(id) {
        axios.get(`http://wpstudy.local/wp-json/wp/v2/pages/${id}`).then((res) => {
          this.page = res.data;
        }).catch((res) => {
          console.log(res);
        }).finally(() => {
          this.loading = false;
        })
      }
    },
    watch: {
      '$route' (to, from) {
        this.getPage(to.params.id)
      }
    },
    created() {
      this.getPage(this.$route.params.id);
    }
  }
</script>

<style scoped>

</style>