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
              <a class="nav-link">
                Sobre a CSP
              </a>
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
              <a class="nav-link">
                Sustentabilisade
              </a>
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
              <a class="nav-link">
                Produtos
              </a>
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
              <a class="nav-link">
                Fornecedores
              </a>
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
              <a class="nav-link">
                Imprensa
              </a>
              <ul class="submenu">
                <li class="submenu-item">
                  <router-link :to="`/page/imprensa/posts`" class="submenu-link">
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
    <ul class="nav-mobile">
      <li></li>
      <li class="menu-container">
        <input id="menu-toggle" type="checkbox">
        <label for="menu-toggle" class="menu-button">
          <svg class="icon-open" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
          <svg class="icon-close" viewBox="0 0 100 100">
            <path d="M83.288 88.13c-2.114 2.112-5.575 2.112-7.69 0L53.66 66.188c-2.113-2.112-5.572-2.112-7.686 0l-21.72 21.72c-2.114 2.113-5.572 2.113-7.687 0l-4.693-4.692c-2.114-2.114-2.114-5.573 0-7.688l21.72-21.72c2.112-2.115 2.112-5.574 0-7.687L11.87 24.4c-2.114-2.113-2.114-5.57 0-7.686l4.842-4.842c2.113-2.114 5.57-2.114 7.686 0l21.72 21.72c2.114 2.113 5.572 2.113 7.688 0l21.72-21.72c2.115-2.114 5.574-2.114 7.688 0l4.695 4.695c2.112 2.113 2.112 5.57-.002 7.686l-21.72 21.72c-2.112 2.114-2.112 5.573 0 7.686L88.13 75.6c2.112 2.11 2.112 5.572 0 7.687l-4.842 4.84z"/>
          </svg>
        </label>
        <div class="menu-sidebar">
          <h6 class="menu-sidebar-title">MENU COMPLETO</h6>
          <ul class="menu-sidebar-content">
            <li>
              <a>Sobre a CSP</a>
            </li>
            <li>
              <a href="#">Sustentabilidade</a>
            </li>
            <li>
              <a href="#">Produtos</a>
            </li>
            <li>
              <a href="#">Fornecedores</a>
            </li>
            <li>
              <a href="#">Trabalhe Conosco</a>
            </li>
            <li>
              <a href="#">Imprensa</a>
            </li>
            <li>
              <a href="#">Ouvidoria</a>
            </li>
            <li>
              <input type="checkbox" id="sub-one" class="submenu-toggle">
              <label class="submenu-label" for="sub-one">Category</label>
              <div class="arrow right">&#8250;</div>
              <ul class="menu-sub">
                <li class="menu-sub-title">
                  <label class="submenu-label" for="sub-one">Back</label>
                  <div class="arrow left">&#8249;</div>
                </li>
                <li><a href="#">Sub-item</a></li>
                <li><a href="#">Sub-item</a></li>
                <li><a href="#">Sub-item</a></li>
                <li><a href="#">Sub-item</a></li>
              </ul>
            </li>
            <li>
              <input type="checkbox" id="sub-two" class="submenu-toggle">
              <label class="submenu-label" for="sub-two">Category</label>
              <div class="arrow right">&#8250;</div>
              <ul class="menu-sub">
                <li class="menu-sub-title">
                  <label class="submenu-label" for="sub-two">Back</label>
                  <div class="arrow left">&#8249;</div>
                </li>
                <li><a href="#">Sub-item</a></li>
                <li><a href="#">Sub-item</a></li>
                <li><a href="#">Sub-item</a></li>
                <li><a href="#">Sub-item</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {

      }
    },
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
    cursor: pointer;
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

  .nav-mobile {
    display: none;
    background: #00734A;
    color: #FFF;
    padding: 0;
    margin: 0;
    cursor: auto;
    font-size: 18px;
    list-style-type: none;
    box-shadow: 0 5px 5px -5px #333;

    &:after { content: ""; display: table; clear: both; }

    svg {
      height: 45px;
      width: 65px;
      padding: 9px;

      path { fill: #fff; }

      &.icon-close {
        display: none;
        padding: 15px;
      }
    }

    li {
      width: 100%;
      height: 45px;
      line-height: 46px;
      text-align: center;
      float: left;

      a {
        display: block;
        color: #fff;
        width: 100%;
        height: 100%;
        text-decoration: none;
      }
    }

    .menu-button {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      cursor: pointer;
      display: block;

      &:after {
        opacity: 0;
        top: 0;
        content: "";
        width: 100vw;
        display: block;
        position: fixed;
        height: 100vh;
        background: rgba(0,0,0,0.5);
        content: "";
        pointer-events: none;
        transition: opacity 0.2s cubic-bezier(0,0,0.3,1);
        transition-delay: 0.1s;
        z-index: 1;
      }
    }

    #menu-toggle {
      display: none;

      &.active ~ .menu-button,
      &:checked ~ .menu-button {
        .icon-close { display: block; }
        .icon-open { display: none; }

        &:after {
          opacity: 1;
          pointer-events: auto;
          transition: opacity 0.3s cubic-bezier(0,0,0.3,1);
        }
      }

      &.active ~ .menu-sidebar,
      &:checked ~ .menu-sidebar {
        transform: translateX(0);
        transition: transform 0.3s cubic-bezier(0,0,0.3,1);
      }
    }

    .menu-container {
      width: 65px;
      float: left;
      cursor: pointer;
      position: absolute;

      .menu-sidebar {
        box-shadow: 5px 0 5px -5px #333;
        display: block;
        width: 65vw;
        bottom: 0;
        background: #007349;
        color: #333;
        position: fixed;
        transform: translateX(-405px);
        transition: transform 0.3s cubic-bezier(0,0,0.3,1);
        top: 0;
        z-index: 2;
        list-style-type: none;
        padding: 0;
        max-width: 400px;

        .arrow {
          position: absolute;
          line-height: 50px;
          font-size: 32px;
          top: 0;
          z-index: 0;

          &.left { left: 25px; }
          &.right { right: 25px; }
        }

        li {
          height: 55px;
          line-height: 55px;
          font-size: 16px;
          text-align: left;
          position: relative;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          padding-left: 20px;

          &:hover { background: #003A1F; }

          .menu-sub {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: 0;
            overflow: hidden;
            background: #007349;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0,0,0.3,1);
            border-left: 1px solid #ccc;
            list-style-type: none;
            padding: 0;
            margin: 0;
            z-index: 2;
            max-width: 400px;

            li { overflow: hidden; }

            .menu-sub-title { padding-left: 50px; }
          }

          .submenu-label {
            cursor: pointer;
            width: 100%;
            height: 100%;
            display: block;
          }

          .submenu-toggle {
            display: none;

            &.active ~ .menu-sub,
            &:checked ~ .menu-sub {
              width: 65vw;
              visibility: visible;
              z-index: 1;
              transition: width 0.35s cubic-bezier(0,0,0.3,1);
            }
          }
        }
      }
    }
  }

  .menu-sidebar-title {
    margin-top: 20px;
    color: #fff;
  }

  .menu-sidebar-content {
    padding: 0;
    list-style: none;
    color: #fff;
  }

  // mobile grid's
  @media (max-width: 768px) {
    .header-logo {
      text-align: center;
    }

    .navbar {
      display: none;
    }

    .container-right {
      margin-bottom: 10px;
    }

    .nav-mobile {
      display: block;
    }
  }
</style>