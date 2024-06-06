export const state = () => ({
  user: null,
  token: null,
  viajes: [],
  viajeSeleccionado: null,
  asientosSeleccionados: [],
  usuario: {}
})

export const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setToken (state, token) {
    state.token = token
  },
  setViajes (state, viajes) {
    state.viajes = viajes
  },
  setViajeSeleccionado (state, viaje) {
    state.viajeSeleccionado = viaje
  },
  setAsientosSeleccionados (state, asientos) {
    state.asientosSeleccionados = asientos
  },
  setUsuario (state, usuario) {
    state.usuario = usuario
  }
}
