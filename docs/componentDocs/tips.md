# Tips
弹出提示

### 示例一
<br />

![img.png](img.png)

### 代码
``` js
 this.$tips({
    type: "success",
    message: "操作成功",
    duration: 2000,
 });
```

### 示例二
<br />

![img_1.png](img_1.png)


### 代码
``` js
 this.$tips({
    type: "warn",
    message: "操作成功",
    duration: 2000,
 });
```

### 示例三
<br />

![img_2.png](img_2.png)


### 代码
``` js
 this.$tips({
    type: "error",
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
