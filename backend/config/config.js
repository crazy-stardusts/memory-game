import dotenv from 'dotenv';
dotenv.config();

const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,

    grid_size: process.env.GRID_SIZE || 6,
    max_cards_per_game: process.env.MAX_CARDS_PER_GAME || 6,
    max_repition_cards_per_game: process.env.MAX_REPITION_CARDS_PER_GAME || 6,
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "test_database",
    host: "localhost",
    dialect: "postgres",
    grid_size: 6,
    max_cards_per_game: 6,
    max_repition_cards_per_game: 6,
  },
};

export default config[process.env.NODE_ENV || 'development'];