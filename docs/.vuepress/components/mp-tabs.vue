<template>
  <div class="way_tabs">
    <!-- tabs 导航区 -->
    <div class="tabs_wrap">
      <div class="tab" :class="{ 'active': Number( value ) === Number( item.name ) }" v-for="(item, i) of tabList" :key="i" @click="chooseTab(i)">
        {{ item.title }}
      </div>
    </div>
    <!-- 展示内容区 -->
    <div class="content_wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "mp-tabs",
  props: {
    value: {
      type: [String, Number],
      default: 0
    }
  },
  model: {
    prop: 'value',
    event: 'click'
  },
  watch: {
    value: {
      handler (newVal, oldVal) {
        console.log('newVal',newVal)
        console.log('oldVal', oldVal)
        console.log('tabComponentsList', this.tabComponentsList)
        this.updatedTab()
      }
    }
  },
  data() {
    return {
      activeIndex: 0,
      tabComponentsList: [],
      tabList:[]
    }
  },
  mounted() {
    this.getTabList()
  },
  methods: {
    getTabList () {
      this.tabComponentsList = this.$children.filter(item => item.$options.name === "mp-tab")
      this.tabList = this.tabComponentsList.map((item, index) => {
        return {
          title: item.title,
          name: item.name || index
        }
      })

      // 解决首次加载不更新显示问题
      this.updatedTab()

    },
    updatedTab () {
      this.tabComponentsList.forEach((item, index) => {
        let matcheName = item.name || index
        if( Number(this.value) === Number(matcheName) ) {
          item.showContent = true
        } else {
          item.showContent = false
        }
      })
    },
    chooseTab (index) {
      let tab = this.tabList[index]
      let name = tab.name
      let title = tab.title
      this.activeIndex = index
      this.$emit('click', name, title)
    }
  }
}
</script>

<style scoped lang="scss">
.way_tabs {
  text-align: center;
  .tabs_wrap {
    display: flex;
    flex: 1;
    list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    text-align: center;
    color: #8c8c8c;
    box-shadow: 0px 4px 11px 0px rgba(0,0,0,0.11);
    .tab {
      flex: 0.5;
      padding: 0 0.4rem;
    }
    .active {
      border-bottom: 2px solid #4293fc;
    }
  }
  .content_wrap {
    margin-top: 15px;
  }
}
</style>