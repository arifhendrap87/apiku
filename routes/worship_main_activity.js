module.exports = function (app) {
    const worship_main_activity = require("../controller/worship_main_activity.js");
    app.get("/api/worship_main_activity", worship_main_activity.findAll);
    app.post("/api/worship_main_activity/create", worship_main_activity.create);
};