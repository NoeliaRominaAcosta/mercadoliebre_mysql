'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false
      },
      surname: {
        type: Sequelize.STRING,
        allowNull : false
      },
      email: {
        type: Sequelize.STRING,
        allowNull : false,
        unique : true
      },
      password: {
        type: Sequelize.STRING,
        allowNull : false
      },
      image: {
        type: Sequelize.STRING
      },
      rolId: {
        type: Sequelize.INTEGER, 
        allowNull : false,
        references : {
          model : {
            tableName : 'rols'
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
    await queryInterface.dropTable('Users');
  }
};