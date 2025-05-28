import express from 'express';
import GameController from '../controller/game_controller.js';

const gameRouter = express.Router();


gameRouter.post('/start', GameController.startGame);
gameRouter.post('/move', GameController.makeMove);
gameRouter.get('/summary/:gameId', GameController.getGameSummary);

export default gameRouter;
