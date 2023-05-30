// var navLinks = document.getElementById("navLinks");
// function showMenu() {
//   navLinks.style.right = "0";
// }
// function hideMenu() {
//   navLinks.style.right = "-400px";
// }

// (function ($) {
//   "use strict";

//   $(".html").rProgressbar({
//     percentage: 80,
//     fillBackgroundColor: "#9fa0a1",
//   });
//   $(".css").rProgressbar({
//     percentage: 90,
//     fillBackgroundColor: "#9fa0a1",
//   });

//   $(".php").rProgressbar({
//     percentage: 75,
//     fillBackgroundColor: "#9fa0a1",
//   });

//   $(".javascript").rProgressbar({
//     percentage: 65,
//     fillBackgroundColor: "#9fa0a1",
//   });

//   $(".jquery").rProgressbar({
//     percentage: 95,
//     fillBackgroundColor: "#9fa0a1",
//     backgroundColor: "#e67e22",
//   });
// })(jQuery);

$(function () {
 
  
  // Extra button part start

  $(".extra-btn").click(function () {
    $("html,body").animate({
      scrollTop: 0,
    });
  });

  // Extra button part end

  // scroll part start

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 10) {
      $(".main-nav").addClass("nav-bg");
    } else {
      $(".main-nav").removeClass("nav-bg");
    }

    if (scrolling > 10) {
      $(".extra-btn").fadeIn(200);
    } else {
      $(".extra-btn").fadeOut(200);
    }
  });

  // scroll part end

  var mixer = mixitup(".mixitup");
  // video part start

  // new VenoBox({
  //   selector: ".about-video",
  // });

  // video part end

  // image part start

  // lightbox.option({
  //   resizeDuration: 200,
  //   wrapAround: true,
  // });

  // image part end

  // WOw JS Area start

  new WOW().init();

  // WOw JS Area end
});
