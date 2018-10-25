<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item"
           v-for="(img, index) in images"
           :key="index"
           :style="{
              background: 'url('+ img.url +')',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              //height: '550px'
           }"
           :class="{active: index == 0}"
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
  export default {
    name: "Slider",
    data() {
      return {
        images: [
          { url: 'http://www.cspecem.com/wp-content/uploads/2018/06/BANNERSITE-1536X480px-PODCAST-CSP.png' },
          { url: 'http://www.cspecem.com/wp-content/uploads/2018/04/AN_BANNER_SITE_10ANOS.jpg' },
          { url: 'http://www.cspecem.com/wp-content/uploads/2017/12/csp_somosacoecoracao_bannersite_v2-05.jpg' },
          { url: 'http://www.cspecem.com/wp-content/uploads/2017/12/csp_somosacoecoracao_bannersite_v2-04.jpg' },
          { url: 'http://www.cspecem.com/wp-content/uploads/2017/12/csp_somosacoecoracao_bannersite_v2-03.jpg' },
          { url: 'http://www.cspecem.com/wp-content/uploads/2018/10/banner_site_jovem_aprendiz.png' },
        ]
      }
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

  .carousel-item {
    height: 550px;
  }

  @media (max-width: 768px) {
    .carousel-item {
      height: 200px;
    }
  }

  @media (min-width: 1800px) and (max-width: 1920px) {
    .carousel-item {
      height: 700px;
    }
  }
</style>