<template>
  <div class="flex flex-col h-screen">
    <div class="header-section flex justify-center my-16">
      <KtracLogo />
    </div>
    <div class="title flex mb-4">
      <div class="busNo w-1/3 text-center">
      BUSNO
    </div>
    <div class="time w-1/3 text-center">
      TIME
    </div>
    <div class="station w-1/3 text-center">
      <div class="from">
        FROM
      </div>
      <div class="to">
        TO
      </div>
    </div>
     </div>
    <div class="list ">
      <ul>
        <li v-for="(bus, index) in busses" :key="index" class="animate__animated animate__fadeInUp">
          <BusInfo v-bind="bus" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import 'animate.css'
import { bus } from '../plugins/EventBus'
import BusInfo from '~/components/busInfo.vue'
import KtracLogo from '~/components/KtracLogo.vue'
export default {
  name: 'busList',
  css: ['animate.css'],
  // components: { KtracLogo },
  components: { BusInfo, KtracLogo },
  data () {
    return {
      busses: [],
      from: '',
      to: ''
    }
  },
  async created () {
    bus.$on('addressPush', (startStop) => {
      console.log(startStop.from)
    })
    this.busses = []
    await this.$fire.firestore.collection('BusList').get().then((querySnapShot) => {
      querySnapShot.forEach((doc) => {
        this.busses.push({
          id: doc.id,
          bustype: doc.data().bustype,
          from: doc.data().from,
          route: doc.data().route,
          time: doc.data().time,
          to: doc.data().to
        })
      })
    })
  },
  methods: {
    async getData () {
      this.busses = []
      await this.$fire.firestore.collection('BusList').get().then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          this.busses.push({
            id: doc.id,
            bustype: doc.data().bustype,
            from: doc.data().from,
            route: doc.data().route,
            time: doc.data().time,
            to: doc.data().to
          })
        })
      })
    }

  }
}
</script>
<style lang="css" scoped>
</style>
