<template>
  <div id="nosotros">
    <div class="texto">
      <h2>Nosotros</h2>
    <h4>Somos una empresa 100% mexicana de base tecnológica que coordina grupos de personas con un mismo interés y destino connectandolas</h4>
    <h4>con empresas de transporte turístico para la prestación de los servicios de traslado.</h4>
    <p></p>
    <p></p>
    <h2>Nuestra Historia</h2>
        <p><strong>TicketBus </strong> nació con el objetivo de transformar la manera en que las personas se desplazan en nuestro hermoso país. Desde nuestros inicios, hemos trabajado arduamente para construir una red de transporte eficiente y accesible, ofreciendo soluciones a medida para satisfacer las diversas necesidades de nuestros pasajeros.</p>
        <h2>Nuestros Valores</h2>
        <ul>
            <li><strong>Seguridad:</strong> La seguridad de nuestros pasajeros es nuestra máxima prioridad. Implementamos estrictos protocolos y mantenemos nuestra flota en óptimas condiciones para garantizar un viaje seguro en todo momento.</li>
            <li><strong>Confiabilidad:</strong> Cumplimos con nuestros horarios y mantenemos un servicio consistente y de alta calidad. Nuestros pasajeros pueden confiar en nosotros para llegar a su destino a tiempo.</li>
            <li><strong>Comodidad:</strong> Sabemos que cada viaje es importante. Por eso, nuestros vehículos están equipados con las mejores comodidades para que cada trayecto sea lo más confortable posible.</li>
            <li><strong>Sostenibilidad:</strong> Estamos comprometidos con el cuidado del medio ambiente. Trabajamos continuamente para reducir nuestra huella de carbono y promover prácticas sostenibles en nuestras operaciones diarias.</li>
            <li><strong>Atención al Cliente:</strong> Creemos en el poder del servicio al cliente excepcional. Nuestro equipo está siempre dispuesto a asistir y resolver cualquier inquietud para asegurar una experiencia de viaje satisfactoria.</li>
        </ul>
        <h2>Nuestro Compromiso</h2>
        <p>En <strong>TicketBus</strong>, nos comprometemos a mejorar continuamente y a innovar en nuestros servicios para satisfacer las expectativas de nuestros pasajeros. Nos enorgullece ser una parte esencial del viaje de miles de personas cada día, conectando vidas y destinos con cada kilómetro recorrido.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NosotrosView',
  auth: false,
  layout: 'DefaultLay'
}
</script>

<style scoped>
#nosotros {
  margin-top: 100px;/* 60px es la altura de la barra de navegación */
  background-color: rgba(255, 255, 255, 0.8);
  height: calc(100vh - 150px);
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
