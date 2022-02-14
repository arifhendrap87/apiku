const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wc_tax_rate_classes', {
    tax_rate_class_id: {
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
      defaultValue: "",
      unique: "slug"
    }
  }, {
    sequelize,
    tableName: 'wp_wc_tax_rate_classes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tax_rate_class_id" },
        ]
      },
      {
        name: "slug",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "slug", length: 191 },
        ]
      },
    ]
  });
};
