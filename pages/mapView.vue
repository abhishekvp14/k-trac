<template>
  <div id="map" style="height: 100vh; width: 100%;">
    <client-only>
      <map :zoom=15 :center="[11.832691332818312, 75.96947366712608]">
        <!-- <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer> -->
        <!-- <l-marker :lat-lng="[11.832691332818312, 75.96947366712608]">Hello</l-marker> -->
        <LRoutingMachine :mapObject="mapObject" :waypoints="waypoints" />
      </map>
    </client-only>
  </div>
</template>

<script>
import L from 'leaflet'
import LRoutingMachine from '../components/LRoutingMachine.vue'
import 'leaflet/dist/leaflet.css'

export default {
  components: {
    LRoutingMachine
  },
  data () {
    return {
      mapId: 'map',
      mapObject: null,
      zoom: 13,
      center: {},
      osmUrl: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:
        '<a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
      waypoints: []
    }
  },
  async created () {
    const from = this.$route.query.from
    const to = this.$route.query.to
    let mapPoints = await this.$axios.$get(`https://nominatim.openstreetmap.org/search?q=${from}+kerala&format=json&polygon=1%addressdetails=1`)
    console.log(mapPoints[0])
    let lt = mapPoints[0].lat
    let ln = mapPoints[0].lon
    this.center = { lat: lt, lng: ln }
    this.waypoints.push({ lat: lt, lng: ln })
    mapPoints = await this.$axios.$get(`https://nominatim.openstreetmap.org/search?q=${to}+kerala&format=json&polygon=1%addressdetails=1`)
    lt = mapPoints[0].lat
    ln = mapPoints[0].lon
    this.waypoints.push({ lat: lt, lng: ln })
    this.mapObject = L.map(this.mapId, {
      zoom: this.zoom,
      center: this.center
    })

    L.tileLayer(this.osmUrl, {
      attribution: this.attribution
    }).addTo(this.mapObject)
  }
}
</script>
