

export function iswebp() {
    // проверка поддержки webp
    function testWebp(callBack) {
        let webP = new Image();
        webP.onload = webP.onerror = function() {
            callBack(webP.heihgt == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавление класса
    testWebp(function(support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    })
}

var otherList = $('.header__nav-otherlist');
var mainList = $('.header__nav-mainlist');

export function dropdownOther() {
    $('#otherlist').click(function() {
        // let ChildrenCount = otherlist[0].childElementCount;
        let ChildrenCount = otherList.children().length;
        var r = $(':root');
        let lineHeight = parseFloat(r.css("--otherlist-lineheight"));
        let newHeight = ChildrenCount * lineHeight + 1;
        r.css("--otherlist-height", String(newHeight)+"em");
        otherList.toggleClass('visible');
    })
}

// link is DOM Element not jq object
function fromMaintoOther(link) {
    if ($(link).parent().parent().hasClass('header__nav-mainlist')) {
        let targetLi = $(link).parent()[0];
        otherList[0].prepend(targetLi);
    }
}
function fromOthertoMain(link) {
    if (link.parentElement.parentElement.classList.contains('header__nav-otherlist')) {
        let targetLi = link.parentElement;
        $(targetLi).insertBefore($(".header__nav-li-other"));
    }
}

export async function moveLiHeader() {
    // console.log($("nav .header__nav-link")[7].parentElement);
    let ww = window.innerWidth;
    let mainListLen = mainList.children().length;
    let allNavLinks = $("nav .header__nav-link");
    // console.log(mainListLen);
    if (ww < 1001) {
        for (let link of allNavLinks) {
            if (link.textContent.trim() == 'Интервью') {
                fromMaintoOther(link);
            }
        }
    } else {
        for (let link of allNavLinks) {
            if (link.textContent.trim() == 'Интервью') {
                fromOthertoMain(link);
            }
        }
    }
    if (ww < 800) {
        for (let link of allNavLinks) {
            if (link.textContent.trim() == 'Рецензии') {
                fromMaintoOther(link);
            }
        }
    } else {
        for (let link of allNavLinks) {
            if (link.textContent.trim() == 'Рецензии') {
                fromOthertoMain(link);
            }
        }
    }
    if (ww < 700) {
        for (let link of allNavLinks) {
            if (link.textContent.trim() == 'Книги') {
                fromMaintoOther(link);
            }
        }
    } else {
        for (let link of allNavLinks) {
            if (link.textContent.trim() == 'Книги') {
                fromOthertoMain(link);
            }
        }
    }
}