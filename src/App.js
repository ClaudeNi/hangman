import Letter from "./components/Letter/Letter";
import "./App.css";
import { useState } from "react";

function App() {
	const [word, setWord] = useState("");
	const [guesses, setGuesses] = useState([]);

	let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	const letterClickHandle = (guess) => {
		if (!guesses.includes(guess)) {
			let newGuesses = guesses;
			console.log(newGuesses);
			newGuesses.push(guess);
			setGuesses(newGuesses);
			setWord(word);
		}
	};

	const displayLetters = () => {
		return letters.split("").map((char, i) => {
			return (
				<Letter letter={char} key={i} clickHandle={letterClickHandle} />
			);
		});
	};

	const displayLines = () => {
		return word.split("").map((char, i) => {
			if (guesses.includes(char.toUpperCase())) {
				return <span key={i}>{char}</span>;
			}
			return (
				<span char={char} key={i}>
					{" "}
					_{" "}
				</span>
			);
		});
	};
	return (
		<div className="App">
			<h1 className="title">Hangman</h1>
			{displayLines()}
			<div className="letters-container">{displayLetters()}</div>
			<button onClick={() => setWord("Word")}>set word</button>
		</div>
	);
}

export default App;
