const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wc_order_coupon_lookup', {
    order_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    coupon_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    discount_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wp_wc_order_coupon_lookup',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
          { name: "coupon_id" },
        ]
      },
      {
        name: "coupon_id",
        using: "BTREE",
        fields: [
          { name: "coupon_id" },
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
