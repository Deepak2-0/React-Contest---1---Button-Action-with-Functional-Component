import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [text, setText] = useState({ id: "", para: "" });

  function handleClick() {
    setText({
      id: "para",
      para:
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    });
  }
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        Click
      </button>
      <p id={text.id}>{text.para}</p>
    </div>
  );
}

export default App;
