import app from "./app.js";
import { sequelize } from './models/index.js';
import dotenv from 'dotenv';
import config from "./config/config.js";
dotenv.config();

const PORT = config.port || 5000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});