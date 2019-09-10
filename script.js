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
    $("#detail_img_sub").on("mouseover", "li", function(){
      var subImgSrc = $(this).find("img").attr("src");
      // $("#detail_img_main").attr("src", subImgSrc);
      $("#detail_img_main").fadeOut(100, function() {
        $(this).attr("src", subImgSrc).fadeIn(100);
      });
    });
  });
  $("#nav_top").on("click", function() {
    $("html, body").animate({scrollTop: 0}, 500);
  });
});