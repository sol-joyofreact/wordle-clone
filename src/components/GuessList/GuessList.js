import React from "react";

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessList({guesses}) {
	const restOfGuesses = NUM_OF_GUESSES_ALLOWED - guesses.length;
	return (
		<div className="guess-results">
			{ guesses.length > 0 && guesses.map(({id, guess, checkedGuess}) => (
				<p className="guess" key={id}>
					{guess.split("").map((character, index) => {
						const className=`cell ${checkedGuess[index]['status']}`
						return (
						<span key={index} className={className}>
							{character}
						</span>
						)
					})}
				</p>
			))}
			{range(restOfGuesses).map((num) => (
				<p className="guess" key={num}>
					{range(5).map((col) => (
						<span className="cell" key={col}></span>
					))}
				</p>
			))}
		</div>
	)
}

export default GuessList;
