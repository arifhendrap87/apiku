const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wc_rate_limits', {
    rate_limit_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    rate_limit_key: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: "rate_limit_key"
    },
    rate_limit_expiry: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_wc_rate_limits',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rate_limit_id" },
        ]
      },
      {
        name: "rate_limit_key",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rate_limit_key", length: 191 },
        ]
      },
    ]
  });
};
