const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_term_taxonomy', {
    term_taxonomy_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    term_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    taxonomy: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    parent: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wp_term_taxonomy',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "term_taxonomy_id" },
        ]
      },
      {
        name: "term_id_taxonomy",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "term_id" },
          { name: "taxonomy" },
        ]
      },
      {
        name: "taxonomy",
        using: "BTREE",
        fields: [
          { name: "taxonomy" },
        ]
      },
    ]
  });
};
