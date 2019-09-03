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
  // スライドショー
  $("#slideshow").bxSlider();
});

$(function() {
  $(window).on("load", function() {
    $("#checked_items").bxSlider({
      minSlides: 1,
      maxSlides: 9,
      moveSlides: 1,
      slideMargin: 16,
      slideWidth: 96
    });
  });
  $("#nav_top").on("click", function() {
    alert("クリックされたー＼(^o^)／");
  });
});