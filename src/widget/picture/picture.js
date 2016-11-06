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
        console.log(window.innerHeight)
    }

    prerender(app) {

    }

    postrender(app) {
        // 初始化dialog
        this.dialog = this.getApp().remodal();
    }

    pagerender(app) {
        // 订阅list.app imageClick消息
        tree.on('list.imageClick', url => {
            this.update(url).autoscreen().show();
            this.dialog.open();
        })
    }

    autoscreen() {
        // 限制图片最大高度
        this.find('.current').css('max-height', window.innerHeight - 30);
        return this;
    }

    update(url) {
        this.find('.current').attr('src', url);
        return this;
    }

    show() {
        this.getApp().css('display', 'inline-block');
    }
}

export default picture;
