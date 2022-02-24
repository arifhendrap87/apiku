var DataTypes = require("sequelize").DataTypes;
var _wp_commentmeta = require("./wp_commentmeta");
var _wp_comments = require("./wp_comments");
var _wp_links = require("./wp_links");
var _wp_options = require("./wp_options");
var _wp_postmeta = require("./wp_postmeta");
var _wp_posts = require("./wp_posts");
var _wp_term_relationships = require("./wp_term_relationships");
var _wp_term_taxonomy = require("./wp_term_taxonomy");
var _wp_termmeta = require("./wp_termmeta");
var _wp_terms = require("./wp_terms");
var _wp_usermeta = require("./wp_usermeta");
var _wp_users = require("./wp_users");

function initModels(sequelize) {
  var wp_commentmeta = _wp_commentmeta(sequelize, DataTypes);
  var wp_comments = _wp_comments(sequelize, DataTypes);
  var wp_links = _wp_links(sequelize, DataTypes);
  var wp_options = _wp_options(sequelize, DataTypes);
  var wp_postmeta = _wp_postmeta(sequelize, DataTypes);
  var wp_posts = _wp_posts(sequelize, DataTypes);
  var wp_term_relationships = _wp_term_relationships(sequelize, DataTypes);
  var wp_term_taxonomy = _wp_term_taxonomy(sequelize, DataTypes);
  var wp_termmeta = _wp_termmeta(sequelize, DataTypes);
  var wp_terms = _wp_terms(sequelize, DataTypes);
  var wp_usermeta = _wp_usermeta(sequelize, DataTypes);
  var wp_users = _wp_users(sequelize, DataTypes);

  wp_postmeta.belongsTo(wp_posts, { as: "wp_posts", foreignKey: "post_id" });
  wp_posts.hasMany(wp_postmeta, { as: "wp_postmeta", foreignKey: "post_id" });

  wp_postmeta.belongsTo(wp_posts, { as: "wp_posts_detail", foreignKey: "meta_value" });
  wp_posts.hasOne(wp_postmeta, { as: "wp_postmeta_detail", foreignKey: "meta_value" });


  // wp_posts.belongsTo(wp_postmeta, { as: "wp_postmetax", foreignKey: "meta_value" });
  // wp_postmeta.hasMany(wp_posts, { as: "wp_postsx", foreignKey: "meta_value" });

  wp_comments.belongsTo(wp_posts, { as: "wp_postscom", foreignKey: "comment_post_ID" });
  wp_posts.hasMany(wp_comments, { as: "wp_comments", foreignKey: "comment_post_ID" });




  return {
    wp_commentmeta,
    wp_comments,
    wp_links,
    wp_options,
    wp_postmeta,
    wp_posts,
    wp_term_relationships,
    wp_term_taxonomy,
    wp_termmeta,
    wp_terms,
    wp_usermeta,
    wp_users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
