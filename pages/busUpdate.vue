<template>
  <div>
    <PopUp v-if="added" msg="Route updated" />
    <form @submit.prevent="postData(routeno,from,to,via,time,intStops)">
      <div class="form flex flex-col justify-center items-center">
        <KtracLogo class="mt-6" />
        <h3 class="my-6 text-3xl">
          Enter route details
        </h3>
        <LabelText :id="busno" label="Enter the bus number" />
        <input
          v-model="busno"
          id="busno"
          type="text"
          class="text bg-gray-200 h-50 w-4/5 p-4 mb-5 mt-6"
          placeholder="bus number"
          required
        >
        <button type="submit(routeno, busno)" class="bg-green-500 mt-8 h-12 w-2/5 text-white">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import KtracLogo from '~/components/KtracLogo.vue'
import PopUp from '~/components/PopUp.vue'
export default {
  components: { KtracLogo, PopUp },
  data () {
    return {
      status: true,
      busno: null,
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
    postData (routeno, busno) {
      try {
        this.$fire.firestore.collection('BusList').doc(busno).set({
          isRunning: this.status
        })
      } catch (err) {
        console.log(err)
      }
      this.routeno = ''
      this.busno = ''
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
