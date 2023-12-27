//Определяем все элементы с которыми будем работать
const tabs = document.querySelector(".tabs");
const tabsItems = document.querySelectorAll(".item");
const text = document.querySelector(".text");

//Определяем массив с тектом, который будет отображаться при нажатии на табы
const tabsContent = ["Вы выбрали первое окно", "Вы выбрали второе окно"];

//Определяем перемнную, в которую будет записываться активное окно
let activeTab = null;

//Проходимся по массиву с сохранёнными окнами и отслеживаем нажатие на определённый из них
tabsItems.forEach((el, i) => {
    el.addEventListener("click", function(){
        //Оперделяем контент текста, i - это индекс табы в массиве, нажимая на первое окно i равно 0, на второе - 1. Таким образом получаем контент из массива по индексу таба
        text.textContent = tabsContent[i];
        //Проверяем есть ли активное окно
        if(activeTab != null){
            //Если активное окно есть, выдаём окну класс active, стили к котрому прописаны в main.css
            el.classList.add("active");
            //У активного таба до этого окна убираем класс active
            activeTab.classList.remove("active");
            //Устанавливаем активным только что выбранное окно
            activeTab = el;
        }else{
            //Если активного окна нет, выдаём окну класс active, стили к котрому прописаны в main.css
            el.classList.add("active");
            //Устанавливаем активным только что выбранное окно
            activeTab = el;
        }
    })
})