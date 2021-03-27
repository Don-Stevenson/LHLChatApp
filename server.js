const express = require("express");
const app = express();
const PORT = 8080

const http = require("http");
const server = http.Server(app);

app.use(express.static("client"));

const io = require("socket.io")(server);

io.on("connection", function (socket) {
  socket.on("message", function (msg) {
    io.emit("message", msg);
  });
});

server.listen(PORT, function () {
  console.log(`Chat server is running on ${PORT}`);
});
