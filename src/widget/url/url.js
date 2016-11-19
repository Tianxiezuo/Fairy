import parse from 'parse';

class Url {

    constructor(url) {
        this.url = url || location.href;
    }

    get(arg, url) {
        return parse(arg, url || this.url)
    }

    stringify(option) {
        var url = [option.protocol || 'http://', option.hostname, option.pathname].join('');

        if(option.args){
            url += '?';
            url += this.toString(option.args);
        }
        if(option.hash){
            url += '#';
            url += option.hash
        }
        return url;
    }

    toString(obj) {
        let array = [];
        for (let key in obj) {
            array.push([key, obj[key]].join('='))
        }
        return array.join('&')
    }
}

let url = new Url;
url.Url = Url;
module.exports = url;
