const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_woocommerce_shipping_zone_locations', {
    location_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    zone_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    location_code: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    location_type: {
      type: DataTypes.STRING(40),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_woocommerce_shipping_zone_locations',
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
        name: "location_id",
        using: "BTREE",
        fields: [
          { name: "location_id" },
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
