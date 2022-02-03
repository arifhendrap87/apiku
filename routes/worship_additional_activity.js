module.exports = function (app) {
    const worship_additional_activity = require("../controller/worship_additional_activity.js");
    app.get("/api/worship_additional_activity", worship_additional_activity.findAll);
    app.post("/api/worship_additional_activity/create", worship_additional_activity.create);
};