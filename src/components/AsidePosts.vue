<template>
  <aside class="aside-posts">
    <h3 class="single-title">
      {{ asideMessage.toUpperCase() }}
    </h3>
    <div class="card" v-for="(post, index) in posts" v-bind:key="index">
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
  </aside>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "AsidePosts",
    data() {
      return {
        asideMessage: 'Saiba Mais',
        posts: {},
      }
    },
    watch: {
      '$route'(to, from) {
        this.getPosts(to.params.slug)
      }
    },
    methods: {
      getPosts() {
        axios.get('http://wpstudy.local/wp-json/wp/v2/posts', {
          params: {
            per_page: 2
          }
        }).then((res) => {
          this.posts = res.data;
          // console.log(res.data)
        }).catch((res) => {
          // console.log(res);
        })
      },
    },
    created() {
      this.getPosts();
    }
  }
</script>

<style scoped>

</style>