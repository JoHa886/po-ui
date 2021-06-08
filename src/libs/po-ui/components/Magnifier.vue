<template>
  <div class="text-wrap">
    {{ link }}
  </div>
</template>

<script lang="ts">
export default {
  name: 'Magnifier',
  props: {
    link: {
      type: String,
      default: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.text-wrap {
  color: red;
}
</style>
