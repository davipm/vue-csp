<i18n>
  {
    "pt_BR": {
      "printMessage": "Imprimir",
      "shareMessage": "Compartilhar"
    },

    "en": {
      "printMessage": "Print Page",
      "shareMessage": "Share it"
    }
  }
</i18n>

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
          {{ $t('printMessage') }}
        </a>
      </li>
      <li class="share-item">
        <a :href="`https://www.facebook.com/sharer/sharer.php?u=${getUrlShare()}`"
           class="share-link"
           target="_blank"
        >
          <i class="fas fa-share-alt"></i>
          {{ $t('shareMessage') }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "ShareContent",
    data() {
      return {
        massageError: 'Esta função ainda não está implementada',
        dismissSecs: 3,
        dismissCountDown: 0
      }
    },

    watch: {
      '$route'() {
        this.getUrlShare();
      },

      locale(val) {
        this.$i18n.locale = val;
      }
    },

    methods: {
      printPage() {
        window.print();
      },

      countDownChanged( dismissCountDown ) {
        this.dismissCountDown = dismissCountDown;
      },

      getUrlShare() {
        return window.location.href;
      }
    },

    computed: {
      ...mapState([
        'locale'
      ])
    },

    created() {
      this.getUrlShare();
      this.$i18n.locale = this.locale;
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