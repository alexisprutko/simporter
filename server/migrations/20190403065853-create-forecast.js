'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('forecasts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rank: {
        type: Sequelize.INTEGER
      },
      brand: {
        type: Sequelize.STRING
      },
      sku: {
        type: Sequelize.INTEGER
      },
      expectedRank: {
        type: Sequelize.INTEGER
      },
      duration: {
        type: Sequelize.STRING
      },
      num: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      fileID: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('forecasts');
  }
};