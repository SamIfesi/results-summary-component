// import { useState } from "react";
import Attribute from "./components/Attribute.jsx";
import Score from "./components/score.jsx";
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
    <Score/>
  </div>
  <Attribute/>
  </>;

}

export default App;
