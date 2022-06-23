'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      file: {
        type: Sequelize.STRING
      },
      primary: {
        type: Sequelize.BOOLEAN,
        allowNull : false,
        defaultValue :0
      },
      productId: {
        type : Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'products'
          },
          key : 'id' //con que se vincula en la columna de referencia a la tabla categories en su columna id
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Images');
  }
};