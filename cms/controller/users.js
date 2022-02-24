const db = require("../config/db.config.js");
const wp_users = db.wp_users;
exports.call = async (req, res) => {
    console.log('oke');
    try {
        res.render('index', { title: 'Express' });

    } catch (err) {
        console.log(err);
    }
};


// Get result
exports.findAll = async (req, res) => {
    try {
        var param = {};
        if (Object.keys(req.body).length != 0) {
            var param = { where: req.body };
        }
        wp_users.findAll(param).then((result) => {
            res.status(200).json({
                status: 200,
                success: true,
                data: result,
            });
        });

    } catch (err) {
        console.log(err);
    }
};