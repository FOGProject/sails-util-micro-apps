/**
 * Load assets from a directory into a Sails app
 */

const _ = require('lodash');
const loadAssets = require(__dirname + '/sails/_mergeDirs');

module.exports = function (sails, dir, appDir) {
  sails.log.info(`Micro-Apps: Merging assets from dir: `, dir);
  loadAssets(dir, appDir+'/assets');
}
