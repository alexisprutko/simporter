const ErrorMessages = require('../constants/ErrorMessages')
const validator = require('validator')
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: {
      type:  DataTypes.STRING,
      trim: true,
      allowNull: false,
      validate: {
        isEmpty(val){
          if(!val){
            throw new Error(ErrorMessages.FIRST_NAME_IS_REQ)
          }
        },
      }
    },
    lastName:{
      type: DataTypes.STRING,
      trim: true,
      allowNull: false,
      validate: {
        isEmpty(val){
          if(!val){
            throw new Error(ErrorMessages.LAST_NAME_IS_REQ)
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      trim: true,
      unique: true,
      allowNull: false,
      validate: {
       async isEmail(val){
          if(!validator.isEmail(val)){
            throw new Error(ErrorMessages.INVALID_EMAIL)
          }
        }
      }
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      validate: {
        isLongEnough(val) {
          if (val.length < 8) {
            throw new Error(ErrorMessages.PASSWORD_SHOULD_BE);
          }
        },
      }
    },
    password_hash: DataTypes.STRING,
    role: {
      allowNull: false,
      type: DataTypes.ENUM(["ADMIN", "AUTH", "PUBLIC"]),
      defaultValue:  "PUBLIC",
    }

  }, {});
  user.associate = function (models) {
    // associations can be defined here
  };
  user.prototype.validPassword = function (password) {
    return bcrypt.compare(password || 'ohh', this.password_hash);
  };
  user.prototype.toJson = function () {
    const { id, firstName, lastName, email } = this
    return  { id, firstName, lastName, email } 
  }

  return user;
};