import config from "../config/config.js";
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
            while (cardCount[card.id] > config.max_repition_cards_per_game) {
                card = await this.getRandomCard(cards);
            }
            cardCount[card.id] = (cardCount[card.id] || 0) + 1;
            gameCards.push({
                game_id: gameId,
                card_id: cards[i % cards.length].id, 
                position_x: i % config.grid_size,
                position_y: Math.floor(i / config.grid_size),
            });
        }
        
        return db.GameCard.bulkCreate(gameCards);
    }
}

export default new GameCardService();