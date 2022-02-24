module.exports = function (app) {
    const options = require("../controller/options.js");
    app.get("/options", options.findAll);

}

