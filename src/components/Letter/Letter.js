import React from "react";
import "./letter.css";

const Letter = (props) => {
	return (
		<div
			role={"button"}
			className="letter"
			onClick={() => {
				props.clickHandle(props.letter);
			}}
		>
			{props.letter}
		</div>
	);
};

export default Letter;
