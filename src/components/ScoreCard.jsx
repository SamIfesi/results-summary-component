import data from "../json/data.json";

export default function Score() {
  const totalScore = data.reduce((sum, item) => sum + item.score, 0);
  const averageScore = Math.round(totalScore / data.length);

  return (
    <section className="score-card">
      <p className="score-title">Your Result</p>
      <div className="score-circle">
        <h1>{averageScore}</h1>
        <p>of 100</p>
      </div>
      <h3 className="score-feed">Great</h3>
      <p className="score-remark">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  );
}
