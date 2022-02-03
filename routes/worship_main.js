module.exports = function (app) {
    const worship_main = require("../controller/worship_main.js");
    app.get("/api/worship_main", worship_main.findAll);
    app.post("/api/worship_main/create", worship_main.create);
};