import express from 'express';

export const app = express();

app.use(express.json());

// home
app.get('/', (req, res) => res.send('Welcome to the Drinks API!'));

// coffeelover
app.get('/coffeelover', (req, res) => res.send('I like coffee!'));

// coffee
app.get('/coffee', (req, res) => res.json({ drinkType: 'Coffee', name: 'Latte' }));
