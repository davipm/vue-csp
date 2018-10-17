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
          <h5 class="category" v-else-if="item.categories[0] === 5">CSP Podcast</h5>
          <h5 class="category" v-else>Sem categoria</h5>
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
  import ShareContent from '../components/ShareContent.vue'
  export default {
    name: "Single",
    components: {
      ShareContent
    },

    data() {
      return {
        message: {
          pageTitle: 'Notícias',
          alert1: 'OPS!',
          alert2: 'Algo errado aconteceu, por favor tente mais tarde.',
          asideMessage: 'Saiba Mais',
        },
        loading: true,
        error: false,
        post: {},
        posts: {},
      }
    },

    methods: {
      getPost(slug){
        axios.get(`http://wpstudy.local/wp-json/wp/v2/posts`, {
          params: {
            slug: slug
          }
        })
        .then((res) => {
          this.post = res.data;
        }).catch((res) => {
          // catch error
        })
        .finally( () => {
          this.loading = false;
        })
      },

      getPosts() {
        axios.get('http://wpstudy.local/wp-json/wp/v2/posts', {
          params: {
            per_page: 2
          }
        })
        .then((res) => {
          this.posts = res.data;
          // console.log(res.data)
        })
        .catch((res) => {
          // console.log(res);
        })
      },
    },

    watch: {
      '$route' (to, from) {
        this.getPost(to.params.slug);
        this.getPosts(to.params.slug);
        this.loading = true;
      }
    },

    created() {
      this.getPost(this.$route.params.slug);
      this.getPosts(this.$route.params.slug);
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