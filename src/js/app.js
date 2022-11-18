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
window.onscroll = function() {flsFunctions.scrollFunction(buttonToTop)};
$(buttonToTop).click(flsFunctions.topFunction);
$(".footer__toTop").click(flsFunctions.topFunction);

for (let elem of document.querySelectorAll(".header__nav-link")) {
    if(!elem.textContent.includes("Другое")) {
        elem.addEventListener('click', flsFunctions.scrollHandler);
        elem.addEventListener('click', function() {
            if($('.header__nav-otherlist').hasClass("visible")) {
                $('.header__nav-otherlist').removeClass("visible");
            }
        })
    }        
}

// console.log($($(".news__item-day")[1]).siblings(".news__item-date"))
flsFunctions.embedDay(".news__item-day", ".news__item-date");
document.querySelector(".counter__input").addEventListener('keypress', flsFunctions.counterValidation);
document.addEventListener('click', flsFunctions.counter);