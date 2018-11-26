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
        <b-modal id="myModal"
                 cancel-variant="none"
                 ok-variant="modal"
                 ok-title="Fechar"
                 size="lg"
                 centered
                 title="Modal Test"
        >
          Modal Test
        </b-modal>
        <carousel :responsive="{ 0:{ items: 1, nav: false }, 600:{ items: 2, nav: true} }">
          <div class="item">
            <a href="#" v-b-modal="'myModal'" class="item-link">
              <div class="col-md-6 time-content time-bg-green">
                <h5 class="time-title">2008</h5>
                <div class="time-body">
                  <p class="time-text">
                    Identificação das espécies da fauna e flora na área de influência da CSP
                  </p>
                </div>
              </div>
              <div class="col-md-6 time-img-content">
                <figure class="time-img" style="background: url('http://www.cspecem.com/wp-content/uploads/2016/12/FJS_5066.jpg')no-repeat center/cover"></figure>
              </div>
            </a>
            <a href="#" class="item-link">
              <div class="col-md-6 time-img-content">
                <figure class="time-img" style="background: url('http://www.cspecem.com/wp-content/uploads/2016/12/DSC02680.jpg')no-repeat center/cover"></figure>
              </div>
              <div class="col-md-6 time-content time-bg-orange">
                <h5 class="time-title">2009</h5>
                <div class="time-body">
                  <p class="time-text">
                    Identificação das espécies da fauna e flora na área de influência da CSP
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="#" class="item-link">
              <div class="col-md-6 time-content time-bg-gray">
                <h5 class="time-title">
                  2010
                </h5>
                <div class="time-body">
                  <p class="time-text">
                    Identificação das espécies da fauna e flora na área de influência da CSP
                  </p>
                </div>
              </div>
              <div class="col-md-6 time-img-content">
                <figure class="time-img" style="background: url('http://www.cspecem.com/wp-content/uploads/2016/12/xiloteca-CSP.jpg')no-repeat center/cover"></figure>
              </div>
            </a>
            <a href="#" class="item-link">
              <div class="col-md-6 time-img-content">
                <figure class="time-img" style="background: url('http://www.cspecem.com/wp-content/uploads/2016/12/DSC_3011.jpg')no-repeat center/cover"></figure>
              </div>
              <div class="col-md-6 time-content time-bg-green">
                <h5 class="time-title">
                  2011
                </h5>
                <div class="time-body">
                  <p class="time-text">
                    Identificação das espécies da fauna e flora na área de influência da CSP
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="#" class="item-link">
              <div class="col-md-6 time-content time-bg-orange">
                <h5 class="time-title">
                  2012
                </h5>
                <div class="time-body">
                  <p class="time-text">
                    Identificação das espécies da fauna e flora na área de influência da CSP
                  </p>
                </div>
              </div>
              <div class="col-md-6 time-img-content">
                <figure class="time-img" style="background: url('http://www.cspecem.com/wp-content/uploads/2016/12/FJS_5066.jpg')no-repeat center/cover"></figure>
              </div>
            </a>
            <a href="#" class="item-link">
              <div class="col-md-6 time-img-content">
                <figure class="time-img" style="background: url('http://www.cspecem.com/wp-content/uploads/2016/12/DSC02680.jpg')no-repeat center/cover"></figure>
              </div>
              <div class="col-md-6 time-content time-bg-gray">
                <h5 class="time-title">
                  2013
                </h5>
                <div class="time-body">
                  <p class="time-text">
                    Identificação das espécies da fauna e flora na área de influência da CSP
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="#" class="item-link">
              <div class="col-md-6 time-content time-bg-orange">
                <h5 class="time-title">
                  2014
                </h5>
                <div class="time-body">
                  <p class="time-text">
                    Identificação das espécies da fauna e flora na área de influência da CSP
                  </p>
                </div>
              </div>
              <div class="col-md-6 time-img-content">
                <figure class="time-img" style="background: url('http://www.cspecem.com/wp-content/uploads/2016/12/FJS_5066.jpg')no-repeat center/cover"></figure>
              </div>
            </a>
            <a href="#" class="item-link">
              <div class="col-md-6 time-img-content">
                <figure class="time-img" style="background: url('http://www.cspecem.com/wp-content/uploads/2016/12/DSC02680.jpg')no-repeat center/cover"></figure>
              </div>
              <div class="col-md-6 time-content time-bg-gray">
                <h5 class="time-title">
                  2015
                </h5>
                <div class="time-body">
                  <p class="time-text">
                    Identificação das espécies da fauna e flora na área de influência da CSP
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="#" class="item-link">
              <div class="col-md-6 time-content time-bg-orange">
                <h5 class="time-title">
                  2016
                </h5>
                <div class="time-body">
                  <p class="time-text">
                    Identificação das espécies da fauna e flora na área de influência da CSP
                  </p>
                </div>
              </div>
              <div class="col-md-6 time-img-content">
                <figure class="time-img" style="background: url('http://www.cspecem.com/wp-content/uploads/2016/12/FJS_5066.jpg')no-repeat center/cover"></figure>
              </div>
            </a>
            <a href="#" class="item-link">
              <div class="col-md-6 time-img-content">
                <figure class="time-img" style="background: url('http://www.cspecem.com/wp-content/uploads/2016/12/DSC02680.jpg')no-repeat center/cover"></figure>
              </div>
              <div class="col-md-6 time-content time-bg-gray">
                <h5 class="time-title">
                  2017
                </h5>
                <div class="time-body">
                  <p class="time-text">
                    Identificação das espécies da fauna e flora na área de influência da CSP
                  </p>
                </div>
              </div>
            </a>
          </div>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
  import carousel from 'vue-owl-carousel'
  export default {
    name: "TimeLine",
    components: {
      carousel
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

    },

    mounted() {
      setTimeout(
          _=> this.loading = false,
          3000
      )
    },

    created() {

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