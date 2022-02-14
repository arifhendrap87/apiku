const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_options', {
    option_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    option_name: {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "",
      unique: "option_name"
    },
    option_value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    autoload: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "yes"
    }
  }, {
    sequelize,
    tableName: 'wp_options',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "option_id" },
        ]
      },
      {
        name: "option_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "option_name" },
        ]
      },
      {
        name: "autoload",
        using: "BTREE",
        fields: [
          { name: "autoload" },
        ]
      },
    ]
  });
};
