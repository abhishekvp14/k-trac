<template>
  <div>
    <PopUp v-if="added" msg="Route Added" />
    <form @submit.prevent="postData(routeno,from,to,via,time,intStops)">
      <div class="form flex flex-col justify-center items-center">
        <KtracLogo class="mt-6" />
        <h3 class="my-6 text-3xl">
          Enter route details
        </h3>
        <LabelText id="rno" label="Enter the route number" />
        <input
          v-model="routeno"
          type="text"
          class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-3"
          placeholder="route number"
          id="rno"
          required
        >
        <LabelText id="from" label="Enter starting stop" />
        <input
          v-model="from"
          type="text"
          class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1"
          placeholder="from"
          id="from"
          required
        >
        <LabelText id="to" label="Enter the destination stop" />
        <input
          v-model="to"
          type="text"
          class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1"
          placeholder="to"
          id="to"
          required
        >
        <LabelText id="via" label="Enter via" />
        <input
          v-model="via"
          type="text"
          class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1"
          placeholder="via (optional)"
          id="via"
        >
        <LabelText id="time" label="Enter the departure time" />
        <input
          v-model="time"
          type="time"
          class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1"
          id="time"
          required
        >
        <LabelText id="intStops" label="Enter the intermediate stops" />
        <input
          v-model="intStops"
          type="text"
          class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1"
          placeholder="Intermediate stops seperated by spaces"
          id="intStops"
          required
        >
        <LabelText id="type" label="Enter the route type" />
        <input
          v-model="routeType"
          type="text"
          class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1"
          placeholder="Route type"
          id="type"
          required
        >
        <button type="submit(from,to)" class="bg-green-500 mt-8 h-12 w-2/5 text-white">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import KtracLogo from '~/components/KtracLogo.vue'
import LabelText from '~/components/labelText.vue'
import PopUp from '~/components/PopUp.vue'

export default {
  components: { KtracLogo, LabelText, PopUp },
  data () {
    return {
      routeno: null,
      from: null,
      to: null,
      via: null,
      time: null,
      intStops: null,
      routeType: null,
      added: false
    }
  },
  mounted () {
    this.$fire.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        this.user = user
      } else {
        this.$router.push('/auth/SignIn')
      }
    })
  },
  methods: {
    postData (routeno, from, to, via, time, intStops, routeType) {
      try {
        this.$fire.firestore.collection('RouteList').doc(routeno.toUpperCase()).set({
          from: this.from.toUpperCase(),
          to: this.to.toUpperCase(),
          via: this.via.toLowerCase(),
          time: this.time.toUpperCase(),
          intStops: this.intStops.split(' '),
          type: this.routeType.toUpperCase()
        })
      } catch (err) {
        console.log(err)
      }
      this.routeno = ''
      this.from = ''
      this.to = ''
      this.via = ''
      this.time = ''
      this.intStops = ''
      this.routeType = ''
      this.added = true
      setTimeout(() => {
        this.added = false
      }, 1700)
    }
  }
}
</script>
<style scoped>
#time::before {
  content: "Time";
}
</style>
