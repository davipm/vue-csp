import Vue from 'vue'
import bCarousel from 'bootstrap-vue/es/components/carousel/carousel'
import bCarouselSlide from 'bootstrap-vue/es/components/carousel/carousel-slide'
import bAlert from 'bootstrap-vue/es/components/alert/alert'
import bModal from 'bootstrap-vue/es/components/modal/modal'
import vBModal from 'bootstrap-vue/es/directives/modal/modal'
import bPagination from 'bootstrap-vue/es/components/pagination/pagination';

Vue.component('b-pagination', bPagination);
Vue.directive('b-modal', vBModal);
Vue.component('b-modal', bModal);
Vue.component('b-alert', bAlert);
Vue.component('b-carousel', bCarousel);
Vue.component('b-carousel-slide', bCarouselSlide);