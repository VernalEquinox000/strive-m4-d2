import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MyNavBar from "./components/MyNavBar";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import LatestRelease from "./components/LatestRelease";
import Details from "./components/Details";
//import Books from "./components/books"

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Route path="/" exact component={LatestRelease} />
          <Route path="/:pokemonId" exact component={Details} />
        </Router>
      </>
    );
  }
}
export default App;
