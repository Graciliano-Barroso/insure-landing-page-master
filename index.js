let botaoMenu = document.querySelector(".menu-hamburger");
let menuLateral = document.querySelector(".nav-bar-list");

botaoMenu.addEventListener('click', ()=> {
    menuLateral.classList.toggle('nav-bar-list-ativo');
});