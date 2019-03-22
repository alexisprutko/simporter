'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail(val){
          if(!validator.isEmail(val)){
            throw new Error("invalid email")
          }
        }
      }
    },
    password: {
      type: DataTypes.VIRTUAL,
      validate: {
        isLongEnough(val) {
          if (val.length < 8) {
            throw new Error('should contain at least 8 characters');
          }
        },
      }
    },
    role: {
      type: DataTypes.ENUM(["ADMIN", "AUTH", "PUBLIC"]),
      defaultValue:  "PUBLIC"
    }

  }, {});
  user.associate = function (models) {
    // associations can be defined here
  };
  return user;
};