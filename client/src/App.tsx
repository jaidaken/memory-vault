import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
	const [title, setTitle] = useState('')

	async function handleCreateDeck(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		await fetch('http://localhost:5000/decks', {
			method: 'POST',
			body: JSON.stringify({ title }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		setTitle('');
	}

	useEffect(() => {
		async function fetchDecks() {
			const response = await fetch('http://localhost:5000/decks');
			const decks = await response.json();
			console.log(decks);
		}
		fetchDecks();
	}, [])

	return (
		<div className="App">
			<form onSubmit={handleCreateDeck} action="">
				<label htmlFor="deck-title">Deck Title</label>
				<input id='deck-title' value={title} type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setTitle(e.target.value)
				}} />
				<button>Create Deck</button>
			</form>
		</div>
	)
}

export default App
