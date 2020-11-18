import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import NavBar from "./components/navbar"
import Welcome from "./components/welcome"
import Footer from "./components/myfooter"
import Books from "./components/books"


class App extends React.Component {
  render() {
    return (
      <>
        <NavBar title="Strive Library" backgroundColor={"red"} />

        <Welcome title="our library!"/>
        
        <Books />

        <Footer />
        
      </>
    );
  }
}
export default App;

