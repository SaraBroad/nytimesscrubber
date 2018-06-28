import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavBar from "./components/NavBar";
import Mainpage from "./pages/Mainpage";
const App = () => (
  <Router>
    <div>
    {/* <NavBar /> */}
      <Switch>
        <Route exact path="/" component={Mainpage} />
      </Switch>
    </div>
  </Router>
);

export default App;





