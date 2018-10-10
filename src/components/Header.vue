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
            <form class="form-header">
              <input type="text" class="form-control input-header" placeholder="Search" aria-label="Search">
              <button class="btn-search-header"><i class="fas fa-search"></i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <!--<a class="navbar-brand" href="#">Navbar</a>-->
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
                  <router-link :to="`/page/misao-visao-valores/77`" class="submenu-link">
                    Misão, Visão e Valores
                  </router-link>
                </li>
                <li class="submenu-item">
                  <router-link :to="`/page/nossa-historia/102`" class="submenu-link">
                    Nossa História
                  </router-link>
                </li>
                <li class="submenu-item">
                  <a href="#" class="submenu-link">
                    Diretoria
                  </a>
                </li>
                <li class="submenu-item">
                  <a href="#" class="submenu-link">
                    Programa de Visitas
                  </a>
                </li>
                <li class="submenu-item">
                  <a href="#" class="submenu-link">
                    Complexo Insdustrial e Portuário do Pecém
                  </a>
                </li>
                <li class="submenu-item">
                  <a href="#" class="submenu-link">
                    Processo de produção do aço
                  </a>
                </li>
                <li class="submenu-item">
                  <a href="#" class="submenu-link">
                    Patrocínios
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link :to="`/page/pagina-principal/58`" class="nav-link">
                Página Principal
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="`/page/produtos`" class="nav-link">
                Produtos
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="`/page/fornecedores`" class="nav-link">
                Fornecedores
              </router-link>
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
    padding-top: 1px;
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
</style>