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
        this.dialog = aimee.$('img.imgs').remodal();
    }

    onload() {
        
    }

    prerender(app) {

    }

    postrender(app) {

    }

    // 页面渲染到浏览器后执行，此时可以获取宽高等与尺寸相关的属性
    pagerender(app) {
        tree.on('list.imageClick', url => {
            // this.update(url).show();
            // aimee.app.dialog.update(this.getApp()).open();
            this.update(url);
            this.dialog.open();
        })
    }

    update(url) {
        this.dialog.$modal.attr('src', url);
        return this;
    }
}

export default picture;
