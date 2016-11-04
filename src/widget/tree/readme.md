tree
---
项目状态树，组件通信，消息订阅发布

### Install
```sh
aimee i tree --save
```

### Usage
```js
import tree from 'tree';

// In list.app 发布者发布消息
tree.fire('list.imageClick', url)

// In picture.app 订阅者订阅消息
tree.on('list.imageClick', url => console.log(url))

// In picture.app 订阅者获取目标最后一次状态
tree.get('list.imageClick')
tree.get('list.imageClick', url => console.log(url))

/*
list.imageClick
list: 发布者签名id
imageClick: 消息id
*/
```

### Class
```js
const Tree = tree.Tree;
```
