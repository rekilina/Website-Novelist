import * as flsFunctions from "./modules/functions.js"

flsFunctions.iswebp();
flsFunctions.dropdownOther();
flsFunctions.moveLiHeader();
$(window).on("resize", flsFunctions.moveLiHeader);
$(".burger__btn").click(function() {
    $(".header__burger .header__nav-mainlist").toggleClass("visible");
});
for (let link of $(".header__burger .header__nav-link")) {
    $(link).click(flsFunctions.dropdownMenu);
}

let buttonToTop = document.querySelector('.toTop');
//window.addEventListener("scroll", scrollFunction(buttonToTop));
buttonToTop.onclick = flsFunctions.topFunction;
window.onscroll = function() {flsFunctions.scrollFunction(buttonToTop)};
$(".footer__toTop").click(flsFunctions.topFunction);