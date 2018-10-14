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
            {{ page[0].title.rendered }}
          </h2>
          <!-- page content -->
          <div class="page-content"
               v-html="page[0].content.rendered"
          ></div>
          <!-- contact form loading example -->
          <!--
          <div id="spinner"
               :class="{'d-none': formLoading}">
            <img src="http://www.ajaxload.info/images/exemples/25.gif" />
          </div>
          -->
          <!-- /contact form loading example -->
          <!-- contact form example -->
          <!--
          <iframe src="http://wpstudy.local/contato/"
                  class="w-100"
                  style="height: 500px; border: none;"
                  @load="removeFormLoading"
          ></iframe>
          -->
          <!-- /contact form example -->
          <!-- share buttons -->
          <!--<ShareContent />-->
        </div>
      </div>
      <!-- share buttons -->
      <ShareContent />
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  import ShareContent from '../components/ShareContent.vue'
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
        loading: true, // show loading page
        formLoading: false, // show form loading
        error: false,
        page: {}
      }
    },
    methods: {
      getPage(slug) {
        axios.get(`http://wpstudy.local/wp-json/wp/v2/pages`, {
          params: {
            slug: slug
          }
        }).then((res) => {
          this.page = res.data;
          console.log(res.data);
        }).catch((error) => {
          this.error = true;
          console.log(error);
        }).finally(() => {
          this.loading = false;
        })
      },
      removeFormLoading() {
        this.formLoading = this.formLoading = true; // remove form loading on load
      }
    },
    watch: {
      '$route' (to, from) {
        this.getPage(to.params.slug);
        this.loading = true; // reset loading page when change routes
      }
    },
    created() {
      this.getPage(this.$route.params.slug);
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