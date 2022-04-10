# Card
卡片组件

### 示例
<br />

<mp-card
    imgSrc="/1.png"
    summary="Next.js+React+Node系统实战，搞定SSR服务器渲染"
></mp-card>

### 代码
``` html
<mp-card
    imgSrc="/1.png"
    summary="Next.js+React+Node系统实战，搞定SSR服务器渲染"
></mp-card>

```

### Attributes


| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---- | ---- |  ---- | ---- |  ----  |
| width | 卡片的宽度 | Number | false | - |
| imgSrc | 图片资源地址 | String | true | - |
| imgHeight | 图片高度 | Number | false | - |
| summary | 卡片的概要 | String/slot | false | - |
| footer | 卡片的底部 | Slot | false | - |
