/**
 * Load views from a directory into a Sails app
 */

const _ = require('lodash');
const loadViews = require(__dirname + '/sails/_mergeDirs');

module.exports = function (sails, dir, appDir) {
  sails.log.info(`Micro-Apps: Merging views from dir: `, dir);
  loadViews(dir, appDir+'/views');
}
