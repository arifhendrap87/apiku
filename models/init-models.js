var DataTypes = require("sequelize").DataTypes;
var _community = require("./community");
var _community_discussion = require("./community_discussion");
var _community_member = require("./community_member");
var _knowledge = require("./knowledge");
var _knowledge_category = require("./knowledge_category");
var _menu = require("./menu");
var _user = require("./user");
var _worship_additional = require("./worship_additional");
var _worship_additional_activity = require("./worship_additional_activity");
var _worship_main = require("./worship_main");
var _worship_main_activity = require("./worship_main_activity");

function initModels(sequelize) {
  var community = _community(sequelize, DataTypes);
  var community_discussion = _community_discussion(sequelize, DataTypes);
  var community_member = _community_member(sequelize, DataTypes);
  var knowledge = _knowledge(sequelize, DataTypes);
  var knowledge_category = _knowledge_category(sequelize, DataTypes);
  var menu = _menu(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var worship_additional = _worship_additional(sequelize, DataTypes);
  var worship_additional_activity = _worship_additional_activity(sequelize, DataTypes);
  var worship_main = _worship_main(sequelize, DataTypes);
  var worship_main_activity = _worship_main_activity(sequelize, DataTypes);

  worship_main_activity.belongsTo(user, { as: "id_user_user", foreignKey: "id_user"});
  user.hasMany(worship_main_activity, { as: "worship_main_activities", foreignKey: "id_user"});
  worship_main_activity.belongsTo(worship_main, { as: "id_worship_worship_main", foreignKey: "id_worship"});
  worship_main.hasMany(worship_main_activity, { as: "worship_main_activities", foreignKey: "id_worship"});

  return {
    community,
    community_discussion,
    community_member,
    knowledge,
    knowledge_category,
    menu,
    user,
    worship_additional,
    worship_additional_activity,
    worship_main,
    worship_main_activity,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
