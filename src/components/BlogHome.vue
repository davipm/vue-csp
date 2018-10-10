<template>
  <section class="section blog">
    <div class="container">
      <!-- Heading -->
      <h3 class="blog-title">Notícias</h3>

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

      <!-- Blog Grid -->
      <div v-else class="row">
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
        </div>
        <!--
        <div class="col-md-4">
          <div class="card">
            <router-link :to="'/noticia/'">
              <div class="img-content">
                <img class="img-fluid" src="http://www.cspecem.com/wp-content/uploads/2018/09/211018.png" alt="Card image cap">
              </div>
            </router-link>
              <div class="card-body">
                <time>10/12/18</time>
                <router-link :to="'/noticia/'">
                  <h5 class="card-title">
                    Card title
                  </h5>
                </router-link>
                <p class="card-text">
                  Some quick example text to build
                  on the card title and make up the
                  bulk of the card's content.
                </p>
              </div>

            <div class="card-footer">
              <router-link :to="'/noticia/'" class="btn btn-primary">
                <i class="fas fa-plus"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <router-link to="#">
              <div class="img-content">
                <img class="img-fluid" src="http://www.cspecem.com/wp-content/uploads/2018/09/CSP-na-midia.jpg" alt="Card image cap">
              </div>
            </router-link>
            <div class="card-body">
              <time>10/12/18</time>
              <router-link :to="'#'">
                <h5 class="card-title">
                  Card title
                </h5>
              </router-link>
              <p class="card-text">
                Some quick example text to build on
                the card title and make up the bulk of
                the card's content.
              </p>
            </div>
            <div class="card-footer">
              <router-link :to="'/noticia/'" class="btn btn-primary">
                <i class="fas fa-plus"></i>
              </router-link>
            </div>
          </div>
        </div>
        -->
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "BlogHome",
    data() {
      return {
        loading: true,
        posts: {}
      }
    },
    methods: {
      getPosts() {
        axios.get('http://wpstudy.local/wp-json/wp/v2/posts', {
          params: {
            per_page: 3
          }
        }).then((res) => {
          this.posts = res.data;
          console.log(res.data)
        })
        .catch((res) => {
          console.log(res);
        })
        .finally( () => {
          this.loading = false;
        })
      }
    },
    created() {
      this.getPosts();
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
</style>