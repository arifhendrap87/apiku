const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_users', {
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_login: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    user_pass: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    user_nicename: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    user_email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    user_url: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    user_registered: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    user_activation_key: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    user_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    display_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'wp_users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "user_login_key",
        using: "BTREE",
        fields: [
          { name: "user_login" },
        ]
      },
      {
        name: "user_nicename",
        using: "BTREE",
        fields: [
          { name: "user_nicename" },
        ]
      },
      {
        name: "user_email",
        using: "BTREE",
        fields: [
          { name: "user_email" },
        ]
      },
    ]
  });
};
