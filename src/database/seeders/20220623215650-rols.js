'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Rols', [{
       name: 'admin',
       createdAt : new Date(),
       updatedAt : new Date(),
       deletedAt : new Date()
     },
    {
      name : 'user',
      createdAt : new Date(),
      updatedAt : new Date(),
      deletedAt : new Date()
    }], {});
   
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Rols', null, {});
  
  }
};
