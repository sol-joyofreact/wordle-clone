import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import Banner from '../Banner';
import Keyboard from '../Keyboard';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// To make debugging easier, we'll log the solution in the console.
// console.info(answer);

function Game() {
	const [answer, setAnswer] = React.useState(()=> sample(WORDS));
	const [guesses, setGuesses] = React.useState([]);
	const [over, setOver] = React.useState(false);
	const [result, setResult] = React.useState("");
	const [usedLetters, setUsedLetters] = React.useState({});

	function restart() {
		setAnswer(sample(WORDS));
		setGuesses([]);
		setOver(false);
		setResult("");
		setUsedLetters({});
	}

	function Restart() {
		return <div>
			<form onSubmit={(event)=> {
				event.preventDefault();
				restart();
			}}>
				<button>Restart Game</button>
			</form>
		</div>
	}

	function updateUsedLetters(checkedGuess){
		let newUsedLetters = {...usedLetters};
		checkedGuess.map(({letter, status}) => {
			newUsedLetters[letter] = status
		});
		setUsedLetters(newUsedLetters);
	}

	function submitGuess(guess) {
		const checkedGuess = checkGuess(guess, answer);
		updateUsedLetters(checkedGuess);
		const newGuess = {
			guess,
			id: Math.random(),
			checkedGuess
		};
		const newGuesses = [ ...guesses, newGuess];
		setGuesses(newGuesses);
		if ( guess === answer) {
			setOver(true);
			setResult("win");
			return;
		}
		if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setOver(true);
			setResult("lose");
		}
	}

	return <> 
		{ over && <Restart />}
		<GuessList guesses={guesses}/>
		<GuessInput submitGuess={submitGuess} disabled={over} /> 
		<Keyboard usedLetters={usedLetters}></Keyboard>
		{ over && <Banner result={result} answer={answer} count={guesses.length} /> }
	</>
}

export default Game;
