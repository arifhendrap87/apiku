const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wc_product_meta_lookup', {
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sku: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    virtual: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    downloadable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    min_price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    max_price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    onsale: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    stock_quantity: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    stock_status: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "instock"
    },
    rating_count: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    average_rating: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true,
      defaultValue: 0.00
    },
    total_sales: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    tax_status: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "taxable"
    },
    tax_class: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'wp_wc_product_meta_lookup',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "virtual",
        using: "BTREE",
        fields: [
          { name: "virtual" },
        ]
      },
      {
        name: "downloadable",
        using: "BTREE",
        fields: [
          { name: "downloadable" },
        ]
      },
      {
        name: "stock_status",
        using: "BTREE",
        fields: [
          { name: "stock_status" },
        ]
      },
      {
        name: "stock_quantity",
        using: "BTREE",
        fields: [
          { name: "stock_quantity" },
        ]
      },
      {
        name: "onsale",
        using: "BTREE",
        fields: [
          { name: "onsale" },
        ]
      },
      {
        name: "min_max_price",
        using: "BTREE",
        fields: [
          { name: "min_price" },
          { name: "max_price" },
        ]
      },
    ]
  });
};
