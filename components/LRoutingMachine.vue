<script>
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import L from 'leaflet'
import { IRouter, IGeocoder, LineOptions } from 'leaflet-routing-machine'

const props = {
  mapObject: {
    type: Object
  },
  visible: {
    type: Boolean,
    default: true
  },
  waypoints: {
    type: Array,
    required: true
  },
  router: {
    type: IRouter
  },
  plan: {
    type: L.Routing.Plan
  },
  geocoder: {
    type: IGeocoder
  },
  // fitSelectedRoutes: {
  //   type: [String, Boolean],
  //   default: 'smart'
  // },
  lineOptions: {
    type: LineOptions
  },
  routeLine: {
    type: Function
  },
  autoRoute: {
    type: Boolean,
    default: true
  },
  routeWhileDragging: {
    type: Boolean,
    default: false
  },
  routeDragInterval: {
    type: Number,
    default: 500
  },
  waypointMode: {
    type: String,
    default: 'connect'
  },
  useZoomParameter: {
    type: Boolean,
    default: true
  },
  showAlternatives: {
    type: Boolean,
    default: false
  },
  altLineOptions: {
    type: LineOptions
  }
}

export default {
  props,
  name: 'LRoutingMachine',
  data () {
    return {
      ready: false,
      map: null,
      layer: null,
      marker: null
      // createMarker: function marker (i, waypoint, n) {
      //   const marker = L.marker(waypoint[0], {
      //     draggable: false,
      //     icon: L.icon({
      //       iconUrl: 'https://cdn-icons-png.flaticon.com/512/4565/4565023.png',
      //       iconSize: [30, 30]
      //     })
      //   })
      //   return marker
      // }
    }
  },
  watch: {
    mapObject () {
      if (this.mapObject == null) {
        return
      }
      this.add()
    }
  },
  mounted () {
    this.add()
  },
  beforeUnmount () {
    return this.layer ? this.layer.remove() : null
  },
  methods: {
    createMarker (waypoint) {
      // eslint-disable-next-line no-unused-vars
      const marker1 = L.marker(waypoint[0], {
        draggable: false,
        icon: L.icon({
          iconUrl: 'https://cdn-icons-png.flaticon.com/512/4565/4565023.png',
          iconSize: [30, 30]
        })
      })
      // eslint-disable-next-line no-unused-vars
      // const marker2 = L.marker(waypoint[1], {
      //   draggable: false,
      //   icon: L.icon({
      //     iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
      //     iconSize: [30, 30]
      //   })
      // })
      return { marker1 }
    },
    add () {
      if (this.mapObject == null) {
        return
      }
      // console.log('hi')
      const {
        waypoints,
        fitSelectedRoutes,
        autoRoute,
        routeWhileDragging,
        routeDragInterval,
        waypointMode,
        useZoomParameter,
        showAlternatives,
        marker
      } = this
      // console.log(marker)
      // const customIcon = {
      //   iconUrl: 'https://cdn-icons-png.flaticon.com/512/4565/4565023.png'
      // }
      // const myIcon = L.icon(customIcon)
      // const iconOptions = {
      //   title: 'Bus',
      //   draggable: false,
      //   icon: myIcon
      // }

      // const marker = new L.Marker(waypoints[0], iconOptions)
      // marker.addTo(this.mapObject)
      const options = {
        waypoints,
        fitSelectedRoutes,
        autoRoute,
        routeWhileDragging,
        routeDragInterval,
        waypointMode,
        useZoomParameter,
        showAlternatives,
        marker
      }

      // this.mapObject.removeMarker()
      options.marker = this.createMarker(waypoints).marker1.addTo(this.mapObject)
      // options.marker = this.createMarker(waypoints).marker2.addTo(this.mapObject)

      const routingLayer = L.Routing.control(options)
      routingLayer.addTo(this.mapObject)
      this.layer = routingLayer
      this.ready = true
    }
  }
}
</script>

<style>
.leaflet-routing-collapse-btn, .leaflet-routing-container, .leaflet-bar, .leaflet-routing-collapsible, .leaflet-control {
  opacity: 0!important;
}
.leaflet-marker-icon, .leaflet-zoom-animated, .leaflet-interactive, .leaflet-marker-draggable {
  pointer-events: none!important;;
}
</style>
