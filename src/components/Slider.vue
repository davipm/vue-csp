<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item"
           v-for="(item, index) in images2"
           :key="index"
           :style="{
              background: 'url('+ item[0].img.url +')',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              //height: '550px'
           }"
           :class="{active: index === 0}"
      >
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Slider",
    data() {
      return {
        images2: [],
      }
    },

    methods: {
      getSliders() {
        axios.get('/api/v1/slider')
            .then(( res ) => {
              // convert obj in array
              let obj = res.data;
              this.images2 = Object.keys(obj).map(function (key) {
                return [obj[key]];
              });
            })
      }
    },

    created() {
      this.getSliders();
    }
  }
</script>

<style scoped>
  .carousel::after {
    content: '';
    display: block;
    width: 100%;
    height: 10px;
    background: #fff url("../assets/imgs/bordar-slider.png")no-repeat center/cover;
  }

  .carousel-inner {
    height: 550px;
  }

  .carousel-item {
    height: 550px;
  }

  @media (max-width: 768px) {
    .carousel-item,
    .carousel-inner {
      height: 200px;
    }
  }

  @media (min-width: 1800px) and (max-width: 1920px) {
    .carousel-item,
    .carousel-inner {
      height: 700px;
    }
  }
</style>