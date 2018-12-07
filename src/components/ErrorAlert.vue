<i18n>
  {
    "pt_BR": {
      "alert1": "OPS!",
      "alert2": "Algo errado aconteceu, recarregue a página novamente."
    },

    "en": {
      "alert1": "OPS!",
      "alert2": "Something wrong happened, reload the page again."
    }
  }
</i18n>

<template>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{{ $t('alert1') }}</strong> {{ $t('alert2') }}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "ErrorAlert",
    watch: {
      locale(val) {
        this.$i18n.locale = val;
      }
    },

    computed: {
      ...mapState([
          'locale'
      ])
    }
  }
</script>

<style scoped lang="scss">

</style>