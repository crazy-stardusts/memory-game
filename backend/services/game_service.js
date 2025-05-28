import db from "../models/index.js";
import CardService from "./card_service.js";
import GameCardService from "./game_card_service.js";

class GameService {
    async startGame(themeId) {
        const cards = await CardService.getCardsByTheme(themeId)

        
        const game = await db.Game.create({
            theme_id: themeId
        });

        const gameCards = await GameCardService.createGameCards(game.id, cards);
        return {
            game: game,
            cards: cards
        };
    }
}

export default new GameService();