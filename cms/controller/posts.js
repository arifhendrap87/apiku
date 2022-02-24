const db = require("../config/db.config.js");
var initModels = require("../models/init-models.js");
const sequelize = db.sequelize;
var models = initModels(sequelize);


// Get result
exports.findAll = async (req, res) => {
    try {
        var paramWhere = {};
        if (Object.keys(req.body).length != 0) {
            var paramWhere = req.body;
        }
        var param = {
            attributes: ['ID', 'post_title', 'post_type'],
            where: { post_type: 'post', post_status: 'publish' },
            include: [{
                model: models.wp_comments,
                as: 'wp_comments',
                required: true,


            },


            {
                model: models.wp_postmeta,
                as: 'wp_postmeta',
                required: true,
                where: { meta_key: ['gambar', 'kontent'] },
                include: [{
                    model: models.wp_posts,
                    as: 'wp_posts_detail',
                    required: true,
                }],
            }
            ],
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