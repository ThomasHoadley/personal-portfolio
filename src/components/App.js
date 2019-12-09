import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import BodyContainer from "./BodyContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <BodyContainer />
      </Router>
    </div>
  );
}

export default App;
