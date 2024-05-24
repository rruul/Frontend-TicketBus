<template>
  <div>
    <RadioTextSection />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  auth: false,
  layout: 'nav',
  components: {
    RadioTextSection: () => import('@/components/UI/BusquedaV.vue')
  }
}
</script>
