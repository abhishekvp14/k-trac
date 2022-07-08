<template>
  <div class="flex flex-col justify-center w-100% items-center h-screen w-screen place-items-center">
    <KtracLogo class="animate__animated animate__fadeInUp" />
    <LocationLogo class="animate__animated animate__fadeInUp" />
  </div>
</template>

<script>
import KtracLogo from '~/components/KtracLogo.vue'
import LocationLogo from '~/components/locationLogo.vue'
import 'animate.css'

export default {
  name: 'IndexPage',
  components: { KtracLogo, LocationLogo },
  css: ['animate.css/animate.min.css'],
  created () {
    setTimeout(() => {
      this.$router.push('/SearchBus')
    }, 2000)
  }
}
</script>

<style>
</style>
