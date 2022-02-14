const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_woocommerce_attribute_taxonomies', {
    attribute_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    attribute_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    attribute_label: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    attribute_type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    attribute_orderby: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    attribute_public: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'wp_woocommerce_attribute_taxonomies',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attribute_id" },
        ]
      },
      {
        name: "attribute_name",
        using: "BTREE",
        fields: [
          { name: "attribute_name", length: 20 },
        ]
      },
    ]
  });
};
