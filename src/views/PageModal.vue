<template>
  <section class="section page-modal">
    <!-- loading -->
    <div class="container loading" v-if="loading">

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
    <!-- page content -->
    <div class="container" v-else>
      <h3 class="page-title">
        Plantas
      </h3>
      <div class="page-content">
        <!-- the modal -->
        <b-modal id="myModal"
                 cancel-variant="none"
                 size="lg"
                 centered title="Title Test"
        >
          <div class="row">
            <div class="col-md-6">
              <p><strong>Sistema de Aspersão de Água</strong></p>
              <p>
                Para controlar a emissão de material
                particulado nas pilhas do Pátio de Matérias- Primas,
                a CSP conta com um sistema de aspersão que utiliza
                água recirculada. Além desse controle, é realizada a
                aspersão nas vias de acesso ao pátio.
              </p>
              <p><strong>Sistema de Aspersão de Água</strong></p>
              <p>
                Para controlar a emissão de material
                particulado nas pilhas do Pátio de Matérias- Primas,
                a CSP conta com um sistema de aspersão que utiliza
                água recirculada. Além desse controle, é realizada a
                aspersão nas vias de acesso ao pátio.
              </p>
              <p><strong>Sistema de Aspersão de Água</strong></p>
              <p>
                Para controlar a emissão de material
                particulado nas pilhas do Pátio de Matérias- Primas,
                a CSP conta com um sistema de aspersão que utiliza
                água recirculada. Além desse controle, é realizada a
                aspersão nas vias de acesso ao pátio.
              </p>
            </div>
            <div class="col-md-6">
              <img src="http://www.cspecem.com/wp-content/uploads/2016/12/patio.jpg" class="w-100 sticky-top" alt="">
            </div>
          </div>
        </b-modal>
        <div class="row">
          <div class="col-md-4">
            <div class="card" v-b-modal="'myModal'">
              <div class="card-img-content">
                <img src="http://www.cspecem.com/wp-content/uploads/2016/12/patio.jpg" class="card-img" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title">Patio de materias-primas</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="http://www.cspecem.com/wp-content/uploads/2016/12/patio.jpg" class="card-img" alt="">
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="http://www.cspecem.com/wp-content/uploads/2016/12/patio.jpg" class="card-img" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "PageModal",
    data() {
      return {
        loading: false,
        error: false,
        modalItem: {},
        message: {
          alert1: 'OPS!',
          alert2: 'Algo errado aconteceu, recarregue a página novamente.',
        },
      }
    }
  }
</script>

<style scoped lang="scss">
  .card {
    cursor: pointer;
    border: none;

    &-body { padding-top: 0.8rem; }

    &-title {
      text-align: center;
      font-family: "Centuma", Roboto, sans-serif;
      font-size: 15px;
    }

    &-img-content { overflow: hidden; }
    
    &-img {
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

  .modal-body {
    max-height: 400px;
    overflow: auto;

    p {
      font-size: 14px;
    }
  }
</style>