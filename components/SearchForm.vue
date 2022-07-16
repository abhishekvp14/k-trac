<template>
  <form @submit.prevent="submitSearch">
    <div class="form flex flex-wrap flex-col justify-center items-center">
      <!-- <input v-model="from" type="text" class="text bg-gray-100 h-50 w-4/5 p-4 mb-9 mt-12" placeholder="from" required> -->
      <Multiselect v-model="from" :options="options" class="text bg-gray-100 h-50 w-4/5 mb-6 mt-6" placeholder="from"></Multiselect>
      <!-- <input v-model="to" type="text" class="text bg-gray-100 h-50 w-4/5 p-4" placeholder="to" required> -->
      <Multiselect v-model="to" :options="options" class="text bg-gray-100 h-50 w-4/5 mb-4 mt-6" placeholder="to"></Multiselect>
        <button type="submit(from,to)" class="bg-green-500 mt-8 mb-4 h-12 w-2/5 text-white">
        Search
      </button>
    </div>
  </form>
</template>
<script>
import Multiselect from 'vue-multiselect'
// import { bus } from '../plugins/EventBus'
export default {
  css: ['animate.css/animate.min.css', 'vue-multiselect/dist/vue-multiselect.min.css'],
  data () {
    return {
      from: '',
      to: '',
      // options: ['Kannur', 'Malapuram', 'Wayanad', 'Trivandrum', 'Kochi', 'Thalapuzha', 'Thavinjal', 'Chungam']
      options: [],
      routes: []
    }
  },
  async created () {
    await this.$fire.firestore.collection('RouteList').get().then((routes) => {
      routes.forEach((route) => {
        const iStops = route.data().intStops
        Array.prototype.push.apply(this.routes, iStops)
        this.options = [...new Set(this.routes)]
      })
    })
  },
  methods: {
    submitSearch (from, to) {
      from = this.from
      to = this.to
      console.log(from)
      console.log(to)
      // bus.$emit('addressPush', { from, to })
      this.$router.push({ path: '/BusList', params: { data: { from, to } } })
    },
    getStops () {
      const stops = {
        from: this.from,
        to: this.to
      }
      return stops
    }
  },
  components: { Multiselect }
}
</script>
<style>
.text{
  width: 90%;
  height: 50px;
  display:  flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  /* background-color: red; */
}
.multiselect__tags .multiselect__input{
  background-color: gray.100;
  width: 90%;
}
.multiselect__tags{
  border: 2px solid gray.100;
  height: 50px;
  background-color: gray.100;
}
</style>
