//Main Nav open and close logic
$(document).ready(main);

function main() {
  //body...
  $(".menu_bar").click(function() {
    $(".main-nav ul:first").toggleClass("open-menu");
  });
  // Show and Hide Submenus
  $(".submenu").click(function() {
    $(this)
      .children(".sub-children")
      .slideToggle();
  });
}
