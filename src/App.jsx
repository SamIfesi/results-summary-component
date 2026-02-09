import Attribute from "./components/Attribute.jsx";
import ScoreCard from "./components/ScoreCard.jsx";
import SummaryCard from "./components/SummaryCard.jsx";
import "./App.css";

function App() {
  return (
    <>
      <main className="container">
        <ScoreCard />
        <SummaryCard />
      </main>
      <Attribute />
    </>
  );
}

export default App;
