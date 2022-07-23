<template>
    <label :for="id" class="text-gray-500"> {{ label }} </label>
</template>
<script>
export default {
  name: 'LabelText',
  props: {
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    }
  }
}
</script>
