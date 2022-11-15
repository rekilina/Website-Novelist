

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

