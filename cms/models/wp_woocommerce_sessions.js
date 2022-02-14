const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_woocommerce_sessions', {
    session_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    session_key: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      unique: "session_key"
    },
    session_value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    session_expiry: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wp_woocommerce_sessions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "session_id" },
        ]
      },
      {
        name: "session_key",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "session_key" },
        ]
      },
    ]
  });
};
