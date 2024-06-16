<template>
  <div id="servicios">
    <div class="texto">
      <h2>Nuestros Servicios</h2>
        <p>Ofrecemos una variedad de servicios de transporte adaptados a las necesidades de nuestros clientes:</p>
        <ul>
            <li><strong>Transporte Urbano y Suburbano:</strong> Cobertura amplia en las principales ciudades y sus alrededores.</li>
            <li><strong>Viajes de Larga Distancia:</strong> Conectamos ciudades y regiones a través de rutas eficientes y cómodas.</li>
            <li><strong>Transporte Empresarial:</strong> Soluciones personalizadas para empresas que requieren transporte regular para sus empleados.</li>
            <li><strong>Turismo y Excursiones:</strong> Rutas especiales para turistas que desean explorar los destinos más emblemáticos de México.</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiciosView',
  auth: false,
  layout: 'DefaultLay'
}
</script>

<style scoped>
#servicios {
  margin-top: 300px;/* 60px es la altura de la barra de navegación */
  background-color: rgba(255, 255, 255, 0.8);
  padding-bottom: 50px;
}

h4, h1, h2, p, li, strong{
  color: black;
}
.texto {
  padding: 20px;
  padding-top: 50px;
  font-family: Arial, sans-serif;
  font-size: 20px;
}
</style>
