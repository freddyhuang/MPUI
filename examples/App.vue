<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <Demo></Demo>
    <mp-card
      imgSrc="1.png"
      summary="多端全栈项目实战，大型商业级代驾业务全流程落地"
    ></mp-card>

    <mp-card
      imgSrc="2.png"
      summary="Next.js+React+Node系统实战，搞定SSR服务器渲染"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 * 528人报名</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </mp-card>

    <mp-card imgSrc="3.png" :width="370" :imgHeight="90">
      构建千万级高可用企业级Node.js应用
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">4步骤 * 6门课</div>
          <div class="level">10965收藏</div>
        </div>
      </template>
    </mp-card>

    <div style="margin-top: 30px">
      <mp-input type="text" placeholder="请输入" label="这个是左边的说明"></mp-input>
    </div>

    <div style="margin-top: 30px">
      <mp-tabs class="tabs" v-model="activeIndex">
        <mp-tab title="扫码tab" name="1" >
          扫码
        </mp-tab>
        <mp-tab title="支付tab" name="2" >
          支付
        </mp-tab>
      </mp-tabs>
    </div>

    <div style="margin-top: 50px;">
      <button @click="successMessage">success</button>

      <button @click="errorMessage">error</button>

      <button @click="warnMessage">warn</button>
    </div>

  </div>
</template>

<script>
import MpInput from "../components/lib/input/src/main";
export default {
  name: "App",
  components: {MpInput},
  data () {
    return {
      activeIndex: 1
    }
  },
  mounted() {},
  methods: {
    successMessage() {
      this.$tips({
        type: "success",
        message: "操作成功",
        duration: 2000,
      });
    },
    errorMessage() {
      this.$tips({
        type: "error",
        message: "操作失败",
        duration: 2000,
      });
    },
    warnMessage() {
      this.$tips({
        type: "warn",
        message: "异常警告",
        duration: 2000,
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level {
  color: #9199a1;
  margin-bottom: 8px;
}
.price {
  color: #f01414;
}
.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
