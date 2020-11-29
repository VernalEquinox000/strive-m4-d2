import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import MyNavBar from "./components/MyNavBar"
import Welcome from "./components/Welcome"
import MyFooter from "./components/MyFooter"
import LatestRelease from "./components/LatestRelease"
//import Books from "./components/books"


class App extends React.Component {
  render() {
    return (
      <>
        <MyNavBar title="Strive Library" />
        <Welcome title="our library!"/>
        <LatestRelease/>
        <MyFooter />
      </>
    );
  }
}
export default App;

