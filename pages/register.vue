<template>
  <div id="register">
    <div class="index-container">
      <div class="form-container">
        <h2>Registro</h2>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" v-model="nombre" required />
        </div>
        <div class="form-group">
          <label for="apaterno">Apellido Paterno:</label>
          <input type="text" v-model="apaterno" required />
        </div>
        <div class="form-group">
          <label for="amaterno">Apellido Materno:</label>
          <input type="text" v-model="amaterno" required />
        </div>
        <div class="form-group">
          <label for="direccion">Dirección:</label>
          <input type="text" v-model="direccion" required />
        </div>
        <div class="form-group">
          <label for="telefono">Teléfono:</label>
          <input type="tel" v-model="telefono" required />
        </div>
        <v-btn light block @click="registrarusuario">Enviar</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  layout: 'DefaultLay',
  data () {
    return {
      email: '',
      password: '',
      nombre: '',
      apaterno: '',
      amaterno: '',
      direccion: '',
      telefono: ''
    }
  },
  methods: {
    registrarusuario () {
      const url = '/register'
      const data = {
        nombre: this.nombre,
        apaterno: this.apaterno,
        amaterno: this.amaterno,
        direccion: this.direccion,
        telefono: this.telefono,
        email: this.email,
        password: this.password,
        userToUpdate: this.userToUpdate
      }
      this.$axios.post(url, data)
        .then((res) => {
          console.log('res =>', res)
          if (res.data.message === 'User registered successfully') {
            this.showDialog = false
          }
          this.$router.push({ name: 'login' })
        })
        .catch((err) => {
          console.log('err =>', err)
        })
    }
  }
}
</script>

<style>
.index-container {
  display: flex;
  justify-content: center;
  align-items: center;
   /* 60px es la altura de la barra de navegación */
}
#register{
  margin-top: 80px;
}
.form-container {
  width: 50%;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label,h2 {
  display: block;
  margin-bottom: 8px;
  color: black;
}

input[type="email"],
input[type="password"],
input[type="text"],
input[type="tel"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
}
</style>
