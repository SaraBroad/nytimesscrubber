import React, { Component } from 'react';
import Mainpage from "./pages/Mainpage";
import Saved from "./pages/Saved";


class App extends Component {
  render() {
    return (
      <div>
        <Mainpage />
        <Saved />
      </div>
    );
  }
}

export default App;
