<i18n>
  {
    "pt_BR": {
      "aboutCsp": {
        "aboutCsp": "Sobre a CSP",
        "mission": "Misão, Visão e Valores",
        "ourStory": "Nossa História",
        "directors": "Diretoria",
        "visiting": "Programa de Visitas",
        "complex": "Complexo Industrial e Portuário do Pecém",
        "production": "Processo de produção do aço",
        "sponsorships": "Patrocínios"
      },
      "sustainability": {
        "sustainability": "Sustentabilidade",
        "environment": "Meio Ambiente",
        "timeLine": "Linha do tempo Sustentável",
        "environmentalManagement": "Gestão Ambiental",
        "preOperation": "Pré-operação",
        "operation": "Operação",
        "environmentalEducation": "Educação Ambiental",
        "environmentalMonitoring": "Monitoramento Ambiental",
        "environmentalControls": "Controles Ambientais",
        "plants": "Plantas",
        "relationshipCommunity": "Relação com a comunidade",
        "ourRelationshipCommunity": "Nossa Relação com a Comunidade",
        "territoryEntrepreneurProgram": "Programa Território Empreendedor",
        "strengtheningProductive": "Inscrições - Eixo Fortalecimento da base produtiva",
        "entrepreneurialCulture": "Inscrições - Eixo Cultura Empreendedora",
        "socialInfrastructure": "Infraestrutura social",
        "socialDialogue": "Programa de diálogo Social",
        "peopleIdea": " Ideia da Gente"
      },
      "products": {
        "products": "Produtos",
        "plates": "Placas",
        "coProducts": "Co-produtos",
        "certifications": "Certificações",
        "quality": "Qualidade",
        "product": "Produto",
        "environment": "Meio Ambiente"
       },
      "providers": {
        "providers": "Fornecedores"
       },
      "workWithUs": "Trabalhe Conosco",
      "press": {
        "press": "Imprensa"
       },
      "ombudsman": "Ouvidoria",
      "contact": "Fale Conosco"
    },

    "en": {
      "aboutCsp": {
        "aboutCsp": "About CSP",
        "mission": "Mission, Vision and Values",
        "ourStory": "Our story",
        "directors": "Directors",
        "visiting": "Visiting Program",
        "complex": "Pecém Industrial and Port Complex",
        "production": "Steel production process",
        "sponsorships": "Sponsorships"
      },
      "sustainability": {
        "sustainability": "Sustainability",
        "environment": "Environment",
        "timeLine": "Sustainable Timeline",
        "environmentalManagement": "Environmental management",
        "preOperation": "Pre-operation",
        "operation": "Operation",
        "environmentalEducation": "Environmental education",
        "environmentalMonitoring": "Environmental monitoring",
        "environmentalControls": "Environmental Controls",
        "plants": "Plants",
        "relationshipCommunity": "Relationship with the community",
        "ourRelationshipCommunity": "Our Relationship with the Community",
        "territoryEntrepreneurProgram": "Territory Entrepreneur Program",
        "strengtheningProductive": "Subscriptions - Axis Strengthening of the productive base",
        "entrepreneurialCulture": "Inscriptions - Entrepreneurial Culture Axis",
        "socialInfrastructure": "Social infrastructure",
        "socialDialogue": "Social Dialogue Program",
        "peopleIdea": "People's Idea"
      },
      "products": {
        "products": "Products",
        "plates": "Plates",
        "coProducts": "Co-products",
        "certifications": "Certifications",
        "quality": "Quality",
        "product": "Product",
        "environment": "Environment"
      },
      "providers": {
        "providers": "Providers"
      },
      "workWithUs": "Work with us",
      "press": {
          "press": "Press"
      },
      "ombudsman": "Ombudsman",
      "contact": "Contact us"
    }
  }
</i18n>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link">
              {{ $t('aboutCsp.aboutCsp') }}
            </a>
            <ul class="submenu">
              <li class="submenu-item">
                <router-link :to="`/page/visao-missao-e-valores`" class="submenu-link">
                  {{ $t('aboutCsp.mission') }}
                </router-link>
              </li>
              <li class="submenu-item">
                <router-link :to="`/page/nossa-historia`" class="submenu-link">
                  {{ $t('aboutCsp.ourStory') }}
                </router-link>
              </li>
              <li class="submenu-item">
                <router-link :to="`/page/diretoria`" class="submenu-link">
                  {{ $t('aboutCsp.directors') }}
                </router-link>
              </li>
              <li class="submenu-item">
                <router-link :to="`/page/voce-na-csp`" class="submenu-link">
                  {{ $t('aboutCsp.visiting') }}
                </router-link>
              </li>
              <li class="submenu-item">
                <router-link :to="`/page/complexo-industrial-e-portuario-do-pecem`" class="submenu-link">
                  {{ $t('aboutCsp.complex') }}
                </router-link>
              </li>
              <li class="submenu-item">
                <router-link :to="`/page/processo-de-producao-do-aco`" class="submenu-link">
                  {{ $t('aboutCsp.production') }}
                </router-link>
              </li>
              <li class="submenu-item">
                <router-link :to="`/page/patrocinios`" class="submenu-link">
                  {{ $t('aboutCsp.sponsorships') }}
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              {{ $t('sustainability.sustainability') }}
            </a>
            <ul class="submenu">
              <li class="submenu-item">
                <a class="submenu-link">
                  {{ $t('sustainability.environment') }}
                  <i class="fas fa-chevron-right"></i>
                </a>
                <ul class="submenu-lv-2">
                  <li class="submenu-item-lv-2">
                    <router-link :to="`/page/meio-ambiente/linha-do-tempo-sustentavel`" class="submenu-link">
                      {{ $t('sustainability.timeLine') }}
                    </router-link>
                  </li>
                  <li class="submenu-item-lv-2">
                    <a class="submenu-link">
                      {{ $t('sustainability.environmentalManagement') }}
                      <i class="fas fa-chevron-right"></i>
                    </a>
                    <ul class="submenu-lv-3">
                      <li class="submenu-item-lv-3">
                        <router-link :to="`/page/pre-operacao`" class="submenu-link">
                          {{ $t('sustainability.preOperation') }}
                        </router-link>
                      </li>
                      <li class="submenu-item-lv-3">
                        <router-link :to="`/page/nossa-gestao`" class="submenu-link">
                          {{ $t('sustainability.operation') }}
                        </router-link>
                      </li>
                      <li class="submenu-item-lv-3">
                        <router-link :to="`/page/educacao-ambiental`" class="submenu-link">
                          {{ $t('sustainability.environmentalEducation') }}
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="submenu-item-lv-2">
                    <router-link :to="`/page/monitoramento-ambiental`" class="submenu-link">
                      {{ $t('sustainability.environmentalMonitoring') }}
                    </router-link>
                  </li>
                  <li class="submenu-item-lv-2">
                    <a class="submenu-link">
                      {{ $t('sustainability.environmentalControls') }}
                      <i class="fas fa-chevron-right"></i>
                    </a>
                    <ul class="submenu-lv-3">
                      <li class="submenu-item-lv-3">
                        <router-link :to="`/page/controles-ambientais/plantas`" class="submenu-link">
                          {{ $t('sustainability.plants') }}
                        </router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="submenu-item">
                <a class="submenu-link">
                  {{ $t('sustainability.relationshipCommunity') }}
                  <i class="fas fa-chevron-right"></i>
                </a>
                <ul class="submenu-lv-2">
                  <li class="submenu-item-lv-2">
                    <router-link :to="`/page/nossa-relacao-com-a-comunidade`" class="submenu-link">
                      {{ $t('sustainability.ourRelationshipCommunity') }}
                    </router-link>
                  </li>
                  <li class="submenu-item-lv-2">
                    <router-link :to="`/page/programa-territorio-empreendedor`" class="submenu-link">
                      {{ $t('sustainability.territoryEntrepreneurProgram') }}
                      <i class="fas fa-chevron-right"></i>
                    </router-link>
                    <ul class="submenu-lv-3">
                      <li class="submenu-item-lv-3">
                        <router-link :to="`/page/fortalecimento-da-base-produtiva`" class="submenu-link">
                          {{ $t('sustainability.strengtheningProductive') }}
                        </router-link>
                      </li>
                      <li class="submenu-item-lv-3">
                        <router-link :to="`/page/cultura-empreendedora`" class="submenu-link">
                          {{ $t('sustainability.entrepreneurialCulture') }}
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="submenu-item-lv-2">
                    <router-link :to="`/page/infraestrutura-social`" class="submenu-link">
                      {{ $t('sustainability.socialInfrastructure') }}
                    </router-link>
                  </li>
                  <li class="submenu-item-lv-2">
                    <router-link :to="`/page/programa-de-dialogo-social`" class="submenu-link">
                      {{ $t('sustainability.socialDialogue') }}
                    </router-link>
                  </li>
                  <li class="submenu-item-lv-2">
                    <router-link :to="`/page/ideia-da-gente`" class="submenu-link">
                      {{ $t('sustainability.peopleIdea') }}
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              {{ $t('products.products') }}
            </a>
            <ul class="submenu">
              <li class="submenu-item">
                <router-link :to="`/page/placas`" class="submenu-link">
                  {{ $t('products.plates') }}
                </router-link>
              </li>
              <li class="submenu-item">
                <router-link :to="`/page/co-produtos`" class="submenu-link">
                  {{ $t('products.coProducts') }}
                </router-link>
              </li>
              <li class="submenu-item">
                <a class="submenu-link">
                  {{ $t('products.certifications') }}
                  <i class="fas fa-chevron-right"></i>
                </a>
                <ul class="submenu-lv-2">
                  <li class="submenu-item-lv-2">
                    <router-link :to="`/page/imprensa/cerqualidades`" class="submenu-link">
                      {{ $t('products.quality') }}
                    </router-link>
                  </li>
                  <li class="submenu-item-lv-2">
                    <router-link :to="`/page/imprensa/cerprodutos`" class="submenu-link">
                      {{ $t('products.product') }}
                    </router-link>
                  </li>
                  <li class="submenu-item-lv-2">
                    <router-link :to="`/page/imprensa/cermeioambientes`" class="submenu-link">
                      {{ $t('products.environment') }}
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              {{ $t('providers.providers') }}
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
              {{ $t('workWithUs') }}
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              {{ $t('press.press') }}
            </a>
            <ul class="submenu">
              <li class="submenu-item">
                <router-link :to="`/page/categories/posts`" class="submenu-link">
                  Notícias
                </router-link>
              </li>
              <li class="submenu-item">
                <router-link :to="`/page/categories/csp-podcast`" class="submenu-link">
                  CSP Podcast
                </router-link>
              </li>
              <li class="submenu-item">
                <router-link to="/page/sala-de-imprensa/login" class="submenu-link">
                  Sala de Imprensa
                </router-link>
              </li>
              <li class="submenu-item">
                <router-link to="/page/categories/saiu-na-midia" class="submenu-link">
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
              {{ $t('ombudsman') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="`/page/fale-conosco`" class="nav-link">
              {{ $t('contact') }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "Navbar",
    watch: {
      locale(val) {
        this.$i18n.locale = val;
      }
    },

    computed: {
        ...mapState([
            'locale'
        ])
    }
  }
</script>

<style scoped lang="scss">
  .navbar {
    padding-bottom: 0;
    z-index: 2;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .navbar-collapse { justify-content: center; }

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
</style>