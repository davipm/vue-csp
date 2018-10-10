<template>
  <footer class="section footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <ul class="menu-footer">
            <li class="menu-footer-item">
              <router-link :to="`/page/`" class="menu-footer-link">
                Fale Conosco
              </router-link>
            </li>
            <li class="menu-footer-item">
              <a href="#" class="menu-footer-link">Você na CSP</a>
            </li>
            <li class="menu-footer-item">
              <a href="#" class="menu-footer-link">Patrocínio</a>
            </li>
            <li class="menu-footer-item">
              <a href="#" class="menu-footer-link">Gestão Ambental</a>
            </li>
            <li class="menu-footer-item">
              <a href="#" class="menu-footer-link">Trabalhe Conosco</a>
            </li>
            <li class="menu-footer-item">
              <a href="#" class="menu-footer-link">Portal de Acionista</a>
            </li>
            <li class="menu-footer-item">
              <a href="#" class="menu-footer-link">Newsletter</a>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <div class="footer-content">
            <ul class="list-menu-footer">
              <li class="list-menu-item">
                <a href="#" class="list-menu-link"></a>
              </li>
              <li class="list-menu-item">
                <a href="#" class="list-menu-link">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-menu-item">
                <a href="#" class="list-menu-link">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li class="list-menu-item">
                <a href="#" class="list-menu-link">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
            <form class="form-footer">
              <input type="text" class="form-control input-footer" placeholder="Search" aria-label="Search">
              <button class="btn-search-footer"><i class="fas fa-search"></i></button>
            </form>
          </div>
          <div class="footer-info">
            <router-link :to="'/page/mapa-site'" class="footer-info-link mr-2">
              Mapa Site
            </router-link> |
            <router-link :to="'/page/politica-de-privacidade'" class="footer-info-link ml-2">
              Politica de Privacidade
            </router-link>
            <address class="footer-address mt-3">
              <p class="address-item mb-0">Copyright © 2018 - Companhia Siderúrgica do Pecém</p>
              <p class="address-item mb-0">Rodovia CE 155, s/n, km 11,5 – São Gonçalo do Amarante/CE</p>
            </address>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {

      }
    },
  }
</script>

<style scoped lang="scss">
  .footer {
    background-color: #65666A;
  }

  .footer-content {
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
  }

  .menu-footer {
    padding: 0;
    list-style: none;
  }

  .menu-footer-link {
    display: inline-block;
    font-family: "Centuma", sans-serif;
    font-weight: 300;
    color: #fff;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .list-menu-footer {
    padding: 0;
    margin: 0 20px;
    list-style: none;
    display: flex;
  }

  .list-menu-link {
    display: inline-block;
    padding-top: 1px;
    width: 27px;
    height: 27px;
    text-align: center;
    border-radius: 50%;
    background-color: #cdcdcd;
    color: #808184;
    margin-left: 5px;
  }

  .form-footer {
    display: flex;
  }

  .input-footer {
    height: 27px;
    width: 160px;
    border-radius: 6px;
    background: #D8D9DA;
    color: #808184;

    &:focus {
      background: #D8D9DA;
      color: #808184;
    }
  }

  .btn-search-footer {
    cursor: pointer;
    border: none;
    background: inherit;
    position: absolute;
    right: 15px;
  }

  .footer-info {
    font-family: "Centuma", Roboto, sans-serif;
    text-align: right;
    color: #fff;
    font-size: 14px;
    margin-top: 70px;
  }

  .footer-info-link {
    color: #fff;
  }
</style>