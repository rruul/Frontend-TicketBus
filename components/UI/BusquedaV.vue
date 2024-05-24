<template>
  <div class="section" style="margin-top: 5%;">
    <div class="radio-buttons">
      <v-spacer></v-spacer>
      <label>
        <input type="radio" value="sencillo" v-model="selectedOption" />
          Sencillo
      </label>
      <v-spacer></v-spacer>
      <label>
        <input type="radio" value="redondo" v-model="selectedOption" />
          Redondo
      </label>
      <v-spacer></v-spacer>
    </div>
    <div class="text-input" style="display: flex; flex-direction: row;">
      <input type="text" v-model="textInput" placeholder="Origen"/>
      <input type="text" v-model="textInput" placeholder="Destino"/>
      <v-btn><span>Buscar</span></v-btn>
    </div>
    <v-card style="display: flex; flex-direction: row; margin-top: 1%;">
      <div class="calendar-input-date h-100 d-flex flex-column justify-content-center ng-star-inserted">
        <label>Ida</label>
        <p>Fecha de Ida</p>
      </div>
      <div class="calendar-input-date h-100 d-flex flex-column justify-content-center ng-star-inserted">
        <label>Regreso</label>
        <p>Fecha de regreso</p>
      </div>
      <v-btn><span>Buscar</span></v-btn>
    </v-card>
    <v-card style="margin-top: 2%;">
      <v-col>
        <v-col style="text-align: center;">
          Beneficios
        </v-col>
        <v-row>
          <v-col>
            <v-img :src="require('@/assets/images/cool.svg')" style="width: 150px;"></v-img>
            <p>Aire Acondicionado</p>
          </v-col>
          <v-col style="text-align: center;">
            <v-img :src="require('@/assets/images/wifi.svg')" style="width: 150px;"></v-img>
            <p>Wifi</p>
          </v-col>
          <v-col>
            <v-img :src="require('@/assets/images/comodo.svg')" style="width: 200px;"></v-img>
            <p>Asientos Comodos</p>
          </v-col>
          <v-col>
            <v-img :src="require('@/assets/images/safety-belt.png')" style="width: 200px;"></v-img>
            Seguro de Viajero
          </v-col>
        </v-row>
      </v-col>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedOption: '',
      textInput: ''
    }
  }
}
</script>

<style scoped>
.section {
  height: 20vh; /* 20% de la altura de la pantalla */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.radio-buttons {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
}

.radio-buttons label {
  margin: 0 10px;
}
.text-input {
  width: 80%;
}

.text-input input {
  width: 50%;
  padding: 5px;
  border-style: groove;
}
.calendar-input {
    background: var(--wh1);
    height: 60px;
    border-radius: 10px;
    box-sizing: border-box;
    border: 0;
    position: relative;
    z-index: 1;
    text-align: initial;
}
.calendar-input-date {
    min-width: 50%;
}
.flex-column {
    flex-direction: column;
}
.h-100 {
    height: 100% !important;
}
</style>
