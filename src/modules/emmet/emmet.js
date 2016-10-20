/**
 * Emmet for Aimeejs
 * Author by gavinning
 * Homepage https://github.com/Aimeejs/emmet
 */

var create = require('./rye.create.js');

module.exports = upper;

// 处理^符号
function upper(string){
    var dom, arr, symbol, wrap, key, className;

    dom = [];
    // 分割^符号
    arr = string.split(/\^+/);
    // 获取^数组，用于计算后续DOM位置
    symbol = string.match(/\^+/g);
    // 特殊标记
    key = 'create-dom-like-emmet';
    // 创建根dom用于创建后续DOM
    wrap = $(create('#' + key).toHTML());
    // 为^标记特殊类，用计算后续DOM插入位置
    className = '.' + key;

    // 分组创建DOM
    arr.forEach(function(item){
        dom.push(create(item + className).toHTML())
    })

    // 补充^, 保持与dom数组一致
    symbol ? symbol.unshift('^') : symbol = ['^'];

    // 连接dom数组中的_dom
    while(dom.length){
        var _dom, length, target;

        // 按序弹出_dom
        _dom = dom.shift();
        // 计算^...的数量
        length = symbol.shift().length;
        // 查找被标记的特殊dom
        target = wrap.find(className);

        if(target.length){
            // 删除特殊标记
            clearTarget(target, key);
            // 计算后续DOM插入位置
            while(length){
                length--;
                target = target.parent()
            }
            // 插入分组后续DOM到根dom
            target.length && target.get(0).id !== key ? target.after(_dom) : wrap.append(_dom)
        }
        else{
            // 如果为空，则直接插入到根dom中
            wrap.append(_dom)
        }
    }

    // 清空特殊标记
    clearTarget(wrap.find(className), key)

    return wrap.html()
}

// 清理特殊标记及空class属性
function clearTarget(target, className){
    target.each(function(){
        this.className === className ?
            this.removeAttribute('class') : $(this).removeClass(className);
    })
}
