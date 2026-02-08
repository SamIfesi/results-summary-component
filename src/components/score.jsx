function Score({ score }) {
  return (
    <div className="score-container">
      <p>Your Result</p>
      <div className="circle">
        <h1 className="score">{score}</h1>
        <p className="total">of 100</p>
      </div>
    </div>
  );
}
export default Score;
