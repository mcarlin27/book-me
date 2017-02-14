$(document).ready(function() {
  $("form").submit(function(event) {
    var personInput = $("input#person").val();
    var dateInput = $("input#date").val();
    var timeInput = $("input#time").val();
    var reasonInput = $("input:radio[name=reason]:checked").val();
    var favoriteColor = $("#color").val();

    $(".person").text(personInput);
    $(".date").text(dateInput);
    $(".time").text(timeInput);
    $(".reason").text(reasonInput);

    $(".colorful-Text").css("color", favoriteColor);

    $("#confirmation").show();
    $("form").hide();


    var Result = "Proposal denied.";
    setTimeout(function() {
      alert(Result); }, 1000);


    event.preventDefault();

  });
});
