<i18n>
  {
    "pt_BR": {
      "title": "Notícias"
    },

    "en": {
      "title": "News"
    }
  }
</i18n>

<template>
  <section class="section blog">
    <div class="container">
      <!-- Heading -->
      <h3 class="blog-title">
        {{ $t('title') }}
      </h3>
      <!-- Loading Grid -->
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
      </div>
      <!-- alert error -->
      <ErrorAlert v-else-if="error" />
      <!-- Blog Grid -->
      <div v-else class="row">
        <div class="col-md-4" v-for="(post, index) in posts" :key="index">
          <div class="card" v-if="locale === 'en'">
            <router-link :to="`/post/${post.slug}`">
              <div class="img-content">
                <img class="img-fluid"
                     v-if="post.acf.featured_image"
                     :src="post.acf.featured_image.sizes.medium_large"
                     :alt="post.title.rendered"
                >
                <img class="img-fluid"
                     v-else src="https://via.placeholder.com/300x220"
                     alt="Image Default"
                >
              </div>
            </router-link>
            <div class="card-body">
              <time class="post-time">
                {{ post.date | prettyDates }}
              </time>
              <router-link :to="`/post/${post.slug}`">
                <h5 class="card-title">
                  {{ post.acf.title_en }}
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
          <div class="card" v-else>
            <router-link :to="`/post/${post.slug}`">
              <div class="img-content">
                <img class="img-fluid"
                     v-if="post.acf.featured_image"
                     :src="post.acf.featured_image.sizes.medium_large"
                     :alt="post.title.rendered"
                >
                <img class="img-fluid"
                     v-else src="https://via.placeholder.com/300x220"
                     alt="Image Default"
                >
              </div>
            </router-link>
            <div class="card-body">
              <time class="post-time">
                {{ post.date | prettyDates }}
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
  </section>
</template>

<script>
  import ErrorAlert from './ErrorAlert.vue'
  import moment from 'moment'
  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    name: "BlogHome",
    components: {
      ErrorAlert
    },

    data() {
      return {
        loading: true,
        error: false,
        posts: {}
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
      locale(val) {
        this.$i18n.locale = val;
        this.loading = true;
        this.getPosts();
      }
    },

    computed: {
        ...mapState([
            'locale'
        ])
    },

    methods: {
      getPosts() {
        axios.get('/wp/v2/posts', {
          params: {
            categories: 4,
            per_page: 3
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
      this.getPosts();
      this.$i18n.locale = this.locale; // this came from vuex
    }
  }
</script>

<style scoped lang="scss">
  .blog {
    padding-bottom: 100px;

    &-title {
      font-family: "Centuma", Roboto, sans-serif;
      font-size: 30px;
      line-height: 1.4;
      color: #65666A;
      margin-bottom: 20px;
    }
  }

  .card {
    border: none;
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

  // mobile grid's
  @media ( max-width: 768px ) {
    .card {
      margin-bottom: 30px;
    }
  }
</style>