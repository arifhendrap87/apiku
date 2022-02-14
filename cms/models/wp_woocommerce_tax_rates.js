const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_woocommerce_tax_rates', {
    tax_rate_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    tax_rate_country: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    tax_rate_state: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    tax_rate: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    tax_rate_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    tax_rate_priority: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    tax_rate_compound: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tax_rate_shipping: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    tax_rate_order: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    tax_rate_class: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'wp_woocommerce_tax_rates',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tax_rate_id" },
        ]
      },
      {
        name: "tax_rate_country",
        using: "BTREE",
        fields: [
          { name: "tax_rate_country" },
        ]
      },
      {
        name: "tax_rate_state",
        using: "BTREE",
        fields: [
          { name: "tax_rate_state", length: 2 },
        ]
      },
      {
        name: "tax_rate_class",
        using: "BTREE",
        fields: [
          { name: "tax_rate_class", length: 10 },
        ]
      },
      {
        name: "tax_rate_priority",
        using: "BTREE",
        fields: [
          { name: "tax_rate_priority" },
        ]
      },
    ]
  });
};
