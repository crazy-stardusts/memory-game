import db from '../models/index.js'
import GameCardService from './game_card_service.js'
import { BadRequestError } from '../middlewares/errorHandler.js';

class MoveService{
    async registerMove(gameCard) {

        const moveCount = await this.getMoveCount(gameCard.game_id) + 1;

        if(gameCard.is_matched) throw new BadRequestError("Cannot register move for a matched card");
        if (moveCount % 2 === 1) {
            await this.createMove(gameCard.id, false);
            return 'first_move';
        }

        const lastMove = await this.getLastMove(gameCard.game_id);

        if(lastMove && lastMove.GameCard.id === gameCard.id) {
            throw new BadRequestError("Cannot register move for the same card twice");
        }
        if (lastMove && lastMove.GameCard.card_id === gameCard.card_id) {
            await this.createMove(gameCard.id, true);
            await GameCardService.matchCards(lastMove.GameCard, gameCard);
            return true;
        }

        this.createMove(gameCard.id, false);
        return false;
    }

    async createMove(gameCardId, isMatch) {
        return db.Move.create({
            game_card_id: gameCardId,
            is_match: isMatch
        });
    }

    async getLastMove(gameId) {

        /*
        Select * from moves, game_cards
        where moves.game_card_id = game_cards.id
        and game_cards.game_id = gameId
        order by moves.created_at desc
        Limit 1
        */

        const lastMove = await db.Move.findOne({
            include: [{
                model: db.GameCard,
                where: { game_id: gameId },
            }],
            order: [['createdAt', 'DESC']],
            limit: 1
        });

        return lastMove;

    }

    async getMoveCount(gameId) {
        return db.Move.count({
            include: [{
                model: db.GameCard,
                where: { game_id: gameId }
            }]
        });
    }
}

export default new MoveService();

