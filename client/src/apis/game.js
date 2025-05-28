import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL || 'http://localhost:5000';

export const getAllTheme = async () => {
    const response = await axios.get('/themes');
    return response.data;
}
