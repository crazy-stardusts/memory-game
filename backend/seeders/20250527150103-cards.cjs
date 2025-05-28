'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cards', [
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '5d087d99-2e0e-4b36-b478-8d939fa94da4',
        word: 'Lion',
        icon_url: 'https://example.com/icons/lion.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '5d087d99-2e0e-4b36-b478-8d939fa94da4',
        word: 'Elephant',
        icon_url: 'https://example.com/icons/elephant.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '5d087d99-2e0e-4b36-b478-8d939fa94da4',
        word: 'Tiger',
        icon_url: 'https://example.com/icons/tiger.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '5d087d99-2e0e-4b36-b478-8d939fa94da4',
        word: 'Giraffe',
        icon_url: 'https://example.com/icons/giraffe.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'), 
        theme_id: '5d087d99-2e0e-4b36-b478-8d939fa94da4',
        word: 'Monkey',
        icon_url: 'https://example.com/icons/monkey.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '5d087d99-2e0e-4b36-b478-8d939fa94da4',
        word: 'Bear',
        icon_url: 'https://example.com/icons/bear.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cards', null, {});
  }
};
