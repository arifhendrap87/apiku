module.exports = function (app) {
    const menu = require("../controller/menu.js");
    app.get("/api/menu", menu.findAll);
    app.post("/api/menu/create", menu.create);
};