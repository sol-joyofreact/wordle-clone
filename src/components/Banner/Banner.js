import React from "react";

function WonBanner( {count}) {
  return <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {count} guesses</strong>.
      </p>
    </div>
}

function LostBanner( {answer})  {

  return <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </div>

}

function Banner({result, answer, count}) {
  return <>
  { result === "win" ? 
    <WonBanner count={count} /> :
    <LostBanner answer={answer} />
  }
  </>
}

export default Banner;
