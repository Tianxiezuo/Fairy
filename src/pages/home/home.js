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
    }

    get ajaxconfig() {
        return {
            url: null,//'http://192.168.0.110/test4.php?pageNo=1&pageSize=100',
            dataType: 'json'
        }
    }

    onload() {

    }

    prerender(data) {
        console.log(data)
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
}

export default new home;
