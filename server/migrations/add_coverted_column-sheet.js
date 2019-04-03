'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'sheets',
            'converted',
            {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            }
        )
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.renameColumn('sheets', 'converted')
    }
};