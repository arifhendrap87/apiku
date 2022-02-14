const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_comments', {
    comment_ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    comment_post_ID: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    comment_author: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    comment_author_email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    comment_author_url: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    comment_author_IP: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    comment_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    comment_date_gmt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    comment_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    comment_karma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    comment_approved: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "1"
    },
    comment_agent: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    comment_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "comment"
    },
    comment_parent: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wp_comments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "comment_ID" },
        ]
      },
      {
        name: "comment_post_ID",
        using: "BTREE",
        fields: [
          { name: "comment_post_ID" },
        ]
      },
      {
        name: "comment_approved_date_gmt",
        using: "BTREE",
        fields: [
          { name: "comment_approved" },
          { name: "comment_date_gmt" },
        ]
      },
      {
        name: "comment_date_gmt",
        using: "BTREE",
        fields: [
          { name: "comment_date_gmt" },
        ]
      },
      {
        name: "comment_parent",
        using: "BTREE",
        fields: [
          { name: "comment_parent" },
        ]
      },
      {
        name: "comment_author_email",
        using: "BTREE",
        fields: [
          { name: "comment_author_email", length: 10 },
        ]
      },
      {
        name: "woo_idx_comment_type",
        using: "BTREE",
        fields: [
          { name: "comment_type" },
        ]
      },
    ]
  });
};
