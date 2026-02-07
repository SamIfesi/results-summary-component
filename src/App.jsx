// import { useState } from "react";
import Attribute from "./components/Attribute.jsx";
// import data from "./json/data.json";
// import iconMemory from "/images/icon-memory.svg";
// import icoRreaction from "/images/icon-reaction.svg";
// import iconVerbal from "/images/icon-verbal.svg";
// import iconVisual from "/images/icon-visual.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return <>
  <div className="container">
    <div className="score-container">
      <p></p>
      <div className="circle">
        <h1 className="score">76</h1>
        <p className="total">of 100</p>
      </div>
    </div>
  </div>
  <Attribute/>
  </>;

}

export default App;
