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
    <div v-if="available" class="list ">
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
import KtracLogo from '~/components/KtracLogo.vue'
import BusInfo from '~/components/busInfo.vue'
// import { bus } from '~/plugins/EventBus'
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
      query: []
    }
  },
  async created () {
    this.query.push(this.$route.query.from, this.$route.query.to)
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
        if (this.query.every(stop => doc.data().intStops.includes(stop))) {
          if (doc.data().intStops.indexOf(this.query[1]) - doc.data().intStops.indexOf(this.query[0]) > 0) {
            const route = doc.id
            this.getBusses(doc, data, route)
          }
        // console.log(route)
        // console.log(data)
        }
      })
    })
  },
  mounted () {
  },
  methods: {
    getBusses (doc, data, route) {
      this.$fire.firestore.collection('BusList').get().then((querySnapShot) => {
        querySnapShot.forEach((bus) => {
          if (bus.data().route === route) {
            data.id = bus.id
            data.from = doc.data().from
            data.to = doc.data().to
            data.time = doc.data().time
            data.via = doc.data().via
            this.busses.push(data)
          }
        })
      })
    },
    setStops (from, to) {
      this.from = from
      this.to = to
    },
    available () {
      if (this.busses.length === 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style lang="css" scoped>
</style>

<!-- let haystack = ["12345", "hello", "world"];
let needle = ["hello", "12345"];

let result = needle.every(i => haystack.includes(i));

console.log(result); // Output = true -->
