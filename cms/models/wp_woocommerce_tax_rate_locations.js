const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_woocommerce_tax_rate_locations', {
    location_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    location_code: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    tax_rate_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    location_type: {
      type: DataTypes.STRING(40),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_woocommerce_tax_rate_locations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "location_id" },
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
        name: "location_type_code",
        using: "BTREE",
        fields: [
          { name: "location_type", length: 10 },
          { name: "location_code", length: 20 },
        ]
      },
    ]
  });
};
