module.exports = function (app) {
    const user = require("../controller/user.js");
    app.get("/api/user", user.findAll);
    app.post("/api/user/create", user.create);
};