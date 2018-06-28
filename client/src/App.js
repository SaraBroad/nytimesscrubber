import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Mainpage from "./pages/Mainpage";
import Saved from "./pages/Saved";

const App = () => (
  <Router>
    <div>
    <NavBar />
      <Switch>
        <Route exact path="/" component={Mainpage} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </div>
  </Router>
);

export default App;





