module.exports = function (app) {
    const ibadah = require("../controller/ibadah.js");
    app.get("/ibadah", ibadah.findAll);

}

