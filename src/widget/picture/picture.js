/*!
 * picture For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-app
 * Date: 2016-11-04
 */

import App from 'app';
import tree from 'tree';
import template from 'picture.jade';

class picture extends App {

    constructor() {
        super();
        this.name = 'picture';
        this.template = template;
    }

    onload() {
        tree.on('list.imageClick', (url, test) => console.log(url, test, 'from picture.app'))
    }

    // app渲染到页面之前执行，用于预处理渲染内容
    prerender(app) {
        // app为模块的实例
        // your code
    }

    // app渲染到页面之后执行，此时app还在内存中，不能获取宽度高度等与尺寸相关的属性
    postrender(app) {
        // app为模块的实例
    }

    // 页面渲染到浏览器后执行，此时可以获取宽高等与尺寸相关的属性
    pagerender(app) {
        $('.lincoapp-header').on('click', e => {
            console.log(tree.get('list.imageClick'))
        })
    }
}

export default picture;
