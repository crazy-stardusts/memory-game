import db from '../models/index.js';

class ThemeService {
    async getThemes() {
        return db.Theme.findAll()
    }
}

export default new ThemeService();