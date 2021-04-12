// defining socket as a call of the io function
const socket = io();

// jquery call to the form to submit the message value
$("form").submit(function () {

  const messageText = $("#message").val();
  socket.emit("message", messageText);
  $("#message").val("");

  return false;
});

// renders the new message on the pages #history within a new line
socket.on("message", function (msg) {
  console.log("message",msg)
  $("<li>").text(msg).appendTo("#history");
});

