import React from "react";
import MainFeed from "./pages/MainFeed";
import About from "./pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <MainFeed />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
