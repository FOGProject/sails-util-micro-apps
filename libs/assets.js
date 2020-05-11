/**
 * Load assets from a directory into a Sails app
 */

const includeAll = require('include-all');
const _ = require('lodash');


module.exports = function (sails, dir) {
  sails.log.verbose(`Micro-Apps: Injecting assets from dir: `, dir);

  includeAll.optional({
    dirname: dir,
    filter: /(.+)\.(js|json|coffee|litcoffee)$/,
    identity: false
  }, function (err, assets) {
    if (err) sails.log.error(err);

    // make sure they are one level in
    assets = _.reduce(assets, (_assets, o, k) => {
      _.merge(_assets, o);
    });

    sails.log.info(require('util').inspect(assets, {depth: null}));

    // Using this hack to reset and bind our views to router
    // sails.log.debug('action middleware: ', sails._actionMiddleware);
    sails._actionMiddleware = {}; // cozing bug if array (I am not sure if this works perfectly well, need to put action middleware and see)
    sails.router.flush();
  });
};
