import React from "react";
import Navbar from "./components/Navbar";
import globalCSS from "./assets/css/global.css";

import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{ width: "100%" }}>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
