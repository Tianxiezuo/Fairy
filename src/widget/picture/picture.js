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
        // console.log(window.innerHeight)
    }

    prerender(app) {
        tree.get('list.data', args => this.setData(args[0]));
        this.delegate('.prev', 'click', e => this.prev(e));
        this.delegate('.next', 'click', e => this.next(e));
        this.delegate('.btn-close', 'click', e => this.dialog.close());
    }

    postrender(app) {
        // 初始化dialog
        this.dialog = this.getApp().remodal();
    }

    pagerender(app) {
        // 订阅list.app imageClick消息
        tree.on('list.imageClick', (url, listIndex) => {
            this.listIndex = listIndex;
            this.currentIndex = 0;
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

    next() {
        let url = this.getNextPicture()
        let current = this.find('.current')
        !url || current.attr('src', url)
    }

    prev() {
        let url = this.getPrevPicture()
        let current = this.find('.current')
        !url || current.attr('src', url)
    }

    getNextPicture() {
        const data = this.getData();
        const length = data.list[this.listIndex].list.length;
        const listLength = data.list.length;

        // 切换到下一图集
        if(this.currentIndex + 1 >= length) {
            // 最后一个图集
            if(this.listIndex + 1 >= listLength) {
                console.log('已经到最后一个图集，没有更多了')
                return null;
            }
            // 切换到下个图集第一张图片
            else{
                this.listIndex += 1;
                this.currentIndex = 0;
                return data.list[this.listIndex].list[this.currentIndex];
            }
        }
        // 图集内切换，切换到下一张
        else{
            this.currentIndex += 1;
            return data.list[this.listIndex].list[this.currentIndex];
        }
    }

    getPrevPicture() {
        const data = this.getData();
        const length = data.list[this.listIndex].list.length;

        // 切换到上一图集
        if(this.currentIndex - 1 < 0) {
            // 第一个图集
            if(this.listIndex - 1 < 0) {
                console.log('已经到第一个图集，没有更多了')
                return null;
            }
            // 切换到上个图集的最后一张图片
            else{
                this.listIndex -= 1;
                this.currentLength = data.list[this.listIndex].list.length;
                this.currentIndex = data.list[this.listIndex].list.length - 1;
                return data.list[this.listIndex].list[this.currentIndex];
            }
        }
        // 图集内切换，切换到上一张
        else{
            this.currentIndex -= 1;
            return data.list[this.listIndex].list[this.currentIndex];
        }
    }
}

export default picture;
