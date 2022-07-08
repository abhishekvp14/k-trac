import { MapElementFactory } from 'vue2-google-maps'

export default MapElementFactory({
  name: 'directionsRenderer',

  ctr () {
    return window.google.maps.DirectionsRenderer
  },

  events: [],

  mappedProps: {},

  props: {
    origin: { type: [Object, Array] },
    destination: { type: [Object, Array] },
    travelMode: { type: String }
  },

  afterCreate (directionsRenderer) {
    const directionsService = new window.google.maps.DirectionsService()
    this.$watch(
      () => [this.origin, this.destination, this.travelMode],
      () => {
        const { origin, destination, travelMode } = this
        if (!origin || !destination || !travelMode) {
          return
        }
        directionsService.route(
          {
            origin,
            destination,
            travelMode
          },
          (response, status) => {
            if (status !== 'OK') {
              return
            }
            // eslint-disable-next-line no-debugger
            debugger
            directionsRenderer.setDirections(response)
          }
        )
      }
    )
  }
})
