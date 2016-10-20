v2.1.0
---
新增``Class.prototype.clone``方法，用于深度复制一个对象
```js
this.clone = obj => this.extend(true, {}, obj)
```