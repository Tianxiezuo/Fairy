/**
 * Router for Aimeejs
 * Author by gavinning
 * Homepage https://github.com/Aimeejs/router
 */

import pm from 'pm';

class Router {

    // 页面路由注册
    option(id, hash) {
        require(id).reg(hash);
        return this;
    }

    // 执行 pm.init()
    action(id) {
        var pages = [];
        pm.pages.forEach(function(item){
            pages.push(['<gem id="lincoapp-page-', item.name, '"></gem>'].join(''))
        })
        $('.pages').html(pages.join('\n'));
        pm.init();
    }
}

let router = new Router;
router.Router = Router;
export default router;
