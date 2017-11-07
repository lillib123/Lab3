$(document).ready(function() {
//--------------------------------


$("#form").hide();

$(".circles").addClass("available");

$("#close").click(function() {
  $("#form").fadeOut(300);
});

$(".circles").click(function(){
  $("#form").fadeIn(300);

    if ($(this).attr("class") === "circles reserved") {
      alert("This table is already reserved");
      $("#form").hide();
    } else
      $(this).addClass("reserved");
});

$("button").click(function(){
  $("#form").hide();
});

//--------------------------------
});
