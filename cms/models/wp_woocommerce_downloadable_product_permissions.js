const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_woocommerce_downloadable_product_permissions', {
    permission_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    download_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    product_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    order_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    order_key: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    user_email: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    downloads_remaining: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    access_granted: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    access_expires: {
      type: DataTypes.DATE,
      allowNull: true
    },
    download_count: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wp_woocommerce_downloadable_product_permissions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "permission_id" },
        ]
      },
      {
        name: "download_order_key_product",
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "order_id" },
          { name: "order_key", length: 16 },
          { name: "download_id" },
        ]
      },
      {
        name: "download_order_product",
        using: "BTREE",
        fields: [
          { name: "download_id" },
          { name: "order_id" },
          { name: "product_id" },
        ]
      },
      {
        name: "order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "user_order_remaining_expires",
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "order_id" },
          { name: "downloads_remaining" },
          { name: "access_expires" },
        ]
      },
    ]
  });
};
