import express from 'express';
import GameController from '../controller/game_controller.js';

const gameRouter = express.Router();


gameRouter.post('/start', GameController.startGame);

export default gameRouter;
