import React from "react";
import Flat from "./flat";
// import logo from './logo.svg';
import "./App.css";
class App extends React.Component {
  render() {
    const flat = {};

    return (
      <div>
        <Flat flat={flat} />
      </div>
    );
  }
}

export default App;
