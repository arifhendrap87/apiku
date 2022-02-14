const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wc_admin_note_actions', {
    action_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    note_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    query: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_primary: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    actioned_text: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nonce_action: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nonce_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wp_wc_admin_note_actions',
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
        name: "note_id",
        using: "BTREE",
        fields: [
          { name: "note_id" },
        ]
      },
    ]
  });
};
