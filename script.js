$(document).ready(function() {
  //--------------------------------
  var container;
  var users_name;
  var users_number;
  var party_size;
  var inside_text;
  var div_position;
  var hover_position;
  var attr_name;
  var attr_number;
  var attr_size;

  $("#form").hide();
  $("#info_popup").hide();
  $(".circles").addClass("available");
  //Form is initially hidden, popup div is hidden,
  //circles are all available
  $("#close").on("click", function() {
    $("#form").fadeOut(300);
  });
  //clicking the x closes the window
  $(".circles").on("click", function(event){
    container = $(this);
    div_position = $(this).position();
    hover_position = $("#info_popup").position();
    $("#form").fadeIn(300);
    $("#table_number")["0"].innerHTML = ("Table number:  " + " " + (container["0"].innerHTML));
  });
  //clicking the circle saves circle info,
  //saves position info, saves hover div position for future
  $(".circles").on("mouseenter", function() {
    if ($(this).attr("class") === "circles reserved") {
      inside_text = ($(this).text());
      attr_name = ($(this).attr("attr_name"));
      attr_number = ($(this).attr("attr_number"));
      attr_size = ($(this).attr("attr_size"));
      // mouse over reserved circles
      //saves original number as inside_text
      //saves an attribute as user input name
      //saves an attribute as user input number
      //saves an attribute as user input party size
      //attributes are for future use in popup hover div
      div_position = $(this).position();
      //sets popup div position variable to match circle position
      $("#info_popup").css("top", div_position.top);
      $("#info_popup").css("left", div_position.left);
      //changes position of popup div to currently hovered circle position
      $("#info_popup").text("Name: " + attr_name + " Number: " + attr_number + " Party size: " + attr_size);
      $("#info_popup").show(300);
      //show popup div and put info into it
    }
  });

  $(".circles").on("mouseleave", function() {
    if ($(this).attr("class") === "circles reserved") {
      $("#info_popup").hide();
      ($(this).text(inside_text));
      //hides popup and changes circle text back to original number
    }
  });

  $("button").on("click", function(event){
    users_name = $("#name").val();
    users_number = $("#number").val();
    party_size = $("#size").val();
    //gets values from user input forms
    container.attr("class", "circles reserved");
    //changes class of clicked circle to reserved
    container.attr("attr_name", users_name);
    container.attr("attr_number", users_number);
    container.attr("attr_size", party_size);
    //creates attributes with values of user inputs
    $(".reserved").off("click");
    $("#form").hide();
    //can't click on reserved circles
  });

  $("#info_popup").on("mouseenter", function(event) {
    $("#info_popup").show();
  });
  //show popup div on hover
  $("#info_popup").on("mouseleave", function(event) {
    $("#info_popup").hide(100);
  });
  //hide popup div
  //--------------------------------
});
