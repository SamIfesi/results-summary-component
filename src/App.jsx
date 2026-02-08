import Attribute from "./components/Attribute.jsx";
import Score from "./components/score.jsx";
import data from "./json/data.json";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Score />
      </div>
      <Attribute />
    </>
  );
}

export default App;
