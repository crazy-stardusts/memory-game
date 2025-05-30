import axios from 'axios';

axios.defaults.baseURL = '/api';

export const getAllTheme = async () => {
    const response = await axios.get('/themes');
    return response.data;
}

export const startGame = async (themeId) => {
    const response = await axios.post('/game/start', { themeId });
    return response.data;
}

export const makeMove = async (gameId, x, y) => {
    const response = await axios.post('/game/move', { gameId, x, y });
    return response.data;
}
export const getGameSummary = async (gameId) => {
    const response = await axios.get(`/game/summary/${gameId}`);
    return response.data;
}


