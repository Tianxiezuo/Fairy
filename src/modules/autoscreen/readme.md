# autoscreen
Aimee的autoscreen模块, 全站适配方案.

#### Install
```
aimee i autoscreen
```
#### Example
```javascript
var aimee = require('aimee')
aimee.reg('autoscreen')
```
#### 算法
```
(function(){
	var baseFontSize = 100;
	var baseWidth = 320;
	var clientWidth = document.documentElement.clientWidth || window.innerWidth;
	var innerWidth = Math.max(Math.min(clientWidth, 480), 320);

	var rem = 100;

	if(innerWidth > 362 && innerWidth <= 375){
		rem = Math.floor(innerWidth/baseWidth * baseFontSize * 0.9);
	}
	if(innerWidth > 375){
		rem = Math.floor(innerWidth/baseWidth * baseFontSize * 0.84);
	}

	document.querySelector('html').style.fontSize = rem + 'px';
}());

```

#### 方案描述
ios、andriod一套js算法，根据innerWidth宽度比乘以基准字体大小100px，为了达到不同设备完美的适配效果，根据innerWidth分三个区间乘以不同的阈值

	1 innerWidth <= 362 
	  rem:基准字体大小
	2 innerWidth > 362 && innerWidth <= 375 
	  rem：innerWidth/baseWidth * 基准字体大小 * 0.9
	3 innerWidth > 375 
	  rem：innerWidth/baseWidth * 基准字体大小 * 0.84

	innerWidth最大值480（兼容pad上的显示，不然字体太小）

	区间从362开始andriod设备中360的占比很大，且很多机型屏幕大小差异很大但取到的innerWidth都是360即使不适配文字也很大，为了兼容这种情况360的设备都统一按照iphone5处理，而其他的andriod设备根据6、6+区间去处理，这样避免了360屏适配的问题，也保证了区间的连续性，也可以覆盖到所有设备。