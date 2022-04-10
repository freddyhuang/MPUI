# 快速开始

#### 安装组件库

```bash
npm i MPUI
```
#### 引用组件库
> 在main.js中引用组件库

```javascript

// 全局引进
import 'mp-fast-ui/dist/css/index.css'
import MPUI from 'mp-fast-ui';
Vue.use(MPUI)

// 按需引进
import 'mp-fast-ui/dist/css/demo.css';
import { Demo } from 'mp-fast-ui';
Vue.use(Demo);

```

