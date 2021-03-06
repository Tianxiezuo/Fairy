/*!
 * header For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-app
 * Date: 2016-10-19
 */

import App from 'app';
import template from 'header.jade';

class header extends App {

    constructor() {
        super();
        this.name = 'header';
        this.template = template;
        this.navHeight = 168;
    }

    onload() {

    }

    // app渲染到页面之前执行，用于预处理渲染内容
    prerender(app) {
        this
            .delegate('.imenu', 'click', e => {
                this.getApp().hasClass('showmenu') ?
                    this.getApp().removeClass('showmenu'):
                    this.getApp().addClass('showmenu');
            })
    }

    // app渲染到页面之后执行，此时app还在内存中，不能获取宽度高度等与尺寸相关的属性
    postrender(app) {
        this.exports('nav')
    }

    // 页面渲染到浏览器后执行，此时可以获取宽高等与尺寸相关的属性
    pagerender(app) {
        // some code
    }
}

export default header;
