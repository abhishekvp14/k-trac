<template>
  <div class="flex flex-col h-screen">
    <div class="header-section flex justify-center my-16">
      <KtracLogo />
    </div>
    <div class="title flex mb-4 font-bold">
      <div class="busNo w-1/4 text-center">
      BUSNO
      </div>
      <div class="dest w-1/2 items-center justify-around">
        <div class="station text-center justify-around flex">
          <div class="from">
            FROM
          </div>
          <div class="to">
            TO
          </div>
        </div>
        <div class="via flex justify-center">
          (via)
        </div>
      </div>
    <div class="time w-1/4 text-center">
      TIME
    </div>
     </div>
    <div class="list " v-if="busses">
      <ul>
        <li v-for="(bus, index) in busses" :key="index" class="animate__animated animate__fadeInUp">
          <BusInfo v-bind="bus" />
        </li>
      </ul>
    </div>
    <div v-else class="no-res font-bold text-lg center text-red-500 flex justify-center items-center mt-8">
      No Busses found
    </div>
  </div>
</template>

<script>
import 'animate.css'
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
      to: '',
      stops: [],
      data: {
        id: '',
        from: '',
        to: '',
        via: '',
        route: '',
        time: ''
      },
      query: {}
    }
  },
  async created () {
    console.log(this.$route.params.data)
    await this.$fire.firestore.collection('RouteList').get().then((querySnapShot) => {
      querySnapShot.forEach((doc) => {
        // eslint-disable-next-line prefer-const
        // console.log(doc.data().intStops)
        const data = {
          id: '',
          from: '',
          to: '',
          via: '',
          time: ''
        }
        const route = doc.id
        // console.log(route)
        this.$fire.firestore.collection('BusList').get().then((querySnapShot) => {
          querySnapShot.forEach((bus) => {
            if (bus.data().route === route) {
              data.id = bus.id
              data.from = doc.data().from
              data.to = doc.data().to
              data.time = doc.data().time
              data.via = doc.data().via
            }
          })
        })
        this.busses.push(data)
        console.log(data)
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
