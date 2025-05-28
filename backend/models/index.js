import { Sequelize, DataTypes } from 'sequelize';
import config from '../config/config.js';
import theme from './theme.js';
import card from './card.js';
import game from './game.js';
import game_card from './game_card.js';
import moves from './moves.js';

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const db = {
    Theme: theme(sequelize, DataTypes),
    Card: card(sequelize, DataTypes),
    Game: game(sequelize, DataTypes),
    GameCard: game_card(sequelize, DataTypes),
    Move: moves (sequelize, DataTypes),
};

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) db[modelName].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { sequelize };
export default db;
