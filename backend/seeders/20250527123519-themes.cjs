'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('themes', [
      {
        id: '5d087d99-2e0e-4b36-b478-8d939fa94da4',
        name: 'Animals',
        icon_url: 'Rabbit.png',
        color: '#7DD13E',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '21ea8db8-1f1e-42d1-8579-5b4a3daa8581',
        name: 'Fruits',
        icon_url: '8.png',
        color: '#FFE559',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4b381df4-e3bb-4fec-8a3e-37c5156d32f0',
        name: 'Shapes',
        icon_url: 'star.png',
        color: '#FF7070',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'f2024882-30b7-4a01-88c0-3dbf7bb3a6f1',
        name: 'Monumnents',
        icon_url: 'taj_bg.png',
        color: '#53C3F8',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('themes', null, {});
  }
};
