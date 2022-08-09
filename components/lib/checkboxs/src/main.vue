<template>
  <div class="mp-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'mp-checkbox-group',
    props: {
        value: {
            type: Array
        }
    },
    provide() {
        return {
            CheckboxGroup: this
        }
    }
}
</script>

<style>

</style>