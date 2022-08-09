# checkboxs 复选框
复选框组件

### 示例
<br />

 <mp-checkbox-group v-model="hobby">
    <mp-checkbox label="抽烟"></mp-checkbox>
    <mp-checkbox label="喝酒" type="circular"></mp-checkbox>
    <mp-checkbox label="打牌"></mp-checkbox>
</mp-checkbox-group>

### 代码
``` html
<mp-checkbox-group v-model="hobby">
    <mp-checkbox label="抽烟"></mp-checkbox>
    <mp-checkbox label="喝酒" type="circular"></mp-checkbox>
    <mp-checkbox label="打牌"></mp-checkbox>
</mp-checkbox-group>
```
```js
 export default {
  data() {
    retrun {
      hobby:['抽烟', '喝酒']
    }
  }
 }
```

### Attributes

#### mp-checkbox-group
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---- | ---- |  ---- | ---- |  ----  |
| v-model | 当前勾选的数据 | Array | true | - |
<br>

#### mp-checkbox  
| 事件名称 | 说明 | 回调参数 |
| ---- | ---- |  ---- | 
| input | 选择触发input事件 | 选择的value |


#### mp-checkbox
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---- | ---- |  ---- | ---- |  ----  |
| type | 复选框形状 | String | square/circular | square |
| label | 右边的值 | String | false | - |
| name | 唯一标识 | String,Number | true | - |
