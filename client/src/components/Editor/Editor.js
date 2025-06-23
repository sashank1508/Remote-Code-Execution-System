import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

const def_code = {
  C: `#include <bits/stdc++.h>
using namespace std;
int main() {
    cout<<"Hello world"<<endl;
    return 0;
}`,
  Python: `print("Hello World")`,
  Javascript: `console.log("Hello World");`,
  Java: `class Main {
    public static void main(String[] args) {
      System.out.println("Hello World");
    }
  }`,
};

function returncode(x) {
  if (x === 1) {
    return def_code.C;
  } else if (x === 2) {
    return def_code.Python;
  } else if (x === 3) {
    return def_code.Javascript;
  } else {
    return def_code.Java;
  }
}

function EditorFun(props) {
  const [curcode, setcurcode] = useState(returncode(props.codeidx)); // Initial code

  // Update the code when the language (codeidx) changes
  useEffect(() => {
    const newCode = returncode(props.codeidx);
    setcurcode(newCode);
    props.changeCode(newCode); // Update parent's code state as well
  }, [props.codeidx, props.changeCode]);

  function handleChange(value) {
    setcurcode(value); // Update local code
    props.changeCode(value); // Send the changed code to the parent component
    props.socket.emit("sendCode", value); // Emit the code to the socket
  }

  // Update code when another user sends code via the socket
  useEffect(() => {
    props.socket.on("recivecode", (mssg) => {
      setcurcode(mssg); // Update the local code
      props.changeCode(mssg); // Update parent's code state as well
    });

    // Cleanup on component unmount
    return () => {
      props.socket.off("recivecode");
    };
  }, [props.socket, props.changeCode]);

  return (
    <div id="main">
      <Editor
        height="100vh"
        width="100%"
        defaultLanguage={
          props.codeidx === 1
            ? "cpp"
            : props.codeidx === 2
            ? "python"
            : props.codeidx === 3
            ? "javascript"
            : "java"
        }
        value={curcode} // The current code in the editor
        theme={props.theme} // The editor theme (dark/light)
        onChange={handleChange} // Handle code changes
      />
    </div>
  );
}

export default EditorFun;
