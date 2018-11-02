<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <button class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
      >
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
                <a class="submenu-link">
                  Meio Ambiente
                  <i class="fas fa-chevron-right"></i>
                </a>
                <ul class="submenu-lv-2">
                  <li class="submenu-item-lv-2">
                    <router-link :to="`/page/`" class="submenu-link">
                      Linha do tempo Sustentável
                    </router-link>
                  </li>
                  <li class="submenu-item-lv-2">
                    <a class="submenu-link">
                      Gestão Ambiental
                      <i class="fas fa-chevron-right"></i>
                    </a>
                    <ul class="submenu-lv-3">
                      <li class="submenu-item-lv-3">
                        <router-link :to="`/page/pre-operacao`" class="submenu-link">
                          Pré-operação
                        </router-link>
                      </li>
                      <li class="submenu-item-lv-3">
                        <router-link :to="`/page/nossa-gestao`" class="submenu-link">
                          Operação
                        </router-link>
                      </li>
                      <li class="submenu-item-lv-3">
                        <router-link :to="`/page/educacao-ambiental`" class="submenu-link">
                          Educação Ambiental
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="submenu-item-lv-2">
                    <router-link :to="`/page/monitoramento-ambiental`" class="submenu-link">
                      Monitoramento Ambiental
                    </router-link>
                  </li>
                  <li class="submenu-item-lv-2">
                    <a class="submenu-link">
                      Controles Ambientais
                      <i class="fas fa-chevron-right"></i>
                    </a>
                    <ul class="submenu-lv-3">
                      <li class="submenu-item-lv-3">
                        <router-link :to="`/page/`" class="submenu-link">
                          Plantas
                        </router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="submenu-item">
                <a class="submenu-link">
                  Relação com a comunidade
                  <i class="fas fa-chevron-right"></i>
                </a>
                <ul class="submenu-lv-2">
                  <li class="submenu-item-lv-2">
                    <router-link :to="`/page/nossa-relacao-com-a-comunidade`" class="submenu-link">
                      Nossa Relação com a Comunidade
                    </router-link>
                  </li>
                  <li class="submenu-item-lv-2">
                    <router-link :to="`/page/programa-territorio-empreendedor`" class="submenu-link">
                      Programa Território Empreendedor
                      <i class="fas fa-chevron-right"></i>
                    </router-link>
                    <ul class="submenu-lv-3">
                      <li class="submenu-item-lv-3">
                        <router-link :to="`/page/fortalecimento-da-base-produtiva-2`" class="submenu-link">
                          Inscrições - Eixo Fortalecimento da base produtiva
                        </router-link>
                      </li>
                      <li class="submenu-item-lv-3">
                        <router-link :to="`/page/cultura-empreendedora-2`" class="submenu-link">
                          Inscrições - Eixo Cultura Empreendedora
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="submenu-item-lv-2">
                    <router-link :to="`/page/infraestrutura-social`" class="submenu-link">
                      Infraestrutura social
                    </router-link>
                  </li>
                  <li class="submenu-item-lv-2">
                    <router-link :to="`/page/programa-de-dialogo-social`" class="submenu-link">
                      Programa de dialogo Social
                    </router-link>
                  </li>
                  <li class="submenu-item-lv-2">
                    <router-link :to="`/page/ideia-da-gente`" class="submenu-link">
                      Ideia da Gente
                    </router-link>
                  </li>
                </ul>
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
                <router-link :to="`/page/`" class="submenu-link">
                  Co-produtos
                </router-link>
              </li>
              <li class="submenu-item">
                <router-link to="/" class="submenu-link">
                  Certificações
                  <i class="fas fa-chevron-right"></i>
                </router-link>
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
                <router-link :to="`/page/`" class="submenu-link">
                  CSP Podcast
                </router-link>
              </li>
              <li class="submenu-item">
                <router-link to="/" class="submenu-link">
                  Sala de Imprensa
                </router-link>
              </li>
              <li class="submenu-item">
                <router-link to="/" class="submenu-link">
                  Saiu na Midia
                </router-link>
              </li>
              <li class="submenu-item">
                <router-link to="/page/assessoria-de-imprensa" class="submenu-link">
                  Acessoria de Imprensa
                </router-link>
              </li>
              <li class="submenu-item">
                <router-link to="/page/imprensa/cspnews" class="submenu-link">
                  CSP News
                </router-link>
              </li>
              <li class="submenu-item">
                <router-link to="/page/imprensa/cspnotcias" class="submenu-link">
                  CSP Notícias
                </router-link>
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
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped lang="scss">
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

  .submenu-item::after,
  .submenu-item-lv-2::after,
  .submenu-item-lv-3::after {
    content: '';
    display: block;
    width: 93%;
    margin: auto;
    height: 1px;
    background-color: #fff;
  }

  .submenu-item:last-child::after,
  .submenu-item-lv-2:last-child::after,
  .submenu-item-lv-3:last-child::after {
    height: 0;
  }

  .submenu-link {
    display: block;
    padding: .5rem;
    font-size: 13px;
    text-decoration: none;
    background-color: #00734A;
    color: #fff;
    cursor: pointer;
    -webkit-transition: all .15s ease-in-out;
    -moz-transition: all .15s ease-in-out;
    -ms-transition: all .15s ease-in-out;
    -o-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;

    &:not([href]):not([tabindex]) {
      background-color: #00734A;
      color: #fff;
    }

    &:hover {
      text-decoration: none;
    }
  }

  .submenu-item > .submenu-lv-2,
  .submenu-item-lv-2 > .submenu-lv-3 {
    position: absolute;
    display: none;
    left: 240px;
    min-width: 240px;
    list-style: none;
    padding: 0;
    background-color: #003A1F;
  }

  .nav-item:hover .submenu {
    display: block;
  }

  .submenu-item:hover > .submenu-link {
    background-color: #003A1F;
    color: #fff;
  }

  .submenu-item:hover > .submenu-lv-2,
  .submenu-item-lv-2:hover > .submenu-lv-3 {
    margin-top: -35px;
    display: block;
  }

  .nav-item:hover .nav-link {
    background-color: #00734A;
    color: #fff;
  }

  .submenu-item-lv-2 > .submenu-link {
    background-color: #003A1F;

    &:not([href]):not([tabindex]) {
      background-color: #003A1F;
      color: #fff;
    }
  }

  .submenu-item-lv-2:hover > .submenu-link {
    background-color: #00734A;
  }

  .submenu-lv-3 > .submenu-link {
    background-color: #00734A;

    &:not([href]):not([tabindex]) {
      background-color: #00734A;
      color: #fff;
    }
  }

  .submenu-item-lv-3:hover > .submenu-link {
    background-color: #003A1F;
  }

  .fa-chevron-right {
    float: right;
    position: relative;
    top: 5px;
  }

  // mobile grid's
  @media (max-width: 768px) {
    .navbar {
      display: none;
    }
  }
</style>