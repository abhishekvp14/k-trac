<template>
  <div>
    <form @submit.prevent="postData(routeno,from,to,via,time,intStops)">
      <div class="form flex flex-col justify-center items-center">
        <KtracLogo class="mt-6" />
        <h3 class="my-6 text-3xl">
          Enter route details
        </h3>
        <input v-model="routeno" type="text" class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-3" placeholder="route number">
        <input v-model="from" type="text" class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1" placeholder="from">
        <input v-model="to" type="text" class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1" placeholder="to">
        <input v-model="via" type="text" class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1" placeholder="via (optional)">
        <input v-model="time" type="time" class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1" placeholder="time">
        <input v-model="intStops" type="text" class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1" placeholder="Intermediate stops seperated by spaces">
        <button type="submit(from,to)" class="bg-green-500 mt-8 h-12 w-2/5 text-white">
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
      routeno: null,
      from: null,
      to: null,
      via: null,
      time: null,
      intStops: null
    }
  },

  methods: {
    postData (routeno, from, to, via, time, intStops) {
      try {
        this.$fire.firestore.collection('RouteList').doc(routeno.toUpperCase()).set({
          from: this.from.toUpperCase(),
          to: this.to.toUpperCase(),
          via: this.via.toLowerCase(),
          time: this.time.toUpperCase(),
          intStops: this.intStops.split(' ')
        })
        alert('Route Added')
      } catch (err) {
        console.log(err)
      }
      this.routeno = ''
      this.from = ''
      this.to = ''
      this.via = ''
      this.time = ''
      this.intStops = ''
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
