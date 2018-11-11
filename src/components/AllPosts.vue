<template>
  <section class="section page">
    <div class="container">
      <!-- grid loading -->
      <div v-if="loading" class="row">
        <div class="col-md-4">
          <div class="shine box"></div>
          <div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="shine box"></div>
          <div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="shine box"></div>
          <div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="shine box"></div>
          <div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="shine box"></div>
          <div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
          </div>
        </div>
        <div class="col-md-4">
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
                           :src="post.acf.featured_image.sizes.medium_large"
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
                      {{ post.date | prettyDates}}
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

          <b-pagination size="md"
                        align="center"
                        :total-rows="3"
                        v-model="currentPage"
                        :per-page="2"
                        @change="getPosts"
          >
          </b-pagination>
          <br>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import moment from 'moment'
  import axios from 'axios'
  export default {
    name: "AllPosts",
    data() {
      return {
        pageTitle: '',
        loading: true,
        error: false,
        posts: {},
        categories: 0,
        currentPage: 1,
      }
    },

    filters: {
      prettyDates( value ) {
        if ( !value ) return '';
        let date = moment.utc( value );
        return date.format('DD/MM/YYYY');
      }
    },

    watch: {
      '$route'(to, from) {
        this.loading = true;
        this.getPosts(to.params.slug);
      }
    },

    methods: {
      getPosts( slug ) {
        switch ( slug ) {
          case 'posts' :
            this.categories = 4;
            this.pageTitle = 'Notícias';
            break;

          case 'csp-podcast' :
            this.categories = 5;
            this.pageTitle = 'CSP Podcast';
            break;

          case 'saiu-na-midia':
            this.categories = 7;
            this.pageTitle = 'Saiu na Midia';
            break
        }

        axios.get('/wp/v2/posts', {
          params: {
            categories: this.categories,
            per_page: 9,
            page: this.currentPage
          }
        })
        .then(( res ) => {
          this.posts = res.data;
        })
        .catch(() => {
          this.error = true;
        })
        .finally(() => {
          this.loading = false;
        })
      }
    },

    created() {
      this.getPosts(this.$route.params.slug);
    }
  }
</script>

<style scoped lang="scss">
  .page {
    padding: 30px 0;
  }

  .page-title {
    font-family: "Centuma", Roboto, sans-serif;
    color: #65666A;
    margin-bottom: 20px;
  }

  .card {
    border: none;
    margin-bottom: 40px;

    &-title {
       font-family: "Centuma", Roboto, sans-serif;
       font-weight: bold;
       font-size: 18px;
       color: #65666A;
     }

    &-body {
       padding: 0;
       min-height: 180px;
     }

    &-footer {
       border: none;
       padding: 0;
       background: inherit;
       text-align: right;
     }
  }

  .post-time {
    font-family: "Centuma", Roboto, sans-serif;
    font-weight: 300;
    color: #00734A;
    font-size: 13px;
  }

  .btn-primary {
    background: #00734A;
    border: none;
    color: #fff;
    padding: 4px;
    border-radius: 0 0 50px 0;

    &:hover {
       background: #00442e;
     }
  }

  .img-content {
    height: 220px;
    overflow: hidden;
  }

  .img-fluid {
    width: 100%;
    height: 100%;

    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;

    &:hover {
       -webkit-transform: scale(1.1);
       -moz-transform: scale(1.1);
       -ms-transform: scale(1.1);
       -o-transform: scale(1.1);
       transform: scale(1.1);
     }
  }
</style>

<style lang="scss">
  .page-link {
    color: #00734A;
  }

  .page-item.active .page-link {
    background-color: #00734A;
    border-color: #00734A;
  }
</style>