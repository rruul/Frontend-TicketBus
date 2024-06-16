<template>
  <div id="beneficios">
    <div class="texto">
      <h2>Beneficios</h2>
        <ul>
            <li><strong>Flota Moderna:</strong> Contamos con una flota de vehículos modernos y bien mantenidos para garantizar la seguridad y comodidad de nuestros pasajeros.</li>
            <li><strong>Conectividad:</strong> Ofrecemos rutas que cubren las principales ciudades y destinos turísticos de México, facilitando el acceso a cualquier lugar que necesites visitar.</li>
            <li><strong>Precios Competitivos:</strong> Nuestros servicios están diseñados para ser asequibles sin comprometer la calidad, ofreciendo una excelente relación calidad-precio.</li>
            <li><strong>Facilidad de Reserva:</strong> Proporcionamos múltiples opciones de reserva, incluyendo plataformas en línea y aplicaciones móviles para tu conveniencia.</li>
            <li><strong>Soporte 24/7:</strong> Nuestro equipo de atención al cliente está disponible las 24 horas del día, los 7 días de la semana, para asistirte en cualquier momento.</li>
            <li><strong>WiFi y Entretenimiento:</strong> Muchos de nuestros vehículos están equipados con WiFi gratuito y sistemas de entretenimiento para hacer tu viaje más agradable.</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeneficiosView',
  auth: false,
  layout: 'DefaultLay'
}
</script>

<style scoped>
#beneficios {
  margin-top: 200px;/* 60px es la altura de la barra de navegación */
  background-color: rgba(255, 255, 255, 0.8);
  padding-bottom: 75px;
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
