<i18n>
  {
    "pt_BR": {
      "title": "Sala de Imprensa",
      "subtitle": "Este conteúdo é restrito a membros do site. Se você é um usuário registrado, por favor faça o login. Novos usuários podem registrar-se abaixo.",
      "loginForm": {
        "title": "Login de Usuários",
        "username": "Nome de usuário",
        "password": "Senha",
        "remember": "Lembrar"
      },
      "registerForm": {
        "title": "Registro de Novo Usuário",
        "username": "Escolha um Nome de Usuário *",
        "name": "Nome *",
        "email": "E-mail *",
        "password": "Senha *",
        "repitpassword": "Confirme a senha *"
      }
    },

    "en": {
      "title": "Press room",
      "subtitle": "This content is restricted to site members. If you are a registered user, please login. New users can register below.",
      "loginForm": {
        "title": "User Login",
        "username": "User Name",
        "password": "Password",
        "remember": "Remember"
      },
      "registerForm": {
        "title": "Registro de Novo Usuário",
        "username": "Escolha um Nome de Usuário *",
        "name": "Nome *",
        "email": "E-mail *",
        "password": "Senha *",
        "repitpassword": "Confirme a senha *"
      }
    }
  }
</i18n>

<template>
  <section class="section page">
    <div class="container">
      <!-- heading -->
      <h2 class="page-title">
        {{ $t('title') }}
      </h2>
      <p class="subtitle">
        {{ $t('subtitle') }}
      </p>
      <!-- page forms -->
      <div class="row mt-3">
        <!-- login form -->
        <div class="col-md-6 login-form">
          <form @submit="onSubmitLogin">
            <h5 class="login-title">
              {{ $t('loginForm.title') }}
            </h5>
            <div class="form-group">
              <label for="user-name">
                {{ $t('loginForm.username') }}
              </label>
              <input type="text"
                     class="form-control"
                     id="user-name"
                     required
                     v-model="loginForm.username"
              >
            </div>
            <div class="form-group">
              <label for="user-pass">
                {{ $t('loginForm.password') }}
              </label>
              <input type="password"
                     class="form-control"
                     id="user-pass"
                     required
                     v-model="loginForm.password"
              >
            </div>
            <div class="form-group form-check">
              <input type="checkbox"
                     class="form-check-input"
                     id="remember-user"
                     v-model="loginForm.remember"
              >
              <label for="remember-user">
                {{ $t('loginForm.remember') }}
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </form>
        </div>
        <!-- register form -->
        <div class="col-md-6 register-form">
          <form @submit="onSubmitRegister">
            <h5 class="login-title">
              Registro de Novo Usuário
            </h5>
            <div class="form-group">
              <label for="register-user">
                Escolha um Nome de Usuário *
              </label>
              <input type="text"
                     class="form-control"
                     id="register-user"
                     required
                     v-model="registerForm.username"
              >
            </div>
            <div class="form-group">
              <label for="register-name">
                Nome *
              </label>
              <input type="text"
                     class="form-control"
                     id="register-name"
                     required
                     v-model="registerForm.name"
              >
            </div>
            <div class="form-group">
              <label for="register-email">
                E-mail*
              </label>
              <input type="email"
                     class="form-control"
                     id="register-email"
                     required
                     v-model="registerForm.email"
              >
            </div>
            <div class="form-group">
              <label for="register-pass">
                Senha*
              </label>
              <input type="password"
                     class="form-control"
                     id="register-pass"
                     required
                     v-model="registerForm.password"
              >
            </div>
            <div class="form-group">
              <label for="ree-pass">
                Confirme a senha*
              </label>
              <input type="password"
                     class="form-control"
                     id="ree-pass"
                     required
                     v-model="registerForm.repitpassword"
              >
            </div>
            <button type="submit" class="btn btn-primary disabled" disabled>
              Cadastrar-se
            </button>
            <br>
            <small class="text-muted mt-3">
              <em>* Campos obrigatórios</em>
            </small>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "LoginForm",
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
          remember: false
        },
        registerForm: {
          username: '',
          name: '',
          email: '',
          password: '',
          repitpassword: ''
        }
      }
    },

    watch: {
      locale(val) {
        this.$i18n.locale = val;
      }
    },

    computed: {
        ...mapState([
            'locale'
        ])
    },

    methods: {
      onSubmitLogin(e) {
        e.preventDefault();
        if (this.loginForm.username === 'admin' && this.loginForm.password === 'admin') {
          this.$router.push('/page/categories/sala-de-imprensa');
        }
        else {
          alert('try again');
        }
      },

      onSubmitRegister(e) {
        e.preventDefault();
        alert(JSON.stringify(this.registerForm));
      }
    },

    created() {
      this.$i18n.locale = this.locale; // this val came from vuex
    }
  }
</script>

<style scoped lang="scss">
  .page {
    padding: 1.9rem 0;
    &-title {
      margin-bottom: 1.2rem;
      font-family: "Centuma", Roboto, sans-serif;
      color: #65666A;
    }
  }

  .login-title {
    color: #00734A;
    border-bottom: 1px solid #65666A;
  }

  .btn-primary {
    padding-right: 20px;
    padding-left: 20px;
    font-style: normal;
    font-size: 14px;
    border: none;
    background-color: #00734A;

    -webkit-transition: all .15s ease-in-out;
    -moz-transition: all .15s ease-in-out;
    -ms-transition: all .15s ease-in-out;
    -o-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;

    &:hover,
    &:active,
    &:focus,
    &:not(:disabled):not(.disabled):active {
      color: #ffffff;
      background-color: #003A1F;
    }
  }
</style>