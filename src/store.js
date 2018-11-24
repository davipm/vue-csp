import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locale: 'pt_BR',
    br_flag: false,
    en_flag: true,
  },

  getters: {
    currentLang: state => {
      return state.locale;
    }
  },

  mutations: {
    CHANGE_LANG() {
      if (this.state.locale === 'pt_BR') {
        this.state.locale = 'en'
      }
      else {
        this.state.locale = 'pt_BR'
      }
      this.state.br_flag = !this.state.br_flag;
      this.state.en_flag = !this.state.en_flag;
    }
  },

  actions: {

  }
})
