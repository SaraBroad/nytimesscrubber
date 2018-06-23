import React, { Component } from 'react';
import Mainpage from "./pages/Mainpage";



class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Mainpage} />       
      </div>
    );
  }
}

export default App;
