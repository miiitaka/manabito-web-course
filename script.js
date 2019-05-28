$(function() {
  $("#category").on("mouseover", function() {
    // サブメニューを開く
    //$("#sub_category").show();
    $("#sub_category").stop().slideDown();
  });
  $("#category").on("mouseout", function() {
    // サブメニューを閉じる
    //$("#sub_category").hide();
    $("#sub_category").stop().slideUp();
  });
  $("#slideshow").bxSlider();
});
