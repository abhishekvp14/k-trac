<template>
  <div class="flex flex-col justify-center w-100% items-center h-screen w-screen place-items-center">
    <KtracLogo class="animate__animated animate__fadeInUp" />
    <AppLoading />
  </div>
</template>

<script>
import KtracLogo from '~/components/KtracLogo.vue'
import 'animate.css'
import AppLoading from '~/components/AppLoading.vue'

export default {
  name: 'IndexPage',
  components: { KtracLogo, AppLoading },
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
