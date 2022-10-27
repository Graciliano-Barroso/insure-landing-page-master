

let toggle = document.getElementById('toggle');
let botaoMenu = document.querySelector("#toggle");


toggle.onclick = function(){
    toggle.classList.toggle('active');
}

botaoMenu.addEventListener('click', ()=> {
    let menuLateral = document.querySelector(".nav-bar-list");
    menuLateral.classList.toggle('nav-bar-list-ativo');
});
