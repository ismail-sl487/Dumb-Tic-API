'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('favorites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id__user: {
        type: Sequelize.INTEGER
      },
      id_event: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      id__user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key:'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      id_event: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'events',
          key:'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('favorites');
  }
};