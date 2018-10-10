<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active"
           style="background: url('http://www.cspecem.com/wp-content/uploads/2018/06/BANNERSITE-1536X480px-PODCAST-CSP.png') no-repeat center/cover;
           height: 550px;">
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
    name: "Slider"
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
</style>