const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_islam', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'

});

// sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and Resync with { force: true }");
// });


//cek koneksi
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });



const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models
db.menu = require("../models/menu.js")(sequelize, Sequelize);
db.user = require("../models/user.js")(sequelize, Sequelize);
db.worship_main = require("../models/worship_main.js")(sequelize, Sequelize);
db.worship_main_activity = require("../models/worship_main_activity.js")(sequelize, Sequelize);

db.worship_additional = require("../models/worship_additional.js")(sequelize, Sequelize);
db.worship_additional_activity = require("../models/worship_additional_activity.js")(sequelize, Sequelize);

// db.community_discussion = require("../model/community_discussion.js")(sequelize, Sequelize);

module.exports = db;