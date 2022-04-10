<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo></Demo>
    <v-card
    imgSrc="1.png"
    summary="多端全栈项目实战，大型商业级代驾业务全流程落地"
    ></v-card>

    <v-card
    imgSrc="2.png"
    summary="Next.js+React+Node系统实战，搞定SSR服务器渲染"
    >
     <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 * 528人报名</div>
           <div class="price">￥299.00</div>
        </div>
     </template>
    </v-card>

     <v-card
    imgSrc="3.png"
    :width="370"
    :imgHeight="90"
    >
        构建千万级高可用企业级Node.js应用
        <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">4步骤 * 6门课</div>
           <div class="level">10965收藏</div>
        </div>
     </template>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
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

.footer{
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level{
  color: #9199a1;
  margin-bottom: 8px;
}
.price{
  color: #f01414;
}
.footer-spring{
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
