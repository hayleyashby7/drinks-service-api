import express from 'express';
import { router } from './routes/routes';

export const app = express();

app.use(express.json());

// home
app.get('/', (req, res) => res.send('Welcome to the Drinks API!'));

// coffee
app.use('/', router);
