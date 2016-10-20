# Emmet
使用emmet的方式创建dom，Create dom like emmet  


### Install
```js
aimee i emmet
```

### Example
```js

var emmet = require('emmet');

emmet('header > h1{Title} ^ .wrap > ul.list > li*5 > a[href=#$]')
```
==>

```html
<header>
	<h1>Title</h1>
</header>
<div class="wrap">
	<ul class="list">
		<li><a href="#1"></a></li>
		<li><a href="#2"></a></li>
		<li><a href="#3"></a></li>
		<li><a href="#4"></a></li>
		<li><a href="#5"></a></li>
	</ul>
</div>
```