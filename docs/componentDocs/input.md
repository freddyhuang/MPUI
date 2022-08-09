# input 输入框
输入框组件

> 一、普通使用
### 示例1
<br />

<mp-input type="text" placeholder="请输入" label="说明:" label-position="right"></mp-input>

### 代码
``` html
   <mp-input type="text" placeholder="请输入" label="说明:" label-position="right"></mp-input>
```

> 二、使用插槽
### 示例2
<br />

<mp-input type="text" placeholder="请输入" label="说明:" label-position="right">
    <template v-slot:mp-input-right>
        <div>右边插槽</div>
    </template>
</mp-input>

### 代码
``` html
   <mp-input type="text" placeholder="请输入" label="说明:" label-position="right">
        <template v-slot:mp-input-right>
            <div>右边插槽</div>
        </template>
   </mp-input>
```


### Attributes


| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---- | ---- |  ---- | ---- |  ----  |
| type | 支持原生input所有的类型 | String | false | text |
| placeholder | 输入框placeholder | String | false | - |
| label | 输入框左边的说明文字 | String | false | - |
| label-position | 输入框左边的说明文字位置 | left/center/right | false | center |
| mp-input-right | 输入框右边插槽 | Slot | false | - |

### Event

| 事件名称 | 说明 | 回调参数 |
| ---- | ---- |  ---- | 
| input | 输入框输入时触发 | $event |