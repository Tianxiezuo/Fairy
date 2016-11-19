/*!
 * list For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-app
 * Date: 2016-10-19
 */

import App from 'app';
import url from 'url';
import tree from 'tree';
import template from 'list.jade';
import DelayEvent from 'delayevent';

class list extends App {

    constructor() {
        super();
        this.name = 'list';
        this.template = template;
        this.listno = 1;
        this.listsize = 10;
        this.listdata = 0;
        this.maxlistno = 0;
    }

    onload() {
        // 默认列宽
        this.liWidth = 300;
        // 默认Grid参数
        this.gridOptions = {
            itemSelector: '.grid-item',
            gutter: 10
        };

        // 自动分页
        this.getPages();
        tree.fire('list.data', this.listdata);
    }

    getPages(pageno) {
        var data = this.getData();
        var pageno = pageno || this.listno;
        // 分页起始位置
        var start = Math.max(0, (pageno-1) * this.listsize);
        // 分页终止位置
        var end = Math.max(this.listsize, pageno * this.listsize);
        // 检查是否已缓存数据
        this.listdata = this.listdata || data.list;
        // 计算最大分页
        this.maxlistno = this.maxlistno || Math.ceil(this.listdata.length/this.listsize);
        // 更新数据
        data.list = this.listdata.slice(start, end);
        // 返回最新分页数据
        return data;
    }

    prerender(app) {
        this.grid = this.getApp();

        this.bind({
            'click@.pic': function(){
                let url = this.getAttribute('src');
                let li = $(this).parents('.grid-item');
                let listIndex = app.grid.find('li').index(li);
                tree.fire('list.imageClick', url, Number(listIndex));
            }
        })
    }

    postrender(app) {
        let resize = new DelayEvent;
        let scroll = new DelayEvent;

        resize.delay('resize', 60).done(() => this.autoscreen());
        scroll.delay('scroll', 60).done(() => this.onscroll());
    }

    pagerender(app) {
        this.autoscreen()
    }

    // 屏幕自适配
    autoscreen() {
        window.innerWidth < 630 ?
            this.destroyMasonry() :
            this.initMasonry();
    }

    // 滚动自动加载
    onscroll() {
        // 当前滚动的高度
        let scrollY = window.scrollY;
        // 当前可视区域高度
        let innerHeight = window.innerHeight;
        // 当时文档高度
        let bodyHeight = document.body.offsetHeight;
        // 当前剩余文档高度
        let hidden = bodyHeight - innerHeight - scrollY;

        // 剩余文档不足一屏时，加载下一页
        if (hidden < innerHeight) {
            this.update()
        }
    }

    // 计算瀑布流参数
    calcOptions() {
        // Grid的Padding值，列表两边留白
        let padding = this.getPadding();
        // Grid-item的间距
        let gutter = this.gridOptions.gutter;
        // Grid的有效空间长度
        let inner = window.innerWidth - padding;
        // Grid的列数
        let column = Math.floor(inner/this.liWidth);
        // Grid列宽
        let columnWidth = (inner - (column-1) * gutter)/column;
        this.find('.grid-item').css('width', columnWidth);
    }

    // 初始化瀑布流
    initMasonry() {
        this.calcOptions()
        this.grid.imagesLoaded(() => {
            this.grid.masonry( this.gridOptions );
            this.gridActive = true;
        })
    }

    // 销毁瀑布流
    destroyMasonry() {
        if (this.gridActive) {
            this.grid.masonry( 'destroy' );
            this.gridActive = false;
            this.find('.grid-item').css('width', 'auto');
        }
    }

    // Grid两边留白
    getPadding() {
        let padding = this.getApp().css('padding-left');
        return Number(padding.replace('px', '')) * 2;
    }

    // 更新数据
    update() {
        if(this.listno < this.maxlistno){
            this.listno++;
            let data = this.getPages(this.listno);
            let $dom = $(this.template(data));
            let list = $dom.find('.grid').children();
            let imgs = data.list.map(img => img.img);
            this.grid.find('.grid').append(list);
            this.loadImgs(imgs).then(e => {
                if (this.gridActive) {
                    // 计算瀑布流最新数据
                    this.calcOptions();
                    // 渲染新加入的数据到瀑布流
                    this.grid.masonry('appended', list);
                }
            })
        }
        else{
            console.log('已经是最后一页')
        }
    }

    loadImgs(arr) {
        var ps = arr.map(url => {
            return new Promise((res, rej) => {
                let img = new Image;
                img.src = url;
                img.onload = e => res();
            })
        })
        return Promise.all(ps)
    }
}

export default list;
