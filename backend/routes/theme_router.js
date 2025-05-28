import express from 'express';
import ThemeController from '../controller/theme_controller.js';
const themeRouter = express.Router();


themeRouter.get('/', ThemeController.getTheme);

export default themeRouter;