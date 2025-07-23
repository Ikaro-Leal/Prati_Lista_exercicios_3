let menuBurger = document.querySelector('.menu-burger');
let navMenu = document.querySelector('nav');


menuBurger.addEventListener('click', () => {

    menuBurger.classList.toggle('ativo');
    
    navMenu.classList.toggle('ativo');

    let isExpanded = navMenu.classList.contains('ativo');
    menuBurger.setAttribute('aria-expanded', isExpanded);
});