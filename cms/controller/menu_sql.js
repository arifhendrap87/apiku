
const dbConn = require("../config/db.config.js");


// Get result
exports.findAll = async (req, res) => {
    try {
        var param = {};
        if (Object.keys(req.body).length != 0) {
            var param = { where: req.body };
        }
        let querySql = '';
        querySql += 'SELECT t1.ID,t1.post_title AS lev1, t2.post_title as lev2,t2.* ';
        querySql += 'FROM wp_posts  AS t1 ';
        querySql += 'LEFT JOIN wp_posts AS t2 ON t2.post_parent = t1.ID ';
        querySql += 'where t1.post_parent in(0) and t1.post_type="menu" and t1.post_status="publish" ';
        querySql += 'GROUP by t1.ID ';
        querySql += 'order BY t1.post_modified asc';
        console.log(querySql);

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