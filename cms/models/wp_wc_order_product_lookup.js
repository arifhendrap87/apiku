const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wc_order_product_lookup', {
    order_item_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    product_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    variation_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    customer_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    product_qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_net_revenue: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    product_gross_revenue: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    coupon_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    tax_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    shipping_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    shipping_tax_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wp_wc_order_product_lookup',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_item_id" },
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
        name: "product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "customer_id",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "date_created",
        using: "BTREE",
        fields: [
          { name: "date_created" },
        ]
      },
    ]
  });
};
