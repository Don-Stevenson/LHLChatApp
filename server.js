// requirements and setup the app and the port
const express = require("express");
const io = require("socket.io")(server);
const app = express();
const PORT = 8080;

// server setup
const http = require("http");
const server = http.Server(app);

// configuring the express server
app.use(express.static("client"));

// setting up the io websocket connection to send a message
io.on("connection", function (socket) {
  socket.on("message", function (msg) {
    io.emit("message", msg);
  });
});

// showing that the server is listening
server.listen(PORT, function () {
  console.log(`Chat server is running on ${PORT}`);
});
