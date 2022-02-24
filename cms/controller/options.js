
const dbConn = require("../config/db.config.js");


// Get result
exports.findAll = async (req, res) => {
    try {
        var param = {};
        if (Object.keys(req.body).length != 0) {
            var param = { where: req.body };
        }
        const querySql = 'SELECT * FROM wp_options';

        dbConn.query(querySql, (err, rows, field) => {
            // error handling
            if (err) {
                return res.status(500).json({ message: 'Ada kesalahan', error: err });
            }
            res.status(200).json({ success: true, data: rows });
        });

    } catch (err) {
        console.log(err);
    }
};