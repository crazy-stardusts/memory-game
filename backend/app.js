import express from 'express';

import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import themeRouter from './routes/theme_router.js';

import gameRouter from './routes/game_router.js';
import { errorHandler } from './middlewares/errorHandler.js';


const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

// Serve static files
app.use(express.static('public'));
app.use(express.json());

// Routes
app.use('/api/themes', themeRouter);
app.use('/api/game', gameRouter)

app.use(errorHandler);

export default app;