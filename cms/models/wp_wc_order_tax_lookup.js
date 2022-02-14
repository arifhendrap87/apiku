const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wc_order_tax_lookup', {
    order_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    tax_rate_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    shipping_tax: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    order_tax: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    total_tax: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wp_wc_order_tax_lookup',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
          { name: "tax_rate_id" },
        ]
      },
      {
        name: "tax_rate_id",
        using: "BTREE",
        fields: [
          { name: "tax_rate_id" },
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
