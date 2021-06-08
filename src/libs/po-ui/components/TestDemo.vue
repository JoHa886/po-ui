<template>
  <div class="text-oo">
    {{ test }}
  </div>
</template>

<script lang="ts">
export default {
  name: 'TestDemo',
  props: {
    test: {
      type: String,
      default: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.text-oo {
  color: red;
  background-color: cadetblue;
  height: 200px;
  width: 200px;
}
</style>
