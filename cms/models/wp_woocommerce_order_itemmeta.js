const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_woocommerce_order_itemmeta', {
    meta_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    order_item_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    meta_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meta_value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_woocommerce_order_itemmeta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "meta_id" },
        ]
      },
      {
        name: "order_item_id",
        using: "BTREE",
        fields: [
          { name: "order_item_id" },
        ]
      },
      {
        name: "meta_key",
        using: "BTREE",
        fields: [
          { name: "meta_key", length: 32 },
        ]
      },
    ]
  });
};
