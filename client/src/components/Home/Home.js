import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [roomid, setRoomid] = useState("");
  const [error, setError] = useState(""); // For displaying error messages

  let history = useHistory();

  const handlesubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting if fields are empty
    
    if (!name || !roomid) {
      setError("Both Name and Room ID are required!"); // Set error if fields are empty
      return; // Exit function if validation fails
    }

    setError(""); // Clear error if fields are filled
    history.push(`/ide/${name}-${roomid}`);
  };

  return (
    <Router>
      <div className="Home-screen">
        <div className="inside-form">
          <div className="Code-clan">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Code Clan")
                  .pauseFor(5000)
                  .changeDelay(10000)
                  .start();
              }}
            />
          </div>
          <div>
            <form onSubmit={handlesubmit}>
              {/* Display error message */}
              {error && <div className="error-message">{error}</div>}

              <div className="input">
                <input
                  className="name_input"
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="input">
                <input
                  className="name_input"
                  type="text"
                  placeholder="Enter Room ID"
                  value={roomid}
                  onChange={(e) => setRoomid(e.target.value)}
                  required
                />
              </div>
              <div className="submit-div">
                <input type="submit" value="Submit" className="btnx" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Home;
