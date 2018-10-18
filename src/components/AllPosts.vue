<template>
  <section class="section page">
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
        <div class="section-page col-md-12">
          <!-- page title -->
          <h2 class="page-title">
            {{ pageTitle }}
          </h2>
          <!-- page content -->
          <div class="page-content">
            <div class="row">
              <div class="col-md-4" v-for="(post, index) in posts" :key="index">
                <div class="card">
                  <router-link :to="`/post/${post.slug}`">
                    <div class="img-content">
                      <img class="img-fluid"
                           v-if="post.acf.featured_image"
                           :src="post.acf.featured_image"
                           alt="Card image cap"
                      >
                      <img class="img-fluid"
                           v-else src="https://via.placeholder.com/300x220"
                           alt="Card image cap"
                      >
                    </div>
                  </router-link>
                  <div class="card-body">
                    <time class="post-time">
                      {{ post.date }}
                    </time>
                    <router-link :to="`/post/${post.slug}`">
                      <h5 class="card-title">
                        {{ post.title.rendered }}
                      </h5>
                    </router-link>
                    <p class="card-text"
                       v-html="post.excerpt.rendered"
                    ></p>
                  </div>
                  <div class="card-footer">
                    <router-link :to="`/post/${post.slug}`" class="btn btn-primary">
                      <i class="fas fa-plus"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "AllPosts",
    data() {
      return {
        pageTitle: 'Notícias',
        loading: true,
        error: false,
        posts: {}
      }
    },

    watch: {

    },

    methods: {

    },

    created() {

    }
  }
</script>

<style scoped>
  .page {
    padding: 30px 0;
  }

  .page-title {
    font-family: "Centuma", Roboto, sans-serif;
    color: #65666A;
    margin-bottom: 20px;
  }
</style>