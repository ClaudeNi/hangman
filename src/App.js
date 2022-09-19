import Letter from "./components/Letter/Letter";
import "./App.css";
import { useState } from "react";

function App() {
	const [word, setWord] = useState("");
	let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	const displayLetters = () => {
		return letters.split("").map((char, i) => {
			return <Letter letter={char} key={i} />;
		});
	};

	const displayLines = () => {
		return word.split("").map((char, i) => {
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
			<button onClick={() => setWord("word")}>set word</button>
		</div>
	);
}

export default App;
