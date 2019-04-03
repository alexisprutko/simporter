'use strict';
module.exports = (sequelize, DataTypes) => {
  const forecast = sequelize.define('forecast', {
    rank: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    sku: DataTypes.INTEGER,
    expectedRank: DataTypes.INTEGER,
    duration: DataTypes.STRING,
    num: DataTypes.INTEGER,
    image: DataTypes.STRING,
    fileID: DataTypes.INTEGER
  }, {});
  forecast.associate = function(models) {
    // associations can be defined here
  };
  return forecast;
};