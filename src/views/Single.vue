<template>
  <section class="section single">
    <div class="container">
      <!-- grid loading -->
      <div v-if="loading" class="row">
        <div class="col-md-9 section-content">
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
        <div class="col-md-3">
          <div class="shine box"></div>
          <div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
          </div>
          <div class="shine box"></div>
          <div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
          </div>
        </div>
      </div>
      <!-- alert error -->
      <div v-else-if="error" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>OPS!</strong> Algo errado aconteceu, por favor tente mais tarde.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <!-- grid -->
      <div v-else class="row">
        <div class="section-content col-md-9 " v-for="(item, index) in post" :key="index">
          <!-- category -->
          <h5 class="category" v-if="item.categories[0] === 4">Notícias</h5>
          <h5 class="category" v-else>Sem categoria</h5>
          <!-- title -->
          <h3 class="single-title">
            {{ item.title.rendered }}
          </h3>
          <div class="single-content"
               v-html="item.content.rendered"
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
        <div class="col-md-3">

        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Single",
    data() {
      return {
        loading: true,
        error: false,
        post: {}
      }
    },
    methods: {
      getPost(slug){
        axios.get(`http://wpstudy.local/wp-json/wp/v2/posts`, {
          params: {
            slug: slug
          }
        }).then((res) => {
          this.post = res.data;
          console.log(res.data)
        }).catch((res) => {
          console.log(res);
        })
        .finally( () => {
          this.loading = false;
        })
      },
    },
    watch: {
      '$route' (to, from) {
        this.getPost(to.params.slug);
        this.loading = true;
      }
    },
    created() {
      this.getPost(this.$route.params.slug);
    }
  }
</script>

<style scoped lang="scss">
  .section-content {
    border-right: 1px solid #00734A;
  }

  .single-title {
    font-family: "Centuma", Roboto, sans-serif;
    margin-bottom: 1rem;
    color: #00734A;
  }


</style>