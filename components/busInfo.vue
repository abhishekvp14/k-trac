<template>
  <div class="box flex  items-center w-9/10 h-20 mx-4 my-2 border-solid-black rounded-lg border-2 border-solid border-gray-400 font-semibold cursor-pointer" @click="searchBus">
    <div class="id w-1/4 text-center">
      {{ id }}
    </div>
    <div class="dest w-1/2 items-center justify-around">
      <div class="station text-center flex justify-around">
        <div class="from">
          {{ from }}
        </div>
        <div class="via-loc flex flex-col items-center justify-center w-20">
          <div class="arr w-6">
            <img src="../static/arrow-right.png" class="h-6 w-6">
          </div>
          <div v-if="via" class="via text-center text-xs">
            {{ via }}
          </div>
        </div>
        <div class="to">
          {{ to }}
        </div>
      </div>
    </div>
    <div class="time w-1/4 text-center">
      {{ time }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'busInfo',
  props: {
    id: {
      type: String,
      default: null
    },
    time: {
      type: String,
      default: null
    },
    from: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    },
    via: {
      type: String,
      default: null
    }

  },
  methods: {
    searchBus () {
      this.$router.push(`/mapView?from=${this.$route.query.from}&to=${this.$route.query.to}`)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
