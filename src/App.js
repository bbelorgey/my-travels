import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Travel
          destination="Miami Beach"
          country="USA"
          image="https://media-cdn.tripadvisor.com/media/photo-b/2560x500/03/9b/2f/db/miami-beach.jpg"
          distance="8000 km"
        />
        <Travel
          destination="Roubaix by night"
          country="FRANCE"
          image="https://www.valeursactuelles.com/sites/default/files/styles/image_article/public/2017-10/Capture%20d%E2%80%99e%CC%81cran%202017-10-09%20a%CC%80%2013.26.06.png?itok=WyhtwKGE"
          distance="800 km"
        />
      </div>
    );
  }
}

export default App;
