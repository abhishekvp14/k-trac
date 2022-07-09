<template>
  <div class="flex flex-col h-screen">
    <div class="header-section flex justify-center my-16">
      <KtracLogo />
    </div>
    <div class="title flex mb-4 font-bold">
      <div class="busNo w-1/3 text-center">
      BUSNO
      </div>
      <div class="dest w-1/3 items-center justify-around">
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
    <div class="time w-1/3 text-center">
      TIME
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
      to: '',
      data: {
        id: '',
        from: '',
        to: '',
        via: '',
        route: '',
        time: ''
      }
    }
  },
  async created () {
    bus.$on('addressPush', (startStop) => {
      console.log(startStop.from)
    })
    this.busses = []
    const text = 'Hello'
    text.toLowerCase()
    await this.$fire.firestore.collection('BusList').get().then((querySnapShot) => {
      querySnapShot.forEach((doc) => {
        // eslint-disable-next-line prefer-const
        let data = {
          id: '',
          from: '',
          to: '',
          via: '',
          time: ''
        }
        console.log(doc.data())
        const route = doc.data().route.toUpperCase()
        data.id = doc.id
        this.$fire.firestore.collection('RouteList').doc(route).get().then((querySnapShot) => {
          console.log(querySnapShot.data())
          data.from = querySnapShot.data().from.toUpperCase()
          data.to = querySnapShot.data().to.toUpperCase()
          data.time = querySnapShot.data().time
          data.via = querySnapShot.data().via
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
