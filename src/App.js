import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import NavBar from "./components/navbar"
//import myFooter from "./components/myfooter"
import Welcome from "./components/welcome"


class App extends React.Component {
  render() {
    return (
      <>
        <NavBar title="Strive Library" color={"red"} />

        <Welcome title="our library!"/>
        
       
        
        
      </>
    );
  }
}
export default App;

