import Letter from "./components/Letter/Letter";
import "./App.css";

function App() {
	let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	const displayLetters = () => {
		return letters.split("").map((char, i) => {
			return <Letter letter={char} />;
		});
	};
	return (
		<div className="App">
			<h1 className="title">Hangman</h1>
			<div className="letters-container">{displayLetters()}</div>
		</div>
	);
}

export default App;
