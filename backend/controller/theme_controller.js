import ThemeService from "../services/theme_service.js";

class ThemeController {

  async getTheme(req, res) {
      const theme = await ThemeService.getThemes();
      res.status(200).json(theme);
    } 
}

export default new ThemeController();