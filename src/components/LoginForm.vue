<template>
  <section class="section page">
    <div class="container">
      <h2 class="page-title">Sala de Imprensa</h2>
      <p class="subtitle">
        Este conteúdo é restrito a membros do site.
        Se você é um usuário registrado, por favor faça o login.
        Novos usuários podem registrar-se abaixo.
      </p>

      <div class="row mt-3">
        <div class="col-md-6 login-form">
          <form>
            <h5 class="login-title">Login de Usuários</h5>
            <div class="form-group">
              <label for="user-name">Nome de usuário</label>
              <input type="text" class="form-control" id="user-name">
            </div>
            <div class="form-group">
              <label for="user-pass">Senha</label>
              <input type="password" class="form-control" id="user-pass">
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="remember-user">
              <label for="remember-user">Lembrar</label>
            </div>
            <button class="btn btn-primary">Login</button>
          </form>
        </div>
        <div class="col-md-6 register-form">
          <form>
            <h5 class="login-title">Registro de Novo Usuário</h5>
            <div class="form-group">
              <label for="register-user">Escolha um Nome de Usuário*</label>
              <input type="text" class="form-control" id="register-user">
            </div>
            <div class="form-group">
              <label for="register-name">Nome*</label>
              <input type="password" class="form-control" id="register-name">
            </div>
            <div class="form-group">
              <label for="register-email">E-mail*</label>
              <input type="email" class="form-control" id="register-email">
            </div>
            <div class="form-group">
              <label for="register-pass">Senha*</label>
              <input type="password" class="form-control" id="register-pass">
            </div>
            <div class="form-group">
              <label for="ree-pass">Confirme a senha*</label>
              <input type="password" class="form-control" id="ree-pass">
            </div>
            <button class="btn btn-primary">Cadastrar-se</button>
            <br>
            <small class="text-muted"><em>* Campos obrigatórios</em></small>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "LoginForm",
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="scss">
  .page {
    padding: 30px 0;
    &-title {
      font-family: "Centuma", Roboto, sans-serif;
      color: #65666A;
      margin-bottom: 20px;
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
  }
</style>