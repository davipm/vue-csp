<template>
  <div class="share-buttons">
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
        <a href="#" class="share-link">
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
        shareMessage: 'Compartilhar'
      }
    },
    methods: {
      printPage() {
        window.print();
      }
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