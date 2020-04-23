API = "https://kubma.com";
$(function () {
  $("#contact-form").on("submit", function (event) {
    event.preventDefault();
    $("#submit").attr("disabled", true);
    $("#loader").show();
    $("#label").hide();
    $.ajax({
      type: "post",
      url: API + "/contact",
      data: {
        name: $("#name").val(),
        email: $("#email").val(),
        mobile: $("#mobile").val(),
        // message: $('#comments').val()
      },
    }).then(function (res) {
      if (res.status) {
        $("#simple-msg").show();
        $("#simple-msg").fadeOut(3000);
        $("#submit").attr("disabled", false);
        $("#loader").hide();
        $("#label").show();
        // $("#name").val("");
        // $("#email").val("");
        // $("#comments").val("");
        // $("#mobile").val("");
        $(this).get(0).reset();
      }
    });
  });
});
