Delay Event
---
延迟事件执行，提升性能，常用与resize, scroll等

### Usage
```js
var de = new DelayEvent;

de.delay('resize', 60).done(() => console.log(123))
```
```js
var de = new DelayEvent;

de.delay('scroll', 60).done(() => console.log(456))
```
