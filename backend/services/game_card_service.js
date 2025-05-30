import config from "../config/config.js";
import { BadRequestError } from "../middlewares/errorHandler.js";
import db from "../models/index.js";
class GameCardService {

    async getRandomCard(cards) {
        let randomIndex = Math.floor(Math.random() * cards.length);
        if (randomIndex == cards.length) {
            randomIndex = cards.length - 1;
        }
        return cards[randomIndex];
    }

    async createGameCards(gameId, cards) {
        const noTiles = config.grid_size * config.grid_size;
        const gameCards = [];
        const cardCount = {};

        for(let i = 0; i < noTiles; i++) {

            let card = await this.getRandomCard(cards);
            while (cardCount[card.id] >= config.max_repition_cards_per_game) {
                card = await this.getRandomCard(cards);
            }
            cardCount[card.id] = (cardCount[card.id] || 0) + 1;
            gameCards.push({
                game_id: gameId,
                card_id: card.id, 
                position_x: i % config.grid_size,
                position_y: Math.floor(i / config.grid_size),
            });
        }
        
        return db.GameCard.bulkCreate(gameCards);
    }

    async getGameCard(gameId, positionX, positionY) {
        const gameCard = await db.GameCard.findOne({
            where: {
                game_id: gameId,
                position_x: positionX,
                position_y: positionY
            },
            include: [{
                model: db.Card
            }]
        });
        if (!gameCard) {
            throw new BadRequestError("Card not found");
        }
        return gameCard;
    }

    async matchCards(gameCard1, gameCard2) {
        if (gameCard1.card_id !== gameCard2.card_id) {
            throw new Error("Cards do not match");
        }
        await db.GameCard.update({ is_matched: true }, {
            where: {
                id: [gameCard1.id, gameCard2.id]
            }
        });
        return true;
    }
}

export default new GameCardService();