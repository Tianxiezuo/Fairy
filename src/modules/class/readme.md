# Class
基类，用于方便创建类及子类


## For aimeejs  
```
aimee i class --save
```
```js
import Class form 'class';
```

## For nodejs  
```
npm i aimee-class --save
```
```js
var Class = require('aimee-class')
```

### Usage
```js
class App extends Class {
	contructor(){}
}
```

### Method
``App.is`` 继承自 [is](https://github.com/aimeejs/is)  
``App.extend`` 继承自 [extend](https://github.com/aimeejs/extend)  
``App.clone`` 深度复制一个对象
```js
let obj = { a: 1 }
let objclone = App.clone(obj) // => { a: 1 }
```

```
由于ES6的到来，class@2.0版本之后仅支持aimeejs平台，作为aimee框架的基类存在。
nodejs版不再更新，nodejs请用es6原生class。
nodejs-v0.12及更早期版本可以使用aimee-class@1.2.2
```
