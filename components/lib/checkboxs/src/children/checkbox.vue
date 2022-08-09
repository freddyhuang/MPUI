<template>
  <label class="mp-checkbox" :class="{ 'is-checked' : isChecked }">
    <span class="mp-checkbox-input">
      <span class="mp-checkbox-inner" :class="type"></span>
      <input type="checkbox" class="mp-checkbox-original" 
      :name="name"
      v-model="model"
      :value="label" />
    </span>
    <span class="mp-checkbox-label">
      <slot></slot>
      <template v-if="!$slots.default">
        {{label}}
      </template>
    </span>
  </label>
</template>

<script>
export default {
  name:'mp-checkbox',
  inject: {
      CheckboxGroup: {
        type: Comment,
        default: ''
      }
  },
  props:{
    type: {
      type: String,
      default: 'square'
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  methods:{

  },
  computed:{
    model:{
      get () {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set (value) {
          this.isGroup ? this.CheckboxGroup.$emit('input',value) : this.$emit('input', value)
      }
    },
    isGroup() {
      return  !!this.CheckboxGroup
    },
    isChecked() {
      // 如果有group包裹，判断label是否在model中
      // 如果没有group包裹，直接使用model
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  }
}
</script>

<style scoped>

</style>