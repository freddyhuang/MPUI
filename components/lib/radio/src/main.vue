<template>
  <div class="mp-radio-group">
    <div v-for="(item, index) in options" :key="index" class="mp-radio-link">
      <div class="mp-radio-list">
        <div class="mp-radio-area">
          <label>
            <span>
              <input type="radio"
                      :value="typeof item == 'string' ? item : item.value "
                      class="mp-radio-input"
                      v-model="selectedValue"
                      :disabled="typeof item == 'string' ? false : item.disabled == true ? true : false"/>
              <span class="mp-radio-select" :class="typeof item == 'string' ? '' : item.disabled == true ? 'mp-radio-selet-disabled' : ''">
              </span>
            </span>
            <span class="mp-select-list-item">{{typeof item == 'string' ? item : item.label }} </span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mp-radio",
  props:{
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: []
    }
  },
  watch: {
    value: {
      handler(val){
        this.selectedValue = val;
      },
      deep: true,
      immediate: true
    },
    selectedValue: {
      handler(){
        this.$emit('input', this.selectedValue)
      },
      deep: true,
      immediate: true
    }
  },
  data(){
    return {
      selectedValue:''
    }
  },
  created() {
    if(typeof (this.options) == 'string'){
      this.options = eval('(' + this.options + ')');
    }
  },
  methods: {
    input: function ($event) {
      this.$emit("input", $event); // 将值放在自定义的事件函数中作为参数
    }
  }
}
</script>

<style lang="scss" scoped>
.mp-radio-group {
  display: flex;
  .mp-radio-link{
    box-sizing: border-box;
    color: inherit;
    min-height: 40px;
    display: block;
    overflow: hidden;
    position: relative;
    text-decoration: none;
  }
  .mp-radio-list{
    height: 0.96rem;
    line-height: 0.96rem;
    width: 100%;
    padding: 0rem 0.4rem;
    box-sizing: border-box;
  }
  .mp-radio-area,
  .mp-radio-area label{
    height: 0.96rem;
    width: 100%;
    display: block;
  }
  .mp-radio-input{
    display: none;
  }
  .mp-radio-select {
    box-sizing: border-box;
    display: inline-block;
    background-color: #ffffff;
    border-radius: 100%;
    border: 1px solid #cccccc;
    position: relative;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .mp-radio-select-disabled {
    background-color: #d9d9d9;
    border-color: #ccc;
  }
  .mp-radio-input:checked + .mp-radio-select {
    background-color: #4293f4;
    border-color: #4293f4;
  }
  .mp-radio-input:checked + .mp-radio-select::after {
    background-color: #fff;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .mp-radio-select::after {
    content: ' ';
    border-radius: 100%;
    top: 5px;
    left: 5px;
    position: absolute;
    width: 8px;
    height: 8px;
    -webkit-transition: -webkit-transform 0.2s;
    transition: -webkit-transform 0.2s;
    transition: transform 0.2s;
    transition: transform 0.2s, -webkit-transform 0.2s;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  .mp-select-list-item {
    font-size: 0.3rem;
    vertical-align: middle;
    margin-left: 6px;
  }

}
</style>