import React, { useState } from "react";
import "./letter.css";

const Letter = (props) => {
	const [answer, setAnswer] = useState("");

	return (
		<div
			role={"button"}
			className={`letter ${answer}`}
			onClick={() => {
				props.clickHandle(props.letter, setAnswer);
			}}
		>
			{props.letter}
		</div>
	);
};

export default Letter;
