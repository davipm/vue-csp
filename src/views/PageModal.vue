<template>
  <section class="section page-modal">
    <!-- loading -->
    <div class="container loading" v-if="loading">
      <div class="row">
        <div class="col-md-4">
          <div class="shine box mb-1"></div>
          <div class="shine mb-4"></div>
        </div>
        <div class="col-md-4">
          <div class="shine box mb-1"></div>
          <div class="shine mb-4"></div>
        </div>
        <div class="col-md-4">
          <div class="shine box mb-1"></div>
          <div class="shine mb-4"></div>
        </div>
        <div class="col-md-4">
          <div class="shine box mb-1"></div>
          <div class="shine mb-4"></div>
        </div>
        <div class="col-md-4">
          <div class="shine box mb-1"></div>
          <div class="shine mb-4"></div>
        </div>
        <div class="col-md-4">
          <div class="shine box mb-1"></div>
          <div class="shine mb-4"></div>
        </div>
      </div>
    </div>
    <!-- error -->
    <div class="container error" v-else-if="error">
      <div  class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{{ message.alert1 }}</strong> {{ message.alert2 }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
    <!-- page content -->
    <div class="container" v-else>
      <h3 class="page-title">
        {{ message.pageTitle }}
      </h3>
      <div class="page-content">
        <!-- page content -->
        <div class="row">
          <div class="col-md-4" v-for="(item, index) in modalItem" :key="index">
            <!-- the modal -->
            <b-modal :id="item.slug"
                     cancel-variant="none"
                     ok-variant="modal"
                     ok-title="Fechar"
                     size="lg"
                     centered
                     :title="item.title"
            >
              <div class="row">
                <div class="col-md-6">
                  <div v-html="item.content"></div>
                </div>
                <div class="col-md-6">
                  <img v-if="item.image"
                       :src="item.image.sizes.medium"
                       :alt="item.image.filename"
                       class="w-100 sticky-top"
                  >
                  <img v-else src="http://www.cspecem.com/wp-content/uploads/2016/12/patio.jpg" class="card-img" alt="">
                </div>
              </div>
            </b-modal>
            <div class="card" v-b-modal="item.slug">
              <div class="card-img-content">
                <img v-if="item.image"
                     :src="item.image.sizes.medium"
                     :alt="item.image.filename"
                     class="card-img"
                >
                <img v-else src="http://www.cspecem.com/wp-content/uploads/2016/12/patio.jpg" class="card-img" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  {{ item.title }}
                </h5>
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
  import { mapState } from 'vuex'
  export default {
    name: "PageModal",
    data() {
      return {
        loading: true,
        error: false,
        modalItem: {},
        message: {
          alert1: 'OPS!',
          alert2: 'Algo errado aconteceu, recarregue a página novamente.',
          pageTitle: 'Plantas'
        },
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
      getPosts(){
        axios.get('/api/v1/plantas')
            .then(( res ) => {
              this.modalItem = res.data;
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
    }
  }
</script>

<style scoped lang="scss">
  .page-modal { padding-top: 1.5rem; }

  .page-title {
    margin-bottom: 1.5rem;
    color: #65666A;
  }

  .card {
    cursor: pointer;
    border: none;

    &-body { padding-top: 0.8rem; }

    &-title {
      text-align: center;
      font-weight: bold;
      font-family: "Centuma", Roboto, sans-serif;
      font-size: 15px;
      color: #65666A;
    }

    &-img-content { overflow: hidden; }
    
    &-img {
      min-width: 350px;
      min-height: 197.16px;
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
  }
</style>

<style lang="scss">
  .btn-none { display: none; }

  .btn-modal {
    padding: 10px 20px;
    background-color: inherit;
    font-size: 14px;
    color: #65666A;
    border: 1px solid #65666A;

    &:hover {
      color: #fff;
      text-decoration: none;
      background: #34343c;
      border-color: #34343c;
    }
  }

  .modal-body {
    max-height: 400px;
    overflow: auto;

    p { font-size: 14px; }
  }
</style>