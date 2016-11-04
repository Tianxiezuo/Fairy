/*!
 * Tree For Aimeejs
 * https://github.com/gavinning/aimee
 *
 * Aimee-app
 * Date: 2016-11-04
 */

class Tree {

    constructor() {
        // 状态树
        this.tree = {};
        // 订阅者
        this.listener = {};
    }

    on(id, handler) {
        this.listener[id] ?
            this.listener[id].push(handler):
            this.listener[id] = [handler];
    }

    get(id, handler) {
        return handler ? handler(this.tree[id]) : this.tree[id];
    }

    fire() {
        let array = Array.from(arguments);
        let id = array.shift();
        // 更新状态树
        this.tree[id] = array;
        // 通知到订阅者
        this.listener[id] && this.listener[id].forEach(handler => handler.apply(id, array));
    }

    emit() {
        this.fire.apply(this, arguments)
    }

    trigger() {
        this.fire.apply(this, arguments)
    }
}

let tree = new Tree;
tree.Tree = Tree;
export default tree;
