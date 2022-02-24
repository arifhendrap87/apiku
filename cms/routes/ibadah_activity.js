module.exports = function (app) {
    const ibadah_activity = require("../controller/ibadah_activity.js");
    app.get("/ibadah/activity", ibadah_activity.findAll);

}

