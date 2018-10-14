<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="header-logo">
            <router-link to="/" class="logo-router">
              <img src="../assets/imgs/logo-default.png" alt="Logo CSP">
            </router-link>
          </div>
        </div>
        <div class="col-md-6">
          <div class="container-right">
            <ul class="list-menu-header">
              <li class="list-menu-item">
                <a href="#" class="list-menu-link" title="English Translate">
                  <svg style="position: relative;bottom: 2px;width: 20px;" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 640 480">
                    <g fill-rule="evenodd">
                      <g stroke-width="1pt">
                        <path fill="#bd3d44" d="M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z" transform="scale(.9375)"/>
                        <path fill="#fff" d="M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z" transform="scale(.9375)"/>
                      </g>
                      <path fill="#192f5d" d="M0 0h389.1v275.7H0z" transform="scale(.9375)"/>
                      <path fill="#fff" d="M32.4 11.8L36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9L36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1L36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0l3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z" transform="scale(.9375)"/>
                    </g>
                  </svg>
                </a>
              </li>
              <li class="list-menu-item">
                <a href="https://www.facebook.com" target="_blank" class="list-menu-link">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-menu-item">
                <a href="https://www.youtube.com/watch?v=cNplZrRSjeI" target="_blank" class="list-menu-link">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li class="list-menu-item">
                <a href="https://www.linkedin.com" target="_blank" class="list-menu-link">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
            <form class="form-header">
              <input type="text" class="form-control input-header" placeholder="Pesquisar" aria-label="Search">
              <button class="btn-search-header"><i class="fas fa-search"></i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="#" class="nav-link">
                Sobre a CSP
              </router-link>
              <ul class="submenu">
                <li class="submenu-item">
                  <router-link :to="`/page/visao-missao-e-valores`" class="submenu-link">
                    Misão, Visão e Valores
                  </router-link>
                </li>
                <li class="submenu-item">
                  <router-link :to="`/page/nossa-historia`" class="submenu-link">
                    Nossa História
                  </router-link>
                </li>
                <li class="submenu-item">
                  <router-link :to="`/page/diretoria`" class="submenu-link">
                    Diretoria
                  </router-link>
                </li>
                <li class="submenu-item">
                  <router-link :to="`/page/voce-na-csp`" class="submenu-link">
                    Programa de Visitas
                  </router-link>
                </li>
                <li class="submenu-item">
                  <router-link :to="`/page/complexo-industrial-e-portuario-do-pecem`" class="submenu-link">
                    Complexo Insdustrial e Portuário do Pecém
                  </router-link>
                </li>
                <li class="submenu-item">
                  <router-link :to="`/page/processo-de-producao-do-aco`" class="submenu-link">
                    Processo de produção do aço
                  </router-link>
                </li>
                <li class="submenu-item">
                  <router-link :to="`/page/patrocinios`" class="submenu-link">
                    Patrocínios
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link :to="`/page/pagina-principal/58`" class="nav-link">
                Sustentabilisade
              </router-link>
              <ul class="submenu">
                <li class="submenu-item">
                  <router-link :to="`/page/misao-visao-valores/77`" class="submenu-link">
                    Meio Ambiente
                    <i class="fas fa-chevron-right"></i>
                  </router-link>
                </li>
                <li class="submenu-item">
                  <router-link :to="`/page/nossa-historia/102`" class="submenu-link">
                    Relação com a comunidade
                    <i class="fas fa-chevron-right"></i>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link :to="`/page/produtos`" class="nav-link">
                Produtos
              </router-link>
              <ul class="submenu">
                <li class="submenu-item">
                  <router-link :to="`/page/placas`" class="submenu-link">
                    Placas
                  </router-link>
                </li>
                <li class="submenu-item">
                  <router-link :to="`/page/nossa-historia/102`" class="submenu-link">
                    Co-produtos
                  </router-link>
                </li>
                <li class="submenu-item">
                  <a href="#" class="submenu-link">
                    Certificações
                    <i class="fas fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link :to="`/page/fornecedores`" class="nav-link">
                Fornecedores
              </router-link>
              <ul class="submenu">
                <li class="submenu-item">
                  <router-link :to="`/page/seja-nosso-fornecedor`" class="submenu-link">
                    Seja nosso fornecedor
                  </router-link>
                </li>
                <li class="submenu-item">
                  <router-link :to="`/page/pre-cadastro`" class="submenu-link">
                    Pré-cadastro
                  </router-link>
                </li>
                <li class="submenu-item">
                  <router-link :to="`/page/cartilha-do-fornecedor`" class="submenu-link">
                    Cartilha do Fornecedor
                  </router-link>
                </li>
                <li class="submenu-item">
                  <router-link :to="`/page/portal-e-fornecedores`" class="submenu-link">
                    Portal e-Fornecedores
                  </router-link>
                </li>
                <li class="submenu-item">
                  <router-link :to="`/page/duvidas-frequentes`" class="submenu-link">
                    Dúvidas Frequentes
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link :to="`/page/trabalhe-conosco`" class="nav-link">
                Trabalhe Conosco
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="`/page/imprensa`" class="nav-link">
                Imprensa
              </router-link>
              <ul class="submenu">
                <li class="submenu-item">
                  <router-link :to="`/page/misao-visao-valores/77`" class="submenu-link">
                    Notícias
                  </router-link>
                </li>
                <li class="submenu-item">
                  <router-link :to="`/page/nossa-historia/102`" class="submenu-link">
                    CSP Podcast
                  </router-link>
                </li>
                <li class="submenu-item">
                  <a href="#" class="submenu-link">
                    Sala de Imprensa
                  </a>
                </li>
                <li class="submenu-item">
                  <a href="#" class="submenu-link">
                    Saiu na Midia
                  </a>
                </li>
                <li class="submenu-item">
                  <a href="#" class="submenu-link">
                    Acessoria de Imprensa
                  </a>
                </li>
                <li class="submenu-item">
                  <a href="#" class="submenu-link">
                    CSP News
                  </a>
                </li>
                <li class="submenu-item">
                  <a href="#" class="submenu-link">
                    CSP Notícias
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link :to="`/page/ouvidoria`" class="nav-link">
                Ouvidoria
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="`/page/fale-conosco`" class="nav-link">
                Fale Conosco
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    padding-top: 20px;
    &::after {
      content: '';
      display: block;
      height: 10px;
      background: #fff url("../assets/imgs/bordar-slider.png") no-repeat center/cover;
      width: 100%;
    }
  }

  .list-menu-header {
    display: inline-flex;
    margin: 0 20px;
    padding: 0;
    list-style: none;
  }

  .list-menu-link {
    display: block;
    padding-top: 2px;
    width: 27px;
    height: 27px;
    text-align: center;
    background: #808184;
    border-radius: 50%;
    color: #fff;
    margin-left: 5px;
  }

  .container-right {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding-top: 10px;
  }

  .form-header {
    display: inline-flex;
  }

  .input-header {
    padding-bottom: 8px;
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

  .btn-search-header {
    border: none;
    background: inherit;
    cursor: pointer;
    position: absolute;
    top: 12px;
    right: 20px;
  }

  .navbar {
    padding-bottom: 0;
  }

  .navbar-collapse {
    justify-content: center;
  }

  .nav-link {
    color: #34343c;
    font-weight: 500;
    letter-spacing: 1px;
    -webkit-transition: all 0.15s ease-in-out;
    -moz-transition: all 0.15s ease-in-out;
    -ms-transition: all 0.15s ease-in-out;
    -o-transition: all 0.15s ease-in-out;
    transition: all 0.15s ease-in-out;

    &:hover {
      background-color: #00734A;
      color: #fff;
    }
  }

  /*.navbar-expand-lg .navbar-nav .nav-link {*/
    /*padding-left: 1rem;*/
    /*padding-right: 1rem;*/
  /*}*/

  .router-link-exact-active {
    background-color: #00734A;
    color: #fff;
  }

  .logo-router {
    background-color: inherit;
  }

  .submenu {
    display: none;
    position: absolute;
    padding: 0;
    list-style: none;
    z-index: 1;
    min-width: 240px;
    max-width: 240px;
    background-color: #00734A;
  }

  .submenu-item::after {
    content: '';
    display: block;
    width: 93%;
    margin: auto;
    height: 1px;
    background-color: #fff;
  }

  .submenu-item:last-child::after {
    height: 0;
  }

  .submenu-link {
    display: block;
    padding: .5rem;
    font-size: 14px;
    text-decoration: none;
    background-color: #00734A;
    color: #fff;
    -webkit-transition: all .15s ease-in-out;
    -moz-transition: all .15s ease-in-out;
    -ms-transition: all .15s ease-in-out;
    -o-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;

    &:hover {
      text-decoration: none;
    }
  }

  .nav-item:hover .submenu {
    display: block;
  }

  .nav-item:hover .nav-link {
    background-color: #00734A;
    color: #fff;
  }

  .submenu-item:hover .submenu-link {
    background-color: #003A1F;
    color: #fff;
  }

  .fa-chevron-right {
    float: right;
    position: relative;
    top: 5px;
  }
</style>