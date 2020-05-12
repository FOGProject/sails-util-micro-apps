/**
 * Merge App directories
 *
 * @param {Object} options
 * @param {Function} cb
 */
const fs = require('fs-extra');

module.exports = function (f1, f2, overwriteExistingFiles) {
  let file,
    files,
    stats,
    _i,
    _len,
    data;
  debugger;
  files = fs.readdirSync(f1);

  for (_i = 0, _len = files.length; _i < _len; _i++) {
    file = files[_i];
    stats = fs.lstatSync(`${f1}/${file}`);
    data = require('util').inspect(stats, {depth: null});
    sails.log.info(`${data} ${f1}/${file}\n${f2}/${file}`);
    if (stats.isDirectory()) {
      module.exports(`${f1}/${file}`, `${f2}/${file}`);
    } else {
      if (!fs.existsSync(`${f2}/${file}`) || overwriteExistingFiles) {
        let path = (`${f2}/${file}`).split('/').slice(0, -1).join('/');
        if (!fs.existsSync(path)) {
          fs.mkdirSync(path, 0x1ed, true);
        }
        fs.writeFileSync(`${f2}/${file}`, fs.readFileSync(`${f1}/${file}`));
      }
    }
  }
};
