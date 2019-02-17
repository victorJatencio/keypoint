// Select DOM elements
const dropDown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Set Initial Statue of Dropdown Menu
dropDown.addEventListener("mouseover", mouseIn);
dropDown.addEventListener("mouseleave", mouseOut);

function mouseIn() {
  dropdownMenu.style.display = "flex";
}

function mouseOut() {
  dropdownMenu.style.display = "none";
}
