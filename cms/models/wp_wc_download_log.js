const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wc_download_log', {
    download_log_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    permission_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'wp_woocommerce_downloadable_product_permissions',
        key: 'permission_id'
      }
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    user_ip_address: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'wp_wc_download_log',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "download_log_id" },
        ]
      },
      {
        name: "permission_id",
        using: "BTREE",
        fields: [
          { name: "permission_id" },
        ]
      },
      {
        name: "timestamp",
        using: "BTREE",
        fields: [
          { name: "timestamp" },
        ]
      },
    ]
  });
};
