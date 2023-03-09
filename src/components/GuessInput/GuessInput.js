import React from "react";

function GuessInput({submitGuess, disabled}) {
  const [guess, setGuess] = React.useState('');
  function submitForm(event) {
	event.preventDefault();
	if ( ! guess ) return;
	if ( guess.length != 5) {
		window.alert("5 characters only");
		return;
	}

	submitGuess(guess);
	setGuess('');
  }
  return <> 
	<form className="guess-input-wrapper" onSubmit={submitForm} >
		<label htmlFor="guess-input">Enter guess:</label>
		<input id="guess-input" 
			required
			maxLength="5"
			minLength="5"
			value={guess}
			disabled={disabled}
			onChange={event => {
				setGuess(event.target.value.toUpperCase());
			}}
			type="text" />
	</form>
  </>
}

export default GuessInput;
