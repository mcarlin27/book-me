$(document).ready(function() {
  $("form").submit(function() {
    var personInput = $("input#person").val();
    var dateInput = $("input#date").val();
    var timeInput = $("input#time").val();
    var reasonInput = $("input#reason").val();

    $(".person").text("personInput");
    $(".date").text("dateInput");
    $(".time").text("timeInput");
    $(".reason").text("reasonInput");

    $("#confirmation").show();

    event.preventDefault();
  });
});
