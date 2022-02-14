const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_terms', {
    term_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    slug: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    term_group: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wp_terms',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "term_id" },
        ]
      },
      {
        name: "slug",
        using: "BTREE",
        fields: [
          { name: "slug", length: 191 },
        ]
      },
      {
        name: "name",
        using: "BTREE",
        fields: [
          { name: "name", length: 191 },
        ]
      },
    ]
  });
};
