$('form').on('submit',function () {
    const text = $('#message').val();
    alert(text);
    return false;
  });