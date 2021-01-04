// Preloader fadeout
$(window).on("load", function () {
  $(".preloader").fadeOut("slow");
});

$(document).ready(function () {
  // Fixed navbar on scroll
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 200) {
      $(".navbar").addClass("fixed-top shadow-sm");
    } else {
      $(".navbar").removeClass("fixed-top shadow-sm");
    }
  });

  // Navbar collpase when link cliked
  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Form submit
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    Swal.fire("Thank you!", "You have submited!", "success");
    $(this).trigger("reset");
  });
});
