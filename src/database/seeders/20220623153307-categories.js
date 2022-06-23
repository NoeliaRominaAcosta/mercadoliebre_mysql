'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Categories', [{
        name: 'visited',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt : new Date()
      },
    {
      name: 'in-sale',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt : new Date()
    }
  ], {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories',null, {})
  }
};
