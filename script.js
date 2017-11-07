$(document).ready(function() {
//--------------------------------
var container;
var users_name;
var users_number;
var party_size;
var inside_text;

$("#form").hide();
$(".circles").addClass("available");
//---------------------------------------
$("#close").on("click", function() {
  $("#form").fadeOut(300);
});
//--------------------------------------
$(".circles").on("click", function(event){
  container = $(this);
  inside_text = (container["0"].innerHTML);
  $("#form").fadeIn(300);
  $("#table_number")["0"].innerHTML = ("Table number:  " + " " + (container["0"].innerHTML));
//  console.log($("#table_number")["0"].innerHTML);
});

$("button").on("click", function(event){
  users_name = $("#name").val();
  users_number = $("#number").val();
  party_size = $("#size").val();
  container.attr("class", "circles reserved");
  $(".reserved").off("click");
  $("#form").hide();
});

$(".circles").on("mouseenter", function() {
  if ($(this).attr("class") === "circles reserved") {
    (container["0"].innerHTML) = users_name;
  }
});

$(".circles").on("mouseleave", function() {
  if ($(this).attr("class") === "circles reserved") {
    (container["0"].innerHTML) = inside_text;
  }
});
//--------------------------------
});
