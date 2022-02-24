module.exports = function (app) {
    const posts = require("../controller/posts.js");
    app.get("/posts", posts.findAll);

}

