<template>
    <div class="input_item">
      <div class="left_text">
        {{ label }}
      </div>
      <div class="center_text">
        <input class="input_style" :type="type" :placeholder="placeholder"  @input="input($event)" >
      </div>
      <div class="right_text">

      </div>
    </div>
</template>

<script>
export default {
  name: "mp-input",
  props: ["label", "type", "placeholder"],
  methods: {
    input: function ($event) {
      this.$emit("input", $event); // 将值放在自定义的事件函数中作为参数
    }
  }
}
</script>

<style lang="scss" scoped>
  input:focus {
    outline: none;
    border: 1px solid #ffffff;
  }
  .input_item {
    width: 100%;
    height: 40px;
    font-size: 18px;
    text-indent: 10px;
    letter-spacing: 10px;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-bottom: 1px solid #eceef1;
    .left_text{
      width: 15%;
      padding-left: 1%;
      color: #757575;
      overflow: hidden;
      word-break: keep-all;
      white-space: nowrap;
    }
    .input_style {
      width: auto;
      min-width: 50%;
      border: none;
      outline: none;
      text-indent: 3px;
      letter-spacing: 3px;
      color: #757575;
    }
  }
</style>