# Tips
弹出提示

### 示例
<br />

this.$tips({
type: "success",
message: "操作成功",
duration: 2000,
});

### 代码
``` js
 this.$tips({
    type: "success",
    message: "操作成功",
    duration: 2000,
 });
```

### Options


| 参数 | 说明 | 类型 | 是否必要 | 可选值 | 默认值 |
| ---- | ---- |  ---- | ---- | ---- | ----  |
| type | 主题样式 | String | true | success/warn/info/error  | - |
| message | 说明文字 | String | false | - | - |
| duration | 图片高度 | Number | false | - | 2000 |
