<template>
  <div v-show="showContent">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "mp-tab",
  props: {
    title: {
      type: String,
      default: ''
    },
    name: {
      type: [String, Number],
      default: 1
    }
  },
  data () {
    return {
      showContent: false
    }
  }
}
</script>

<style scoped>

</style>