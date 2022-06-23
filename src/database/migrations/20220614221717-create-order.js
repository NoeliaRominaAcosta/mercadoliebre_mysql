'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'users'//una orden le pertenece a un usuario
          },
          key : 'id' //con que se vincula en la columna de referencia a la tabla categories en su columna id
        }
      },
      statusId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'statuses'//una orden le pertenece a un estado
          },
          key : 'id' //con que se vincula en la columna de referencia a la tabla categories en su columna id
        }
      },
      total: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};