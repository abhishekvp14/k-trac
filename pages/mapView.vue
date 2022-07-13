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

const waypoints = [
  { lat: 11.832701833672104, lng: 75.96947366715244 },
  { lat: 11.82073094508727, lng: 75.98326803596473 }
]

export default {
  components: {
    LRoutingMachine
  },
  data () {
    return {
      mapId: 'map',
      mapObject: null,
      zoom: 12,
      center: { lat: 11.832701833672104, lng: 75.96947366715244 },
      osmUrl: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:
        '<a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
      waypoints
    }
  },
  mounted () {
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
