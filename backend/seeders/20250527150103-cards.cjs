'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cards', [
      // Animals theme cards
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '5d087d99-2e0e-4b36-b478-8d939fa94da4',
        word: 'Lion',
        icon_url: 'lion.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '5d087d99-2e0e-4b36-b478-8d939fa94da4',
        word: 'Elephant',
        icon_url: 'Elephant.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '5d087d99-2e0e-4b36-b478-8d939fa94da4',
        word: 'Tiger',
        icon_url: 'tiger.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '5d087d99-2e0e-4b36-b478-8d939fa94da4',
        word: 'Giraffe',
        icon_url: 'Giraffe.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'), 
        theme_id: '5d087d99-2e0e-4b36-b478-8d939fa94da4',
        word: 'Rabbit',
        icon_url: 'Rabbit.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '5d087d99-2e0e-4b36-b478-8d939fa94da4',
        word: 'Deer',
        icon_url: 'Deer.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Monuments theme cards
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: 'f2024882-30b7-4a01-88c0-3dbf7bb3a6f1',
        word: 'Taj Mahal',
        icon_url: 'm_taj.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: 'f2024882-30b7-4a01-88c0-3dbf7bb3a6f1',
        word: 'Eiffel Tower',
        icon_url: 'm_lean.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: 'f2024882-30b7-4a01-88c0-3dbf7bb3a6f1',
        word: 'Colosseum',
        icon_url: 'm_col.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: 'f2024882-30b7-4a01-88c0-3dbf7bb3a6f1',
        word: 'Big Ben',
        icon_url: 'm_ben.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: 'f2024882-30b7-4a01-88c0-3dbf7bb3a6f1',
        word: 'Leaning Tower of Pisa',
        icon_url: 'm_eff.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: 'f2024882-30b7-4a01-88c0-3dbf7bb3a6f1',
        word: 'Pyramids of Giza',
        icon_url: 'm_py.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Fruits theme cards
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '21ea8db8-1f1e-42d1-8579-5b4a3daa8581',
        word: 'Lime',
        icon_url: '3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '21ea8db8-1f1e-42d1-8579-5b4a3daa8581',
        word: 'Apple',
        icon_url: '4.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '21ea8db8-1f1e-42d1-8579-5b4a3daa8581',
        word: 'Orange',
        icon_url: '5.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '21ea8db8-1f1e-42d1-8579-5b4a3daa8581',
        word: 'Watermelon',
        icon_url: '6.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '21ea8db8-1f1e-42d1-8579-5b4a3daa8581',
        word: 'Grape',
        icon_url: '7.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '21ea8db8-1f1e-42d1-8579-5b4a3daa8581',
        word: 'Blueberry',
        icon_url: '8.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Shapes theme cards
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '4b381df4-e3bb-4fec-8a3e-37c5156d32f0',
        word: 'Circle',
        icon_url: 'circle.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '4b381df4-e3bb-4fec-8a3e-37c5156d32f0',
        word: 'Square',
        icon_url: 'square.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '4b381df4-e3bb-4fec-8a3e-37c5156d32f0',
        word: 'Triangle',
        icon_url: 'tri.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '4b381df4-e3bb-4fec-8a3e-37c5156d32f0',
        word: 'Star',
        icon_url: 'star.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '4b381df4-e3bb-4fec-8a3e-37c5156d32f0',
        word: 'Hexagon',
        icon_url: 'hex.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        theme_id: '4b381df4-e3bb-4fec-8a3e-37c5156d32f0',
        word: 'Heart',
        icon_url: 'heart.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cards', null, {});
  }
};
