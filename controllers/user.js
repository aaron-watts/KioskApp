const { buildDate } = require('../utils/utils.js');

module.exports.get = (req, res) => {
    res.render('user');
};

module.exports.post = (req, res) => {
    const user = req.body.user;

    user.dob = buildDate(user.dob);

    res.send(user);
};
