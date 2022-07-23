<template>
  <div>
    <PopUp v-if="added" msg="Bus Added" />
    <form @submit.prevent="postData(busno, regno, route)">
      <div class="form flex flex-col justify-center items-center">
        <KtracLogo class="mt-6" />
        <h3 class="my-6 text-3xl">
          Enter bus details
        </h3>
        <LabelText :id="busno" label="Enter the bus number" />
        <input
          v-model="busno"
          type="text"
          class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-3"
          placeholder="Bus number"
          id="busno"
          required
        >
        <LabelText :id="regno" label="Enter the registration number" />
        <input
          v-model="regno"
          type="text"
          class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1"
          placeholder="Registration number"
          id="regno"
          required
        >
        <LabelText :id="rno" label="Enter the route number" />
        <input
          v-model="route"
          type="text"
          class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-1"
          placeholder="route"
          id="rno"
          required
        >
        <button type="submit()" class="bg-green-500 mt-8 h-12 w-2/5 text-white">
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
      busno: '',
      regno: '',
      route: '',
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
    async postData (busno, regno, route) {
      try {
        await this.$fire.firestore.collection('BusList').doc(busno.toUpperCase()).set({
          regno: this.regno.toUpperCase(),
          route: this.route.toUpperCase() // route number
        })
      } catch (err) {
        console.log(err)
      }
      this.busno = ''
      this.regno = ''
      this.route = ''
      this.added = true
      setTimeout(() => {
        this.added = false
      }, 1700)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
