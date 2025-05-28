import GameService from '../services/game_service.js';

class GameController {
    async startGame(req, res) {
        const gameData = req.body;
        if (!gameData || !gameData.themeId) {
            return res.status(400).json({ error: "Invalid game data" });
        }
        const themeId = gameData.themeId;
        if (!themeId) {
            return res.status(400).json({ error: "Theme ID is required" });
        }
        const game = await GameService.startGame(themeId)
        res.status(201).json(game);
    }

    async makeMove(req, res) {
        const { gameId, x, y } = req.body;
        if (!gameId || x === undefined || y === undefined) {
            return res.status(400).json({ error: "Invalid move data" });
        }
        const moveResult = await GameService.makeMove(gameId, x, y);
        if (!moveResult) {
            return res.status(404).json({ error: "Game not found or move invalid" });
        }
        res.status(200).json({isMatched : moveResult});
    }

    async getGameSummary(req, res) {
        const gameId = req.params.gameId;
        const summary = await GameService.getGameSummary(gameId);
        res.status(200).json(summary);
    }
}

export default new GameController();