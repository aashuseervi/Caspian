function myFunction() {
  var element = document.getElementById("leftmenu");
  element.classList.toggle("leftmenucard");
}

function closeNav() {
  var element = document.getElementById("leftmenu");
  element.classList.remove("leftmenucard");
}

if ($(window).width() < 1200) {
  $(".drodownbtn").click(function () {
    $(this).next().slideToggle(700);
  });
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".mainNavigations").addClass("sticky");
  } else {
    $(".mainNavigations").removeClass("sticky");
  }
});

$(document).ready(function () {
  new WOW().init();
});
