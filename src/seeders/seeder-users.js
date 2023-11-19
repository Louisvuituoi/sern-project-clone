'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //method bulkInsert: insert nhieu ban ghi
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'An',
      lastName: 'Thinh',
      address: 'VN',
      phoneNumber: '0356781109',
      gender: '1',
      image: 'ROLE',
      roleId: 'R1',
      positionId: 'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
