import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let person = {
    name: "John Wick",
    age: "35",
    job: "Assassin",
  };
  let style = {
    color: "yellow",
    backgroundColor: "red",
  };
  let style2 = {
    marginTop: "-15px",
    marginBottom: "-25px"
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h4>My Heading: {(2 + 5) * 25 + 65}</h4>
        <h1 style={style2}>Name: {person.name}</h1>
        <h1 className="" style={style}>
          Job: {person.job}
        </h1>
        {/* <p>My first React Paragraph</p> */}
      </header>
    </div>
  );
};

export default App;
