<template>
  <section class="section page">
    <div class="container">
      <!-- grid loading -->
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
      <!-- grid -->
      <div v-else class="row">
        <div class="section-page col-md-9">
          <!-- page title -->
          <h2 class="page-title">
            {{ page.title.rendered }}
          </h2>
          <!-- page content -->
          <div class="page-content"
               v-html="page.content.rendered"
          ></div>
          <div class="share-buttons">
            <ul class="share-list">
              <li class="share-item">
                <a href="#" class="share-link">
                  <i class="fas fa-print"></i>
                  Imprimir
                </a>
              </li>
              <li class="share-item">
                <a href="#" class="share-link">
                  <i class="fas fa-share-alt"></i>
                  Compartilhar
                </a>
              </li>
            </ul>
          </div>
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
      },
    },
    watch: {
      '$route' (to, from) {
        this.getPage(to.params.id);
        this.loading = true;
      }
    },
    created() {
      this.getPage(this.$route.params.id);
    }
  }
</script>

<style scoped>
  .page-title {
    font-family: "Centuma", Roboto, sans-serif;
    color: #65666A;
  }
</style>