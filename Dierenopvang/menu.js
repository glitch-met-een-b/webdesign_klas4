const submenuKnop = document.querySelector(".submenu-knop");
const submenu = document.querySelector(".submenu");

if (submenuKnop && submenu) {
    submenuKnop.addEventListener("click", function () {
        submenu.classList.toggle("open");
    });
}

const menuKnop = document.querySelector(".menu-knop");
const navigatie = document.querySelector(".hoofdnavigatie");

if (menuKnop && navigatie) {
    menuKnop.addEventListener("click", function () {
        navigatie.classList.toggle("open");
    });
}