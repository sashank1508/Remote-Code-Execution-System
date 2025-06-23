import React, { useState, useEffect, useCallback } from "react";
import { DropdownButton, Dropdown, Navbar, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { returncode } from "../../utils/defaultcode";
import Editor from "../Editor/Editor";
import Input from "../Input/input";
import Output from "../output/output";
import io from "socket.io-client";
import "./Main.css";

const socket = io.connect("http://localhost:4000");

function Main() {
  const [language, setLanguage] = useState("C++");
  const [codeidx, setCodeidx] = useState(1);
  const [theme, setTheme] = useState("vs-light");
  const [code, setCode] = useState(returncode(codeidx));
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [userroomid, setUserRoomId] = useState("");

  const { user } = useParams();

  useEffect(() => {
    if (user) {
      // Split the user string to extract username and room ID
      const res = user.split("-");
      const username = res[0];
      const roomid = res[1];

      // Save user room ID in state
      setUserRoomId(roomid);

      // Emit the 'joinroom' event to the server
      socket.emit("joinroom", { username, roomid });

      // Listener for when another user joins the room
      socket.on("joinedmssg", (username) => {
        toast.success(`${username} has joined the Room`);
      });

      // Listener for when another user leaves the room
      socket.on("leavemssg", (username) => {
        toast.warning(`${username} has left the Room`);
      });

      // Listener for input changes sent via WebSocket
      socket.on("getInput", (mssg) => {
        setInput(mssg);
      });

      // Listener for language change via WebSocket
      socket.on("receiveLanguageChange", (newLanguage) => {
        // Handle language change and update editor accordingly
        if (newLanguage === "C++") {
          setCodeidx(1);
          setLanguage("C++");
          setCode(returncode(1)); // Update to C++ code
        } else if (newLanguage === "Python") {
          setCodeidx(2);
          setLanguage("Python");
          setCode(returncode(2)); // Update to Python code
        } else if (newLanguage === "Javascript") {
          setCodeidx(3);
          setLanguage("Javascript");
          setCode(returncode(3)); // Update to JavaScript code
        } else if (newLanguage === "Java") {
          setCodeidx(4);
          setLanguage("Java");
          setCode(returncode(4)); // Update to Java code
        }
      });
    }

    // Clean up the socket listeners when the component unmounts
    return () => {
      socket.off("joinedmssg");
      socket.off("leavemssg");
      socket.off("getInput");
      socket.off("receiveLanguageChange"); // Clean up language change listener
    };
  }, [user]);

  // Callback to change language and emit event to room
  const changeLanguage = useCallback(
    (e, x) => {
      let selectedLanguage;

      if (x === 1) {
        setCodeidx(1);
        setLanguage("C++");
        setCode(returncode(1)); // Set default C++ code
        selectedLanguage = "C++";
      } else if (x === 2) {
        setCodeidx(2);
        setLanguage("Python");
        setCode(returncode(2)); // Set default Python code
        selectedLanguage = "Python";
      } else if (x === 3) {
        setCodeidx(3);
        setLanguage("Javascript");
        setCode(returncode(3)); // Set default JavaScript code
        selectedLanguage = "Javascript";
      } else if (x === 4) {
        setCodeidx(4);
        setLanguage("Java");
        setCode(returncode(4)); // Set default Java code
        selectedLanguage = "Java";
      }

      // Emit language change event to the room
      socket.emit("changeLanguage", { language: selectedLanguage, room: userroomid });
    },
    [userroomid] // Dependency on userroomid
  );

  // Callback to change the theme
  const changeTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "vs-light" ? "vs-dark" : "vs-light"));
  }, []);

  // Function to send the code to the server for execution
  async function sendCodetoServer() {
    const langMap = {
      "C++": "cpp",
      Python: "python",
      Javascript: "javascript",
      Java: "java", // Add support for Java here
    };

    try {
      const { data } = await axios.post("http://localhost:4000/", {
        code: code,
        lang: langMap[language], // Send selected language dynamically
        input: input,
      });
      setOutput(data);
      console.log(data);
    } catch (error) {
      console.error("Code execution failed", error);
      toast.error("Code execution failed, please try again.");
    }
  }

  return (
    <>
      {/* Navbar code */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Code Clan</Navbar.Brand>
        <Button
          variant="light"
          size="sm"
          onClick={changeTheme}
          className="main-button"
        >
          Change Theme
        </Button>
        <Button
          variant="light"
          size="sm"
          onClick={sendCodetoServer}
          className="main-button"
        >
          Run code
        </Button>
        <DropdownButton
          id="dropdown-item-button"
          title={language}
          variant="light"
          size="sm"
          className="main-button"
        >
          <Dropdown.Item
            as="button"
            onClick={(e) => changeLanguage(e, 1)}
            className="main-button"
          >
            C++
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={(e) => changeLanguage(e, 2)}
            className="main-button"
          >
            Python
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={(e) => changeLanguage(e, 3)}
            className="main-button"
          >
            Javascript
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={(e) => changeLanguage(e, 4)}
            className="main-button"
          >
            Java
          </Dropdown.Item>
        </DropdownButton>
      </Navbar>

      <ToastContainer />
      {/* Screen layout */}
      <div className="screen">
        <div className="left">
          <Editor
            theme={theme}
            codeidx={codeidx}
            socket={socket}
            changeCode={setCode}
          />
        </div>
        <div className="right">
          <Input changeInput={setInput} socket={socket} input={input} />
          <Output output={output} />
        </div>
      </div>
    </>
  );
}

export default Main;
