import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [userInput, setUserInput] = useState("");
  var [text, setText] = useState("");

  var str = userInput;
  var yrstr = userInput.substring(str.length - 4);

  function leapyearchecker() {
    if (yrstr % 4 === 0) {
      console.log("Its A Leap Year");
      setText("Leap Year");
    } else {
      console.log("Sorry Its Not A Leap Year");
      setText("not a Leap Year");
    }
    console.log(yrstr);
  }

  return (
    <div className="App">
      <h1>Leap Year Checker</h1>
      <input id="myInput" onChange={(e) => setUserInput(e.target.value)} />
      <button id="myBtn" onClick={leapyearchecker}>
        Check
      </button>
      <h2> {text} </h2>
    </div>
  );
}
