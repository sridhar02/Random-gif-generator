import React from "react";

import "./App.css";
import Random from "./Components/Random_V2";
import Tag from "./Components/Tag_V2";

const App = () => (
  <div>
    <h1>Random GIF application</h1>
    <div className="main-container">
      <Random />
      <Tag />
    </div>
  </div>
);

export default App;
