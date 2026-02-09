export default function SummaryCard() {
    return (
      <section className="summary-card">
        <h4>Summary</h4>
        <div className="test-container">
          <div className="test-type">
            <div className="test">
              <p>Reaction</p>
            </div>
            <p className="average-score">
              80 <span>/ 100</span>
            </p>
          </div>

          <div className="test-type">
            <div className="test">
              <p>Memory</p>
            </div>
            <p className="average-score">
              92 <span>/ 100</span>
            </p>
          </div>

          <div className="test-type">
            <div className="test">
              <p>Verbal</p>
            </div>
            <p className="average-score">
              61 <span>/ 100</span>
            </p>
          </div>

          <div className="test-type">
            <div className="test">
              <p>Visual</p>
            </div>
            <p className="average-score">
              72 <span>/ 100</span>
            </p>
          </div>
          <button className="btn">Continue</button>
        </div>
      </section>
    );
}