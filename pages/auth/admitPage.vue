<template>
  <div class="flex flex-col items-center h-screen w-screen justify-center">
    <h1 class="text-3xl mb-32">Admin page</h1>
    <button @click="signOut" class="bg-red-400 text-white py-1 px-2 rounded-md">sign out</button>
  </div>
</template>

<script>
// import { onAuthStateChanged } from 'firebase/auth'

export default {
  data () {
    return {
      user: ''
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
    signOut () {
      this.user = ''
      this.$fire.auth.signOut()
      alert('Signed out')
      this.$router.push('/auth/SignIn')
    }
  }

}
</script>
<style lang="scss" scoped>
</style>
