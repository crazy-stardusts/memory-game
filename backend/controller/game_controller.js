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
}

export default new GameController();