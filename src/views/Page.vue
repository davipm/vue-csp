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
      <!-- alert error -->
      <div v-else-if="error" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{{ message.alert1 }}</strong> {{ message.alert2 }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
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
          <!-- gallery -->
          <b-carousel v-if="page.acf.galeria" id="carousel1" class="carousel-fade"
                      style="text-shadow: 1px 1px 2px #333;"
                      controls
                      indicators
                      background="#ababab"
                      :interval="4000"
                      img-width="1024"
                      img-height="480"
                      v-model="slide"
                      @sliding-start="onSlideStart"
                      @sliding-end="onSlideEnd"
          >
            <!-- Slides with image only -->
            <b-carousel-slide :img-src="item.sizes.large"
                              v-for="(item, index) in gallery"
                              :key="index">
            </b-carousel-slide>
          </b-carousel>
        </div>
      </div>
      <!-- share buttons -->
      <ShareContent />
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  import ShareContent from '@/components/ShareContent.vue'
  export default {
    name: "Page",
    components: {
      ShareContent
    },

    data() {
      return {
        message: {
          alert1: 'OPS!',
          alert2: 'Algo errado aconteceu, por favor tente mais tarde.'
        },
        loading: true, // show loading lines
        formLoading: false, // show form loading
        error: false,
        page: {},
        gallery: {},
        slide: 0,
        sliding: null
      }
    },

    methods: {
      getPage( slug ) {
        axios.get(`/wp/v2/pages`, {
          params: {
            slug: slug
          }
        })
        .then(( res ) => {
          this.page = res.data[0];
          this.gallery = res.data[0].acf.galeria; // return only images gallery
        })
        .catch(( error ) => {
          this.error = true;
        })
        .finally(() => {
          this.loading = false;
        })
      },

      onSlideStart( slide ) {
        this.sliding = true;
      },

      onSlideEnd( slide ) {
        this.sliding = false;
      },

      scrollTop() {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    },

    watch: {
      '$route'(to, from) {
        this.getPage(to.params.slug);
        this.loading = true; // reset loading page when change routes
        this.scrollTop(); // always start with scrollTop 0 when change routes
      }
    },

    created() {
      this.getPage(this.$route.params.slug); // slug current page
      this.scrollTop(); // always start with scrollTop 0
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