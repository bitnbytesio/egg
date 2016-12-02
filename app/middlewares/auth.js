module.exports = function (req, res, cb, params) {

    if (!req.user) {
        // send unauthorized
        // res.abort(401, 'Unauthorized');
    }

    // or process
    return cb();

};