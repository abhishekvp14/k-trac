<template>
  <div>
    <form @submit.prevent="postData(busno, regno, route)">
      <div class="form flex flex-col justify-center items-center">
        <KtracLogo class="mt-6" />
        <h3 class="my-6 text-3xl">
          Enter bus details
        </h3>
        <input v-model="busno" type="text" class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-3" placeholder="Bus number">
        <input v-model="regno" type="text" class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1" placeholder="Registration number">
        <input v-model="route" type="text" class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1" placeholder="route">
        <button type="submit()" class="bg-green-500 mt-8 h-12 w-2/5 text-white">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import KtracLogo from '~/components/KtracLogo.vue'
export default {
  components: { KtracLogo },
  data () {
    return {
      busno: '',
      regno: '',
      route: ''
    }
  },

  methods: {
    async postData (busno, regno, route) {
      try {
        await this.$fire.firestore.collection('BusList').doc(busno.toUpperCase()).set({
          regno: this.regno.toUpperCase(),
          route: this.route.toUpperCase() // route number
        }).then(() => {
          alert('Data Added')
        })
      } catch (err) {
        console.log(err)
      }
      this.busno = ''
      this.regno = ''
      this.route = ''
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
