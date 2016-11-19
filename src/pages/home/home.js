/*!
 * home For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-page
 * Date: 2016-10-19
 */

import Page from 'page';
import template from 'home.jade';

class home extends Page {

    constructor() {
        super();
        this.name = 'home';
        this.template = template;
        this.pageno = 1;
        this.pagesize = 50;
        this.hostname = '192.168.0.104';
        this.pathname = '/test3.php';
        this.host = 'http://' + this.hostname;
    }

    get ajaxconfig() {
        return {
            url: `${this.host}/test3.php?pagesize=${this.pagesize}&pageno=${this.pageno}`,
            dataType: 'json'
        }
    }

    onload() {

    }

    prerender(data) {
        console.log(data, 0)
        this.formatData(data.data, this.host)
        this.exports('header')
        this.exports('list', data.data)
        this.exports('picture')
    }

    postrender(data) {

    }

    enter() {

    }

    leave() {

    }

    formatData(data, http) {
        http = http || 'http://localhost:8080/';
        data.list.forEach(imgs => {
            imgs.img = http + imgs.img;
            imgs.list.forEach((url, i) => {
                imgs.list[i] = http + url
            })
        })
    }
}

export default new home;
