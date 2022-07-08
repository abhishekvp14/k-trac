<template>
  <div>
      <form @submit.prevent="signUp(email, password)">
        <label for="email">Email: </label>
        <input type="text" placeholder="Email">
        <label for="password">Email: </label>
        <input type="password" placeholder="password">
        <button type="submit">Register</button>
      </form>
  </div>
</template>
<script>

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp (email, password) {
    }
  }
}

</script>

<style lang="scss" scoped>
</style>
