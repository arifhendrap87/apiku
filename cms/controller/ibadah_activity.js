
const db = require("../config/db.config.js");
var initModels = require("../models/init-models.js");
const sequelize = db.sequelize;
var models = initModels(sequelize);


// Get result
exports.findAll = async (req, res) => {
    try {
        var paramUser = {};
        if (Object.keys(req.body).length != 0) {
            var paramUser = req.body;
        }
        var param = {
            attributes: ['ID', 'post_title', 'post_type', 'post_status'],
            where: { post_author: 2, post_type: 'aktivitas_ibadah', post_status: 'publish' },
            include: [{
                model: models.wp_postmeta,
                as: 'wp_postmeta',
                required: true,
                where: { meta_key: ['waktu', 'user', 'ibadah'] },
            }],

            logging: console.log
        }

        models.wp_posts.findAll(param).then((result) => {
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