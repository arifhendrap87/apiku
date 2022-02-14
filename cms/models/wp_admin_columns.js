const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_admin_columns', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    list_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      unique: "list_id"
    },
    list_key: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    columns: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    settings: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    date_modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'wp_admin_columns',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "list_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "list_id" },
        ]
      },
    ]
  });
};
