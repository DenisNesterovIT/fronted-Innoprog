const menu = document.querySelector(".menu");
const menuContent = document.querySelector(".menu-content");
const firstLine = document.getElementById("first");
const secondLine = document.getElementById("second");
const thirdLine = document.getElementById("third");
const hr = document.querySelectorAll(".hr");
let isOpen = false;

function openMenu() {
    if(isOpen == false){
        menuContent.style.transform = "translateX(0px)";
        menuContent.style.transition = "all 1s";
        secondLine.style.visibility = "hidden";
        firstLine.style.transform = "rotate(-45deg) translateY(20px)";
        thirdLine.style.transform = "rotate(45deg) translateY(-20px)";
        hr.forEach(el => {
            el.style.transition = "all 1s";
        })
        isOpen = true;
    }else{
        menuContent.style.transform = "translateX(-505px)";
        menuContent.style.transition = "all 1s";
        firstLine.style.transform = "rotate(0) translateY(0)";
        thirdLine.style.transform = "rotate(0) translateY(0)";
        hr.forEach(el => {
            el.style.transition = "all 1s";
        })
        secondLine.style.visibility = "visible";
        isOpen = false;
    }
}

menu.addEventListener("click", openMenu);