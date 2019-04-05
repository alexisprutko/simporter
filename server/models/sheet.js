'use strict';
module.exports = (sequelize, DataTypes) => {
  const sheet = sequelize.define('sheet', {
    fieldname: DataTypes.STRING,
    originalname: DataTypes.STRING,
    size: DataTypes.INTEGER,
    destination: DataTypes.STRING,
    mimetype: DataTypes.STRING,
    path: DataTypes.STRING,
    converted: {
      type: DataTypes.BOOLEAN,
      set con (value){
        this.setDataValue(value)
      },
      get con (){
        return this.getDataValue('converted')
      }

    }
  }, {});
  sheet.associate = function(models) {
    // associations can be defined here
  };
  
  
  sheet.prototype.toJson = function () {
      const { fieldname, originalname, size, destination, mimetype, createdAt, updatedAt, converted, category} = this
      return { fieldname, originalname, size, destination, mimetype, createdAt, updatedAt, converted: converted, category}
  }
  return sheet;
};