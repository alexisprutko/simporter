'use strict';
module.exports = (sequelize, DataTypes) => {
  const sheet = sequelize.define('sheet', {
    fieldname: DataTypes.STRING,
    originalname: DataTypes.STRING,
    size: DataTypes.INTEGER,
    destination: DataTypes.STRING,
    mimetype: DataTypes.STRING,
    path: DataTypes.STRING
  }, {});
  sheet.associate = function(models) {
    // associations can be defined here
  };
  
  sheet.prototype.toJson = function () {
      const { fieldname, originalname, size, destination, mimetype, createdAt, updatedAt} = this
      return { fieldname, originalname, size, destination, mimetype, createdAt, updatedAt}
  }
  return sheet;
};