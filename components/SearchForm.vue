<template>
  <form @submit.prevent="submitSearch">
    <div class="form flex flex-wrap flex-col justify-center items-center">
      <input v-model="from" type="text" class="text bg-gray-100 h-50 w-4/5 p-4 mb-9 mt-12" placeholder="from">
      <input v-model="to" type="text" class="text bg-gray-100 h-50 w-4/5 p-4" placeholder="to">
      <button type="submit(from,to)" class="bg-green-500 mt-8 mb-4 h-12 w-2/5 text-white">
        Search
      </button>
    </div>
  </form>
</template>
<script>
import { bus } from '../plugins/EventBus'
export default {
  css: ['animate.css/animate.min.css'],
  data () {
    return {
      from: '',
      to: ''
    }
  },
  methods: {
    submitSearch (from, to) {
      from = this.from
      to = this.to
      bus.$emit('addressPush', { from, to })
      this.$router.push('/busList')
    },
    getStops () {
      const stops = {
        from: this.from,
        to: this.to
      }
      return stops
    }
  }
}
</script>
<style lang="css" scoped>
form{
    animation-delay: 0.6s;
}
</style>
