<template>
  <div>
    <v-toolbar
    light
    >

    <v-img width="50px" height="50px"/>
    <v-spacer></v-spacer>
      <v-toolbar-title>TicketBus</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>
        Inicio
      </v-btn>
      <v-btn>
        Beneficios
      </v-btn>
      <v-btn>
        Nosotros
      </v-btn>
      <v-btn>
        Ayuda
      </v-btn>
      <v-btn>
        Iniciar Sesión
      </v-btn>
      <v-btn>
        Registrarse
      </v-btn>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-main>
      <Nuxt />
    </v-main>
  </div>
</template>
