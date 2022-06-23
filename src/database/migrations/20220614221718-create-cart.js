'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carts', {
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
            tableName : 'products'
          },
          key : 'id' //con que se vincula en la columna de referencia a la tabla categories en su columna id
        }
      },
      productId: {
        type: Sequelize.INTEGER
      },
      orderId : {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'orders'
          },
          key : 'id'
        }
      },
      quantify: {
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
    await queryInterface.dropTable('Carts');
  }
};