import express from 'express';
import { router } from './routes/routes';

export const app = express();

app.use(express.json());

// home
app.get('/', (req, res) => res.send('Welcome to the Drinks API!'));

// coffeelover
app.get('/coffeelover', (req, res) => res.send('I like coffee!'));

// coffee
app.use('/', router);
