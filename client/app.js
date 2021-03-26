const socket = io();

$("form").submit(function () {

  const messageText = $("#message").val();
  socket.emit("message", messageText);
  $("#message").val("");

  return false;
});

socket.on("message", function (msg) {
  console.log("message",msg)
  $("<li>").text(msg).appendTo("#history");
});

