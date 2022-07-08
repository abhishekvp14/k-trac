<template>
  <div @click="searchBus" class="box flex  items-center w-9/10 h-20 mx-4 my-2 border-solid-black rounded-lg border-2 border-solid border-gray-400">
    <div class="id w-1/3 text-center">
      {{ id }}
    </div>
    <div class="time w-1/3 text-center">
      {{ time }}
    </div>
    <div class="station w-1/3 text-center">
      <div class="from">
        {{ from }}
      </div>
      <div class="to">
        {{ to }}
      </div>
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
    }

  },
  methods: {
    searchBus () {
      this.$router.push('/mapView')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
