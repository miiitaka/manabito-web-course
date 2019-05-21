$(function() {
  $("#category").on("mouseover", function() {
    $("#sub_category").show();
  });
  $("#category").on("mouseout", function() {
    $("#sub_category").hide();
  });
});
