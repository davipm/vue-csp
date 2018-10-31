<template>
  <div class="share-buttons">
    <!-- alert massage -->
    <b-alert :show="dismissCountDown"
             fade
             dismissible
             variant="warning"
             @dismissed="dismissCountDown = 0"
             @dismiss-count-down="countDownChanged"
    >
      {{ massageError }}
    </b-alert>

    <!-- share buttons -->
    <ul class="share-list">
      <li class="share-item">
        <a href="#"
           @click.prevent="printPage"
           class="share-link"
        >
          <i class="fas fa-print"></i>
          {{ printMessage }}
        </a>
      </li>
      <li class="share-item">
        <a href="#"
           @click.prevent="showAlert"
           class="share-link"
        >
          <i class="fas fa-share-alt"></i>
          {{ shareMessage }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ShareContent",
    data() {
      return {
        printMessage: 'Imprimir',
        shareMessage: 'Compartilhar',
        massageError: 'Esta função ainda não está implementada',
        dismissSecs: 3,
        dismissCountDown: 0
      }
    },

    watch: {
      '$route'() {
        console.log(window.location.href); // test for sharing post
      }
    },

    methods: {
      printPage() {
        window.print();
      },

      countDownChanged( dismissCountDown ) {
        this.dismissCountDown = dismissCountDown;
      },

      showAlert() {
        this.dismissCountDown = this.dismissSecs;
      }
    },

    created() {
      console.log(window.location.href); // test for sharing post
    }
  }
</script>

<style scoped lang="scss">
  // share buttons page/post
  .share-buttons {
    margin-top: 1.5rem;
  }

  .share-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    list-style: none;
  }

  .share-link {
    display: inline-block;
    color: #34343c;
    font-family: "Centuma", Roboto, sans-serif;
    font-weight: 300;
    font-size: 14px;
    margin-right: 15px;

    &:hover {
       color: #34343c;
     }
  }
</style>