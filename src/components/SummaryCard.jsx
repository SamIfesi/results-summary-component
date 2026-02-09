import Results from "./Results.jsx";

export default function SummaryCard() {
  return (
    <section className="summary-card">
      <h4>Summary</h4>
      <div className="test-container">
          <Results />
        <button className="btn">Continue</button>
      </div>
    </section>
  );
}
