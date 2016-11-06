/*!
 * init.js For fairy
 * https://github.com/gavinning/aimee
 *
 * Aimee-app
 * Date: 2016-10-19
 */

var aimee, router;

aimee = require('aimee');
router = require('router');

aimee
    .reg('remodal')
    // .reg('dialog');

router
    .option('pages/home')
    .action();
