const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_woocommerce_api_keys', {
    key_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    permissions: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    consumer_key: {
      type: DataTypes.CHAR(64),
      allowNull: false
    },
    consumer_secret: {
      type: DataTypes.CHAR(43),
      allowNull: false
    },
    nonces: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    truncated_key: {
      type: DataTypes.CHAR(7),
      allowNull: false
    },
    last_access: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_woocommerce_api_keys',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "key_id" },
        ]
      },
      {
        name: "consumer_key",
        using: "BTREE",
        fields: [
          { name: "consumer_key" },
        ]
      },
      {
        name: "consumer_secret",
        using: "BTREE",
        fields: [
          { name: "consumer_secret" },
        ]
      },
    ]
  });
};
