# Tabs 导航
导航组件

### 示例
<br />

<mp-tabs class="tabs" v-model="activeIndex">
    <mp-tab title="扫码tab" name="1" >
      扫码
    </mp-tab>
    <mp-tab title="支付tab" name="2" >
      支付
    </mp-tab>
</mp-tabs>

### 代码
``` html
<mp-tabs class="tabs" v-model="activeIndex">
    <mp-tab title="扫码tab" name="1" >
      扫码
    </mp-tab>
    <mp-tab title="支付tab" name="2" >
      支付
    </mp-tab>
</mp-tabs>

```

### Attributes

#### mp-tabs
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---- | ---- |  ---- | ---- |  ----  |
| activeIndex | 当前激活tab,默认和name对应 | String,Number | false | 0 |
<br>

#### mp-tabs  Events
| 事件名称 | 说明 | 回调参数 |
| ---- | ---- |  ---- | 
| click | 点击mp-tab触发 | title, name |


#### mp-tab
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---- | ---- |  ---- | ---- |  ----  |
| title | tab的标题 | String | false | - |
| name | 唯一标识 | String,Number | true | - |