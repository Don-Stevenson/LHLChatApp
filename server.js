const express = require("express");
const app = express();
const PORT = 8080;
const http = require("http");
const server = http.Server(app);

app.use(express.static("client"));

server.listen(PORT, function () {
  console.log(`Our Chat server running on port ${PORT}`);
});
