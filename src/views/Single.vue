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
      <ErrorAlert v-else-if="error" />
      <!-- grid -->
      <div v-else class="row">
        <div class="section-content col-md-9 " v-for="(item, index) in post" :key="index">
          <!-- category -->
          <h5 class="category" v-if="item.categories[0] === 4">Notícias</h5>
          <h5 class="category" v-else-if="item.categories[0] === 5">CSP Podcast</h5>
          <h5 class="category" v-else>Post</h5>
          <!-- title -->
          <h3 class="single-title">
            {{ item.title.rendered }}
          </h3>
          <div class="single-content"
               v-html="item.content.rendered"
          ></div>
          <!-- share buttons -->
          <ShareContent />
        </div>
        <div class="col-md-3">
          <aside class="aside-posts">
            <h3 class="single-title">
              {{ message.asideMessage.toUpperCase() }}
            </h3>
            <div class="card" v-for="(post, index) in posts" :key="index">
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
                <router-link to="#">
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
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  import ShareContent from '@/components/ShareContent.vue'
  import ErrorAlert from '../components/ErrorAlert.vue'
  import { mapState } from 'vuex'

  export default {
    name: "Single",
    components: {
      ShareContent,
      ErrorAlert
    },

    data() {
      return {
        message: {
          pageTitle: 'Notícias',
          asideMessage: 'Saiba Mais',
        },
        loading: true,
        error: false,
        post: {},
        posts: {},
        titleMeta: '',
        contentMeta: ''
      }
    },

    filters: {
      prettyDates( value ) {
        if ( !value ) return '';
        let date = moment.utc( value );
        return date.format('DD/MM/YYYY');
      }
    },

    methods: {
      getPost( slug ){
        axios.get(`/wp/v2/posts`, {
          params: {
            slug: slug
          }
        })
        .then(( res ) => {
          this.post = res.data;
          this.titleMeta = res.data[0].title.rendered;
          this.contentMeta = res.data[0].excerpt.rendered;
        })
        .catch(() => {
          this.error = true; // catch error
        })
        .finally(() => {
          this.loading = false;
        })
      },

      getPosts() {
        axios.get('/wp/v2/posts', {
          params: {
            per_page: 2
          }
        })
        .then(( res ) => {
          this.posts = res.data;
        })
        .catch(() => {
          this.error = true;
        })
      },
    },

    watch: {
      '$route' (to, from) {
        this.getPost(to.params.slug);
        this.getPosts(to.params.slug);
        this.loading = true; // resenting load on change routes
      },

      locale(val) {
        this.$i18n.locale = val;
        this.loading = true;
        this.getPost(this.$route.params.slug);
      }
    },

    computed: {
      ...mapState([
          'locale'
      ])
    },

    created() {
      this.getPost(this.$route.params.slug); // slug current post
      this.getPosts(this.$route.params.slug); // slug aside posts
    },

    metaInfo() {
      return {
        title: this.titleMeta + ' | CSP',
        meta: [
          { vmid: 'description', name: 'description', content: this.contentMeta },
        ]
      }
    },
  }
</script>

<style scoped lang="scss">
  .section-content {
    border-right: 1px solid #00734A;
  }

  .category {
    font-family: "Centuma", Roboto, sans-serif;
    font-size: 26px;
    color: #65666A;
  }

  .single-title {
    font-family: "Centuma", Roboto, sans-serif;
    margin-bottom: 1rem;
    color: #00734A;
  }

  .card {
    margin-bottom: 40px;
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
    height: auto;
    overflow: hidden;
  }

  .img-fluid {
    width: 100%;
    //height: 100%;

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