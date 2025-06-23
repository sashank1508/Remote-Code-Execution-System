const express = require("express");
const app = express();
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");
const bodyParser = require("body-parser");
const fs = require("fs");
const { exec } = require("child_process");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.text());

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (Socket) => {
  console.log("Socket is active to be connected");

  // When a user joins a room
  Socket.on("joinroom", ({ username, roomid }) => {
    const user = userJoin(Socket.id, username, roomid);
    Socket.join(user.room);
    console.log(`${user.username} has joined room: ${user.room}`);
    Socket.to(user.room).emit("joinedmssg", user.username);
  });

  // Handle code sharing via WebSocket
  Socket.on("sendCode", (code) => {
    io.emit("recivecode", code);
  });

  // Handle input sharing via WebSocket
  Socket.on("sendInput", (input) => {
    io.emit("getInput", input);
  });

  // Language change event handler
  Socket.on("changeLanguage", (data) => {
    console.log(`Language changed to ${data.language} in room ${data.room}`);
    Socket.to(data.room).emit("receiveLanguageChange", data.language);
  });

  // Handle user disconnection
  Socket.on("disconnect", () => {
    const user = userLeave(Socket.id);
    if (user) {
      io.to(user.room).emit("leavemssg", user.username);
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

// Code execution API
app.post("/", (req, res) => {
  const { code, lang, input } = req.body;
  let fileName, compileCommand, runCommand;

  switch (lang) {
    case "cpp":
      fileName = "runner.cpp";
      compileCommand = `g++ ./temp/${fileName} -o ./temp/runner.out`;
      runCommand = `./temp/runner.out < ./temp/in.txt`;
      break;
    case "python":
      fileName = "runner.py";
      compileCommand = ""; // Python doesn't need compilation
      runCommand = `python3 ./temp/${fileName} < ./temp/in.txt`;
      break;
    case "javascript":
      fileName = "runner.js";
      compileCommand = ""; // JS doesn't need compilation
      runCommand = `node ./temp/${fileName} < ./temp/in.txt`;
      break;
    case "java":
      fileName = "Main.java";
      compileCommand = `javac ./temp/${fileName}`; // Java compilation
      runCommand = `java -cp ./temp Main < ./temp/in.txt`; // Java execution
      break;
    default:
      res.status(400).send("Unsupported language");
      return;
  }

  // Write code to the appropriate file
  fs.writeFile(__dirname + `/temp/${fileName}`, code, (err) => {
    if (err) {
      return res.status(500).send("File write error");
    }

    // Write input to in.txt
    fs.writeFile(__dirname + "/temp/in.txt", input, (err) => {
      if (err) {
        return res.status(500).send("Input write error");
      }

      // If there's a compile command (for compiled languages like C++ or Java)
      if (compileCommand) {
        exec(compileCommand, (err, stdout, stderr) => {
          if (err) {
            return res.status(500).send("Compilation error: " + stderr);
          }

          // After compilation, execute the program
          exec(runCommand, (err, stdout, stderr) => {
            if (err) {
              return res.status(500).send("Execution error: " + stderr);
            }
            res.status(200).send(stdout);
          });
        });
      } else {
        // For non-compiled languages like Python or JavaScript
        exec(runCommand, (err, stdout, stderr) => {
          if (err) {
            return res.status(500).send("Execution error: " + stderr);
          }
          res.status(200).send(stdout);
        });
      }
    });
  });
});

server.listen(4000, () => {
  console.log("Server has started at port 4000...");
});
