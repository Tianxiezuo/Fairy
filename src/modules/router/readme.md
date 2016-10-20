# router

Aimee框架的路由管理模块，用于管理虚拟页路由

#### Example
```javascript
var router = require('router');

router
    .option('pages/home')						// => http://domain/#/home
    .option('pages/user')						// => http://domain/#/user
    .option('pages/video')						// => http://domain/#/video
    .option('pages/videolist', '/video/list')	// => http://domain/#/video/list
    .action();

```