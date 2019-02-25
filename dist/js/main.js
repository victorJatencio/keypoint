//Main Nav open and close logic
$(document).ready(function() {
  let $screen = $(window);

  function mainNav() {
    //body...
    $(".menu_bar").click(function() {
      $(".main-nav ul:first").toggleClass("open-menu");
    });

    // Show and Hide Submenus
    $(".submenu").on("click", function(e) {
      e.preventDefault();

      let screenSize = $screen.width();

      // Optimize for screen sizes
      if (screenSize >= 320 && screenSize <= 880) {
        $(this)
          .children(".sub-children")
          .slideToggle();
      } else if (screenSize >= 881) {
        // $(".main-nav ul li").hover(function() {
        //   $(this).css({ display: "block" });
        // });
        return false;
      }
    });
  }
  mainNav();
});
