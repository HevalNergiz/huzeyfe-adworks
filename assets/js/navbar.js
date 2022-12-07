$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbarsmotherdiv");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});