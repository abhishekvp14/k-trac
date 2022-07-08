<template>
  <div>
    <form @submit.prevent="postData(busno,from,to,route,type)">
      <div class="form flex flex-col justify-center items-center">
        <KtracLogo class="mt-6" />
        <h3 class="my-6 text-3xl">
          Enter bus details
        </h3>
        <input v-model="busno" type="text" class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-3" placeholder="Bus number">
        <input v-model="from" type="text" class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1" placeholder="from">
        <input v-model="to" type="text" class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1" placeholder="to">
        <input v-model="time" type="time" class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1" placeholder="time">
        <input v-model="route" type="text" class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1" placeholder="route">
        <input v-model="bustype" type="text" class="text bg-gray-200 h-50 w-4/5 p-4 mt-1" placeholder="type">
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
      busno: null,
      from: null,
      to: null,
      time: null,
      route: null,
      bustype: null
    }
  },

  methods: {
    postData (busno, from, to, route, bustype) {
      try {
        this.$fire.firestore.collection('BusList').doc(busno).set({
          from: this.from,
          to: this.to,
          time: this.time,
          route: this.route, // route number
          bustype: this.bustype
        })
      } catch (err) {
        console.log(err)
      }
      this.busno = ''
      this.from = ''
      this.to = ''
      this.time = ''
      this.route = ''
      this.bustype = ''
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
