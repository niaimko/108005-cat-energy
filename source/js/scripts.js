var hamburgerButton = document.querySelector(".hamburger-button");
var pageHeaderNav = document.querySelector(".page-header__nav");

pageHeaderNav.classList.remove("page-header__nav--show");

hamburgerButton.addEventListener("click", function () {
  pageHeaderNav.classList.toggle("page-header__nav--show");
  hamburgerButton.classList.toggle("hamburger-button--close");
});
