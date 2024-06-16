<template>
  <div class="container">
    <div class="form-container">
      <h2>Iniciar Sesión</h2>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" v-model="password" required />
      </div>
      <v-btn light block @click="login">Iniciar Sesion</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'DefaultLay',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      const sendData = {
        email: this.email,
        password: this.password
      }
      await this.$auth.loginWith('local', {
        data: sendData
      }).then(async (res) => {
        const result = await res.data
        if (result.message === 'success') {
          this.$store.commit('setToken', result.token)
          console.log('Success: ', result)
          this.$router.push('/')
        }
      }).catch((err) => {
        console.log('Error: ', err)
      })
    }
  }
}
</script>

<style scoped>
label,h2 {
  display: block;
  color: black;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.form-container {
  width: 40%;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
}

.btn-submit {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #3e8e41;
}
</style>
