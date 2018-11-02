<template>
  <section class="section page-news">
    <!-- loading -->
    <div class="container loading" v-if="loading">
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
    </div>
    <!-- error -->
    <div class="container error" v-else-if="error">
      <!-- alert error -->
      <div  class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{{ message.alert1 }}</strong> {{ message.alert2 }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
    <!-- content -->
    <div class="container" v-else>
      <!-- heading -->
      <h3 class="page-title">CSP Notícias</h3>
      <!-- page content -->
      <div class="page-content">
        <!-- grid -->
        <div class="row">
          <div class="col-md-4 mb-5" v-for="(item, index) in news" :key="index">
            <div class="media">
              <a :href="item.pdf_file" target="_blank">
                <div class="media-img-content" v-if="item.cover">
                  <img class="media-img"
                       :src="item.cover.sizes.medium"
                       :alt="item.title"
                  >
                </div>
                <img class="media-img"
                     v-else
                     src="https://via.placeholder.com/128x200"
                     alt="Generic placeholder image"
                >
              </a>
              <div class="media-body align-self-center">
                <time class="media-date">
                  {{ item.date }}
                </time>
                <h5 class="media-title">
                  {{ item.title }}
                </h5>
                <a :href="item.pdf_file"
                   target="_blank"
                   class="btn btn-primary"
                >
                  Veja Mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "PageModal",
    data() {
      return {
        loading: true,
        error: false,
        news: {}
      }
    },

    methods: {
      getRoute( slug ) {
        axios.get('/api/v1/cspnotcias')
        .then(( res ) => {
          this.news = res.data;
        })
        .catch(( res ) => {
            this.err = true;
         })
         .finally(() => {
           this.loading = false;
         })
      }
    },

    created() {
      this.getRoute();
    }
  }
</script>

<style scoped lang="scss">
  .page-news {
    padding-top: 25px;
  }

  .page-title {
    margin-bottom: 2rem;
    font-family: "Centuma", Roboto, sans-serif;
    color: #65666A;
  }
  
  .media-img-content {
    overflow: hidden;
  }

  .media-img {
    margin-right: 1rem;
    max-width: 128px;
    height: auto;
    -webkit-transition: all .6s ease-in-out;
    -moz-transition: all .6s ease-in-out;
    -ms-transition: all .6s ease-in-out;
    -o-transition: all .6s ease-in-out;
    transition: all .6s ease-in-out;
    -webkit-box-shadow: 0 0 20px -1px rgba(117,117,117,1);
    -moz-box-shadow: 0 0 20px -1px rgba(117,117,117,1);
    -ms-box-shadow: 0 0 20px -1px rgba(117,117,117,1);
    box-shadow: 0 0 20px -5px rgba(117,117,117,1);
    
    &:hover {
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  .media-date {
    color: #65666A;
  }

  .media-title {
    color: #00734A;
  }

  .btn-primary {
    padding: 5px 10px;
    margin-top: 20px;
    text-transform: uppercase;
    font-size: 13px;
    color: #65666a;
    background-color: #d8d9da;
    border: none;
  }
</style>