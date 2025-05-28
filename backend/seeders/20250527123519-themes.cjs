'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('themes', [
      {
        id: '5d087d99-2e0e-4b36-b478-8d939fa94da4',
        name: 'Animals',
        icon_url: 'https://example.com/icons/animals.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '21ea8db8-1f1e-42d1-8579-5b4a3daa8581',
        name: 'Fruits',
        icon_url: 'https://example.com/icons/fruits.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4b381df4-e3bb-4fec-8a3e-37c5156d32f0',
        name: 'Shapes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        name: 'Monumnents',
        icon_url: 'https://example.com/icons/colors.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('themes', null, {});
  }
};
