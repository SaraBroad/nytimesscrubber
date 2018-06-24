// import React, { Component } from 'react';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";



const App = () => {

  <Router>
    <Route exact path="/" component={Mainpage} />
  </Router>

};

export default App;
