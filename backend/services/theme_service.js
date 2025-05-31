import db from '../models/index.js';

class ThemeService {
    async getThemes() {
        return db.Theme.findAll()
    }

    async getThemeById(themeId) {
        return db.Theme.findByPk(themeId);
    }
}

export default new ThemeService();