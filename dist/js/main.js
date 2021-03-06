//Select Search Items
const formReset = document.getElementById("search-field");
const searchIcon = document.querySelector(".btn--search");
const searchOverlay = document.querySelector(".overlay-wrapper");
const closeOverlay = document.querySelector(".btn--search-close");

// Set Initial state of search overlay
let showSearch = false;

searchIcon.addEventListener("click", openSearch);
closeOverlay.addEventListener("click", openSearch);

function openSearch() {
  document.getElementById("search-field").reset();
  if (!showSearch) {
    searchOverlay.classList.add("show-search");
    // Set Search State
    showSearch = true;
  } else {
    searchOverlay.classList.remove("show-search");
    // Set Search State
    showSearch = false;
  }
}

//Select Modal Items
const openModal = document.getElementById("contact-us");
const closeModal = document.querySelector(".btn-modal-close");
const modal = document.querySelector(".modal-overlay");

openModal.addEventListener("click", showModal);
closeModal.addEventListener("click", showModal);

function showModal(e) {
  e.preventDefault();
  if (!showSearch) {
    modal.classList.add("show-search");
    // Set Modal State
    showSearch = true;
  } else {
    modal.classList.remove("show-search");
    // Set Modal State
    showSearch = false;
  }
}

//Stiky Nav
const stikyNav = document.querySelector("#nav");
const topOfNav = stikyNav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.classList.add("fixed-nav");
  } else {
    document.body.classList.remove("fixed-nav");
  }
}
window.addEventListener("scroll", fixNav);

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

  // Select fields widget
  $(".results").hide();

  $(".industry")
    .change(function() {
      //previous selected ones hidden
      $("[id^=industry-]").hide();
      $("[id^=role-]").hide();

      $("#industry-" + $(this).val()).show();
    })
    .change();

  $(".role")
    .change(function() {
      //previous selected ones hidden
      $("[id^=role-]").hide();
      $("[id^=industry-]").hide();

      $("#role-" + $(this).val()).show();
    })
    .change();
});
