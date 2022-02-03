const db = require("../config/db.config.js");
var initModels = require("../models/init-models.js");
const sequelize = db.sequelize;
var models = initModels(sequelize);
const worship_additional = db.worship_additional;

// Get result
exports.findAll = async (req, res) => {
    try {
        var param = {};
        if (Object.keys(req.body).length != 0) {
            var param = { where: req.body };
        }

        models.worship_additional.findAll(param).then((result) => {
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

//insert
exports.create = async (req, res, next) => {
    try {
        var param = {};
        if (Object.keys(req.body).length != 0) {
            var param = req.body;
        }
        worship_additional.create(param)
            .then((result) => {
                res.status(200).json({
                    status: 200,
                    success: true,
                    data: result
                })
            })
            .catch((err) => {

                if (err.name === 'SequelizeValidationError') {
                    const errors = err.errors

                    var errorList = [];
                    errors.map(item => {
                        var obj = {};
                        obj['field'] = item.path;
                        obj['msg'] = item.message;
                        errorList.push(obj);
                    });


                    return res.status(400).json({
                        status: 400,
                        success: false,
                        type: "validation",
                        error: errorList
                    })
                } else {
                    next(new ErrorResponse(`Sorry, could not save ${req.body.name}`, 404))
                }
            })
    } catch (err) {

    }

}