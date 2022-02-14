const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wc_admin_notes', {
    note_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    locale: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    source: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    date_reminder: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_snoozable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    layout: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    image: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_read: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    icon: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "info"
    }
  }, {
    sequelize,
    tableName: 'wp_wc_admin_notes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "note_id" },
        ]
      },
    ]
  });
};
