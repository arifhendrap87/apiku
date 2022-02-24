module.exports = function (app) {
  const users = require("../controller/options.js");
  app.get("/users", users.findAll);

}

