<template>
    <div class="input_item">
      <div class="left_text" :style="labelPosition? {textAlign:labelPosition} : {}">
        {{ label }}
      </div>
      <div class="mp-input">
        <input class="input_style" :type="type" :placeholder="placeholder"  @input="input($event)" >
      </div>
      <div class="right-text">
        <slot name="mp-input-right"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: "mp-input",
  props: ["label", 'labelPosition', "type", "placeholder"],
  methods: {
    input: function ($event) {
      this.$emit("input", $event); // 将值放在自定义的事件函数中作为参数
    }
  }
}
</script>

<style lang="scss" scoped>
  .input_item {
    width: 100%;
    height: 40px;
    font-size: 14px;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    .left_text{
      width: 10%;
      padding-right: 1%;
      color: #757575;
    }
    .mp-input{
      position: relative;
      font-size: 12px;
      display: inline-block;
      width: 90%;
      .input_style {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
      }
      .input_style:focus {
        outline: none;
        border-color: #4293fc;
      }
    }
  }
</style>