const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wc_order_stats', {
    order_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    parent_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    date_created_gmt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    num_items_sold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    total_sales: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    tax_total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    shipping_total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    net_total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    returning_customer: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    customer_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_wc_order_stats',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "date_created",
        using: "BTREE",
        fields: [
          { name: "date_created" },
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
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status", length: 191 },
        ]
      },
    ]
  });
};
