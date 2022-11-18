import Swal from 'sweetalert2';

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
        let ChildrenCount = otherList.children().length;
        var r = $(':root');
        let lineHeight = parseFloat(r.css("--otherlist-lineheight"));
        let newHeight = ChildrenCount * lineHeight + 1;
        r.css("--otherlist-height", String(newHeight)+"em");
        otherList.toggleClass('visible');
    })
}

export function dropdownMenu() {
    $(".burger__btn").toggleClass("opened");
    $(".header__burger .header__nav-mainlist").toggleClass("visible");
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

export function scrollHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
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

export function scrollFunction(btn) {
  if (document.body.scrollTop > window.innerHeight/2 || document.documentElement.scrollTop > window.innerHeight/2) {
    btn.style.visibility = "visible";
  } else {
    btn.style.visibility = "hidden";
  }
}

export function topFunction() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  }); // For Safari
} 

export function embedDay(selectDay, selectDate) {
    for (let dateStr of $(selectDate)) {
        let date = new Date(dateStr.textContent);
        let dayNumber = date.getDay();
        let week = {1: "понедельник", 2: "вторник",
        3: "среда", 4: "четверг", 5: "пятница", 6: "суббота",
        7: "воскресенье"};
        let dayElem = $(dateStr).siblings(selectDay);
        dayElem[0].textContent = week[dayNumber];
        console.log(dayElem);
    }
}
//counter__input
export function counterValidation(e) {
    if (e.key === "Enter") {
        e.preventDefault(); 
        if(Number(this.value) < 0) {
          this.value = '0';
        }
        let minus = this.previousElementSibling;
        if(Number(this.value) <= 0) {
          if(!minus.classList.contains("counter__minus-0")) {
          minus.classList.add("counter__minus-0");
        }
        } else {
          if(minus.classList.contains("counter__minus-0")) {
            minus.classList.remove("counter__minus-0");
          }
        } 
      }
}

export function counter(e) {
    let pressed_btn = e.target;
    if(e.target.tagName == "IMG") {
        pressed_btn = e.target.parentElement;
    }
    if(e.target.tagName == "BUTTON") {
        pressed_btn = e.target;
    }
    let target_input = pressed_btn.parentElement.querySelector("input");
    if(pressed_btn.classList.contains("counter__plus")) {
        target_input.value = Number(target_input.value) + 1;
        let minus = pressed_btn.previousElementSibling.previousElementSibling;
        if (target_input.value > 0) {
          if(minus.classList.contains("counter__minus-0")) {
            minus.classList.remove("counter__minus-0");
          }
        } 
      }
      if(pressed_btn.classList.contains("counter__minus")) {
        if (target_input.value > 0) {
          target_input.value -= 1;
        }
        if (target_input.value <= 1) {
          if(!pressed_btn.classList.contains("counter__minus-0")) {
            pressed_btn.classList.add("counter__minus-0");
          }
        }
      }
}
export function magnifyBag() {
    Swal.fire({
        title: 'Городская сумка',
        text: 'Удобная городская сумка из холста с логотипом автора.',
        imageUrl: '../img/bag.jpg',
        imageWidth: 200,
        // imageHeight: 400,
        imageAlt: 'Custom image',
        showClass: {
            popup: 'animate__animated animated__fadeIn',                     // disable popup animation
        },
        showConfirmButton: false,
        showCloseButton: true
    })
}