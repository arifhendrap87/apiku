const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_posts', {
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    post_author: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    post_date_gmt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    post_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_excerpt: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "publish"
    },
    comment_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "open"
    },
    ping_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "open"
    },
    post_password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    post_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    to_ping: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pinged: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    post_modified_gmt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    post_content_filtered: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_parent: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    guid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    menu_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    post_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "post"
    },
    post_mime_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    comment_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wp_posts',
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
        name: "post_name",
        using: "BTREE",
        fields: [
          { name: "post_name", length: 191 },
        ]
      },
      {
        name: "type_status_date",
        using: "BTREE",
        fields: [
          { name: "post_type" },
          { name: "post_status" },
          { name: "post_date" },
          { name: "ID" },
        ]
      },
      {
        name: "post_parent",
        using: "BTREE",
        fields: [
          { name: "post_parent" },
        ]
      },
      {
        name: "post_author",
        using: "BTREE",
        fields: [
          { name: "post_author" },
        ]
      },
    ]
  });
};
