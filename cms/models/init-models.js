var DataTypes = require("sequelize").DataTypes;
var _wp_actionscheduler_actions = require("./wp_actionscheduler_actions");
var _wp_actionscheduler_claims = require("./wp_actionscheduler_claims");
var _wp_actionscheduler_groups = require("./wp_actionscheduler_groups");
var _wp_actionscheduler_logs = require("./wp_actionscheduler_logs");
var _wp_admin_columns = require("./wp_admin_columns");
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
var _wp_wc_admin_note_actions = require("./wp_wc_admin_note_actions");
var _wp_wc_admin_notes = require("./wp_wc_admin_notes");
var _wp_wc_category_lookup = require("./wp_wc_category_lookup");
var _wp_wc_customer_lookup = require("./wp_wc_customer_lookup");
var _wp_wc_download_log = require("./wp_wc_download_log");
var _wp_wc_order_coupon_lookup = require("./wp_wc_order_coupon_lookup");
var _wp_wc_order_product_lookup = require("./wp_wc_order_product_lookup");
var _wp_wc_order_stats = require("./wp_wc_order_stats");
var _wp_wc_order_tax_lookup = require("./wp_wc_order_tax_lookup");
var _wp_wc_product_meta_lookup = require("./wp_wc_product_meta_lookup");
var _wp_wc_rate_limits = require("./wp_wc_rate_limits");
var _wp_wc_reserved_stock = require("./wp_wc_reserved_stock");
var _wp_wc_tax_rate_classes = require("./wp_wc_tax_rate_classes");
var _wp_wc_webhooks = require("./wp_wc_webhooks");
var _wp_woocommerce_api_keys = require("./wp_woocommerce_api_keys");
var _wp_woocommerce_attribute_taxonomies = require("./wp_woocommerce_attribute_taxonomies");
var _wp_woocommerce_downloadable_product_permissions = require("./wp_woocommerce_downloadable_product_permissions");
var _wp_woocommerce_log = require("./wp_woocommerce_log");
var _wp_woocommerce_order_itemmeta = require("./wp_woocommerce_order_itemmeta");
var _wp_woocommerce_order_items = require("./wp_woocommerce_order_items");
var _wp_woocommerce_payment_tokenmeta = require("./wp_woocommerce_payment_tokenmeta");
var _wp_woocommerce_payment_tokens = require("./wp_woocommerce_payment_tokens");
var _wp_woocommerce_sessions = require("./wp_woocommerce_sessions");
var _wp_woocommerce_shipping_zone_locations = require("./wp_woocommerce_shipping_zone_locations");
var _wp_woocommerce_shipping_zone_methods = require("./wp_woocommerce_shipping_zone_methods");
var _wp_woocommerce_shipping_zones = require("./wp_woocommerce_shipping_zones");
var _wp_woocommerce_tax_rate_locations = require("./wp_woocommerce_tax_rate_locations");
var _wp_woocommerce_tax_rates = require("./wp_woocommerce_tax_rates");

function initModels(sequelize) {
  var wp_actionscheduler_actions = _wp_actionscheduler_actions(sequelize, DataTypes);
  var wp_actionscheduler_claims = _wp_actionscheduler_claims(sequelize, DataTypes);
  var wp_actionscheduler_groups = _wp_actionscheduler_groups(sequelize, DataTypes);
  var wp_actionscheduler_logs = _wp_actionscheduler_logs(sequelize, DataTypes);
  var wp_admin_columns = _wp_admin_columns(sequelize, DataTypes);
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
  var wp_wc_admin_note_actions = _wp_wc_admin_note_actions(sequelize, DataTypes);
  var wp_wc_admin_notes = _wp_wc_admin_notes(sequelize, DataTypes);
  var wp_wc_category_lookup = _wp_wc_category_lookup(sequelize, DataTypes);
  var wp_wc_customer_lookup = _wp_wc_customer_lookup(sequelize, DataTypes);
  var wp_wc_download_log = _wp_wc_download_log(sequelize, DataTypes);
  var wp_wc_order_coupon_lookup = _wp_wc_order_coupon_lookup(sequelize, DataTypes);
  var wp_wc_order_product_lookup = _wp_wc_order_product_lookup(sequelize, DataTypes);
  var wp_wc_order_stats = _wp_wc_order_stats(sequelize, DataTypes);
  var wp_wc_order_tax_lookup = _wp_wc_order_tax_lookup(sequelize, DataTypes);
  var wp_wc_product_meta_lookup = _wp_wc_product_meta_lookup(sequelize, DataTypes);
  var wp_wc_rate_limits = _wp_wc_rate_limits(sequelize, DataTypes);
  var wp_wc_reserved_stock = _wp_wc_reserved_stock(sequelize, DataTypes);
  var wp_wc_tax_rate_classes = _wp_wc_tax_rate_classes(sequelize, DataTypes);
  var wp_wc_webhooks = _wp_wc_webhooks(sequelize, DataTypes);
  var wp_woocommerce_api_keys = _wp_woocommerce_api_keys(sequelize, DataTypes);
  var wp_woocommerce_attribute_taxonomies = _wp_woocommerce_attribute_taxonomies(sequelize, DataTypes);
  var wp_woocommerce_downloadable_product_permissions = _wp_woocommerce_downloadable_product_permissions(sequelize, DataTypes);
  var wp_woocommerce_log = _wp_woocommerce_log(sequelize, DataTypes);
  var wp_woocommerce_order_itemmeta = _wp_woocommerce_order_itemmeta(sequelize, DataTypes);
  var wp_woocommerce_order_items = _wp_woocommerce_order_items(sequelize, DataTypes);
  var wp_woocommerce_payment_tokenmeta = _wp_woocommerce_payment_tokenmeta(sequelize, DataTypes);
  var wp_woocommerce_payment_tokens = _wp_woocommerce_payment_tokens(sequelize, DataTypes);
  var wp_woocommerce_sessions = _wp_woocommerce_sessions(sequelize, DataTypes);
  var wp_woocommerce_shipping_zone_locations = _wp_woocommerce_shipping_zone_locations(sequelize, DataTypes);
  var wp_woocommerce_shipping_zone_methods = _wp_woocommerce_shipping_zone_methods(sequelize, DataTypes);
  var wp_woocommerce_shipping_zones = _wp_woocommerce_shipping_zones(sequelize, DataTypes);
  var wp_woocommerce_tax_rate_locations = _wp_woocommerce_tax_rate_locations(sequelize, DataTypes);
  var wp_woocommerce_tax_rates = _wp_woocommerce_tax_rates(sequelize, DataTypes);

  wp_wc_download_log.belongsTo(wp_woocommerce_downloadable_product_permissions, { as: "permission", foreignKey: "permission_id"});
  wp_woocommerce_downloadable_product_permissions.hasMany(wp_wc_download_log, { as: "wp_wc_download_logs", foreignKey: "permission_id"});

  return {
    wp_actionscheduler_actions,
    wp_actionscheduler_claims,
    wp_actionscheduler_groups,
    wp_actionscheduler_logs,
    wp_admin_columns,
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
    wp_wc_admin_note_actions,
    wp_wc_admin_notes,
    wp_wc_category_lookup,
    wp_wc_customer_lookup,
    wp_wc_download_log,
    wp_wc_order_coupon_lookup,
    wp_wc_order_product_lookup,
    wp_wc_order_stats,
    wp_wc_order_tax_lookup,
    wp_wc_product_meta_lookup,
    wp_wc_rate_limits,
    wp_wc_reserved_stock,
    wp_wc_tax_rate_classes,
    wp_wc_webhooks,
    wp_woocommerce_api_keys,
    wp_woocommerce_attribute_taxonomies,
    wp_woocommerce_downloadable_product_permissions,
    wp_woocommerce_log,
    wp_woocommerce_order_itemmeta,
    wp_woocommerce_order_items,
    wp_woocommerce_payment_tokenmeta,
    wp_woocommerce_payment_tokens,
    wp_woocommerce_sessions,
    wp_woocommerce_shipping_zone_locations,
    wp_woocommerce_shipping_zone_methods,
    wp_woocommerce_shipping_zones,
    wp_woocommerce_tax_rate_locations,
    wp_woocommerce_tax_rates,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
