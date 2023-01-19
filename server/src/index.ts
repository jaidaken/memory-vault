import express, { Request, Response } from 'express'
import mongoose from 'mongoose';
import { config } from 'dotenv'
config();

import Deck from './models/Deck';

const app = express();
app.use(express.json());

const PORT = 5000
const mongoURL = process.env.MONGO_URL!;

app.post('/decks', async (req: Request, res: Response) => {
	const newDeck = new Deck({
		title: req.body.title,
	})
	const createdDeck = await newDeck.save();
	res.json(createdDeck)
})

mongoose.set('strictQuery', false);

mongoose.connect(
	mongoURL
).then(() => {
	console.log(`listening on port ${PORT}`);
	app.listen(PORT);
})


