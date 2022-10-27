

let toggle = document.getElementById('toggle');
let botaoMenu = document.querySelector(".menu-hamburger");
let menuLateral = document.querySelector(".nav-bar-list");

toggle.onclick = function(){
    toggle.classList.toggle('active');
}

botaoMenu.addEventListener('click', ()=> {
    menuLateral.classList.toggle('nav-bar-list-ativo');
});
