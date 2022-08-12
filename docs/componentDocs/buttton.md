# Button 按钮
按钮组件

### 示例
<br />

> 普通按钮

<mp-button>按钮</mp-button>

### 代码
``` html
<mp-button>按钮</mp-button>
```

> 可以使用type定义不同类型

<mp-button  type="primary">primary按钮</mp-button>
<mp-button type="success">success按钮</mp-button>
<mp-button type="info">info按钮</mp-button>
<mp-button type="warning">warning按钮</mp-button>
<mp-button type="danger">danger按钮</mp-button>


### 代码
``` html
<mp-button  type="primary">primary按钮</mp-button>
<mp-button type="success">success按钮</mp-button>
<mp-button type="info">info按钮</mp-button>
<mp-button type="warning">warning按钮</mp-button>
<mp-button type="danger">danger按钮</mp-button>
```


> 可以使用plain

<mp-button plain>按钮</mp-button>
<mp-button plain  type="primary">primary按钮</mp-button>
<mp-button plain type="success">success按钮</mp-button>
<mp-button plain type="info">info按钮</mp-button>
<mp-button plain type="warning">warning按钮</mp-button>
<mp-button plain type="danger">danger按钮</mp-button>


### 代码
``` html
<mp-button plain>按钮</mp-button>
<mp-button plain  type="primary">primary按钮</mp-button>
<mp-button plain type="success">success按钮</mp-button>
<mp-button plain type="info">info按钮</mp-button>
<mp-button plain type="warning">warning按钮</mp-button>
<mp-button plain type="danger">danger按钮</mp-button>
```

> 可以使用round定义一个圆角的按钮

<mp-button round>按钮</mp-button>
<mp-button round plain  type="primary">primary按钮</mp-button>
<mp-button round type="success">success按钮</mp-button>
<mp-button round type="info">info按钮</mp-button>
<mp-button round plain type="warning">warning按钮</mp-button>
<mp-button round type="danger">danger按钮</mp-button>


### 代码
``` html
<mp-button round>按钮</mp-button>
<mp-button round plain  type="primary">primary按钮</mp-button>
<mp-button round type="success">success按钮</mp-button>
<mp-button round type="info">info按钮</mp-button>
<mp-button round plain type="warning">warning按钮</mp-button>
<mp-button round type="danger">danger按钮</mp-button>
```


> 可以使用circle定义一个圆形的按钮

<mp-button circle>按钮</mp-button>
<mp-button circle round plain  type="primary">primary按钮</mp-button>
<mp-button circle type="success">32</mp-button>
<mp-button circle round type="info">info按钮</mp-button>
<mp-button circle round plain type="warning">warning按钮</mp-button>
<mp-button circle type="danger">danger按钮</mp-button>


### 代码
``` html
<mp-button circle>按钮</mp-button>
<mp-button circle round plain  type="primary">primary按钮</mp-button>
<mp-button circle type="success">32</mp-button>
<mp-button circle round type="info">info按钮</mp-button>
<mp-button circle round plain type="warning">warning按钮</mp-button>
<mp-button circle type="danger">danger按钮</mp-button>
```



> disabled属性可以禁止该按钮，点击不会触发点击事件

<mp-button disabled @click="handleClick">按钮</mp-button>


### 代码
``` html
 <mp-button disabled @click="handleClick">按钮</mp-button>
```

> icon属性可以为按钮增加图标，支持的图标可以查看icon栏

<mp-button type="primary" icon="delete">按钮</mp-button>


### 代码
``` html
 <mp-button type="primary" icon="delete">按钮</mp-button>
```


> 触发点击事件click

<mp-button  @click="handleClick">按钮</mp-button>


### 代码
``` html
<mp-button  @click="handleClick">按钮</mp-button>
```
```js
 methods: {
    handleClick(e){
        console.log(e)
    }
 }

```

### Attributes


| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---- | ---- |  ---- | ---- |  ----  |
| type | 类型 | default/primary/success/info/warning/danger | false | default |
| plain | 是否镂空 | Boolean | false | false |
| round |是否圆角 | Number | false | 25 |
| circle | 圆形 |Boolean | false | false |
| icon | 图标 | String | false | - |
| disabled | 是否禁用 | Boolean | false | false |


### Event

| 事件名称 | 说明 | 回调参数 |
| ---- | ---- |  ---- | 
| click | 点击触发 | - |
