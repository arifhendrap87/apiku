module.exports = function (app) {
    const menu = require("../controller/menu.js");
    app.get("/menu", menu.call);

}

