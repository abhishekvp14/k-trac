<template>
  <div>
    <form @submit.prevent="postData(routeno,from,to,intStops)">
      <div class="form flex flex-col justify-center items-center">
        <KtracLogo class="mt-6" />
        <h3 class="my-6 text-3xl">
          Enter route details
        </h3>
        <input v-model="routeno" type="text" class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-3" placeholder="route number">
        <input v-model="from" type="text" class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1" placeholder="from">
        <input v-model="to" type="text" class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1" placeholder="to">
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
      intStops: null
    }
  },

  methods: {
    postData (routeno, from, to, intStops) {
      try {
        this.$fire.firestore.collection('RouteList').doc(routeno).set({
          from: this.from,
          to: this.to,
          intStops: this.intStops.split(' ')
        })
      } catch (err) {
        console.log(err)
      }
      this.routeno = ''
      this.from = ''
      this.to = ''
      this.intStops = ''
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
