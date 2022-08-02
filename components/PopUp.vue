<template>
  <div class="popUp h-screen w-screen flex items-center justify-center" :style="opacity">
    <div class="popup lg:w-2/5 sm:w-4/5 h-2/5 bg-white rounded-xl py-16 flex flex-col items-center justify-between text-center">
      <h1 class="mt-10 lg:text-4xl md:text-2xl sm:text-xl text-gray-600 font-bold">{{ msg }}</h1>
      <LoadingAnim />
      <button @click="hidePopup" class="h-10 w-20 bg-green-400 rounded font-white">Close</button>
    </div>
  </div>
</template>

<script>
import LoadingAnim from './loadingAnim.vue'
export default {
  name: 'PopUp',
  data () {
    return {
      opacity: 'opacity: 1'
    }
  },
  methods: {
    hidePopup (path) {
      this.opacity = 'opacity: 0'
    }
  },
  props: {
    msg: {
      type: String
    }
  },
  components: { LoadingAnim }
}
</script>
<style>
.popUp {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(128, 128, 128, 0.5);
}

@media (min-width: 400px) {
  .popup {
    width: 80%;
    font-size: 1.5rem;
  }
  button {
    font-size: 1rem;
  }
}
</style>
