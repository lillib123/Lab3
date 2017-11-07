$(document).ready(function() {
//--------------------------------


$("#form").hide();

$(".circles").addClass("available");

$("#close").click(function() {
  $("#form").fadeOut(300);
});

$(".circles").click(function(){
  $("#form").fadeIn(300);
  console.log($(this).attr("class"));

    if ($(this).attr("class") === "circles available reserved") {
      $(this).css("cursor", "notAvailable");
      $("#form").hide();
    } else
      $(this).addClass("reserved");
});

$("button").click(function(){
  $("#form").hide();
});

//--------------------------------
});
