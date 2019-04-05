'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'forecasts',
            'category',
            {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: "Remote control"
            }
        )
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.renameColumn('forecasts', 'category')
    }
};