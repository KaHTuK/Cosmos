$(function () {
  $(".slider_box").slick({
    prevArrow:
      '<img class="slider_arrow slider_arrow-left" src="images/arrow-left.svg" alt="arrow-left">',
    nextArrow:
      '<img class="slider_arrow slider_arrow-right" src="images/arrow-right.svg" alt="arrow-right">',
  });

  $(".menu-btn").on("click", function () {
    $(".menu_list").toggleClass("active");
  });
});