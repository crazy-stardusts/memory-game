import config from "../config/config.js";
import db from "../models/index.js";

class CardService {

    getCardsByTheme(themeId) {
        return db.Card.findAll({
            where: { theme_id: themeId },
            order: db.sequelize.random(),
            limit: config.max_cards_per_game
        });
    }
}

export default new CardService();