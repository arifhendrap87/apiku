const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_woocommerce_shipping_zone_methods', {
    zone_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    instance_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    method_id: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    method_order: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    is_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'wp_woocommerce_shipping_zone_methods',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "instance_id" },
        ]
      },
    ]
  });
};
