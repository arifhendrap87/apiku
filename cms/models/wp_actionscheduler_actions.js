const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_actionscheduler_actions', {
    action_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    hook: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    scheduled_date_gmt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    scheduled_date_local: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    args: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    schedule: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    group_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    attempts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    last_attempt_gmt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    last_attempt_local: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    claim_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    extended_args: {
      type: DataTypes.STRING(8000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_actionscheduler_actions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "action_id" },
        ]
      },
      {
        name: "hook",
        using: "BTREE",
        fields: [
          { name: "hook" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "scheduled_date_gmt",
        using: "BTREE",
        fields: [
          { name: "scheduled_date_gmt" },
        ]
      },
      {
        name: "args",
        using: "BTREE",
        fields: [
          { name: "args" },
        ]
      },
      {
        name: "group_id",
        using: "BTREE",
        fields: [
          { name: "group_id" },
        ]
      },
      {
        name: "last_attempt_gmt",
        using: "BTREE",
        fields: [
          { name: "last_attempt_gmt" },
        ]
      },
      {
        name: "claim_id_status_scheduled_date_gmt",
        using: "BTREE",
        fields: [
          { name: "claim_id" },
          { name: "status" },
          { name: "scheduled_date_gmt" },
        ]
      },
    ]
  });
};
