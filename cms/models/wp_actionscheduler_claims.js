const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_actionscheduler_claims', {
    claim_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    date_created_gmt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'wp_actionscheduler_claims',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "claim_id" },
        ]
      },
      {
        name: "date_created_gmt",
        using: "BTREE",
        fields: [
          { name: "date_created_gmt" },
        ]
      },
    ]
  });
};
