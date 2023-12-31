//Оперделите константную переменную menu, в которую будет сохранен объект с классом menu

//Оперделите константную переменную menuContent, в которую будет сохранен объект с классом menuContent

//Оперделите константную переменную firstLine, в которую будет сохранен объект с id first

//Оперделите константную переменную secondLine, в которую будет сохранен объект с id second

//Оперделите константную переменную secondLine, в которую будет сохранен объект с id second

//Оперделите константный массив hr, в который будет сохранен массив объектов с классом hr

//Оперделите переменную isOpen, в которую будет сохранено логическое значение, показывающее открыто меню или нет. Изначально значение переменной равно false

//Определение функции для открытия и закрытия меню, дополните её
function openMenu() {
    //Данный код проверяет открыто меню или зыкрыто и дальше изменяет стили объектов. Дан код выполняющийся если меню закрыто (для открытия меню).
    //Дополните код, который будет выполняться если меню открыто (для закрытия меню).
    //Подсказка: для начала добавьте вторую часть к условному оператору if для проверки открыто ли меню. Далее вам нужно просто изменить значения, вернув меню в начальное положенние. Стили для начального положения можно посмотреть в main.css.
    if(isOpen == false){
        menuContent.style.transform = "translateX(0px)";
        secondLine.style.visibility = "hidden";
        firstLine.style.transform = "rotate(-45deg) translateY(20px)";
        thirdLine.style.transform = "rotate(45deg) translateY(-20px)";
        isOpen = true;
        //Код ниже будет одинаковым в обоих случаях, его можно просто скопировать и вставить. Этот код даёт плавность изменений объектов.
        menuContent.style.transition = "all 1s";
        hr.forEach(el => {
            el.style.transition = "all 1s";
        })
    }
}

//Отследите нажатие на объект menu и вызовите функцию openMenu.
//Подсказка: используйте метод addEventListener
