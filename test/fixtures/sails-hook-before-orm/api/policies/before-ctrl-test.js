/**
 * Created by Emmanuel Mahuni. MIT 2018
 */
module.exports = function (req, res, next) {
    sails.log.verbose('before orm policy test ok');
    next();
};