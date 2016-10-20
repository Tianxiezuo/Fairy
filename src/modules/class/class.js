/**
 * Class for Aimeejs
 * Author by gavinning
 * Homepage https://github.com/Aimeejs/class
 */

import is from 'is';
import extend from 'extend';

class Base {

    constructor() {
        this.is = is;
        this.extend = extend;
        this.clone = obj => this.extend(true, {}, obj);
    }
}

Object.assign = Object.assign || extend;

Object.assign(Base, {

    fn: Base.prototype,

    create(parent) {
        class Aimee extends this{};
        Aimee.fn = Aimee.prototype;
        Object.assign(Aimee.prototype, parent);
        return Aimee;
    },

    instance() {
        return new this;
    }
})

export default Base;
