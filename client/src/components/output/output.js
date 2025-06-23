import React from "react";
import "./output.css";
function output(props) {
  return (
    <div id="main">
      <div className="input-title">
        <span>Output</span>
      </div>
      <textarea className="inx" value={props.output}></textarea>
    </div>
  );
}

export default output;
