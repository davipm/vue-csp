<template>
  <section class="section time-line">
    <div class="container">
      <h3 class="page-title">
        {{ message.pageTitle }}
      </h3>
      <!-- loading -->
      <div class="page-loading" v-if="loading">
        <div class="pulse-loading"></div>
      </div>
      <!-- alert error -->
      <div v-else-if="error" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{{ message.alert1 }}</strong> {{ message.alert2 }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <!-- carousel content -->
      <div class="page-content" v-else>
        <carousel :responsive="{ 0:{ items: 1, nav: false }, 600:{ items: 2, nav: true} }">
          <div class="item" v-for="item in posts"
               :key="item.id"
          >
            <div v-for="(items, index) in item.time_line"
                 :key="index"
                 v-b-modal="items.image.title"
                 class="item-link"
            >
              <b-modal :id="items.image.title"
                       cancel-variant="none"
                       ok-variant="modal"
                       ok-title="Fechar"
                       size="lg"
                       centered
                       :title="items.year"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div v-html="items.content"></div>
                  </div>
                  <div class="col-md-6">
                    <img v-if="items.image"
                         :src="items.image.sizes.medium"
                         :alt="items.image.title"
                         class="w-100 sticky-top"
                    >
                  </div>
                </div>
                <div v-html="items.content"></div>
              </b-modal>
              <div class="col-md-6 time-content"
                   :class="`${items.color}`"
              >
                <h5 class="time-title">
                  {{ items.year }}
                </h5>
                <div class="time-body">
                  <p class="time-text">
                    {{ items.excerpt }}
                  </p>
                </div>
              </div>
              <div class="col-md-6 time-img-content">
                <figure class="time-img"
                        :style="{
                            background: 'url(' + items.image.url + ') no-repeat center/cover'
                          }"
                ></figure>
              </div>
            </div>
          </div>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  import carousel from 'vue-owl-carousel'
  export default {
    name: "TimeLine",
    components: {
      carousel,
    },

    data() {
      return {
        message: {
          pageTitle: 'Linha do tempo sustentável',
          alert1: 'OPS!',
          alert2: 'Algo errado aconteceu, recarregue a página novamente.'
        },
        loading: true,
        error: false,
        posts: {},
      }
    },

    methods: {
      getTimeLine() {
        axios.get('/api/v1/timelines')
            .then((res) => {
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
      this.getTimeLine();
    },

    metaInfo() {
      return {
        title: this.message.pageTitle + ' | CSP',
        meta: [
          { vmid: 'description', name: 'description', content: this.message.pageTitle },
        ]
      }
    },
  }
</script>

<style scoped lang="scss">
  .time-line {
    position: relative;
    padding-top: 1.5rem;
    margin: 0;
  }

  .page-title {
    margin-bottom: 1.5rem;
    font-family: "Centuma", Roboto, sans-serif;
    font-weight: 300;
    color: #65666A;
  }

  .time-img {
    width: 100%;
    height: 100%;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;

    &-content {
      position: relative;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
  }

  .item-link {
    display: flex;
    min-height: 250px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }

    &:hover .time-img {
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  .time-content {
    position: relative;
    padding-top: 20px;
    margin: 0;
  }

  .time-title {
    font-family: "Centuma", Roboto, sans-serif;
    font-weight: 300;
    font-style: normal;
  }

  .time-text {
    font-size: 14px;
  }

  .time-bg-green {
    color: #ffffff;
    background-color: #00734A;

    .time-title {
      color: #f6921e;
    }
  }

  .time-bg-orange {
    color: #00734A;
    background-color: #f6921e;

    .time-title {
      color: #ffffff;
    }
  }

  .time-bg-gray {
    color: #444444;
    background-color: #a6a8ab;

    .time-title {
      color: #ffffff;
    }
  }
</style>