import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import NavBar from "./components/navbar"


class App extends React.Component {
  render() {
    return (
      <>
        <NavBar title="Strive Library" color={"red"}/>
        
      </>
    );
  }
}
export default App;

