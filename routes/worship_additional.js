module.exports = function (app) {
    const worship_additional = require("../controller/worship_additional.js");
    app.get("/api/worship_additional", worship_additional.findAll);
    app.post("/api/worship_additional/create", worship_additional.create);
};