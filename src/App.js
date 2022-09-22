import Letter from "./components/Letter/Letter";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [word, setWord] = useState("");
	const [guesses, setGuesses] = useState([]);
	const [display, setDisplay] = useState("");
	const [mistakes, setMistakes] = useState(1);

	let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	useEffect(() => {
		if (word) {
			buildDisplay();
		}
		// eslint-disable-next-line
	}, [word]);

	const buildDisplay = () => {
		let newDisplay = "";
		// eslint-disable-next-line
		word.split("").map((char, i) => {
			if (guesses.includes(char.toUpperCase())) {
				newDisplay += char.toUpperCase();
			} else if (char === " ") {
				newDisplay += " ";
			} else {
				newDisplay += "_";
			}
		});
		setDisplay(newDisplay);
	};

	const letterClickHandle = (guess, setAnswer) => {
		if (!guesses.includes(guess) && mistakes < 8) {
			let newGuesses = guesses;
			newGuesses.push(guess);
			setGuesses(newGuesses);
			buildDisplay();
		}
		if (word.split("").includes(guess) && mistakes < 8) {
			setAnswer("correct");
		} else if (mistakes < 8) {
			let newMistakes = mistakes + 1;
			setMistakes(newMistakes);
			setAnswer("incorrect");
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
		return display.split("").map((char, i) => {
			if (char === " ") {
				return <span key={i}>{" - "}</span>;
			}
			return <span key={i}> {char} </span>;
		});
	};

	return (
		<div className="App">
			<h1 className="title">Hangman</h1>
			{displayLines()}
			<div className="letters-container">{displayLetters()}</div>
			<button onClick={() => setWord("two words".toUpperCase())}>
				set word
			</button>
		</div>
	);
}

export default App;
