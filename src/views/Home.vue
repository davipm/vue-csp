<template>
  <section class="home">
    <Slider />
    <BlogHome />
  </section>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import BlogHome from '@/components/BlogHome.vue'

export default {
  name: 'home',
  components: {
    Slider,
    BlogHome
  }
}
</script>
