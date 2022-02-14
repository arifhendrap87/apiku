const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_actionscheduler_logs', {
    log_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    action_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    log_date_gmt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    log_date_local: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'wp_actionscheduler_logs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "log_id" },
        ]
      },
      {
        name: "action_id",
        using: "BTREE",
        fields: [
          { name: "action_id" },
        ]
      },
      {
        name: "log_date_gmt",
        using: "BTREE",
        fields: [
          { name: "log_date_gmt" },
        ]
      },
    ]
  });
};
