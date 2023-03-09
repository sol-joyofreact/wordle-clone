import React from "react";

function Key({letter, className=""}) {
  const realClassName = `key ${className}`
  return <span className={realClassName} >{letter}</span>
}

function KeyBoardRow( { rowLetters, usedLetters }) {
  return <p className="keyboard-row">
    {rowLetters.split("").map((letter, index) => {
      const className = letter in usedLetters ? usedLetters[letter] : "";
      return (
        <Key key={index} letter={letter} className={className} />
      )
    })}
  </p>
}

function Keyboard({usedLetters}) {
  const firstRow="QWERTYIUOP";
  const secondRow="ASDFGHJKL";
  const thirdRow="ZXCVBNM";
  return <>
    <div className="keyboard">
      <KeyBoardRow rowLetters={firstRow} usedLetters={usedLetters} />
      <KeyBoardRow rowLetters={secondRow} usedLetters={usedLetters} />
      <KeyBoardRow rowLetters={thirdRow} usedLetters={usedLetters} />
    </div>
  </>
}

export default Keyboard;
