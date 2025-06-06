import config from "../config/config.js";
import db from "../models/index.js";
import CardService from "./card_service.js";
import GameCardService from "./game_card_service.js";
import MoveService from "./move_service.js";
import ThemeService from "./theme_service.js";
import { BadRequestError } from "../middlewares/errorHandler.js";

class GameService {
    async startGame(themeId) {
        const cards = await CardService.getCardsByTheme(themeId)
        const gameId = (await db.Game.create({theme_id: themeId})).id;
        // const theme = await ThemeService.getThemeById(themeId);
        const gameCards = await GameCardService.createGameCards(gameId, cards);
        const game = await db.Game.findByPk(gameId, {
            include: [{
                model: db.Theme
            }]
        });
        // game.theme = theme;
        return game;
    }

    async makeMove(gameId, x, y) {
        const game = await db.Game.findByPk(gameId);
        if(!game) {
            throw new BadRequestError("Game not found");
        }
        if(game.score == config.grid_size * config.grid_size) {
            return {
                completed: true,
                score: game.score
            }
        }
        const gameCard = await GameCardService.getGameCard(gameId, x, y);
        const isMatched =  await MoveService.registerMove(gameCard);
        if(isMatched === true) {
            game.score += 2;
            await game.save();
        }
        return {
            completed: game.score === config.grid_size * config.grid_size,
            score: game.score,
            isMatched: isMatched,
            gameCard: gameCard 
        }
    }

    async getGameSummary(gameId) {
        const game = await db.Game.findByPk(gameId);
        if (!game) {
            throw new BadRequestError("Game not found");
        }
        let completed = false;
        if (game.score === config.grid_size * config.grid_size) {
            completed = true;
        }
        const moveCount = await MoveService.getMoveCount(gameId);

        return {
            game: game,
            completed: completed,
            themeId: game.theme_id,
            score: game.score,
            moveCount: moveCount,
        };
    }
}

export default new GameService();