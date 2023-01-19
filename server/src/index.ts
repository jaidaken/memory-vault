import express, { Request, Response } from 'express'
import mongoose from 'mongoose';

import Deck from './models/Deck';

const app = express();
app.use(express.json());

const PORT = 5000

app.post('/decks', async (req: Request, res: Response) => {
	const newDeck = new Deck({
		title: req.body.title,
	})
	const createdDeck = await newDeck.save();
	res.json(createdDeck)
})

mongoose.set('strictQuery', false);

mongoose.connect(
	'mongodb+srv://memorysage:oTXjmoHwLvcvP4yc@mem-cluster.hdqtx1f.mongodb.net/?retryWrites=true&w=majority'
).then(() => {
	console.log(`listening on port ${PORT}`);
	app.listen(PORT);
})


