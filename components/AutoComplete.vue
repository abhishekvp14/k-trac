<template>
  <div class="div">
    <Multiselect v-model="value" @input="UpdateField" :multiple="false" :options="options"></Multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  components: { Multiselect },
  data () {
    return {
      value: '',
      options: ['Kannur', 'Wayanad', 'Nedumpoil']
    }
  },
  methods: {
    UpdateField (value) {
      value = this.value
      alert(value)
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
