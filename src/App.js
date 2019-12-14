import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import ProjectsList from "./components/ProjectsList";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <div className="App">
      <nav>
        <p className="logo">Lambda Projects</p>
      </nav>

      <Route exact path="/" component={ProjectsList} />
      <Route exact path="/project/:id" component={ProjectDetail} />
    </div>
  );
}

export default App;
