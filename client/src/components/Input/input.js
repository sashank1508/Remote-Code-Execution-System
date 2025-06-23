import React from "react";
import "./input.css";

function Input(props) {
  function handleChange(newVal) {
    // console.log(newVal.target.value);

    props.socket.emit("sendInput", newVal.target.value, () =>
      console.log("Input sent")
    );
  }

  return (
    <div id="main">
      <div className="input-title">
        <span>Input</span>
      </div>
      <textarea id="inx" onChange={handleChange} value={props.input}></textarea>
    </div>
  );
}

export default Input;
